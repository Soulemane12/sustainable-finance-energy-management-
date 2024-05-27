document.addEventListener('DOMContentLoaded', () => {
    function fetchCourses() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { title: 'Introduction to Sustainability', description: 'Learn the basics of sustainable living.', link: 'https://example.com/course1' },
                    { title: 'Advanced Climate Tech', description: 'Explore advanced technologies for climate solutions.', link: 'https://example.com/course2' },
                    { title: 'Green Finance 101', description: 'Understand the principles of green finance.', link: 'https://example.com/course3' },
                    { title: 'Renewable Energy Sources', description: 'Discover various renewable energy sources.', link: 'https://example.com/course4' },
                    { title: 'Sustainable Agriculture', description: 'Learn about sustainable agricultural practices.', link: 'https://example.com/course5' }
                ]);
            }, 1000);
        });
    }

    function renderCourses(courses) {
        const coursesContainer = document.getElementById('courses');
        courses.forEach(course => {
            const courseCard = document.createElement('div');
            courseCard.className = 'course-card';
            courseCard.innerHTML = `
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <a href="${course.link}" target="_blank">Start Learning</a>
            `;
            coursesContainer.appendChild(courseCard);
        });
    }

    fetchCourses().then(courses => {
        renderCourses(courses);
    });
});
