const baseClasses =
  "flex items-center justify-center w-10 h-10 text-text-muted transition-all " +
  "hover:bg-bg-accent hover:border-text-accent hover:text-text-accent " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-accent";

export default function ShareButtons() {
  return (
    <div className="flex flex-col justify-center items-center gap-3 sm:flex-wrap  md:flex-row">
      <h4 className="font-semibold underline">Share:</h4>
      <div className="inline-flex">
        <span className="max-w-20">
          <a
            href="http://twitter.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Share on Twitter"
            className={baseClasses}
          >
            <TwitterIcon />
          </a>
        </span>
        <span className="max-w-20">
          <a
            href="http://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Share on LinkedIn"
            className={baseClasses}
          >
            <LinkedInIcon />
          </a>
        </span>
        <span className="max-w-24">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Share on Facebook"
            className={baseClasses}
          >
            <FacebookIcon />
          </a>
        </span>
      </div>
    </div>
  );
}

/* ---------------- SVG ICONS ---------------- */

function TwitterIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      viewBox="0 0 16 16"
    >
      <path
        fill="#cccccc7b"
        d="M0 0v16h16V0zm12.8 5.6v.3c0 3.3-2.5 7-7 7c-1.4 0-2.7-.4-3.8-1.1h.6c1.2 0 2.2-.4 3.1-1.1c-1.1 0-2-.7-2.3-1.7h.5c.2 0 .4 0 .6-.1c-1.1-.2-2-1.2-2-2.4c.3.2.7.3 1.1.3c-.7-.4-1.1-1.2-1.1-2q0-.75.3-1.2C4 5.1 5.9 6 7.9 6.1c0-.2-.1-.4-.1-.6C7.8 4.1 8.9 3 10.3 3c.7 0 1.3.3 1.8.8c.6-.1 1.1-.3 1.6-.6c-.2.6-.6 1.1-1.1 1.4c.5-.1 1-.2 1.4-.4c-.3.6-.7 1-1.2 1.4"
      ></path>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={34}
      height={34}
      viewBox="0 0 448 512"
    >
      <path
        fill="#cccccc7b"
        d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3M135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5c0 21.3-17.2 38.5-38.5 38.5m282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7c-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5c67.2 0 79.7 44.3 79.7 101.9z"
      ></path>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      viewBox="0 0 20 20"
    >
      <path
        fill="#cccccc7b"
        fillRule="evenodd"
        d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.792C0 19.506.494 20 1.104 20h9.578v-7.745H8.076V9.237h2.606V7.01c0-2.584 1.578-3.99 3.883-3.99c1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.596-1.496 1.47v1.927h2.989l-.39 3.018h-2.6V20h5.097c.61 0 1.104-.494 1.104-1.104V1.104C20 .494 19.506 0 18.896 0"
      ></path>
    </svg>
  );
}
