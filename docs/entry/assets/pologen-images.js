document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("pologen-image-overlay");
  const overlayImg = document.getElementById("pologen-image-overlay-img");
  const overlayClose = document.getElementById("pologen-image-overlay-close");

  const closeOverlay = () => {
    if (!overlay || !overlayImg) return;
    overlay.classList.add("hidden");
    overlay.classList.remove("flex");
    overlayImg.src = "";
    overlayImg.alt = "";
  };

  const openOverlay = (fullSrc, alt) => {
    if (!overlay || !overlayImg) return;
    overlayImg.src = fullSrc;
    overlayImg.alt = alt || "";
    overlay.classList.remove("hidden");
    overlay.classList.add("flex");
  };

  document.querySelectorAll(".pologen-image-thumb").forEach((el) => {
    el.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const fullSrc = el.getAttribute("data-full-src");
      const alt = el.getAttribute("data-alt") || "";
      if (!fullSrc) return;
      openOverlay(fullSrc, alt);
    });
  });

  overlay?.addEventListener("click", (event) => {
    if (event.target === overlay) {
      closeOverlay();
    }
  });

  overlayClose?.addEventListener("click", (event) => {
    event.preventDefault();
    closeOverlay();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeOverlay();
    }
  });
});
