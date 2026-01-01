document.addEventListener("DOMContentLoaded", () => {
  const tvShowNameInput = document.getElementById("tvShowName");
  const tvShowGenreInput = document.getElementById("tvShowGenre");
  const tvShowEpisodesInput = document.getElementById("tvShowEpisodes");
  const tvShowRatingInput = document.getElementById("tvShowRating");
  const tvShowScheduleInput = document.getElementById("tvShowSchedule");
  const tvShowDescriptionInput = document.getElementById("tvShowDescription");
  const tvShowImageInput = document.getElementById("tvShowImage");
  const addTvShowBtn = document.getElementById("addTvShowBtn");
  const messageDisplay = document.getElementById("messageDisplay");
  const cardHeader = document.querySelector(".card-header");

  // Check for edit mode
  const urlParams = new URLSearchParams(window.location.search);
  const editIndex = urlParams.get("edit");
  let tvShows = JSON.parse(localStorage.getItem("tvShows")) || [];

  if (editIndex !== null && tvShows[editIndex]) {
    const showToEdit = tvShows[editIndex];
    tvShowNameInput.value = showToEdit.name;
    tvShowGenreInput.value = showToEdit.genre;
    tvShowEpisodesInput.value = showToEdit.episodes;
    tvShowRatingInput.value = showToEdit.rating || "";
    tvShowScheduleInput.value = showToEdit.schedule || "";
    tvShowDescriptionInput.value = showToEdit.description || "";
    
    addTvShowBtn.textContent = "Update";
    cardHeader.textContent = "EDIT TV SHOW";
  }

  addTvShowBtn.addEventListener("click", () => {
    const name = tvShowNameInput.value.trim();
    const genre = tvShowGenreInput.value;
    const episodes = tvShowEpisodesInput.value;
    const rating = tvShowRatingInput.value;
    const schedule = tvShowScheduleInput.value;
    const description = tvShowDescriptionInput.value;
    const imageFile = tvShowImageInput.files[0];

    messageDisplay.style.display = "none";
    messageDisplay.classList.remove("success", "error");

    // Validation: Image is required only for new shows, optional for updates if not changing
    if (name === "" || episodes === "" || rating === "" || schedule === "" || description === "") {
      messageDisplay.textContent = "Please fill in all text fields";
      messageDisplay.classList.add("error");
      messageDisplay.style.display = "block";
      return;
    }

    if (editIndex === null && !imageFile) {
       messageDisplay.textContent = "Please select an image";
       messageDisplay.classList.add("error");
       messageDisplay.style.display = "block";
       return;
    }

    const saveShow = (imageBase64) => {
      const showData = {
        name,
        genre,
        episodes,
        rating,
        schedule,
        description,
        image: imageBase64 || (editIndex !== null ? tvShows[editIndex].image : "")
      };

      if (editIndex !== null) {
        tvShows[editIndex] = showData;
        messageDisplay.textContent = "TV Show updated successfully!";
      } else {
        tvShows.push(showData);
        messageDisplay.textContent = "TV Show added successfully!";
      }

      localStorage.setItem("tvShows", JSON.stringify(tvShows));
      
      messageDisplay.classList.add("success");
      messageDisplay.style.display = "block";

      // Redirect after a short delay
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1500);
    };

    if (imageFile) {
      const reader = new FileReader();
      reader.onload = function(event) {
        saveShow(event.target.result);
      };
      reader.readAsDataURL(imageFile);
    } else {
      saveShow(null); // Keep existing image
    }
  });
});
