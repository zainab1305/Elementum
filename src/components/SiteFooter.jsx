export default function SiteFooter({ footerLinks }) {
  return (
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
  )
}
