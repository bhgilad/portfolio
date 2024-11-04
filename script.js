const projects = [
    { name: "פרויקט 1", description: "תיאור קצר לפרויקט 1", url: "./projects/01/index.html" },
    { name: "פרויקט 2", description: "תיאור קצר לפרויקט 2", url: "./projects/project2/index.html" },
    // ניתן להוסיף עוד פרויקטים בקלות
];

const portfolioSection = document.getElementById('portfolio');

projects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');

    projectDiv.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <a href="${project.url}">לפרטים נוספים</a>
    `;

    portfolioSection.appendChild(projectDiv);
});
