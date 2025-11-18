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

  // TOC interactions
  const tocLinks = Array.from(document.querySelectorAll(".pologen-toc-link"));
  const headingTargets = tocLinks
    .map((link) => {
      const id = link.getAttribute("href")?.replace("#", "");
      if (!id) return null;
      const heading = document.getElementById(id);
      return heading ? { link, heading } : null;
    })
    .filter(Boolean);

  tocLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      const target = document.querySelector(href);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  if ("IntersectionObserver" in window && headingTargets.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          const activeLink = tocLinks.find((l) => l.getAttribute("href") === `#${id}`);
          if (activeLink && entry.isIntersecting) {
            tocLinks.forEach((l) => l.classList.remove("text-white", "font-semibold"));
            activeLink.classList.add("text-white", "font-semibold");
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0.1 }
    );
    headingTargets.forEach(({ heading }) => observer.observe(heading));
  }
});
