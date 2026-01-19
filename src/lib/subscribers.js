import { getStore } from '@netlify/blobs';

/**
 * Get the subscribers store
 * Uses Netlify Blobs for persistent storage across deployments
 *
 * Note: In production (Netlify), siteID and token are automatically detected
 * For local development, you can set NETLIFY_SITE_ID and NETLIFY_TOKEN in .env.local
 */
function getSubscribersStore() {
  // In Netlify production, these are auto-detected
  // For local dev, fallback to environment variables
  const config = {
    name: 'subscribers',
  };

  // Only add siteID and token if running locally (not on Netlify)
  if (process.env.NETLIFY_SITE_ID) {
    config.siteID = process.env.NETLIFY_SITE_ID;
  }
  if (process.env.NETLIFY_TOKEN) {
    config.token = process.env.NETLIFY_TOKEN;
  }

  return getStore(config);
}

/**
 * Get all subscribers from blob storage
 * @returns {Promise<Array>} Array of subscriber objects
 */
export async function getSubscribers() {
  const store = getSubscribersStore();

  try {
    const data = await store.get('subscribers', { type: 'json' });
    return data || [];
  } catch (error) {
    console.error('Error reading subscribers from blob:', error);
    return [];
  }
}

/**
 * Save subscribers to blob storage
 * @param {Array} subscribers - Array of subscriber objects
 * @returns {Promise<void>}
 */
export async function saveSubscribers(subscribers) {
  const store = getSubscribersStore();

  try {
    await store.setJSON('subscribers', subscribers);
  } catch (error) {
    console.error('Error saving subscribers to blob:', error);
    throw error;
  }
}

/**
 * Add a new subscriber
 * @param {Object} subscriber - Subscriber object with email, token, subscribedAt
 * @returns {Promise<boolean>} Success status
 */
export async function addSubscriber(subscriber) {
  const subscribers = await getSubscribers();

  // Check if already exists
  const exists = subscribers.some(sub =>
    typeof sub === 'string' ? sub === subscriber.email : sub.email === subscriber.email
  );

  if (exists) {
    return false;
  }

  subscribers.push(subscriber);
  await saveSubscribers(subscribers);
  return true;
}

/**
 * Remove a subscriber by email or token
 * @param {string} identifier - Email address or token
 * @param {string} type - 'email' or 'token'
 * @returns {Promise<Object|null>} Removed subscriber or null if not found
 */
export async function removeSubscriber(identifier, type = 'email') {
  const subscribers = await getSubscribers();

  let index = -1;

  if (type === 'token') {
    index = subscribers.findIndex(sub =>
      typeof sub === 'object' && sub.token === identifier
    );
  } else {
    index = subscribers.findIndex(sub =>
      typeof sub === 'string' ? sub === identifier : sub.email === identifier
    );
  }

  if (index === -1) {
    return null;
  }

  const removed = subscribers[index];
  subscribers.splice(index, 1);
  await saveSubscribers(subscribers);

  return typeof removed === 'string' ? { email: removed } : removed;
}
