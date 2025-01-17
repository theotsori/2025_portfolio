export function renderAbout() {
    const about = document.getElementById("about");

    if (about) {
        about!.innerHTML = `
        <div class="about-container">
                <div class="image-section">
                    <img src="/src/images/me.jpeg" alt="About Image">
                </div>
                <div class="text-section">
                    <h3><i class="fa-solid fa-book-open"></i> About Theodore</h3>
                    <h1>Full-stack engineer (Python, JavaScript, C) with a business background. Excels at translating complex concepts into user-friendly solutions and applying agile project management methodologies.</h1>
                    <p>Software Engineer | Accounting Associate</p>
                </div>
            </div>
        `;
    }
}