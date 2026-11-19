import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import '../whisperer.css'

const STORAGE_KEY = 'willow-whisperer-community'

function readCommunity() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  } catch {
    return []
  }
}

async function submitNetlifyForm(name, fields) {
  const body = new URLSearchParams({ 'form-name': name, ...fields }).toString()
  await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  })
}

export default function Whisperer() {
  const [records, setRecords] = useState(readCommunity)
  const [blogText, setBlogText] = useState('')
  const [chatText, setChatText] = useState('')
  const [sloganText, setSloganText] = useState('')
  const [sloganFormat, setSloganFormat] = useState('T-shirt')
  const [sloganConsent, setSloganConsent] = useState(false)
  const [statuses, setStatuses] = useState({})
  const [breathing, setBreathing] = useState(false)
  const [inhaling, setInhaling] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    document.title = 'Whisperer — Weeping Willow Whisperer'
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records))
  }, [records])

  useEffect(() => {
    if (!breathing) return
    timerRef.current = window.setInterval(() => setInhaling((value) => !value), 4000)
    setInhaling(true)
    return () => window.clearInterval(timerRef.current)
  }, [breathing])

  useEffect(() => {
    const onVisibilityChange = () => {
      if (document.hidden && breathing) setBreathing(false)
    }
    document.addEventListener('visibilitychange', onVisibilityChange)
    return () => document.removeEventListener('visibilitychange', onVisibilityChange)
  }, [breathing])

  const saveNetlify = async (name, fields) => {
    try {
      await submitNetlifyForm(name, fields)
      return true
    } catch {
      return false
    }
  }

  const submitCommunity = async (event, kind) => {
    event.preventDefault()
    const text = kind === 'blog' ? blogText.trim() : chatText.trim()
    if (!text) {
      setStatuses((current) => ({ ...current, [kind]: 'Please write a little something first.' }))
      return
    }
    if (records.length >= 999) {
      setStatuses((current) => ({ ...current, [kind]: 'This space is full for now. Please come back later.' }))
      return
    }

    const record = { kind, content: text, created_at: new Date().toISOString(), id: crypto.randomUUID?.() || String(Date.now()) }
    setRecords((current) => [record, ...current].slice(0, 999))
    const posted = await saveNetlify('whisperer-community', {
      kind,
      content: text,
      created_at: record.created_at,
    })
    setStatuses((current) => ({
      ...current,
      [kind]: posted
        ? 'Your words are shared. Thank you for trusting this room.'
        : 'Your words are saved on this device. Network sharing is unavailable.',
    }))
    if (kind === 'blog') setBlogText('')
    else setChatText('')
  }

  const submitSlogan = async (event) => {
    event.preventDefault()
    const text = sloganText.trim()
    if (!text) {
      setStatuses((current) => ({ ...current, slogan: 'Please write a little something first.' }))
      return
    }
    if (!sloganConsent) {
      setStatuses((current) => ({ ...current, slogan: 'Please confirm that this is your original wording.' }))
      return
    }
    const createdAt = new Date().toISOString()
    const posted = await saveNetlify('whisperer-slogans', {
      slogan: text,
      format: sloganFormat,
      created_at: createdAt,
    })
    setStatuses((current) => ({
      ...current,
      slogan: posted
        ? 'Your line was saved for review. Thank you.'
        : 'Your line was prepared for review, but network sharing is unavailable.',
    }))
    setSloganText('')
    setSloganConsent(false)
  }

  const communityItems = (kind) => records
    .filter((record) => record.kind === kind)
    .sort((a, b) => b.created_at.localeCompare(a.created_at))
    .slice(0, 40)

  const toggleBreathing = () => setBreathing((value) => !value)

  return (
    <div className="whisperer-page">
      <header className="whisperer-header" id="top">
        <nav className="whisperer-nav" aria-label="Main navigation">
          <Link className="whisperer-brand" to="/">Whisperer <em>by Willow</em></Link>
          <div className="whisperer-nav-links">
            <a href="#about">Perspective</a>
            <a href="#community">Community</a>
            <a href="#pause">Pause</a>
            <a className="whisperer-support-link" href="#support">Find support <span aria-hidden="true">↗</span></a>
          </div>
        </nav>
      </header>

      <main>
        <section className="whisperer-hero" aria-labelledby="whisperer-hero-title">
          <p className="whisperer-eyebrow">A quiet place for what is real</p>
          <h1 id="whisperer-hero-title">Some feelings need <em>a place to land.</em></h1>
          <p className="whisperer-lede">Not every honest thought needs an audience. Some only need enough room to become visible, without judgment or expectation.</p>
          <div className="whisperer-actions">
            <a className="whisperer-button" href="#community">Enter the room <span aria-hidden="true">↗</span></a>
            <a className="whisperer-text-link" href="#merch">Offer a line</a>
          </div>
        </section>

        <section className="whisperer-section whisperer-about" id="about" aria-labelledby="whisperer-about-title">
          <p className="whisperer-eyebrow">01 / Perspective</p>
          <h2 id="whisperer-about-title">Care begins quietly. <em>In attention, in honesty, in staying.</em></h2>
        </section>

        <section className="whisperer-section" id="everyday-care" aria-labelledby="care-title">
          <div className="whisperer-section-heading">
            <p className="whisperer-eyebrow">02 / Everyday care</p>
            <div><h2 id="care-title">Small practices. Real steadiness.</h2><p>There is no perfect way to care for yourself. Begin where you are, with what is possible.</p></div>
          </div>
          <div className="whisperer-care-grid">
            <article><span>01 / Notice</span><h3>Turn toward</h3><p>Name what is present without making it a flaw. "I am tired" or "I am uncertain" is enough.</p></article>
            <article><span>02 / Connect</span><h3>Let someone in</h3><p>A short message or a quiet walk can make a difficult day feel less singular.</p></article>
            <article><span>03 / Receive</span><h3>Accept support</h3><p>Reach outward before the burden becomes a crisis. Support is not a performance of strength.</p></article>
          </div>
        </section>

        <section className="whisperer-section whisperer-community" id="community" aria-labelledby="community-title">
          <div className="whisperer-section-heading">
            <p className="whisperer-eyebrow">03 / Community</p>
            <div><h2 id="community-title">You are not the only one.</h2><p>Leave a longer reflection or a shorter note. Reading quietly counts, too.</p></div>
          </div>
          <div className="whisperer-community-grid">
            <article className="whisperer-community-panel">
              <h3>Community notes</h3>
              <p>For the full sentence, the unfinished thought, the thing carried for too long.</p>
              <div className="whisperer-entry-list" aria-live="polite">
                {communityItems('blog').length ? communityItems('blog').map((record) => (
                  <article className="whisperer-entry" key={record.id}><small>Anonymous · {new Date(record.created_at).toLocaleDateString()}</small><div>{record.content}</div></article>
                )) : <p className="whisperer-empty">No words here yet. There is room for the first.</p>}
              </div>
              <form onSubmit={(event) => submitCommunity(event, 'blog')}>
                <label htmlFor="blog-text">Anonymous note</label>
                <textarea id="blog-text" maxLength={1200} rows={5} required value={blogText} onChange={(event) => setBlogText(event.target.value)} placeholder="Write what is present…" />
                <button className="whisperer-button whisperer-form-button" type="submit">Share quietly</button>
                <p className="whisperer-status" role="status">{statuses.blog || ''}</p>
              </form>
            </article>
            <article className="whisperer-community-panel">
              <h3>Open conversation</h3>
              <p>A simple shared message board. It is not private or live chat.</p>
              <div className="whisperer-entry-list" aria-live="polite">
                {communityItems('chat').length ? communityItems('chat').map((record) => (
                  <article className="whisperer-entry" key={record.id}><small>Anonymous · {new Date(record.created_at).toLocaleDateString()}</small><div>{record.content}</div></article>
                )) : <p className="whisperer-empty">No messages here yet. One sentence is enough.</p>}
              </div>
              <form onSubmit={(event) => submitCommunity(event, 'chat')}>
                <label htmlFor="chat-text">Your message</label>
                <textarea id="chat-text" maxLength={280} rows={3} required value={chatText} onChange={(event) => setChatText(event.target.value)} placeholder="One sentence is enough." />
                <button className="whisperer-button whisperer-form-button" type="submit">Post message</button>
                <p className="whisperer-status" role="status">{statuses.chat || ''}</p>
              </form>
            </article>
          </div>
          <aside className="whisperer-guidelines" aria-labelledby="guidelines-title">
            <h3 id="guidelines-title">Before you share</h3>
            <ul><li>Speak from your experience. Do not diagnose or pressure another person.</li><li>Do not post hate, harassment, threats, graphic detail, or identifying information.</li><li>Posts are anonymous, not private. Avoid details that could identify anyone.</li></ul>
            <p>This room is not a substitute for professional or crisis care. In immediate danger, contact your local emergency number.</p>
          </aside>
        </section>

        <section className="whisperer-section whisperer-merch" id="merch" aria-labelledby="merch-title">
          <div className="whisperer-merch-copy">
            <p className="whisperer-eyebrow">04 / Words worth carrying</p>
            <h2 id="merch-title">A line that might stay.</h2>
            <p>Offer words that could meet someone in an ordinary moment. Some truths do not need more than a few syllables.</p>
            <ol><li>Write an original line, up to 100 characters.</li><li>Choose where you imagine it living.</li><li>Submit it for review. Printing is not guaranteed.</li></ol>
          </div>
          <form className="whisperer-merch-form" onSubmit={submitSlogan}>
            <label htmlFor="slogan-text">Your line</label>
            <input id="slogan-text" maxLength={100} required value={sloganText} onChange={(event) => setSloganText(event.target.value)} placeholder="A little less alone, perhaps." />
            <label htmlFor="slogan-format">Where might it live?</label>
            <select id="slogan-format" value={sloganFormat} onChange={(event) => setSloganFormat(event.target.value)}><option>T-shirt</option><option>Mug</option><option>Other object</option></select>
            <label className="whisperer-checkbox"><input type="checkbox" checked={sloganConsent} onChange={(event) => setSloganConsent(event.target.checked)} required /><span>This is my original wording. It may be reviewed for printing and will not appear in the community feed.</span></label>
            <p className="whisperer-form-note">No contact details are collected. Please avoid personal information.</p>
            <button className="whisperer-button whisperer-form-button" type="submit">Submit for review</button>
            <p className="whisperer-status" role="status">{statuses.slogan || ''}</p>
          </form>
        </section>

        <section className="whisperer-pause" id="pause" aria-labelledby="pause-title">
          <div className="whisperer-pause-copy">
            <p className="whisperer-eyebrow">05 / A moment for yourself</p>
            <h2 id="pause-title">One breath is enough.</h2>
            <p>Follow the circle if it feels comfortable. Stop at any point and breathe in whatever way feels right.</p>
            <button className="whisperer-button" type="button" aria-pressed={breathing} onClick={toggleBreathing}>{breathing ? 'Pause breathing guide' : 'Begin breathing pause'}</button>
          </div>
          <div className="whisperer-breath-stage">
            <div className={`whisperer-breath-circle${inhaling ? ' is-expanding' : ''}`} aria-live="off">
              <span className="whisperer-breath-label">{breathing ? (inhaling ? 'Breathe in' : 'Breathe out') : 'Be here'}</span>
              <span className="whisperer-breath-sub">{breathing ? 'slowly, for 4 seconds' : 'at your own pace'}</span>
            </div>
            <span className="whisperer-breath-status" role="status">{breathing ? (inhaling ? 'Inhale gently.' : 'Exhale gently.') : 'Ready when you are'}</span>
          </div>
        </section>

        <section className="whisperer-section whisperer-support" id="support" aria-labelledby="support-title">
          <div className="whisperer-support-heading">
            <p className="whisperer-eyebrow">06 / Ways to be there</p>
            <h2 id="support-title">Care is a conversation.</h2>
            <p>Whether you are looking after yourself or someone else, you do not need every right word.</p>
          </div>
          <div className="whisperer-accordion">
            <details><summary>How can I check in with myself?</summary><p>Ask, "What do I need right now?" It might be rest, food, movement, quiet, or company. Revisit the question later, too.</p></details>
            <details><summary>What can I say to someone who is struggling?</summary><p>Keep it simple: "I am here to listen," or "Would you like company?" Let them lead and avoid rushing toward a solution.</p></details>
            <details><summary>When should I seek additional support?</summary><p>If difficult feelings persist or affect daily life, reach for a trusted person, mental health professional, or local service.</p></details>
            <details><summary>What if I need help right now?</summary><p>If there is immediate danger, contact local emergency support. For urgent emotional support, contact a crisis line or local helpline.</p></details>
          </div>
        </section>

        <section className="whisperer-resource" aria-labelledby="resource-title">
          <div><p className="whisperer-eyebrow">You are not alone</p><h2 id="resource-title">Support is worth reaching for.</h2><p>This space offers general awareness, not professional care. In immediate danger, contact your local emergency number.</p></div>
          <a className="whisperer-button" href="https://findahelpline.com/" target="_blank" rel="noopener noreferrer">Find a local helpline <span aria-hidden="true">↗</span></a>
        </section>
      </main>

      <footer className="whisperer-footer">
        <Link className="whisperer-brand" to="/">Whisperer <em>by Willow</em></Link>
        <nav aria-label="Footer navigation"><a href="#about">Perspective</a><a href="#everyday-care">Everyday care</a><a href="#support">Support</a></nav>
        <p>Your experience matters. You do not have to carry it alone.</p>
      </footer>
    </div>
  )
}
