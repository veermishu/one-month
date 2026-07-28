document.addEventListener("DOMContentLoaded", () => {
  const entries = document.querySelectorAll(".entry");

  if (!("IntersectionObserver" in window)) {
    entries.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (items) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          item.target.classList.add("is-visible");
          io.unobserve(item.target);
        }
      });
    },
    { threshold: 0.18, rootMargin: "0px 0px -60px 0px" }
  );

  entries.forEach((el) => io.observe(el));

  // records: tap to expand a real Spotify player (accordion, lazy-loaded)
  const recordWraps = document.querySelectorAll(".record-wrap");
  recordWraps.forEach((wrap) => {
    const rec = wrap.querySelector(".record");
    const player = wrap.querySelector(".record-player");
    const statusEl = rec.querySelector(".record-status");
    if (statusEl) statusEl.dataset.idle = statusEl.textContent;

    rec.addEventListener("click", () => {
      const wasOpen = wrap.classList.contains("is-open");

      // close all, reset text/animation
      recordWraps.forEach((w) => {
        w.classList.remove("is-open");
        const r = w.querySelector(".record");
        const s = r.querySelector(".record-status");
        r.classList.remove("is-playing");
        r.setAttribute("aria-expanded", "false");
        if (s) s.textContent = s.dataset.idle;
      });

      if (!wasOpen) {
        wrap.classList.add("is-open");
        rec.classList.add("is-playing");
        rec.setAttribute("aria-expanded", "true");
        if (statusEl) statusEl.textContent = "♪ playing — tap again to close";
        if (player && !player.dataset.loaded) {
          const iframe = document.createElement("iframe");
          iframe.src = player.dataset.embedSrc;
          iframe.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
          iframe.loading = "lazy";
          iframe.title = rec.querySelector(".record-name").textContent + " on Spotify";
          player.appendChild(iframe);
          player.dataset.loaded = "true";
        }
        player.classList.add("is-open");
      } else if (player) {
        player.classList.remove("is-open");
      }
    });
  });

  // ask card: either button confirms, because the answer was always yes
  const askButtons = document.querySelectorAll(".ask-btn");
  const askResult = document.querySelector(".ask-result");
  askButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (askResult) askResult.textContent = "she said yes. again. 💜";
    });
  });
});
