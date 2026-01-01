// 1. Select the login button by its ID
const loginButton = document.getElementById("btn-login");

// 2. Add click event listener to the button
if (loginButton) {
  loginButton.addEventListener("click", function () {
    // 3. Redirect to login.html when the button is clicked
    window.location.href = "login.html";
  });
}

// Load selected show details
document.addEventListener("DOMContentLoaded", () => {
  const selectedShow = JSON.parse(localStorage.getItem("selectedShow"));
  const tvShows = JSON.parse(localStorage.getItem("tvShows")) || [];

  if (selectedShow) {
    const titleEl = document.getElementById("show-title");
    const imgEl = document.getElementById("detail-img");
    const episodesEl = document.getElementById("show-episodes");
    const ratingEl = document.getElementById("show-rating");
    const scheduleEl = document.getElementById("show-schedule");
    const descriptionEl = document.getElementById("show-description");
    
    // Hide hardcoded elements that shouldn't be there for dynamic shows
    const nextShowEl = document.querySelector(".next-show");
    const episodeMainEl = document.querySelector(".episode-main");
    if (nextShowEl) nextShowEl.style.display = "none";
    if (episodeMainEl) episodeMainEl.style.display = "none";

    if (titleEl) titleEl.innerHTML = `<b>${selectedShow.name}</b>`;
    if (imgEl) imgEl.src = selectedShow.image;
    if (episodesEl) episodesEl.textContent = `Episodes: ${selectedShow.episodes}`;
    if (ratingEl) ratingEl.innerHTML = `&#x2764 ${selectedShow.rating || "N/A"}`;
    if (scheduleEl) scheduleEl.innerHTML = `<i class="bi bi-calendar" aria-hidden="true"></i> ${selectedShow.schedule || "Schedule not available"}`;
    if (descriptionEl) descriptionEl.innerHTML = `<small class="text-muted">${selectedShow.description || "No description available."}</small>`;

    // Find index in tvShows array
    const showIndex = tvShows.findIndex(show => show.name === selectedShow.name);

    const editBtn = document.getElementById("editBtn");
    const deleteBtn = document.getElementById("deleteBtn");

    if (showIndex !== -1) {
      // Enable Edit/Delete for dynamic shows
      if (editBtn) {
        editBtn.addEventListener("click", () => {
          window.location.href = `add.html?edit=${showIndex}`;
        });
      }

      if (deleteBtn) {
        deleteBtn.addEventListener("click", () => {
          if (confirm("Are you sure you want to delete this show?")) {
            tvShows.splice(showIndex, 1);
            localStorage.setItem("tvShows", JSON.stringify(tvShows));
            alert("Show deleted successfully!");
            window.location.href = "index.html";
          }
        });
      }
    } else {
      // Disable or hide Edit/Delete for static shows (or handle differently)
      if (editBtn) editBtn.style.display = "none";
      if (deleteBtn) deleteBtn.style.display = "none";
    }

  } else {
    console.log("No show selected");
    // window.location.href = "index.html";
  }
});
