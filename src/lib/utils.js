/**
 * Security utility functions
 */

/**
 * Validates a slug to prevent path traversal attacks
 * Only allows alphanumeric characters, hyphens, and underscores
 *
 * @param {string} slug - The slug to validate
 * @returns {boolean} - True if slug is safe, false otherwise
 */
export function isValidSlug(slug) {
  if (!slug || typeof slug !== 'string') {
    return false;
  }

  // Reject if contains path traversal attempts
  if (slug.includes('..') || slug.includes('/') || slug.includes('\\')) {
    return false;
  }

  // Only allow alphanumeric, hyphens, and underscores
  const validSlugPattern = /^[a-zA-Z0-9_-]+$/;
  return validSlugPattern.test(slug);
}

/**
 * Escapes HTML special characters to prevent XSS attacks
 *
 * @param {string} text - The text to escape
 * @returns {string} - HTML-escaped text
 */
export function escapeHtml(text) {
  if (!text || typeof text !== 'string') {
    return '';
  }

  const htmlEscapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
  };

  return text.replace(/[&<>"'/]/g, (char) => htmlEscapeMap[char]);
}
