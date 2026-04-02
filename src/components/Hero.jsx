import face1 from '../assets/1.png'
import face2 from '../assets/2.png'
import face3 from '../assets/3.png'
import face4 from '../assets/4.png'
import face5 from '../assets/5.png'
import face6 from '../assets/6.png'
import face7 from '../assets/7.png'
import face8 from '../assets/8.png'
import underlineImg from '../assets/underline.png'

function HeroFace({ slot, src }) {
    return (
        <div className={`face-slot image-circle slot-${slot}`} >
            <img src={src} alt="" aria-hidden="true" />
        </div>
    )
}

export default function Hero() {
    return (
        <section className="hero-section">
            <svg className="left-decorative-lines" viewBox="0 0 150 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-50,60 C40,40 60,110 -20,130 C-90,150 30,220 -30,260" stroke="#191B1F" strokeWidth="4" />
                <path d="M-60,50 C50,30 70,120 -10,140 C-80,160 40,230 -20,270" stroke="#F16666" strokeWidth="4" />
            </svg>

            <div className="purple-hemisphere-bg" aria-hidden="true"></div>

            <div className="hero-title-container">
                <h1>
                    The <span className="mark mark-yellow-underline">
                        thinkers
                        <img src={underlineImg} className="underline-img" alt="" aria-hidden="true" />
                    </span> and<br />
                    doers were <span className="mark mark-pink-badge">changing</span><br />
                    the <span className="mark mark-mint-badge">status</span> Quo with
                </h1>
                <p>
                    We are a team of strategists, designers, communicators, researchers. Together,<br />
                    we believe that progress only happens when you refuse to play things safe.
                </p>
            </div>

            <div className="hero-faces-row" aria-hidden="true">
                <div className="face-group merging">
                    <HeroFace slot={1} src={face1} />
                    <HeroFace slot={2} src={face2} />
                </div>
                <div className="face-group separated">
                    <HeroFace slot={3} src={face3} />
                    <HeroFace slot={4} src={face4} />
                </div>
                <div className="face-group merging">
                    <HeroFace slot={5} src={face5} />
                    <HeroFace slot={6} src={face6} />
                </div>
                <div className="face-group separated">
                    <HeroFace slot={7} src={face7} />
                    <HeroFace slot={8} src={face8} />
                </div>
            </div>
        </section>
    )
}

