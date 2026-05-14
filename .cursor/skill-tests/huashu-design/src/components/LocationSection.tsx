import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import AnimatedText from './AnimatedText.tsx'

export default function LocationSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const copyRef = useRef<HTMLParagraphElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    const copy = copyRef.current
    const card = cardRef.current
    if (!section || !copy || !card) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      gsap.set([copy, card], { opacity: 1, y: 0 })
      return
    }

    const ctx = gsap.context(() => {
      gsap.from(copy, {
        opacity: 0,
        y: 32,
        duration: 0.75,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: copy,
          start: 'top 84%',
          toggleActions: 'play none none reverse',
        },
      })
      gsap.from(card, {
        opacity: 0,
        y: 48,
        scale: 0.98,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 86%',
          toggleActions: 'play none none reverse',
        },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="location"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-night via-deepPurple to-night py-24 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(232,93,28,0.18),transparent_55%),radial-gradient(ellipse_at_80%_0%,rgba(255,159,28,0.12),transparent_50%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <div>
          <AnimatedText
            text="Located by the Caribbean Shore"
            className="max-w-xl font-display text-[clamp(2rem,4.2vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.03em] text-white"
          />
          <p
            ref={copyRef}
            className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-muted sm:text-lg"
          >
            Steps from the water, surrounded by palms, warm air, and the pulse of Cancún’s nightlife.
            Open decks, salt on the breeze, and a sound system tuned for golden hour into after
            midnight.
          </p>
          <dl className="mt-8 space-y-2 text-sm text-white/70">
            <div className="flex gap-2">
              <dt className="font-semibold uppercase tracking-[0.18em] text-white/45">Address</dt>
              <dd>Blvd. Kukulcán, Zona Hotelera, Cancún, Q.R.</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-semibold uppercase tracking-[0.18em] text-white/45">Vibe</dt>
              <dd>Outdoor lounge · barefoot dancefloor · moonlit bar</dd>
            </div>
          </dl>
        </div>

        <div ref={cardRef} className="relative">
          <div className="absolute -inset-6 rounded-[28px] bg-gradient-to-br from-ember/25 via-transparent to-accent/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br from-plum/80 via-deepPurple/90 to-night/95 p-1 shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
            <div className="rounded-[20px] bg-[linear-gradient(145deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent/90">
                    Map preview
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold text-white">Hotel Zone · Kukulcán</p>
                </div>
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                  Mock
                </span>
              </div>

              <div
                className="relative mt-6 aspect-[16/11] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-burnt/35 via-deepPurple to-night"
                role="img"
                aria-label="Stylized map placeholder of Cancún hotel zone"
              >
                <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:28px_28px]" />
                <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,159,28,0.35),transparent_70%)] blur-md" />
                <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/10 bg-night/70 p-4 backdrop-blur-md">
                  <p className="text-sm font-medium text-white">Blvd. Kukulcán, Zona Hotelera</p>
                  <p className="mt-1 text-xs text-muted">Cancún, Quintana Roo, México</p>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/"
                className="mt-6 inline-flex w-full min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:border-accent/50 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                target="_blank"
                rel="noreferrer"
              >
                Open in Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
