class Skilles extends HTMLElement {
  connectedCallback() {
    const skillItems = [
      {
        title: "Python & Django",
        description:
          "Building robust back-end systems and APIs. Experienced in ORM and database management.",
        icon: '<i class="fa-brands fa-python"></i>',
      },
      {
        title: "Database Management",
        description:
          "Designing schemas and managing data using PostgreSQL and SQLite.",
        icon: '<i class="fa-solid fa-database"></i>',
      },
      {
        title: "Hardware & Linux",
        description:
          "Hosting applications on Raspberry Pi and managing servers via terminal.",
        icon: '<i class="fa-brands fa-linux"></i>',
      },
      {
        title: "JavaScript",
        description:
          "Creating interactive front-end components and handling DOM manipulation.",
        icon: '<i class="fa-brands fa-js"></i>',
      },
    ];

    // 2. Generate the HTML for the grid
    const skillsHTML = skillItems
      .map(
        (skill) => `
      <div class="skill_box">
        <div class="icon_box">
          ${skill.icon}
        </div>
        <div class="detail_box">
          <h5>${skill.title}</h5>
          <p>${skill.description}</p>
        </div>
      </div>
    `,
      )
      .join("");

    // 3. Inject into component
    this.innerHTML = `
      <section class="skills_section">
        <div class="skills_container">
          <div class="heading_container">
            <h2>Some of my <span>Skills</span></h2>
          </div>
          <div class="skills_grid">
            ${skillsHTML}
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define("app-skilles", Skilles);
