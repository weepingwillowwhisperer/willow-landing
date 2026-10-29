import { Link } from 'react-router-dom'
import '../home.css'

// Five-pillar landing. Copy follows Willow's voice lock; sample PDFs live in /public/samples.
export default function Home() {
  return (
    <div className="lp">
      <header className="lp-top">
        <div className="lp-wrap">
          <a className="lp-brand" href="#top">Willow</a>
          <nav className="lp-pnav" aria-label="Pillars"><a href="#nest">Nest</a><a href="#academy">Academy</a><a href="#wayfinder">Wayfinder</a><a href="#studio">Studio</a><a href="#workshop">Workshop</a></nav>
          <a className="lp-lib" href="/journal/">Journal</a>
        </div>
      </header>

      <main id="top">
        <section className="lp-hero">
          <div className="lp-wrap">
            <p className="lp-mono">Weeping Willow Whisperer</p>
            <h1>Nobody asks the willow to stand straight.</h1>
            <div className="lp-intro">
              <p>Willow is built on five intersecting systems. Each one can stand on its own. Together, they create enough structure for things to start holding again.</p>
              <p>This isn’t about optimization. It’s about reducing friction where life has already become heavy.</p>
            </div>
            <div className="lp-cta">
              <a className="lp-btn" href="#pillars">Read two pages free <span aria-hidden="true">&darr;</span></a>
              <a className="lp-ghost" href="https://willowpdf.com">Browse the full library</a>
            </div>
          </div>
        </section>

        <div className="lp-strip" aria-label="About the samples">
          <ul>
            <li>Two free samples from every pillar.</li>
            <li>Two pages each, taken from the full guide.</li>
            <li>No email. No checkout.</li>
          </ul>
        </div>

        <div className="lp-wrap">
          <div className="lp-pillars-head" id="pillars">
            <p className="lp-mono">The five pillars</p>
            <h2>Start wherever life is loudest.</h2>
            <p>Every Willow guide begins the same way: the condition named first, then the smallest useful step. The samples below show exactly what that looks like on the page, so you know what you’re getting before you buy anything.</p>
          </div>

          <section className="lp-pillar" id="nest" style={{ '--accent': '#AAB7A4' }}>
            <div>
              <p className="lp-kicker"><span className="lp-dot" />01 &middot; Nest</p>
              <h3>Nest</h3>
              <p className="lp-tag">Reduce the noise first</p>
              <div className="lp-lead"><p>Nothing works if everything is loud.</p><p>This is stabilization. Not improvement. Not performance. Just relief.</p></div>
              <ul className="lp-items"><li>Mental load reduction</li><li>Boundaries that are actually livable</li><li>Home and life systems that support, not drain</li></ul>
              <p className="lp-close-line">Before growth, there has to be space.</p>
              <div className="lp-links">
                <Link className="lp-more" to="/nest">Visit the Nest page <span aria-hidden="true">&rarr;</span></Link>
                <a className="lp-more" href="https://willowpdf.com">All Nest guides at willowpdf.com <span aria-hidden="true">&rarr;</span></a>
              </div>
            </div>
            <div className="lp-samples">
              <article className="lp-sample">
                <p className="lp-sample-meta">Free sample &middot; 2 of 14 pages</p>
                <h4>Asking</h4>
                <p className="lp-sample-sub">A short guide to saying what you need.</p>
                <p className="lp-sample-blurb">Scripts for asks that keep getting postponed, built in four short parts.</p>
                <a className="lp-dl" href="/samples/nest/WIL-NES-TKT-008-SAMPLE-asking.pdf" download>Download the sample <span aria-hidden="true">&darr;</span><span className="lp-vh"> (PDF)</span></a>
              </article>
              <article className="lp-sample">
                <p className="lp-sample-meta">Free sample &middot; 2 of 17 pages</p>
                <h4>The Low-Energy House</h4>
                <p className="lp-sample-sub">Living with chronic illness without self-abandonment.</p>
                <p className="lp-sample-blurb">A way to plan around the day you actually have, not the one you’re expected to have.</p>
                <a className="lp-dl" href="/samples/nest/WIL-NES-GDE-006-SAMPLE-the-low-energy-house.pdf" download>Download the sample <span aria-hidden="true">&darr;</span><span className="lp-vh"> (PDF)</span></a>
              </article>
            </div>
          </section>
          <section className="lp-pillar" id="academy" style={{ '--accent': '#ADBCCD' }}>
            <div>
              <p className="lp-kicker"><span className="lp-dot" />02 &middot; Academy</p>
              <h3>Academy</h3>
              <p className="lp-tag">Learn and move forward</p>
              <div className="lp-lead"><p>This is for direction when everything feels open but unclear.</p><p>Not pressure to decide. A way to move without second-guessing every step.</p></div>
              <ul className="lp-items"><li>Study and work systems that match how you actually function</li><li>Career paths that consider energy, not just ambition</li><li>Tools for choosing without spiraling</li></ul>
              <p className="lp-close-line">Progress, without force.</p>
              <div className="lp-links">
                
                <a className="lp-more" href="https://willowpdf.com">All Academy guides at willowpdf.com <span aria-hidden="true">&rarr;</span></a>
              </div>
            </div>
            <div className="lp-samples">
              <article className="lp-sample">
                <p className="lp-sample-meta">Free sample &middot; 2 of 17 pages</p>
                <h4>The Low-Capacity Semester</h4>
                <p className="lp-sample-sub">Study planning when your energy is variable.</p>
                <p className="lp-sample-blurb">A bare-minimum week that still counts on the weeks everything else falls away.</p>
                <a className="lp-dl" href="/samples/academy/WIL-ACA-TRK-004-SAMPLE-the-low-capacity-semester.pdf" download>Download the sample <span aria-hidden="true">&darr;</span><span className="lp-vh"> (PDF)</span></a>
              </article>
              <article className="lp-sample">
                <p className="lp-sample-meta">Free sample &middot; 2 of 11 pages</p>
                <h4>Email Scripts for Students</h4>
                <p className="lp-sample-sub">Templates for professors, advisors, landlords.</p>
                <p className="lp-sample-blurb">The extension request, written once, so you only have to fill in the blanks.</p>
                <a className="lp-dl" href="/samples/academy/WIL-ACA-TKT-005-SAMPLE-email-scripts-for-students.pdf" download>Download the sample <span aria-hidden="true">&darr;</span><span className="lp-vh"> (PDF)</span></a>
              </article>
            </div>
          </section>
          <section className="lp-pillar" id="wayfinder" style={{ '--accent': '#8B7D78' }}>
            <div>
              <p className="lp-kicker"><span className="lp-dot" />03 &middot; Wayfinder</p>
              <h3>Wayfinder</h3>
              <p className="lp-tag">Move with more ease</p>
              <div className="lp-lead"><p>This is for movement through unfamiliar terrain.</p><p>Travel, transitions, new environments, especially when they don’t come easily.</p></div>
              <ul className="lp-items"><li>Navigation with comfort in mind</li><li>Accessibility without compromise</li><li>Planning that removes unnecessary stress</li></ul>
              <p className="lp-close-line">Not just getting there. Getting there without losing yourself.</p>
              <div className="lp-links">
                
                <a className="lp-more" href="https://willowpdf.com">All Wayfinder guides at willowpdf.com <span aria-hidden="true">&rarr;</span></a>
              </div>
            </div>
            <div className="lp-samples">
              <article className="lp-sample">
                <p className="lp-sample-meta">Free sample &middot; 2 of 16 pages</p>
                <h4>The Waiting</h4>
                <p className="lp-sample-sub">Living well in the time before the change.</p>
                <p className="lp-sample-blurb">Two columns for the time between knowing and arriving.</p>
                <a className="lp-dl" href="/samples/wayfinder/WIL-WYF-GDE-007-SAMPLE-the-waiting.pdf" download>Download the sample <span aria-hidden="true">&darr;</span><span className="lp-vh"> (PDF)</span></a>
              </article>
              <article className="lp-sample">
                <p className="lp-sample-meta">Free sample &middot; 2 of 18 pages</p>
                <h4>Expected to Stay, Choosing to Go</h4>
                <p className="lp-sample-sub">Navigating family and cultural expectations.</p>
                <p className="lp-sample-blurb">Sorting what is yours from what was handed to you, and how to say it.</p>
                <a className="lp-dl" href="/samples/wayfinder/WIL-WYF-GDE-009-SAMPLE-expected-to-stay.pdf" download>Download the sample <span aria-hidden="true">&darr;</span><span className="lp-vh"> (PDF)</span></a>
              </article>
            </div>
          </section>
          <section className="lp-pillar" id="studio" style={{ '--accent': '#6E6E6E' }}>
            <div>
              <p className="lp-kicker"><span className="lp-dot" />04 &middot; Studio</p>
              <h3>Studio</h3>
              <p className="lp-tag">Build with clarity</p>
              <div className="lp-lead"><p>This is where things stop being vague.</p><p>Where what you offer, how you present it, and how it functions begin to align into something usable.</p></div>
              <ul className="lp-items"><li>Business and brand architecture</li><li>Offers that make sense to you and to the person receiving them</li><li>Clear entry points instead of scattered effort</li></ul>
              <p className="lp-close-line">You’re not starting over. You’re organizing what already exists.</p>
              <div className="lp-links">
                <a className="lp-more" href="/studio/">Visit the Studio page <span aria-hidden="true">&rarr;</span></a>
                <a className="lp-more" href="https://willowpdf.com">All Studio guides at willowpdf.com <span aria-hidden="true">&rarr;</span></a>
              </div>
            </div>
            <div className="lp-samples">
              <article className="lp-sample">
                <p className="lp-sample-meta">Free sample &middot; 2 of 20 pages</p>
                <h4>What You Actually Offer</h4>
                <p className="lp-sample-sub">For founders whose work is too complex for the pitch deck.</p>
                <p className="lp-sample-blurb">An audit of what you sell, and one sentence a stranger could repeat.</p>
                <a className="lp-dl" href="/samples/studio/WIL-STD-WBK-001-SAMPLE-what-you-actually-offer.pdf" download>Download the sample <span aria-hidden="true">&darr;</span><span className="lp-vh"> (PDF)</span></a>
              </article>
              <article className="lp-sample">
                <p className="lp-sample-meta">Free sample &middot; 2 of 18 pages</p>
                <h4>Pricing, Without Apology</h4>
                <p className="lp-sample-sub">A guide to what to charge and how to quote it.</p>
                <p className="lp-sample-blurb">The cost floor, worked through once, and the sentence for saying the number.</p>
                <a className="lp-dl" href="/samples/studio/WIL-STD-GDE-003-SAMPLE-pricing-without-apology.pdf" download>Download the sample <span aria-hidden="true">&darr;</span><span className="lp-vh"> (PDF)</span></a>
              </article>
            </div>
          </section>
          <section className="lp-pillar" id="workshop" style={{ '--accent': '#9AA2A9' }}>
            <div>
              <p className="lp-kicker"><span className="lp-dot" />05 &middot; Workshop</p>
              <h3>Workshop</h3>
              <p className="lp-tag">Create with better tools</p>
              <div className="lp-lead"><p>This is where ideas become usable.</p><p>Not more inspiration. Better execution.</p></div>
              <ul className="lp-items"><li>Prompt systems and structured thinking tools</li><li>Content frameworks that don’t feel forced</li><li>Design shortcuts that respect your energy</li></ul>
              <p className="lp-close-line">You don’t need to push harder. You need tools that don’t fight you.</p>
              <div className="lp-links">
                
                <a className="lp-more" href="https://willowpdf.com">All Workshop guides at willowpdf.com <span aria-hidden="true">&rarr;</span></a>
              </div>
            </div>
            <div className="lp-samples">
              <article className="lp-sample">
                <p className="lp-sample-meta">Free sample &middot; 2 of 20 pages</p>
                <h4>Prompting for People Who Already Think</h4>
                <p className="lp-sample-sub">Using AI without adopting its voice.</p>
                <p className="lp-sample-blurb">A four-part brief that returns your register instead of a generic one.</p>
                <a className="lp-dl" href="/samples/workshop/WIL-WRK-GDE-001-SAMPLE-prompting-for-people-who-already-think.pdf" download>Download the sample <span aria-hidden="true">&darr;</span><span className="lp-vh"> (PDF)</span></a>
              </article>
              <article className="lp-sample">
                <p className="lp-sample-meta">Free sample &middot; 2 of 16 pages</p>
                <h4>Writing in Two Voices</h4>
                <p className="lp-sample-sub">Using AI as a draft partner without writing yourself out.</p>
                <p className="lp-sample-blurb">A flatness test you can run on any finished piece.</p>
                <a className="lp-dl" href="/samples/workshop/WIL-WRK-GDE-003-SAMPLE-writing-in-two-voices.pdf" download>Download the sample <span aria-hidden="true">&darr;</span><span className="lp-vh"> (PDF)</span></a>
              </article>
            </div>
          </section>

          <div className="lp-duo">
            <section>
              <p className="lp-mono">From the journal</p>
              <h2>The essay behind the line.</h2>
              <p>The weeping willow was named twice by people who weren’t the tree. An essay on labels, on not forcing, and on the debt nobody owes.</p>
              <a className="lp-more" href="/journal/nobody-asks-the-willow/">Read Essay No. 01 <span aria-hidden="true">&rarr;</span></a>
            </section>
            <section>
              <p className="lp-mono">The full guides</p>
              <h2>Where the rest of the pages live.</h2>
              <p>Every sample here comes from a complete guide, workbook or toolkit.</p>
              <ul className="lp-stores">
                <li><a href="https://willowpdf.com"><span className="lp-d">willowpdf.com</span><span className="lp-n">The full library, by pillar</span></a></li>
                <li><a href="https://wwilloww.ai"><span className="lp-d">wwilloww.ai</span><span className="lp-n">The Willow store</span></a></li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <footer className="lp-foot">
        <div className="lp-wrap lp-mono">
          <span>&copy; 2026 Weeping Willow Whisperer LLC</span>
          <a href="https://weepingwillowwhisperer.ai">weepingwillowwhisperer.ai</a>
        </div>
      </footer>
    </div>
  )
}
