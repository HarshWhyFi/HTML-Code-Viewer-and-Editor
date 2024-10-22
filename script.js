// JavaScript code for the live code editor functionality
document.addEventListener('DOMContentLoaded', function () {
    const htmlCode = document.getElementById('htmlCode');
    const cssCode = document.getElementById('cssCode');
    const jsCode = document.getElementById('jsCode');
    const preview = document.getElementById('preview');
    const saveButton = document.getElementById('saveButton');
    const projectsContainer = document.getElementById('projectsContainer');
    const fullscreenButton = document.getElementById('fullscreenButton');

    function updatePreview() {
        const html = htmlCode.value;
        const css = cssCode.value;
        const js = jsCode.value;

        const iframeContent = `
            <html>
                <head>
                    <style>${css}</style>
                </head>
                <body>${html}
                    <script>${js}<\/script>
                </body>
            </html>
        `;

        const blob = new Blob([iframeContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        preview.src = url;
    }

    htmlCode.addEventListener('input', updatePreview);
    cssCode.addEventListener('input', updatePreview);
    jsCode.addEventListener('input', updatePreview);

    saveButton.addEventListener('click', function () {
        const projectName = prompt('Enter a name for your project:');
        if (projectName) {
            const savedProject = document.createElement('div');
            savedProject.textContent = projectName;
            projectsContainer.appendChild(savedProject);
        }
    });

    fullscreenButton.addEventListener('click', function () {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            document.documentElement.requestFullscreen();
        }
    });
});
