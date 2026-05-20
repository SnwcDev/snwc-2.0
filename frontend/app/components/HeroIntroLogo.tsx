import Image from 'next/image'

import LogoRoughFlicker from '@/app/components/LogoRoughFlicker'

export default function HeroIntroLogo() {
  return (
    <div className="avax-intro-logo-wrap">
      <LogoRoughFlicker className="avax-intro-logo-flicker-layer" delay={0.3} duration={1}>
        <Image
          alt=""
          className="avax-intro-logo"
          height={423}
          priority
          src="/images/wwwow-light.png"
          style={{height: 'auto'}}
          width={794}
        />
      </LogoRoughFlicker>
    </div>
  )
}
