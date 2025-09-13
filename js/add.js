document.addEventListener("DOMContentLoaded", () => {
  const tvShowNameInput = document.getElementById("tvShowName");
  const addTvShowBtn = document.getElementById("addTvShowBtn");
  const messageDisplay = document.getElementById("messageDisplay");

  //  EVENT
  addTvShowBtn.addEventListener("click", () => {
    const tvShowName = tvShowNameInput.value.trim();
    messageDisplay.style.display = "none";
    messageDisplay.classList.remove("success", "error");

    // empty
    if (tvShowName === "") {
      messageDisplay.textContent = "TV Show Name cannot be empty.";
      messageDisplay.classList.add("error");
      // regex
    } else if (/^[0-2\W]/.test(tvShowName)) {
      messageDisplay.textContent = "Invalid TV Show name.";
      messageDisplay.classList.add("error");
      // add success
    } else {
      messageDisplay.textContent = "TV Show Name has been added";
      messageDisplay.classList.add("success");
      tvShowNameInput.value = "";
    }

    messageDisplay.style.display = "block";
  });
});
