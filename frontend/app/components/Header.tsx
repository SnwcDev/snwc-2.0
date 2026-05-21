import Image from 'next/image'
import Link from 'next/link'
import {ArrowRight, Moon, Sun} from 'lucide-react'

export default function Header() {
  return (
    <header className="avax-nav relative z-50 bg-[#171a1d] text-white">
      <div className="avax-nav-shell">
        <div className="avax-nav-bar">
          <div className="flex items-center gap-3" />

          <nav className="max-md:hidden">
            <ul
              role="list"
              className="flex items-center gap-8 font-[family-name:var(--font-inter-tight)] text-[15px] font-medium leading-none tracking-normal"
            >
              <li>
                <Link href="/about" className="link-roll">
                  O mnie
                </Link>
              </li>
              <li>
                <Link href="/blog" className="link-roll">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#latest-posts" className="link-roll">
                  Wpisy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="link-roll">
                  Kontakt
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-3">
          </div>
        </div>
      </div>
    </header>
  )
}
