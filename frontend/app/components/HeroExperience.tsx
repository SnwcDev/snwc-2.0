import Image from 'next/image'
import type {CSSProperties} from 'react'
import {ArrowDownRight, ArrowUpRight} from 'lucide-react'

import HeroIntroLogo from '@/app/components/HeroIntroLogo'
import LogoRoughFlicker from '@/app/components/LogoRoughFlicker'

const heroDescription =
  'Lorem ipsum dolor sit amet consectetur vel pharetra nulla a varius ac cras et est nec elementum ut facilisi tortor mi duis non.'

const statusItems = ['AI', 'Docker', 'Kubernetes', 'CI/CD']

const mvnLights = [
  {delay: '-0.3s', duration: '4.8s', height: '72px', opacity: 0.58, x: '6%'},
  {delay: '-2.1s', duration: '5.4s', height: '42px', opacity: 0.42, x: '10%'},
  {delay: '-1.2s', duration: '4.2s', height: '92px', opacity: 0.64, x: '14%'},
  {delay: '-3.4s', duration: '5s', height: '54px', opacity: 0.46, x: '19%'},
  {delay: '-0.8s', duration: '4.7s', height: '76px', opacity: 0.5, x: '24%'},
  {delay: '-2.9s', duration: '5.8s', height: '38px', opacity: 0.38, x: '31%'},
  {delay: '-1.6s', duration: '4.5s', height: '106px', opacity: 0.68, x: '38%'},
  {delay: '-3.1s', duration: '5.1s', height: '56px', opacity: 0.42, x: '45%'},
  {delay: '-0.5s', duration: '4.4s', height: '84px', opacity: 0.6, x: '50%'},
  {delay: '-2.4s', duration: '5.6s', height: '46px', opacity: 0.46, x: '56%'},
  {delay: '-1s', duration: '4.6s', height: '96px', opacity: 0.58, x: '63%'},
  {delay: '-3.7s', duration: '5.2s', height: '62px', opacity: 0.44, x: '70%'},
  {delay: '-1.9s', duration: '4.9s', height: '80px', opacity: 0.54, x: '76%'},
  {delay: '-2.7s', duration: '5.7s', height: '50px', opacity: 0.42, x: '84%'},
  {delay: '-0.2s', duration: '4.3s', height: '90px', opacity: 0.56, x: '91%'},
] as const

export default function HeroExperience() {
  return (
    <section className="avax-hero relative isolate overflow-hidden rounded-b-[32px] bg-[#171a1d] px-0 text-white">
      <style>{`
        :root {
          --snwc-hero-flicker-delay: 0.32s;
          --snwc-hero-flicker-duration: 0.96s;
          --snwc-hero-enter-delay: 1.38s;
          --snwc-hero-enter-duration: 2s;
          --snwc-logo-intro-y: calc(47svh + 34px);
          --snwc-logo-live-delay: calc(var(--snwc-hero-enter-delay) + var(--snwc-hero-enter-duration) + 0.24s);
        }

        @keyframes snwc-mvn-pulse-a {
          0%,
          100% {
            opacity: 0.24;
            transform: translate3d(0, 0, 0) scaleY(0.98);
          }

          42% {
            opacity: 0.56;
            transform: translate3d(0, -1.5%, 0) scaleY(1.03);
          }

          68% {
            opacity: 0.34;
            transform: translate3d(0, 0.6%, 0) scaleY(1);
          }
        }

        @keyframes snwc-mvn-pulse-b {
          0%,
          100% {
            opacity: 0.12;
            transform: translate3d(-0.8%, 0, 0);
          }

          50% {
            opacity: 0.38;
            transform: translate3d(0.8%, -1%, 0);
          }
        }

        @keyframes snwc-mvn-line {
          0%,
          100% {
            opacity: 0.18;
            transform: translate3d(0, 10px, 0) scaleY(0.76);
          }

          36% {
            opacity: var(--o);
            transform: translate3d(0, -4px, 0) scaleY(1.14);
          }

          62% {
            opacity: 0.12;
            transform: translate3d(0, 2px, 0) scaleY(0.94);
          }
        }

        @keyframes snwc-hero-panel-in {
          0% {
            clip-path: inset(var(--clip-top, 0) var(--clip-right, 0) var(--clip-bottom, 0) var(--clip-left, 0) round 28px);
            opacity: 1;
            transform: translate3d(var(--panel-x, 0), var(--panel-y, 0), 0);
          }

          100% {
            clip-path: inset(0 0 0 0 round 28px);
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes snwc-hero-intro-surface {
          0% {
            clip-path: inset(0 0 0 0 round 32px);
            opacity: 1;
            visibility: visible;
          }

          96% {
            clip-path: inset(62px 24.75% 1px 24.75% round 28px);
            opacity: 1;
            visibility: visible;
          }

          100% {
            clip-path: inset(62px 24.75% 1px 24.75% round 28px);
            opacity: 0;
            visibility: hidden;
          }
        }

        .avax-nav {
          align-items: center !important;
          background: #171a1d !important;
          color: #ffffff !important;
          display: flex !important;
          height: 58px !important;
          justify-content: center !important;
          padding: 4px 4px 0 !important;
        }

        .avax-nav-shell {
          display: block !important;
          height: 54px !important;
          max-width: none !important;
          padding: 0 !important;
          width: 100% !important;
        }

        .avax-nav-bar {
          --clip-bottom: 100%;
          --panel-y: -42px;
          align-items: center !important;
          animation: snwc-hero-panel-in var(--snwc-hero-enter-duration) var(--avax-ease-in-out-quart) var(--snwc-hero-enter-delay) both !important;
          background: #090a0c !important;
          border: 1px solid rgba(255, 255, 255, 0.12) !important;
          border-radius: 14px !important;
          display: flex !important;
          height: 100% !important;
          justify-content: space-between !important;
          overflow: hidden !important;
          padding: 0 8px 0 24px !important;
          position: relative !important;
          width: 100% !important;
        }

        .avax-dark-mark {
          filter: none !important;
        }

        .avax-theme-switch {
          background: rgba(255, 255, 255, 0.04) !important;
          border: 1px solid rgba(255, 255, 255, 0.16) !important;
          padding: 6px 9px !important;
        }

        .avax-start-button {
          background: #f7f7f2 !important;
          border-radius: 12px !important;
          color: #050607 !important;
          height: 44px !important;
          min-width: 184px !important;
          padding: 0 20px !important;
        }

        .avax-hero {
          background: #171a1d !important;
          color: #ffffff !important;
          min-height: calc(100svh - 58px) !important;
        }

        .avax-intro-surface {
          animation: snwc-hero-intro-surface var(--snwc-hero-enter-duration) var(--avax-ease-in-out-quart) var(--snwc-hero-enter-delay) both !important;
          background: #090a0c !important;
        }

        .avax-intro-logo-wrap {
          animation: none !important;
          height: auto !important;
          left: 50% !important;
          position: absolute !important;
          top: var(--snwc-logo-intro-y) !important;
          transform: translate(-50%, -50%) !important;
          width: min(52.2vw, 522px) !important;
          z-index: 2 !important;
        }

        .avax-intro-logo-flicker-layer {
          filter: brightness(1);
          will-change: filter, opacity;
        }

        .avax-intro-logo {
          animation: none !important;
          height: auto !important;
          position: static !important;
          transform: none !important;
          width: 100% !important;
        }

        .avax-hero-shell {
          gap: 4px !important;
          min-height: calc(100svh - 58px) !important;
          padding: 4px !important;
        }

        .avax-hero-panel {
          animation: snwc-hero-panel-in var(--snwc-hero-enter-duration) var(--avax-ease-in-out-quart) both !important;
          background: linear-gradient(145deg, rgba(11, 12, 14, 0.98), rgba(7, 8, 10, 0.99)) !important;
          border-color: rgba(255, 255, 255, 0.12) !important;
          color: #ffffff !important;
        }

        .avax-hero-copy {
          --clip-right: 100%;
          --panel-x: -28px;
          animation-delay: var(--snwc-hero-enter-delay) !important;
          border-radius: 24px !important;
        }

        .avax-hero-meta {
          --clip-left: 100%;
          --panel-x: 34px;
          animation-delay: var(--snwc-hero-enter-delay) !important;
          border-radius: 24px !important;
        }

        .avax-hero-feature {
          --clip-top: 100%;
          --panel-y: 72px;
          animation-delay: calc(var(--snwc-hero-enter-delay) + 1s) !important;
          border-radius: 24px !important;
        }

        .avax-hero-stage {
          animation: none !important;
          background:
            radial-gradient(62% 28% at 50% 69%, rgba(132, 142, 255, 0.08), transparent 76%),
            linear-gradient(180deg, #050505 0%, #030303 100%) !important;
          border-radius: 28px 28px 32px 32px !important;
          isolation: isolate;
          overflow: hidden !important;
          position: relative !important;
        }

        .avax-mvn-bg {
          background:
            radial-gradient(70% 32% at 50% 71%, rgba(126, 138, 255, 0.2), transparent 70%),
            linear-gradient(180deg, transparent 0%, rgba(7, 8, 14, 0.32) 58%, rgba(5, 5, 5, 0.82) 100%);
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          position: absolute;
          z-index: 1;
        }

        .avax-mvn-bg::before {
          animation: snwc-mvn-pulse-a 5.8s ease-in-out infinite;
          bottom: 8%;
          background:
            linear-gradient(180deg, transparent 0%, rgba(112, 126, 255, 0.16) 42%, rgba(4, 5, 8, 0.88) 100%),
            repeating-linear-gradient(90deg, transparent 0 26px, rgba(126, 138, 255, 0.18) 26px 27px, rgba(255, 255, 255, 0.38) 27px 28px, transparent 28px 54px);
          content: '';
          filter: blur(0.2px);
          height: 36%;
          left: -10%;
          mask-image: linear-gradient(180deg, transparent 0%, #000 20%, #000 72%, transparent 100%);
          opacity: 0.78;
          position: absolute;
          right: -10%;
        }

        .avax-mvn-bg::after {
          animation: snwc-mvn-pulse-b 4.6s ease-in-out infinite;
          background:
            linear-gradient(90deg, transparent 0%, rgba(126, 138, 255, 0.2) 18%, rgba(255, 255, 255, 0.22) 50%, rgba(126, 138, 255, 0.18) 82%, transparent 100%),
            linear-gradient(180deg, transparent, rgba(126, 138, 255, 0.16), transparent);
          bottom: 12%;
          content: '';
          filter: blur(14px);
          height: 18%;
          left: 8%;
          opacity: 0.55;
          position: absolute;
          right: 8%;
        }

        .avax-mvn-bg span {
          --d: 0s;
          --dur: 4.8s;
          --h: 72px;
          --o: 0.5;
          animation: snwc-mvn-line var(--dur) ease-in-out var(--d) infinite;
          background: linear-gradient(0deg, rgba(255, 255, 255, 0.78), rgba(136, 148, 255, 0.48) 38%, transparent 88%);
          bottom: 11%;
          box-shadow: 0 0 18px rgba(126, 138, 255, 0.26);
          height: var(--h);
          left: var(--x);
          opacity: var(--o);
          position: absolute;
          transform-origin: 50% 100%;
          width: 1px;
        }

        .avax-stage-grid {
          animation-delay: calc(var(--snwc-hero-enter-delay) + 2s) !important;
          z-index: 2 !important;
        }

        .avax-stage-control {
          animation-delay: calc(var(--snwc-hero-enter-delay) + 2s) !important;
          background: rgba(255, 255, 255, 0.08) !important;
          z-index: 5 !important;
        }

        .avax-logo-hero {
          aspect-ratio: 794 / 423 !important;
        }

        .avax-logo-live {
          align-items: center;
          display: grid;
          inset: 0;
          justify-items: center;
          position: absolute;
          will-change: filter, opacity, transform;
          z-index: 4;
        }

        .avax-logo-image {
          display: block;
          grid-area: 1 / 1;
          height: auto !important;
          width: 100% !important;
        }

        @media (max-width: 991px) {
          .avax-intro-logo-wrap {
            width: min(73.8vw, 504px) !important;
          }
        }

        @media (max-width: 900px) {
          :root {
            --snwc-logo-intro-y: 328px;
          }
        }

        @media (max-width: 640px) {
          :root {
            --snwc-logo-intro-y: 279px;
          }

          .avax-intro-logo-wrap {
            width: min(82.8vw, 378px) !important;
          }
        }
      `}</style>
      <div className="avax-intro-surface" aria-hidden>
        <HeroIntroLogo />
      </div>
      <div aria-hidden className="avax-hero-noise" />

      <div className="avax-hero-shell">
        <div className="avax-hero-panel avax-hero-copy">
          <div className="max-w-[390px]">
            <p className="mb-7 font-[family-name:var(--font-ibm-plex-mono)] text-[11px] uppercase tracking-[0.2em] text-white/38">
              SNWC / TECH MADE CLEAR
            </p>
            <h1 className="font-[family-name:var(--font-inter-tight)] text-[24px] font-medium leading-[1.12] tracking-normal text-white max-[767px]:text-[21px]">
              Nowoczesna technologia nie musi być trudna
            </h1>
            <p className="mt-5 font-[family-name:var(--font-inter-tight)] text-[16px] font-light leading-[1.42] text-white/60">
              {heroDescription}
            </p>
          </div>
        </div>

        <div className="avax-hero-panel avax-hero-feature">
          <div className="avax-feature-media">
            <div className="avax-network-orbit">
              {statusItems.map((item, index) => (
                <span key={item} style={{'--node': index} as CSSProperties}>
                  {item}
                </span>
              ))}
            </div>
            <Image
              alt=""
              className="h-auto w-[84px] opacity-95"
              height={80}
              src="/images/wwwow-light.png"
              style={{height: 'auto'}}
              width={160}
            />
          </div>
          <div className="avax-feature-body">
            <h2 className="font-[family-name:var(--font-inter-tight)] text-[18px] font-semibold uppercase leading-none tracking-normal text-white">
              Powered by SNWC
            </h2>
            <p className="mt-3 max-w-[350px] font-[family-name:var(--font-inter-tight)] text-[17px] font-normal leading-[1.28] text-white/68">
              {heroDescription}
            </p>
          </div>
        </div>

        <div className="avax-hero-panel avax-hero-stage">
          <div aria-hidden className="avax-mvn-bg">
            {mvnLights.map((light) => (
              <span
                key={`${light.x}-${light.height}`}
                style={
                  {
                    '--d': light.delay,
                    '--dur': light.duration,
                    '--h': light.height,
                    '--o': light.opacity,
                    '--x': light.x,
                  } as CSSProperties
                }
              />
            ))}
          </div>

          <div aria-hidden className="avax-stage-grid">
            <span className="is-one" />
            <span className="is-two" />
            <span className="is-three" />
            <span className="is-four" />
          </div>

          <div className="avax-stage-control" aria-hidden>
            <span />
            <ArrowUpRight className="h-4 w-4 text-white/70" strokeWidth={1.9} />
          </div>

          <div className="avax-logo-hero" aria-label="wwwow animated logo">
            <LogoRoughFlicker
              className="avax-logo-live"
              delay={3.3}
              duration={1}
              idle
              idleMaxDelay={4.2}
              idleMinDelay={1.8}
              reveal={false}
            >
              <Image
                alt=""
                className="avax-logo-image"
                height={423}
                src="/images/wwwow-light.png"
                style={{height: 'auto'}}
                width={794}
              />
            </LogoRoughFlicker>
          </div>
        </div>

        <div className="avax-hero-panel avax-hero-meta">
          <div className="avax-mini-mark">
            <Image
              alt=""
              className="h-auto w-[42px]"
              height={42}
              src="/images/wwwow-light.png"
              style={{height: 'auto'}}
              width={82}
            />
          </div>
          <div className="mt-11">
            <div className="font-[family-name:var(--font-inter-tight)] text-[30px] font-normal leading-none text-white">
              SNWC
            </div>
            <p className="mt-2 font-[family-name:var(--font-inter-tight)] text-[16px] font-light text-white/42">
              Thursday, May 14, 2026
            </p>
          </div>
          <div className="avax-scroll-cue">
            <div>
              <strong>SCROLL</strong>
              <span>to explore page</span>
            </div>
            <ArrowDownRight className="h-[92px] w-[92px]" strokeWidth={0.9} />
          </div>
        </div>
      </div>
    </section>
  )
}
