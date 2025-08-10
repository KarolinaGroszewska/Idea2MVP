// Sample data: mood -> array of ideas
const ideas = {
  happy: [
    "Build a compliment generator",
    "Create a multiplayer trivia game",
    "Design a fun emoji-based chat app"
  ],
  sad: [
    "Make a minimal habit tracker",
    "Build a one-click recipe app",
    "Create a calming music player"
  ],
  curious: [
    "Make a random Wikipedia fact viewer",
    "Build an interactive coding puzzle",
    "Create a visual explainers site"
  ],
  excited: [
    "Build a collaborative whiteboard app",
    "Make a hackathon team finder",
    "Create a gamified fitness tracker"
  ]
};

document.getElementById("get-ideas").addEventListener("click", () => {
  const mood = document.getElementById("mood").value;
  const resultsSection = document.getElementById("results");

  resultsSection.innerHTML = ""; // clear old results

  if (mood && ideas[mood]) {
    ideas[mood].forEach(project => {
      const div = document.createElement("div");
      div.className = "idea";
      div.textContent = project;
      resultsSection.appendChild(div);
    });
  } else {
    resultsSection.textContent = "Please select a mood to see ideas.";
  }
});
