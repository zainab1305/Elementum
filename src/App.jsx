import face1 from './assets/1.png'
import face3 from './assets/3.png'
import face6 from './assets/6.png'
import face8 from './assets/8.png'

const fallbackFaces = {
  2: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
  4: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
  5: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
  7: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80',
}

const heroFaceSlots = [
  { slot: 1, src: face1 },
  { slot: 2, src: fallbackFaces[2] },
  { slot: 3, src: face3 },
  { slot: 4, src: fallbackFaces[4] },
  { slot: 5, src: fallbackFaces[5] },
  { slot: 6, src: face6 },
  { slot: 7, src: fallbackFaces[7] },
  { slot: 8, src: face8 },
]

const offerItems = [
  {
    label: 'Office of multiple interest content',
    title: 'Collaborative & partnership',
  },
  {
    label: 'The hanger US Air force digital experimental',
    title: 'We talk about our weight',
  },
  {
    label: 'Delta faucet content, social, digital',
    title: 'Piloting digital confidence',
  },
]

const footerLinks = {
  company: ['Home', 'Studio', 'Service', 'Blog'],
  terms: ['Privacy Policy', 'Terms & Conditions', 'Explore', 'Accessibility'],
  social: ['Instagram', 'LinkedIn', 'Youtube', 'Twitter'],
}

function Mark({ tone, children }) {
  return <span className={`mark mark-${tone}`}>{children}</span>
}

function IntroCard({ title, body, image, reverse }) {
  return (
    <section className={`intro-card ${reverse ? 'reverse' : ''}`}>
      <div className="intro-copy">
        <h2>{title}</h2>
        <p>{body}</p>
        <a href="#" className="inline-link">
          Read more
        </a>
      </div>
      <div className="intro-image-wrap">
        <img src={image} alt="Team collaboration" />
      </div>
    </section>
  )
}

function OfferRow({ label, title }) {
  return (
    <li className="offer-row">
      <p>{label}</p>
      <h3>{title}</h3>
      <span aria-hidden="true">→</span>
    </li>
  )
}

function HeroFace({ slot, src }) {
  const fallbackPool = [face1, face3, face6, face8]
  const fallbackPoolIndex = (slot - 1) % fallbackPool.length
  const secondaryFallback = fallbackPool[fallbackPoolIndex]

  return (
    <img
      src={src}
      alt={`Team member ${slot}`}
      onError={(event) => {
        if (event.currentTarget.dataset.fallbackUsed === 'yes') {
          return
        }
        event.currentTarget.dataset.fallbackUsed = 'yes'
        event.currentTarget.src =
          fallbackFaces[slot] || secondaryFallback || fallbackFaces[2]
      }}
    />
  )
}

function App() {
  return (
    <div className="page">
      <header className="topbar">
        <p className="brand">Elementum</p>
        <nav>
          <a href="#">Home</a>
          <a href="#">Studio</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
          <a href="#">FAQs</a>
        </nav>
        <button className="menu-button" aria-label="Open menu">
          <span></span>
          <span></span>
        </button>
      </header>

      <main>
        <section className="hero-section">
          <h1>
            The <Mark tone="yellow">thinkers</Mark> and doers were changing the{' '}
            <Mark tone="pink">status</Mark> Quo with
          </h1>
          <p>
            We are a team of strategists, designers communicators, researchers.
            Together, we belive that progress only happens when you refuse to play
            things safe.
          </p>
          <div className="hero-faces" aria-label="Team members">
            {heroFaceSlots.map((face) => (
              <div key={face.slot} className={`face-slot slot-${face.slot}`}>
                <HeroFace slot={face.slot} src={face.src} />
              </div>
            ))}
          </div>
        </section>

        <IntroCard
          title={
            <>
              Tomorrow should be better than <Mark tone="green">today</Mark>
            </>
          }
          body="We are a team of strategists, designers communicators, researchers. Together, we belive that progress only happens when you refuse to play things safe."
          image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
        />

        <IntroCard
          reverse
          title={
            <>
              See how we can help you <Mark tone="green">progress</Mark>
            </>
          }
          body="We add a layer of fearless insights and action that allows changemakers to accelerate their progress in areas such as brand, digital comms and social research."
          image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
        />

        <section className="offers-section">
          <h2>
            What we <Mark tone="green">can</Mark> offer you!
          </h2>
          <ul>
            {offerItems.map((item) => (
              <OfferRow key={item.title} label={item.label} title={item.title} />
            ))}
          </ul>
        </section>

        <section className="testimonial-section">
          <h2>
            What our customer says <Mark tone="yellow">About Us</Mark>
          </h2>
          <blockquote>
            Elementum delivered the site with in the timeline as they requested.
            Inthe end, the client found a 50% increase in traffic with in days
            since its launch. They also had an impressive ability to use
            technologies that the company hasnt used, which have also proved to be
            easy to use and reliable.
          </blockquote>
          <div className="floating-faces">
            <img src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=160&q=80" alt="Customer 1" />
            <img src="https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=160&q=80" alt="Customer 2" />
            <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=160&q=80" alt="Customer 3" />
            <img src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=160&q=80" alt="Customer 4" />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <section className="newsletter">
          <h2>Subscribe to our newsletter</h2>
          <p>To make your stay special and even more memorable</p>
          <button>Subscribe Now</button>
        </section>

        <section className="footer-grid">
          <div>
            <h4>Company</h4>
            {footerLinks.company.map((item) => (
              <a key={item} href="#">
                {item}
              </a>
            ))}
          </div>
          <div>
            <h4>Terms & Policies</h4>
            {footerLinks.terms.map((item) => (
              <a key={item} href="#">
                {item}
              </a>
            ))}
          </div>
          <div>
            <h4>Follow Us</h4>
            {footerLinks.social.map((item) => (
              <a key={item} href="#">
                {item}
              </a>
            ))}
          </div>
          <div>
            <h4>Terms & Policies</h4>
            <p>1498W Fulton st, STE 2D Chico, 1L 63867.</p>
            <p>+1(214)36790100</p>
            <p>info@elementum.com</p>
          </div>
        </section>

        <p className="copyright">©2026 Elementum. All rights reserved</p>
      </footer>
    </div>
  )
}

export default App
