const technologies = [
  'AI',
  'Docker',
  'Kubernetes',
  'Terraform',
  'CI/CD',
  'AWS',
  'Azure',
  'Linux',
  'GitHub Actions',
  'Monitoring',
  'Next.js',
  'Sanity',
]

export default function TechMarquee() {
  return (
    <div className="tech-marquee-window relative left-1/2 mt-6 w-[125%] max-w-[1250px] -translate-x-1/2 overflow-hidden py-4 max-[991px]:w-full">
      <div className="tech-marquee-track flex w-max items-center">
        <div className="flex shrink-0 items-center gap-12 px-6">
          {technologies.map((item) => (
            <span
              key={item}
              className="relative z-0 whitespace-nowrap font-[family-name:var(--font-inter-tight)] text-[18px] font-medium leading-[1.25] text-white/75 [text-shadow:0_0_18px_rgba(255,255,255,0.16)]"
            >
              {item}
            </span>
          ))}
        </div>
        <div aria-hidden className="flex shrink-0 items-center gap-12 px-6">
          {technologies.map((item) => (
            <span
              key={`${item}-duplicate`}
              className="relative z-0 whitespace-nowrap font-[family-name:var(--font-inter-tight)] text-[18px] font-medium leading-[1.25] text-white/75 [text-shadow:0_0_18px_rgba(255,255,255,0.16)]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
