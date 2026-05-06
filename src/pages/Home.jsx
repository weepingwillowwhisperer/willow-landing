import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <nav className="willow-nav">
        <a href="/" className="mark">Willow <em>—</em></a>
        <ul>
          <li><a href="#philosophy">Philosophy</a></li>
          <li><a href="#pillars">Pillars</a></li>
          <li><a href="#routing">Where to begin</a></li>
          <li><a href="#journal">Journal</a></li>
          <li><a href="#">Store</a></li>
        </ul>
      </nav>

      <main className="wrap">

        <section className="hero">
          <div className="eyebrow">Weeping Willow Whisperer — Est. in quiet</div>
          <h1>
            Designed for the way<br />
            real lives unfold.<br />
            <span className="italic">Not the way they're supposed to.</span>
          </h1>

          <div className="entries" aria-label="Entry points">
            <div className="label">If you're arriving here —</div>
            <div className="entry"><span>I need things to feel simpler</span><span className="arrow">→</span></div>
            <div className="entry"><span>I can't find my rhythm</span><span className="arrow">→</span></div>
            <div className="entry"><span>I don't know where to start</span><span className="arrow">→</span></div>
          </div>
        </section>

        <section className="philosophy" id="philosophy">
          <div className="tag">§ 01 — Philosophy</div>
          <p>Willow is built on <span className="em">recognition, not reinvention</span>.</p>
          <p>Nothing here assumes you're broken. Lived experience is the material we build from — not something to overcome. What you need isn't more effort. It's structure that accounts for how you actually move through a day.</p>
        </section>

        <section className="pillars" id="pillars">
          <div className="section-head">
            <div className="tag">§ 02 — Five pillars</div>
            <h2>Five structural pathways. <em>Each one can stand on its own.</em></h2>
          </div>

          <ul className="pillar-list">
            <li className="pillar" data-p="studio">
              <span className="num">01 / STD</span>
              <span className="name"><span className="dot"></span>Studio</span>
              <span className="desc">
                Brand, offer, and business architecture for work that already exists but hasn't found its shape.
                <span className="state">For: "I can't find the words for what I do."</span>
              </span>
              <span className="enter">Enter →</span>
            </li>
            <li className="pillar" data-p="academy">
              <span className="num">02 / ACA</span>
              <span className="name"><span className="dot"></span>Academy</span>
              <span className="desc">
                Study, school, and career decisions for students and the people holding it together around them.
                <span className="state">For: "I'm holding it together for someone else."</span>
              </span>
              <span className="enter">Enter →</span>
            </li>
            <li className="pillar" data-p="nest">
              <span className="num">03 / NES</span>
              <span className="name">
                <span className="dot"></span>
                <Link to="/nest">Nest</Link>
              </span>
              <span className="desc">
                Stabilization for the household and the person inside it. Mental load, not optimization.
                <span className="state">For: "I can't think clearly."</span>
              </span>
              <Link to="/nest" className="enter">Enter →</Link>
            </li>
            <li className="pillar" data-p="wayfinder">
              <span className="num">04 / WAY</span>
              <span className="name"><span className="dot"></span>Wayfinder</span>
              <span className="desc">
                Decisions at crossroads. For transitions, thresholds, and the middle of something unnamed.
                <span className="state">For: "I don't know what I want."</span>
              </span>
              <span className="enter">Enter →</span>
            </li>
            <li className="pillar" data-p="workshop">
              <span className="num">05 / WOP</span>
              <span className="name"><span className="dot"></span>Workshop</span>
              <span className="desc">
                Prompt systems, AI literacy, and thinking tools built for people who don't want to push harder.
                <span className="state">For: "I'm ready to build."</span>
              </span>
              <span className="enter">Enter →</span>
            </li>
          </ul>
        </section>

        <section className="routing" id="routing">
          <div className="section-head">
            <div>
              <div className="tag">§ 03 — Where are you right now?</div>
              <p className="lede">You don't have to name it first. Rest on one for a moment — the door will show itself.</p>
            </div>
          </div>

          <div className="states">
            <Link to="/nest" className="state" tabIndex={0} style={{'--pcolor': 'var(--nest)'}}>
              <div className="feeling">I can't think clearly.</div>
              <div className="reveal"><span className="pdot"></span><span className="ptext">Begin in <em>Nest</em></span></div>
            </Link>
            <div className="state" tabIndex={0} style={{'--pcolor': 'var(--wayfinder)'}}>
              <div className="feeling">I feel behind on everything.</div>
              <div className="reveal"><span className="pdot"></span><span className="ptext">Begin in <em>Wayfinder</em></span></div>
            </div>
            <Link to="/nest" className="state" tabIndex={0} style={{'--pcolor': 'var(--nest)'}}>
              <div className="feeling">I'm overwhelmed but I don't know why.</div>
              <div className="reveal"><span className="pdot"></span><span className="ptext">Begin in <em>Nest</em></span></div>
            </Link>
            <div className="state" tabIndex={0} style={{'--pcolor': 'var(--studio)'}}>
              <div className="feeling">I need to reset.</div>
              <div className="reveal"><span className="pdot"></span><span className="ptext">Begin in <em>Studio</em></span></div>
            </div>
            <div className="state" tabIndex={0} style={{'--pcolor': 'var(--academy)'}}>
              <div className="feeling">I'm holding it together for someone else.</div>
              <div className="reveal"><span className="pdot"></span><span className="ptext">Begin in <em>Academy</em></span></div>
            </div>
            <div className="state" tabIndex={0} style={{'--pcolor': 'var(--workshop)'}}>
              <div className="feeling">I'm ready to build something, but quietly.</div>
              <div className="reveal"><span className="pdot"></span><span className="ptext">Begin in <em>Workshop</em></span></div>
            </div>
          </div>
        </section>

        <section className="featured">
          <div className="featured-grid">
            <div>
              <div className="tag">§ 04 — One object</div>
              <h3>The Wayfinder <em>Crossroads Workbook</em></h3>
              <div className="sku">WIL-WAY-WRK-001 · PDF · 48pp</div>
            </div>
            <div className="body">
              <p>This exists because most decisions don't get made at the moment you sit down to make them. They get made in the quiet before — in what you already notice, already flinch from, already return to.</p>
              <p>The workbook doesn't ask you to choose faster. It gives you a place to notice what's already pulling, and a way to stay with it long enough to hear what it's saying. For thresholds, transitions, and the middle of something unnamed.</p>
              <a href="#" className="quiet-link">Open the workbook →</a>
            </div>
          </div>
        </section>

        <section className="journal" id="journal">
          <div className="section-head">
            <div className="tag">§ 05 — Journal</div>
            <h2>Field notes from the quieter edge.</h2>
          </div>

          <ul className="entries-list">
            <li className="j-entry">
              <span className="date">03 · 04 · 26</span>
              <span className="title">On the difference between <em>resting</em> and <em>being allowed to stop</em>.</span>
              <span className="meta">Essay · 8 min</span>
            </li>
            <li className="j-entry">
              <span className="date">24 · 03 · 26</span>
              <span className="title">What if the problem isn't your system — it's that you've been borrowing someone else's?</span>
              <span className="meta">Note · 4 min</span>
            </li>
            <li className="j-entry">
              <span className="date">11 · 03 · 26</span>
              <span className="title">A small vocabulary for days that refuse to be named.</span>
              <span className="meta">Essay · 6 min</span>
            </li>
          </ul>
        </section>

        <section className="whisper">
          <a href="#">Private conversations beneath the surface.</a>
        </section>

        <section className="closing">
          <p>You didn't find Willow.<br /><em>You recognized it.</em></p>
        </section>

      </main>

      <footer className="willow-footer">
        <div className="left">
          Weeping Willow Whisperer LLC · Willow is a studio, a philosophy, and a set of tools for lives that don't fit standard systems.
        </div>
        <div>
          <a href="#">weepingwillowwhisperer.net</a>
        </div>
      </footer>
    </>
  )
}
