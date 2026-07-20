export function SocialLinks() {
  return (
    <div className="flex gap-3">
      <a
        href="https://www.facebook.com/SoundNMindFoundation"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-lg"
      >
        f
      </a>
      <a
        href="https://www.linkedin.com/company/soundnmindfoundation/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-lg"
      >
        in
      </a>
      <a
        href="https://youtube.com/@soundnmindfoundation?si=DXYLui8cP4o3lbJ9"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
          <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2C0 8 0 12 0 12s0 4 .5 5.8a3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 16 24 12 24 12s0-4-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
        </svg>
      </a>
    </div>
  );
}
