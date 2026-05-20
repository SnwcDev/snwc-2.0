import type {CSSProperties} from 'react'

const glyphBars = Array.from({length: 24}, (_, index) => index)
const counterChars = ['N', '0', '2', '5']
const glitchStyle = (delay: number) =>
  ({
    '--glitch-delay': `${delay}s`,
  }) as CSSProperties

export default function TitanGateSeparator() {
  return (
    <section
      aria-label="Site signal separator"
      className="relative overflow-hidden bg-[#050607] px-6 pb-8 pt-0 text-white lg:px-10"
    >
      <div aria-hidden className="titan-divider">
        <div className="titan-divider-line" />
        <div className="titan-divider-line" />
      </div>

      <div className="mx-auto w-full max-w-[1440px]">
        <div className="titan-signal-grid">
          <div className="titan-micro-copy">
            <span
              className="titan-glitch-line"
              data-text="SNWC | PATRYK SYNOWIEC"
              style={glitchStyle(-0.2)}
            >
              SNWC | PATRYK SYNOWIEC
            </span>
            <span className="titan-micro-row">
              <span className="titan-glitch-line" data-text="001" style={glitchStyle(-1.1)}>
                001
              </span>
              <span aria-hidden className="titan-checker" />
              <span
                className="titan-glitch-line"
                data-text="TECH MADE CLEAR"
                style={glitchStyle(-1.8)}
              >
                TECH MADE CLEAR
              </span>
            </span>
          </div>

          <div className="titan-micro-copy titan-micro-copy-center">
            <span
              className="titan-glitch-line"
              data-text="WHERE SYSTEMS FEEL OVERBUILT,"
              style={glitchStyle(-0.7)}
            >
              WHERE SYSTEMS FEEL OVERBUILT,
            </span>
            <span
              className="titan-glitch-line"
              data-text="WE TURN COMPLEXITY INTO WORKING SIGNAL."
              style={glitchStyle(-1.45)}
            >
              WE TURN COMPLEXITY INTO WORKING SIGNAL.
            </span>
          </div>

          <div aria-hidden className="titan-scan-glyph">
            {glyphBars.map((bar) => (
              <span
                key={bar}
                style={
                  {
                    '--bar': bar,
                    '--height': `${10 + ((bar * 7) % 26)}px`,
                  } as CSSProperties
                }
              />
            ))}
          </div>

          <div className="titan-micro-copy titan-micro-copy-right">
            <span className="titan-glitch-line" data-text="SN" style={glitchStyle(-0.55)}>
              SN
            </span>
            <span className="titan-glitch-line" data-text="WC" style={glitchStyle(-1.2)}>
              WC
            </span>
            <strong
              aria-label="N025"
              className="titan-counter titan-glitch-line"
              data-text="N025"
              style={glitchStyle(-0.95)}
            >
              {counterChars.map((char, index) => (
                <span
                  aria-hidden="true"
                  key={`${char}-${index}`}
                  style={
                    {
                      '--digit': index,
                    } as CSSProperties
                  }
                >
                  {char}
                </span>
              ))}
            </strong>
          </div>
        </div>
      </div>
    </section>
  )
}
