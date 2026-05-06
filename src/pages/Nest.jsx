import { useState, useRef, useCallback, useEffect } from 'react'
import { Link } from 'react-router-dom'

// Three nervous system states. Position on the bar (0–100) maps to a state.
const STATES = [
  {
    range: [0, 33],
    code: 'STATE 01',
    name: 'Survival',
    body: <>Threat is foregrounded. Energy is held tight at the surface — <em>not because something is wrong with you, but because something is asking too much of you.</em></>,
  },
  {
    range: [33, 67],
    code: 'STATE 02',
    name: 'Calibrated Vigilance',
    body: <>Quiet, sustained alertness. Not danger, not rest — <em>the long middle where most adapted lives are actually lived.</em> This is intelligence, not pathology.</>,
  },
  {
    range: [67, 100],
    code: 'STATE 03',
    name: 'True Regulation',
    body: <>The system is unguarded. Attention can land. The body is not preparing for anything — <em>it is simply where it is.</em></>,
  },
]

function getStateForPosition(pos) {
  for (const s of STATES) {
    if (pos >= s.range[0] && pos <= s.range[1]) return s
  }
  return STATES[1]
}

export default function Nest() {
  const [pos, setPos] = useState(45) // start in Calibrated Vigilance
  const [dragging, setDragging] = useState(false)
  const trackRef = useRef(null)

  const updateFromClientX = useCallback((clientX) => {
    if (!trackRef.current) return
    const rect = trackRef.current.getBoundingClientRect()
    const raw = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.max(0, Math.min(100, raw)))
  }, [])

  const onPointerDown = (e) => {
    setDragging(true)
    updateFromClientX(e.clientX)
  }

  useEffect(() => {
    if (!dragging) return
    const onMove = (e) => updateFromClientX(e.clientX)
    const onUp = () => setDragging(false)
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
    }
  }, [dragging, updateFromClientX])

  // Keyboard accessibility
  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft')  setPos(p => Math.max(0, p - 2))
    if (e.key === 'ArrowRight') setPos(p => Math.min(100, p + 2))
  }

  const current = getStateForPosition(pos)

  return (
    <div className="nest-page">
      <nav className="willow-nav">
        <Link to="/" className="mark">Willow <em>—</em></Link>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><a href="#">Store</a></li>
        </ul>
      </nav>

      <main className="wrap">

        <section className="nest-hero">
          <div className="eyebrow"><span className="pdot"></span> Nest · Stabilization</div>
          <h1>
            Reduce the noise <em>first.</em>
          </h1>
          <p className="lede">
            Nothing works if everything is loud. Before growth, there has to be space.
            Nest is for the part of life that comes before improvement — for the quiet, structural relief that has to exist before anything else can.
          </p>
        </section>

        <section className="nest-tool">
          <div className="tag">§ Tool — Nervous system map</div>
          <h2>
            Most people are not in survival, and not in rest.
            <em> They are somewhere in the long middle.</em>
          </h2>
          <p className="sub">
            Drag along the bar to find where you actually are right now. There is no correct position — only the one that is true.
          </p>

          <div
            ref={trackRef}
            className="gradient-track"
            onPointerDown={onPointerDown}
            role="slider"
            tabIndex={0}
            aria-label="Nervous system state"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(pos)}
            aria-valuetext={current.name}
            onKeyDown={onKeyDown}
          >
            <div className="scale">
              <span>Survival</span>
              <span>Calibrated Vigilance</span>
              <span>True Regulation</span>
            </div>
            <div
              className="gradient-handle"
              style={{ left: `${pos}%` }}
            />
          </div>

          <div className="scale-labels">
            <div className="label">High alert · narrow focus</div>
            <div className="label center">Quiet, sustained alertness</div>
            <div className="label right">Unguarded · landed</div>
          </div>

          <div className="nest-state-readout" aria-live="polite">
            <div className="state-name">{current.code} · <strong>{current.name}</strong></div>
            <div className="state-body">{current.body}</div>
          </div>

          <Link to="/" className="back-link">← Return to Willow</Link>
        </section>

      </main>

      <footer className="willow-footer">
        <div className="left">
          Weeping Willow Whisperer LLC · Nest is one of five Willow pillars.
        </div>
        <div>
          <a href="#">weepingwillowwhisperer.net</a>
        </div>
      </footer>
    </div>
  )
}
