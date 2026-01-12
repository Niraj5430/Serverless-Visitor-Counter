let visitorCount = 0;

const elements = {
    visitorCounter: null,
    nameInput: null,
    greetingForm: null,
    greetingContainer: null,
    greetingMessage: null,
    submitBtn: null
};

// --------------------
// Initialize DOM elements
// --------------------
function initializeElements() {
    elements.visitorCounter = document.getElementById('visitorCounter');
    elements.nameInput = document.getElementById('nameInput');
    elements.greetingForm = document.getElementById('greetingForm');
    elements.greetingContainer = document.getElementById('greetingContainer');
    elements.greetingMessage = document.getElementById('greetingMessage');
    elements.submitBtn = document.getElementById('submitBtn');
}

// --------------------
// Fetch visitor count from AWS Lambda
// --------------------
async function getVisitorCount() {
    const LAMBDA_URL =
        "https://d7qtgwra4yak7rhswgfcdfzrea0avouq.lambda-url.ap-south-1.on.aws/";

    const response = await fetch(LAMBDA_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch visitor count");
    }

    const data = await response.json();

    // Support both: number OR { count: number }
    visitorCount = typeof data === "number" ? data : data.count;

    return visitorCount;
}

// --------------------
// Update visitor count UI
// --------------------
function updateVisitorDisplay(count) {
    const formattedCount = count.toLocaleString();
    elements.visitorCounter.textContent =
        `👀 Total Visitors: ${formattedCount}`;

    elements.visitorCounter.style.transform = 'scale(1.1)';
    setTimeout(() => {
        elements.visitorCounter.style.transform = 'scale(1)';
    }, 200);
}

// --------------------
// Handle greeting form submit
// --------------------
function handleSubmit(event) {
    event.preventDefault();

    const name = elements.nameInput.value.trim();

    if (name === '') {
        showInputError();
        return;
    }

    clearInputError();

    elements.greetingMessage.textContent =
        `Welcome, ${name}! 👋 Thanks for visiting.`;

    showGreeting();
}

// --------------------
// Input error helpers
// --------------------
function showInputError() {
    elements.nameInput.classList.add('error');
    elements.nameInput.focus();

    setTimeout(clearInputError, 2000);
}

function clearInputError() {
    elements.nameInput.classList.remove('error');
}

// --------------------
// Greeting display helpers
// --------------------
function showGreeting() {
    elements.greetingContainer.classList.add('active');
    elements.greetingContainer.style.animation = 'none';
    elements.greetingContainer.offsetHeight;
    elements.greetingContainer.style.animation =
        'fadeIn 0.5s ease-out';
}

function hideGreeting() {
    elements.greetingContainer.classList.remove('active');
}

// --------------------
// Event listeners
// --------------------
function setupEventListeners() {
    elements.greetingForm.addEventListener('submit', handleSubmit);

    elements.nameInput.addEventListener('input', function () {
        if (this.classList.contains('error')) {
            clearInputError();
        }
    });
}

// --------------------
// App initialization
// --------------------
async function initializeApp() {
    console.log("🚀 Greeting App Initialized");

    initializeElements();
    setupEventListeners();

    try {
        const count = await getVisitorCount();
        updateVisitorDisplay(count);
        console.log(`📊 Visitor count loaded: ${count}`);
    } catch (error) {
        console.error("❌ Visitor count error:", error);
        elements.visitorCounter.textContent =
            "👀 Total Visitors: Unable to load";
    }
}

document.addEventListener('DOMContentLoaded', initializeApp);
