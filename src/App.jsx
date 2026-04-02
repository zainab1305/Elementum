import Navbar from './components/Navbar'
import Hero from './components/Hero'
import IntroSection from './components/IntroSection'
import OffersSection from './components/OffersSection'
import TestimonialSection from './components/TestimonialSection'
import SiteFooter from './components/SiteFooter'
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

const testimonialQuote =
  'Elementum delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used, which have also proved to be easy to use and reliable'

function App() {
  return (
    <div className="page">
      <Navbar />

      <main className="main-content-area">
        <Hero />

        <IntroSection
          background={<div className="red-splash-bg"></div>}
          title={
            <h2>
              <span className="mark mark-yellow-underline">
                Tomorrow
                <img src={underlineImg} className="underline-img" alt="" aria-hidden="true" />
              </span>{' '}
              should
              <br />
              be better than <span className="mark mark-mint-badge">today</span>
            </h2>
          }
          description="We are a team of strategists, designers, communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe."
          linkLabel="Read more"
          linkAriaLabel="Read more about our vision"
          imageSrc={tomorrowImg}
          imageAlt="Team meeting"
          shapes={<div className="shape-red-square"></div>}
        />

        <IntroSection
          reverse
          title={
            <h2>
              <span className="mark mark-mint-badge">See</span> how we can
              <br />
              help you{' '}
              <span className="mark mark-yellow-underline">
                progress
                <img src={underlineImg} className="underline-img" alt="" aria-hidden="true" />
              </span>
            </h2>
          }
          description="We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design, digital, comms and social research."
          linkLabel="Read more"
          linkAriaLabel="Read more about our services"
          imageSrc={seeImg}
          imageAlt="Team presentation"
          shapes={
            <>
              <div className="shape-red-triangle top-left"></div>
              <div className="shape-red-triangle bottom-right"></div>
            </>
          }
        />

        <OffersSection
          bgLine={bgLine}
          underlineImg={underlineImg}
          roundThingImg={roundThingImg}
          offerItems={offerItems}
        />

        <TestimonialSection
          testimonialFaces={testimonialFaces}
          underlineImg={underlineImg}
          quote={testimonialQuote}
        />
      </main>

      <SiteFooter footerLinks={footerLinks} />
    </div>
  )
}

export default App
