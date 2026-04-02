export default function Navbar() {
    return (
        <header className="topbar">
            <div className="brand">Elementum</div>
            <nav>
                <a href="#">Home</a>
                <a href="#">Studio</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
                <a href="#">FAQs ▾</a>
            </nav>
            <button className="menu-button" aria-label="Open menu">
                <span></span>
                <span></span>
            </button>
        </header>
    )
}
