import Image from 'next/image'
import Link from 'next/link'
import {ArrowRight, Moon, Sun} from 'lucide-react'

export default function Header() {
  return (
    <header className="avax-nav relative z-50 bg-[#171a1d] text-white">
      <div className="avax-nav-shell">
        <div className="avax-nav-bar">
          <Link className="flex items-center gap-3" href="/">
            <Image
              alt=""
              className="avax-dark-mark h-auto w-[46px]"
              height={40}
              priority
              src="/images/wwwow-light.png"
              style={{height: 'auto'}}
              width={82}
            />
            <span className="font-[family-name:var(--font-inter-tight)] text-[18px] font-medium tracking-normal">
              SNWC
            </span>
          </Link>

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
            <div className="avax-theme-switch" aria-hidden>
              <Sun className="h-4 w-4" strokeWidth={1.6} />
              <Moon className="h-5 w-5" strokeWidth={1.7} />
            </div>
            <Link className="avax-start-button" href="/blog">
              <span className="flex items-center gap-7">
                Czytaj blog
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
