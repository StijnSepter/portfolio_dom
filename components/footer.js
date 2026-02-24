class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section class="info_section">
        <div class="footer_container">
            
            <div class="footer_column">
            <h4>Address</h4>
            <nav class="contact_links">
                <a href="https://maps.google.com" target="_blank">
                <i class="fa fa-map-marker"></i> <span>Location</span>
                </a>
                <a href="tel:0657987711">
                <i class="fa fa-phone"></i> <span>+06 57987711</span>
                </a>
                <a href="mailto:stijnsepter@gmail.com">
                <i class="fa fa-envelope"></i> <span>stijnsepter@gmail.com</span>
                </a>
            </nav>
            <div class="info_social">
                <a href="https://linkedin.com/..." target="_blank"><i class="fa fa-linkedin"></i></a>
                <a href="https://github.com/StijnSepter" target="_blank"><i class="fa-brands fa-github"></i></a>
            </div>
            </div>

            <div class="footer_column">
            <h4>Information</h4>
            <p>
                I focus on back-end logic and efficient systems. Check my GitHub for the code behind my projects.
            </p>
            </div>

            <div class="footer_column">
            <h4>Links</h4>
            <nav class="info_links">
                <a href="#about_me">About</a>
                <a href="https://github.com/StijnSepter">GitHub</a>
                <a href="mailto:stijnsepter@gmail.com">Email</a>
            </nav>
            </div>

            <div class="footer_column">
            <h4>Get in Touch</h4>
            <p>Want to collaborate?</p>
            <a href="mailto:stijnsepter@gmail.com" class="contactButton">Contact Me</a>
            </div>

        </div>
    </section>

    <footer class="footer_section">
        <div class="container">
            <p>
            &copy; <span id="displayYear"></span> All Rights Reserved By
            <a href="https://github.com/StijnSepter">Stijn Septer</a>
            </p>
        </div>
    </footer>
    `;
  }
}

customElements.define("app-footer", Footer);
