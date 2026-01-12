import { femaleData, maleData } from "./public/data.js";

// Define the function first
function showPoses(selectedGender) {
    const poses = (selectedGender === 'male') ? maleData : femaleData;
    const container = document.getElementById('pose-container');

    container.innerHTML = '';

    const randomIndex = Math.floor(Math.random() * poses.length);
    const selectedPose = poses[randomIndex];

    // Define a fallback image URL (using a professional placeholder service)
    const fallbackImage = "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop";

    const card = `
    <div class="pose-card">
        <img src="${selectedPose.imageUrl}" alt="Pose Guide" onerror="this.src='https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500'">
        <div class="info">
            <h3>${selectedPose.category} Pose</h3>
            <ul>
                ${selectedPose.tips.map(tip => `<li>${tip}</li>`).join('')}
            </ul>
        </div>
    </div>
`;
    container.innerHTML = card;
}

// Attach listeners after the function is defined
document.getElementById('male-btn').addEventListener('click', () => showPoses('male'));
document.getElementById('female-btn').addEventListener('click', () => showPoses('female'));

// Generate QR Code
new QRCode(document.getElementById("qrcode"), {
    text: "https://venkata-sanjeeva.github.io/pose-generator/",
    width: 150,
    height: 150
});