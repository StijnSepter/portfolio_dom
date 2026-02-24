class Header extends HTMLElement {

  connectedCallback(){
    this.innerHTML = `
      <header class="header_section" id="home">
        <nav class="custom_navbar">
          <a class="navbar-brand" href="#home">
            Stijn <span>Septer</span>
          </a>

          <button class="menu_toggle" id="menuToggle" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul class="nav_list" id="navList">
            <li><a href="#home" class="active">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about_me">About me</a></li>
            <li><a href="#some_skills">My skills</a></li>
          </ul>
        </nav>
      </header>
    `;

    const menuToggle = this.querySelector('#menuToggle');
    const navList = this.querySelector('#navList');

    // 3. Add the event listeners
    if (menuToggle && navList) {
      menuToggle.addEventListener('click', () => {
        navList.classList.toggle('show');
        menuToggle.classList.toggle('open');
      });

      // Close menu when a link is clicked
      this.querySelectorAll('.nav_list a').forEach(link => {
        link.addEventListener('click', () => {
          navList.classList.remove('show');
          menuToggle.classList.remove('open'); // Also reset the burger icon
        });
      });
    }

    function switchSlide(index) {
        // 1. Get all slides and dots
        const slides = document.querySelectorAll('.slide_content');
        const dots = document.querySelectorAll('.nav_dot');

        // 2. Remove active class from everyone
        slides.forEach(s => s.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));

        // 3. Add active class to the selected one
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }
  }
}

customElements.define('app-header', Header);