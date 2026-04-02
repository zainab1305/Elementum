export default function TestimonialSection({ testimonialFaces, underlineImg, quote }) {
  return (
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
        <blockquote>{quote}</blockquote>
      </div>
    </section>
  )
}
