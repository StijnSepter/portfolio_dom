class Slider extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section class="hero_slider">
        <div class="hero_container">
            
            <div class="hero_left">
            <div class="profile_box">
                <img src="../assets/images/fotoStijn.jpeg" alt="Stijn Septer" class="profile_img" />
                <h1>Stijn <br><span>Septer</span></h1>
            </div>
            </div>

            <div class="hero_right">
            <div class="slide_content active" data-slide="0">
                <h3>Welcome</h3>
                <p>Welcome to my portfolio. Here you can find my projects and info. Check my <a href="https://github.com/StijnSepter">GitHub</a> and <a href="#">LinkedIn</a>.</p>
            </div>

            <div class="slide_content" data-slide="1">
                <h3>Hobbies</h3>
                <p>I love to game, but I'll always choose socializing and sports first. I played field hockey for 11 years and tennis for 4.</p>
            </div>

            <div class="slide_content" data-slide="2">
                <h3>fun facts</h3>
                <p>I'm Dutch and a passionate traveler. </p>
            </div>

            <div class="slider_nav">
                <button class="nav_dot active" data-index="0"></button>
                <button class="nav_dot" data-index="1"></button>
                <button class="nav_dot" data-index="2"></button>
            </div>

        </div>
    </section>
    `;
    window.switchSlide = function (index) {
      const slides = document.querySelectorAll(".slide_content");
      const dots = document.querySelectorAll(".nav_dot");

      if (slides.length === 0 || dots.length === 0) return;

      // Remove active classes
      slides.forEach((s) => s.classList.remove("active"));
      dots.forEach((d) => d.classList.remove("active"));

      // Add active classes
      slides[index].classList.add("active");
      dots[index].classList.add("active");
    };

    // 2. The Event Listener (Wait for the DOM to load)
    document.addEventListener("click", function (event) {
      // Check if the clicked element is a nav_dot
      if (event.target.classList.contains("nav_dot")) {
        const index = event.target.getAttribute("data-index");
        window.switchSlide(index);
      }
    });
  }
}

customElements.define("app-slider", Slider);
