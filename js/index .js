// Load shows from localStorage
const storedShows = JSON.parse(localStorage.getItem("tvShows")) || [];
const cardContainer = document.getElementById("card-align");

if (storedShows.length > 0) {
  const newGroup = document.createElement("div");
  newGroup.className = "card-group gap-2";

  storedShows.forEach(show => {
    const card = document.createElement("div");
    card.className = "card";
    // Set data attributes for filtering
    card.setAttribute("data-genre", show.genre); 
    // For alphabet filter, use the first letter of the name
    card.setAttribute("data-name", show.name.charAt(0).toUpperCase());

    card.innerHTML = `
        <img src="${show.image}" class="card-img-top" alt="${show.name}">
        <div class="card-body">
          <p><b>${show.name}</b></p>
          <p>Episodes: ${show.episodes}</p>
        </div>
    `;
    newGroup.appendChild(card);
  });

  cardContainer.appendChild(newGroup);
}

// Function to handle card clicks
function handleCardClick(card) {
  const img = card.querySelector(".card-img-top");
  const title = card.querySelector(".card-body p b").textContent;
  const episodes = card.querySelector(".card-body p:nth-child(2)").textContent;
  const genre = card.getAttribute("data-genre");

  const showData = {
    name: title,
    image: img.src,
    episodes: episodes,
    genre: genre
  };

  localStorage.setItem("selectedShow", JSON.stringify(showData));
  window.location.href = "details.html";
}

// Add event listeners to all cards
const allCards = document.querySelectorAll(".card");
allCards.forEach(card => {
  card.addEventListener("click", () => handleCardClick(card));
  card.style.cursor = "pointer"; // Add pointer cursor to indicate clickable
});


const genreBtns = document.querySelectorAll(".genre-btn"); // select all genre buttons
const cards = document.querySelectorAll(".card"); // select all cards (including new ones)

genreBtns.forEach((btn) => { // loop through each genre button
  btn.addEventListener("click", () => { // add click event to button
    const genre = btn.getAttribute("data-genre"); // get genre from button
    cards.forEach((card) => { // loop through each card
      const cardGenres = card.getAttribute("data-genre").split(","); // get genres of card
      card.style.display = (cardGenres.includes(genre) || genre === "All") ? "flex" : "none"; // show or hide card (use flex to maintain layout)
    });
  });
});

const alphaBtns = document.querySelectorAll(".alpha-btn"); // select all alphabet buttons

alphaBtns.forEach((btn) => { // loop through each alphabet button
  btn.addEventListener("click", (e) => { // add click event to button
    e.preventDefault(); // Prevent default anchor behavior
    const letter = btn.textContent.trim(); // get letter from button
    cards.forEach((card) => { // loop through each card
      card.style.display = (card.getAttribute("data-name") === letter) ? "flex" : "none"; // show or hide card
    });
  });
});
