import Navbar from './components/Navbar'
import Hero from './components/Hero'
import tomorrowImg from './assets/tomorrow.png'
import underlineImg from './assets/underline.png'
import seeImg from './assets/See.png'
import bgLine from './assets/BG line.png'
import roundThingImg from './assets/round thing.png'
import l1Img from './assets/L1.png'
import l2Img from './assets/L2.png'
import l3Img from './assets/L3.png'
import l4Img from './assets/L4.png'
import r1Img from './assets/R1.png'
import r2Img from './assets/R2.png'
import r3Img from './assets/R3.png'
import r4Img from './assets/R4.png'

const offerItems = [
  {
    label: 'Office of multiple\ninterest content',
    title: 'Collaborative & partnership',
  },
  {
    label: 'The hanger US Air force\ndigital experimental',
    title: 'We talk about our weight',
  },
  {
    label: 'Delta faucet content,\nsocial, digital',
    title: 'Piloting digital confidence',
  },
]

const footerLinks = {
  company: ['Home', 'Studio', 'Service', 'Blog'],
  terms: ['Privacy Policy', 'Terms & Conditions', 'Explore', 'Accessibility'],
  social: ['Instagram', 'LinkedIn', 'Youtube', 'Twitter'],
}

const testimonialFaces = [
  { className: 'testimonial-face l1', src: l1Img, alt: '' },
  { className: 'testimonial-face l2', src: l2Img, alt: '' },
  { className: 'testimonial-face l3', src: l3Img, alt: '' },
  { className: 'testimonial-face l4', src: l4Img, alt: '' },
  { className: 'testimonial-face r1', src: r1Img, alt: '' },
  { className: 'testimonial-face r2', src: r2Img, alt: '' },
  { className: 'testimonial-face r3', src: r3Img, alt: '' },
  { className: 'testimonial-face r4', src: r4Img, alt: '' },
]

function App() {
  return (
    <div className="page">
      <Navbar />

      <main className="main-content-area">
        {/* <img src={bgLine} className="bg-line bg-line-one" alt="" aria-hidden="true" />
        <img src={bgLine} className="bg-line bg-line-two" alt="" aria-hidden="true" /> */}

        <Hero />

        <section className="intro-card">
          <div className="red-splash-bg"></div>
          <div className="intro-copy">
            <h2>
              <span className="mark mark-yellow-underline">
                Tomorrow
                <img src={underlineImg} className="underline-img" alt="" aria-hidden="true" />
              </span>{' '}
              should
              <br />
              be better than <span className="mark mark-mint-badge">today</span>
            </h2>
            <p>
              We are a team of strategists, designers, communicators, researchers. Together, we believe that progress only
              happens when you refuse to play things safe.
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
              <span className="mark mark-mint-badge">See</span> how we can
              <br />
              help you{' '}
              <span className="mark mark-yellow-underline">
                progress
                <img src={underlineImg} className="underline-img" alt="" aria-hidden="true" />
              </span>
            </h2>
            <p>
              We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas
              such as brand, design, digital, comms and social research.
            </p>
            <a href="#" className="inline-link" aria-label="Read more about our services">
              Read more
            </a>
          </div>
          <div className="intro-image-wrap">
            <div className="shape-red-triangle top-left"></div>
            <div className="shape-red-triangle bottom-right"></div>
            <img src={seeImg} alt="Team presentation" />
          </div>
        </section>

        <section className="offers-section">
          <img src={bgLine} className="bg-line bg-line-offers" alt="" aria-hidden="true" />
          <h2 className="offers-title">
            <span className="offers-title-line-one">
              What we <span className="mark mark-mint-badge">can</span>
            </span>
            <span className="offers-title-line-two">
              <span className="mark mark-yellow-underline">
                offer
                <img src={underlineImg} className="underline-img" alt="" aria-hidden="true" />
              </span>{' '}
              you
            </span>
          </h2>

          <ul>
            {offerItems.map((item, index) => (
              <li key={item.title} className={`offer-row${index === 2 ? ' offer-row-accent' : ''}`}>
                <p>{item.label}</p>
                <div className="offer-title-wrap">
                  <h3>{item.title}</h3>
                  {index === 2 ? (
                    <img
                      src={roundThingImg}
                      alt=""
                      aria-hidden="true"
                      className="offer-round-thing"
                    />
                  ) : null}
                </div>
                <span aria-hidden="true">&rarr;</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="testimonial-section">
          {testimonialFaces.map((face) => (
            <img
              key={face.className}
              src={face.src}
              alt={face.alt}
              aria-hidden="true"
              className={face.className}
            />
          ))}

          <h2 className="testimonial-title">
            <span className="testimonial-title-line">
              <span className="mark mark-mint-badge">What</span> our customer
            </span>
            <span className="testimonial-title-line">
              says{' '}
              <span className="mark mark-yellow-underline">
                About Us
                <img src={underlineImg} className="underline-img" alt="" aria-hidden="true" />
              </span>
            </span>
          </h2>

          <div className="testimonial-quote-wrap">
            <blockquote>
              Elementum delivered the site with inthe timeline as they requested. Inthe end, the client found a 50%
              increase in traffic with in days since its launch. They also had an impressive ability to use
              technologies that the company hasn`t used, which have also proved to be easy to use and reliable
            </blockquote>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <section className="newsletter">
          <div className="newsletter-doodle" aria-hidden="true"></div>
          <div className="newsletter-purple-shape" aria-hidden="true"></div>
          <h2>
            Subscribe to
            <br />
            our newsletter
          </h2>
          <p>To make your stay special and even more memorable</p>
          <button type="button" className="newsletter-cta">Subscribe Now</button>
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
            <p>1498w Fulton ste, STE<br />2D Chicago, IL 63867.</p>
            <p>(123) 456789000</p>
            <a href="mailto:info@elementum.com">info@elementum.com</a>
          </div>
        </section>

        <p className="copyright">©2023 Elementum. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
