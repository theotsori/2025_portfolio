export function renderFooter() {
    const footer = document.getElementById("footer");

    if (footer) {
        footer.innerHTML = `
        <div class="footer-container">
            <!-- Social Media Links -->
            <div class="social-media">
                <p>Follow Me</p>
                <a href="https://www.linkedin.com/in/theotsori" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a href="https://www.facebook.com/theotsori" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <i class="fab fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/theotsori" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="https://twitter.com/theotsori" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="https://www.youtube.com/channel/theotsori" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <i class="fab fa-youtube"></i>
                </a>
            </div>

            <!-- Navigation Links -->
            <div class="links">
                <ul>
                    <li><a href="#projects" aria-label="View Projects">Projects</a></li>
                    <li><a href="#articles" aria-label="View Articles">Articles</a></li>
                    <li><a href="#buy-coffee" aria-label="Buy Me a Coffee">Buy me a coffee</a></li>
                    <li><a href="#shop" aria-label="Visit Shop">Shop</a></li>
                </ul>
            </div>

            <!-- Copyright Section -->
            <div class="copyright">
                <p>&copy; 2025 <a href="https://theotsori.com" aria-label="Visit TheoTsori's website">TheoTsori</a>. All rights reserved.</p>
            </div>

            <!-- Brand Links -->
            <div class="brand-links">
                <ul>
                    <li><a href="#about" aria-label="Learn About Me">About Me</a></li>
                    <li><a href="#products" aria-label="View My Products">My Products</a></li>
                    <li><a href="#schedule-consultation" aria-label="Schedule a Free Consultation"><i class="fas fa-phone"></i> Schedule a Free Consultation</a></li>
                    <li><a href="mailto:theotsori@example.com" aria-label="Email Me"><i class="fas fa-envelope"></i> Get Started</a></li>
                    <li><a href="#help" aria-label="Get Help">Help</a></li>
                </ul>
            </div>
        </div>`;
    }
}
