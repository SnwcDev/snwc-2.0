import HeroIntroLogo from '@/app/components/HeroIntroLogo'

export default function HeroExperience() {
  return (
    <section className="avax-hero relative isolate overflow-hidden rounded-b-[32px] bg-[#171a1d] px-0 text-white">
      <style>{`
        :root {
          --snwc-hero-logo-reveal-delay: 0.56s;
          --snwc-hero-logo-reveal-duration: 1s;
          --snwc-hero-enter-delay: 1.14s;
          --snwc-hero-enter-duration: 2s;
          --snwc-hero-nav-gap: 4px;
          --snwc-hero-nav-height: 86px;
          --snwc-hero-nav-shell-height: 82px;
        }

        @keyframes snwc-hero-nav-in {
          0% {
            transform: translate3d(0, -112%, 0);
          }

          100% {
            transform: translate3d(0, 0, 0);
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

        @keyframes snwc-hero-left-stack-split {
          0% {
            gap: 0;
            grid-template-rows: 1fr 0fr;
          }

          100% {
            gap: 4px;
            grid-template-rows: 1fr 0.8fr;
          }
        }

        @keyframes snwc-hero-intro-surface {
          0% {
            clip-path: inset(0 0 0 0 round 32px);
            opacity: 1;
            visibility: visible;
          }

          96% {
            clip-path: inset(calc(var(--snwc-hero-nav-height) + var(--snwc-hero-nav-gap)) 24.75% 1px 24.75% round 28px);
            opacity: 1;
            visibility: visible;
          }

          100% {
            clip-path: inset(calc(var(--snwc-hero-nav-height) + var(--snwc-hero-nav-gap)) 24.75% 1px 24.75% round 28px);
            opacity: 0;
            visibility: hidden;
          }
        }

        @keyframes snwc-hero-logo-scale {
          from {
            transform: translate(-50%, -50%) scale(0.12);
          }

          to {
            transform: translate(-50%, calc(-50% + 18px)) scale(1);
          }
        }

        @keyframes snwc-hero-logo-flicker {
          0% {
            filter: brightness(0.65);
            opacity: 0;
          }

          34% {
            filter: brightness(1.18);
            opacity: 0.28;
          }

          100% {
            filter: brightness(1);
            opacity: 1;
          }
        }

        @keyframes snwc-hero-final-logo {
          from {
            filter: saturate(0.65) brightness(0.85);
            opacity: 0;
            transform: scale(0.985);
          }

          to {
            filter: saturate(1) brightness(1);
            opacity: 1;
            transform: scale(1);
          }
        }

        .avax-nav {
          align-items: center !important;
          background: #171a1d !important;
          color: #ffffff !important;
          display: flex !important;
          height: var(--snwc-hero-nav-height) !important;
          justify-content: center !important;
          padding: var(--snwc-hero-nav-gap) var(--snwc-hero-nav-gap) 0 !important;
        }

        .avax-nav-shell {
          display: block !important;
          height: var(--snwc-hero-nav-shell-height) !important;
          max-width: none !important;
          padding: 0 !important;
          width: 100% !important;
        }

        .avax-nav-bar {
          --clip-bottom: 100%;
          align-items: center !important;
          animation: snwc-hero-nav-in var(--snwc-hero-enter-duration) var(--avax-ease-in-out-quart) var(--snwc-hero-enter-delay) both !important;
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
          min-height: calc(100svh - var(--snwc-hero-nav-height)) !important;
        }

        .avax-intro-surface {
          animation: snwc-hero-intro-surface var(--snwc-hero-enter-duration) var(--avax-ease-in-out-quart) var(--snwc-hero-enter-delay) both !important;
          background: #090a0c !important;
        }

        .avax-intro-logo-wrap {
          animation: snwc-hero-logo-scale var(--snwc-hero-enter-duration) var(--avax-ease-in-out-quart) var(--snwc-hero-enter-delay) both !important;
          height: auto !important;
          left: 50% !important;
          position: absolute !important;
          top: 50% !important;
          transform: translate(-50%, -50%) scale(0.12);
          width: min(58vw, 580px) !important;
          z-index: 2 !important;
        }

        .avax-intro-logo-flicker-layer {
          animation: snwc-hero-logo-flicker var(--snwc-hero-logo-reveal-duration) var(--avax-ease-out-quart) var(--snwc-hero-logo-reveal-delay) both !important;
          filter: brightness(1);
          opacity: 0;
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
          min-height: calc(100svh - var(--snwc-hero-nav-height)) !important;
          padding: 4px !important;
        }

        .avax-hero-left {
          animation: snwc-hero-left-stack-split var(--snwc-hero-enter-duration) var(--avax-ease-in-out-quart) calc(var(--snwc-hero-enter-delay) + 1s) both !important;
          display: grid !important;
          gap: 0;
          grid-column: 1 !important;
          grid-row: 1 / span 2 !important;
          grid-template-rows: 1fr 0fr;
          min-height: 0;
          min-width: 0;
        }

        .avax-hero-left > .avax-hero-panel {
          min-height: 0 !important;
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
          border-radius: 28px 28px 32px 32px !important;
        }

        .avax-stage-grid {
          animation-delay: calc(var(--snwc-hero-enter-delay) + 2s) !important;
        }

        .avax-stage-control {
          animation-delay: calc(var(--snwc-hero-enter-delay) + 2s) !important;
          background: rgba(255, 255, 255, 0.08) !important;
        }

        .avax-logo-mask {
          animation: snwc-hero-final-logo 0.7s var(--avax-ease-out-quart) calc(var(--snwc-hero-enter-delay) + 1.42s) both !important;
          background: rgba(255, 255, 255, 0.1) !important;
        }
      `}</style>
      <div className="avax-intro-surface" aria-hidden>
        <HeroIntroLogo />
      </div>
      <div aria-hidden className="avax-hero-noise" />

      <div className="avax-hero-shell">
        <div className="avax-hero-left">
          <div className="avax-hero-panel avax-hero-copy" />
          <div className="avax-hero-panel avax-hero-feature" />
        </div>
        <div className="avax-hero-panel avax-hero-stage" />
        <div className="avax-hero-panel avax-hero-meta" />
      </div>
    </section>
  )
}
