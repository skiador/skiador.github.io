document.addEventListener('DOMContentLoaded', function() {
    const projectList = document.getElementById('project-list');
    fetch('https://api.github.com/users/skiador/repos')
    .then(response => response.json())
    .then(data => {
        data.forEach(project => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = project.html_url;
            link.textContent = project.name;
            listItem.appendChild(link);
            projectList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error loading the projects:', error));
});

