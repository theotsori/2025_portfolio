import { renderAbout } from "./ts/about";
import { renderFooter } from "./ts/footer";

function initializeApp() {
    try {
        // Log the loading status for debugging purposes
        console.log("Initializing application...");

        // Ensure DOM is loaded before rendering components
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", () => {
                console.log("DOM fully loaded");
                safeRender(renderAbout, "About Section");
                safeRender(renderFooter, "Footer Section");
            });
        } else {
            console.log("DOM already loaded");
            safeRender(renderAbout, "About Section");
            safeRender(renderFooter, "Footer Section");
        }
    } catch (error) {
        console.error("An error occurred during initialization:", error);
    }
}

// Wrapper function for safe rendering
function safeRender(renderFn: Function, componentName: string) {
    try {
        renderFn();
        console.log(`${componentName} rendered successfully.`);
    } catch (error) {
        console.error(`Failed to render ${componentName}:`, error);
    }
}

initializeApp();
