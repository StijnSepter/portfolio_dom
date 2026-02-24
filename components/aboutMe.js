class AboutMe extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section class="about_section layout_padding">
        <div class="container">
          <div class="heading_container heading_center">
            <h2>About <span>Me</span></h2>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="img-box">
                <img src="../assets/images/fotoStijn.jpeg" alt="image" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="detail-box" id="about_me">
                <h3>hey, I am Stijn Septer</h3>
                <p>
                  Hello, my name is Stijn Septer, and I am a back-end web developer. You may have seen that the front-end of this website is minimal and that is because I experience way more joy from working on the backend of a website. This is why I made this portfolio in Django and saved all of the data in the project and in the slideshow in de Django database. I know that doesn’t really make any sense for a portfolio, but it was fun challenge. For every project, I like to find a new challenge and to improve my skills that way. 
                </p>
                <p>
                  Another small problem was that it is difficult to host a Django project for many servers. So, that is why I decided to get a raspberry pi to host my website. This wasn’t the eased option absolutely not when I look back at it, but I did learn a lot of ends enjoyed the challenge. Hopefully you like my projects. If you want to see the code behind my projects, you can always check my GitHub downbelow.
                </p>
                <a href="https://github.com/StijnSepter" target="blank">
                  My GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
    </section>
    `;
  }
}

customElements.define("app-aboutme", AboutMe);
