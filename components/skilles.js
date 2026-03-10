class Skilles extends HTMLElement {
  connectedCallback() {

    const skillItems = [
      {
        title: "APIs, Postman",
        description:
          "Building APIs using Express with compination of Typescript en Javascript and then testing them with Postman",
        icon: '<i class="fa-brands fa-python"></i>',
      },
      {
        title: "JavaScript",
        description:
          "Creating interactive front-end components and handling DOM manipulation.",
        icon: '<i class="fa-brands fa-js"></i>',
      },
      {
        title: "Front-end",
        description:
          "I have a very good understanding about HTML and CSS to style a website",
        icon: '<i class="fa-solid fa-code"></i>',
      },
      {
        title: "UML",
        description:
          "I know how to use and create class diagram, activity diagram and sequence diagram",
        icon: '<i class="fa-solid fa-diagram-project"></i>',
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
