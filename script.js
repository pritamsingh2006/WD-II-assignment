// Selecting Elements from the DOM
const eventForm = document.getElementById("eventForm");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");
const eventDescription = document.getElementById("eventDescription");

const clearAllBtn = document.getElementById("clearAllBtn");
const addSampleBtn = document.getElementById("addSampleBtn");
const eventContainer = document.getElementById("eventContainer");

// 2 sample events for Add sample event data
let sampleEvent = [
    {
        title: "web dev",
        date: "4-6-2026",
        category: "workshop",
        description: "ahgs h adg ihai dgjabds"
    },
    {
        title: "web dev2",
        date: "4-7-2026",
        category: "conference",
        description: "ahgs dsfchjh adg ihai dgjabds"
    }
];

// Function to Create event card and store it inside a div
function createEventCard(data) {
    const card = document.createElement("div");
    card.className = "event-card"; // Make sure to style this in CSS

    card.innerHTML = `
        <h3>${data.title}</h3>
        <p><strong>Date:</strong> ${data.date}</p>
        <p><strong>Category:</strong> ${data.category}</p>
        <p>${data.description}</p>
    `;

    // Remove "No events" message if it exists
    if (eventContainer.innerHTML.includes("No events yet")) {
        eventContainer.innerHTML = "";
    }

    eventContainer.appendChild(card);
}

// Event Listener for Adding New Event via Form
eventForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Stop page refresh

    const newEvent = {
        title: eventTitle.value,
        date: eventDate.value,
        category: eventCategory.value,
        description: eventDescription.value
    };

    createEventCard(newEvent);
    eventForm.reset(); // Clear the form
});

// Event Listener for Add Sample Events button
addSampleBtn.addEventListener("click", () => {
    sampleEvent.forEach(event => {
        createEventCard(event);
    });
});

// Event Listener for Clear All button
clearAllBtn.addEventListener("click", () => {
    eventContainer.innerHTML = "No events yet. Add your first event!";
});