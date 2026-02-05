import { femaleData, maleData } from "./public/data.js";

// Define the function first
function showPoses(selectedGender) {
    const poses = (selectedGender === 'male') ? maleData : femaleData;
    const container = document.getElementById('pose-container');

    container.innerHTML = '';

    const randomIndex = Math.floor(Math.random() * poses.length);
    const selectedPose = poses[randomIndex];

    // Define a fallback image URL (using a professional placeholder service)
    // const fallbackImage = "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop";

    const card = `
    <div class="pose-card">
        <img src="${selectedPose.imageUrl}" alt="Pose Guide" onerror="this.src='https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500'">
    </div>
`;
    container.innerHTML = card;
}

function handleHomepage() {
    // Logic to handle homepage redirection or actions
    window.location.href = "index.html"; // Example: Redirect to index.html
}

// Attach listeners after the function is defined
document.getElementById('male-btn').addEventListener('click', () => showPoses('male'));
document.getElementById('female-btn').addEventListener('click', () => showPoses('female'));
document.getElementById('logo').addEventListener('click', handleHomepage);