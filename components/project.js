class Projects extends HTMLElement {
  connectedCallback() {
    const projectList = [
      {
        title: "Paint pot mixer",
        description: "It is a paint bucket with ingredients that can get mixed based on the ingrdients it posesses.",
        image: "../assets/images/paint_mixer.png",
        url: "https://stijnsepter.github.io/paint_mixer/",
        tech: ["javascript", "DOM", "CSS", "HTML"]
      },
      {
        title: "Bubble Juggle",
        description: "I joint in Spain the 2025 Mallaga game jam and made this game in only 48 hours with a amazing team",
        image: "../assets/images/bubble_juggle.png",
        url: "https://stijnsepter.github.io/game-jam/",
        tech: ["Unity", "javascript", "audio-recording"]
      },
      {
        title: "Portfolio",
        description: "Here you can see the portfolio you are now on how it is made and how I made this project",
        image: "../assets/images/portfolio.png",
        url: "https://github.com/StijnSepter/portfolio_dom",
        tech: ["javascript", "DOM", "HTML", "CSS"]
      },
      // Add more projects here easily!
    ];

    const projectsHTML = projectList.map(project => `
      <div class="project_card">
        <div class="project_img">
          <img src="${project.image}" alt="${project.title}" />
        </div>
        <div class="project_info">
          <h5>${project.title}</h5>
          <p>${project.description}</p>
          <div class="tech_stack">
            ${project.tech.map(t => `<span class="tech_badge">${t}</span>`).join('')}
          </div>
          <a href="${project.url}" target="_blank" class="project_link">
            View project <i class="fa fa-external-link"></i>
          </a>
        </div>
      </div>
    `).join('');

    this.innerHTML = `
      <section class="projects_section" id="projects">
        <div class="container">
          <div class="heading_container">
            <h2>A few <span>projects</span></h2>
            <p>Here are some of my best projects from the past two years.</p>
          </div>
          <div class="projects_grid">
            ${projectsHTML}
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('app-projects', Projects);