const genreBtns = document.querySelectorAll(".genre-btn");
const cards = document.querySelectorAll(".card");

// genre button
genreBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const genre = btn.getAttribute("data-genre");
    cards.forEach((card) => {
      const cardGenres = card.getAttribute("data-genre").split(",");
      if (cardGenres.includes(genre) || genre === "All") {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

//  alphabet button
const alphaBtns = document.querySelectorAll(".alpha-btn");

alphaBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const letter = btn.textContent.trim();
    cards.forEach((card) => {
      if (card.getAttribute("data-name") === letter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
