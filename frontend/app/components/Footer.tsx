'use client'

import Image from 'next/image'

export default function Footer() {
  const links = ['Products', 'Studio', 'Clients', 'Pricing', 'Blog', 'Privacy', 'Terms']

  return (
    <footer className="relative w-full rounded-t-[24px] sm:rounded-t-[32px] bg-gradient-to-br from-[#0b0c0e] to-[#07080a] text-white overflow-hidden">

      {/* Subtle grid pattern for premium texture */}
      <div className="absolute inset-0 bg-[url(/images/tile-grid-black.png)] bg-size-[17px] opacity-[0.05] pointer-events-none" />

      <div className="relative mx-auto max-w-[1280px] px-6 py-14 flex flex-col items-center">
        {/* Logo and Brand */}
        <div className="flex items-center justify-center gap-2.5 mb-6">
          <div className="flex items-center justify-center bg-black border border-white/[0.12] rounded-[8px] p-2 w-9 h-9 shadow-sm">
            <Image
              src="/images/wwwow-light.png"
              alt="SNWC Logo"
              width={20}
              height={20}
              className="h-auto w-full object-contain"
              priority
            />
          </div>
          <span className="font-[family-name:var(--font-inter-tight)] text-lg font-medium tracking-normal text-white">
            SNWC
          </span>
        </div>

        {/* Navigation Menu */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10">
          {links.map((item) => (
            <a
              key={item}
              href="#"
              onClick={(e) => e.preventDefault()}
              className="text-white/60 hover:text-white transition-colors duration-200 text-[14px] font-normal"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Dotted Divider */}
        <div className="w-full border-t border-dotted border-white/10 mb-8" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4">
          {/* Copyright */}
          <div className="text-white/40 text-[13px] font-normal">
            © 2026 SNWC
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5 text-white/50">
            {/* Twitter / X */}
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="hover:text-white transition-all duration-200 hover:scale-105"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="hover:text-white transition-all duration-200 hover:scale-105"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="hover:text-white transition-all duration-200 hover:scale-105"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.646.64.699 1.026 1.592 1.026 2.683 0 3.842-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="hover:text-white transition-all duration-200 hover:scale-105"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="hover:text-white transition-all duration-200 hover:scale-105"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.315 2c2.43 0 2.784.01 3.797.056 1.008.046 1.69.207 2.294.442.624.242 1.157.566 1.69 1.099.533.533.857 1.066 1.099 1.69.235.604.396 1.286.442 2.294.046 1.012.056 1.367.056 3.797 0 2.43-.01 2.784-.056 3.797-.046 1.008-.207 1.69-.442 2.294a4.878 4.878 0 01-1.099 1.69 4.878 4.878 0 01-1.69 1.099c-.604.235-1.286.396-2.294.442-1.012.046-1.367.056-3.797.056-2.43 0-2.784-.01-3.797-.056-1.008-.046-1.69-.207-2.294-.442a4.88 4.88 0 01-1.69-1.099 4.88 4.88 0 01-1.099-1.69c-.235-.604-.396-1.286-.442-2.294C2.01 14.784 2 14.43 2 12c0-2.43.01-2.784.056-3.797.046-1.008.207-1.69.442-2.294a4.88 4.88 0 011.099-1.69 4.88 4.88 0 011.69-1.099c.604-.235 1.286-.396 2.294-.442 1.012-.046 1.367-.056 3.797-.056h.002zm-.002 1.996c-2.404 0-2.685.009-3.633.052-.885.04-1.364.189-1.685.314-.425.165-.729.362-1.048.68-.318.318-.515.623-.68 1.048-.125.32-.274.799-.314 1.685-.043.948-.052 1.229-.052 3.633s.009 2.685.052 3.633c.04.885.189 1.364.314 1.685.165.425.362.729.68 1.048.318.318.623.515 1.048.68.32.125.799.274 1.685.314.948.043 1.229.052 3.633.052s2.685-.009 3.633-.052c.885-.04 1.364-.189 1.685-.314.425-.165.73-.362 1.048-.68.318-.318.515-.623.68-1.048.125-.32.274-.799.314-1.685.043-.948.052-1.229.052-3.633s-.009-2.685-.052-3.633c-.04-.885-.189-1.364-.314-1.685-.165-.425-.362-.73-.68-1.048-.318-.318-.623-.515-1.048-.68-.32-.125-.799-.274-1.685-.314-.948-.043-1.229-.052-3.633-.052zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
