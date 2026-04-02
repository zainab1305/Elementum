import Navbar from './components/Navbar'
import Hero from './components/Hero'
import tomorrowImg from './assets/tomorrow.png'
import underlineImg from './assets/underline.png'
import see from "./assets/see.png"

const offerItems = [
  {
    label: 'Office of our help project...',
    title: 'Collaborative & partnership',
  },
  {
    label: 'The larger US & more... digital movements',
    title: 'We talk about our weight',
  },
  {
    label: 'Direct feedback / contact... social digital',
    title: 'Piloting digital confidence',
  },
]

const footerLinks = {
  company: ['Home', 'Studio', 'Service', 'Blog'],
  terms: ['Privacy Policy', 'Terms & Conditions', 'Explore', 'Accessibility'],
  social: ['Instagram', 'LinkedIn', 'Youtube', 'Twitter'],
}

function App() {
  return (
    <div className="page">
      <Navbar />

      <main className="main-content-area">
        <svg className="bg-wavy-line" preserveAspectRatio="none" viewBox="0 0 1440 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1430,200 C1300,600 600,0 400,600 C200,1200 -100,500 -300,500" stroke="#F16666" strokeWidth="4" />
        </svg>

        <Hero />

        <section className="intro-card">
          <div className="red-splash-bg"></div>
          <div className="intro-copy">
            <h2>
              <span className="mark mark-yellow-underline">
                Tomorrow
                <img src={underlineImg} className="underline-img" alt="" aria-hidden="true" />
              </span> should<br />
              be better than <span className="mark mark-mint-badge">today</span>
            </h2>
            <p>
              We are a team of strategists, designers communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe.
            </p>
            <a href="#" className="inline-link" aria-label="Read more about our vision">
              Read more
            </a>
          </div>
          <div className="intro-image-wrap">
            <div className="shape-red-square"></div>
            <img src={tomorrowImg} alt="Team meeting" />
          </div>
        </section>

        <section className="intro-card reverse">
          <div className="intro-copy">
            <h2>
              <span className="mark mark-mint-badge">See</span> how we can<br />
              help you <span className="mark mark-yellow-underline">
                progress
                <img src={underlineImg} className="underline-img" alt="" aria-hidden="true" />
              </span>
            </h2>
            <p>
              We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design, digital, comms and social research.
            </p>
            <a href="#" className="inline-link" aria-label="Read more about our services">
              Read more
            </a>
          </div>
          <div className="intro-image-wrap">
            <div className="shape-red-triangle top-left"></div>
            <div className="shape-red-triangle bottom-right"></div>
            <img src={see} alt="Team presentation" />
          </div>
        </section>

        <section className="offers-section">
          <h2>
            What <span className="mark mark-mint-badge">we can</span> <span className="mark mark-yellow-underline">
              offer
              <img src={underlineImg} className="underline-img" alt="" aria-hidden="true" />
            </span> you!
          </h2>
          <ul>
            {offerItems.map((item) => (
              <li key={item.title} className="offer-row">
                <p>{item.label}</p>
                <h3>{item.title}</h3>
                <span aria-hidden="true">→</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="testimonial-section">
          <h2>
            What our customer says <br />
            <span className="mark mark-yellow-underline">
              About Us
              <img src={underlineImg} className="underline-img" alt="" aria-hidden="true" />
            </span>
          </h2>

          <div className="testimonial-quote-wrap">
            <blockquote>
              Elementum delivered the site within the timeline as they requested. In the end, the client found a 50% increase in traffic within days since its launch. They also had an impressive ability to use technologies that the company hasn't used, which have also proved to be easy to use and reliable.
            </blockquote>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <section className="newsletter">
          <h2>Subscribe to our newsletter</h2>
          <p>To make your stay special and even more memorable</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address..." required aria-label="Email Address" />
            <button type="submit">Subscribe Now</button>
          </form>
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
            <h4>Contact</h4>
            <p>1498W Fulton st, STE 2D Chicago, IL 63867.</p>
            <p>+1(214) 36790100</p>
            <a href="mailto:info@elementum.com">info@elementum.com</a>
          </div>
        </section>

        <p className="copyright">©2023 Elementum. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
