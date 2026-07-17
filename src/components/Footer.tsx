import logoAsset from "@/assets/sound-n-mind-logo.jpg.asset.json";

export function Footer() {
  return (
    <footer className="px-4 py-16 sm:px-6 lg:px-8 bg-navy text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground text-lg font-bold">
                S
              </div>
              <span className="text-lg font-semibold">Sound N Mind</span>
            </div>
            <p className="text-sm leading-relaxed text-white/70">
              Creating emotionally resilient individuals and compassionate communities across India.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">Our Work</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li><a href="/our-work#senior-care" className="hover:text-white transition-colors">Senior & Dementia Care</a></li>
              <li><a href="/our-work#schools" className="hover:text-white transition-colors">Schools</a></li>
              <li><a href="/our-work#cancer-warriors" className="hover:text-white transition-colors">Cancer Warriors & Caregivers</a></li>
              <li><a href="/academy" className="hover:text-white transition-colors">Academy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>
                  5/A, Second Lane,<br />
                  beside Adabasi Kalyan Sanga,<br />
                  Anandapur, Mundapara,<br />
                  Kolkata, West Bengal, 700107
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span>📞</span>
                <a href="tel:+919330158041" className="hover:text-white transition-colors">9330158041</a>
              </li>
              <li className="flex items-start gap-2">
                <span>✉️</span>
                <a href="mailto:soundnmindfoundation@gmail.com" className="hover:text-white transition-colors break-all">soundnmindfoundation@gmail.com</a>
              </li>

            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a href="#" className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-lg">𝕏</a>
              <a href="https://www.facebook.com/SoundNMindFoundation" target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-lg">f</a>
              <a href="#" className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-lg">📷</a>
              <a href="https://www.linkedin.com/company/soundnmindfoundation/" target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-lg">in</a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-white/50">
            © 2026 Sound N Mind. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">80G Certificate</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
