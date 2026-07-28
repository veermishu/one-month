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

  // records: tap to "play" (only one spinning at a time)
  const records = document.querySelectorAll(".record");
  records.forEach((rec) => {
    const statusEl = rec.querySelector(".record-status");
    if (statusEl) statusEl.dataset.idle = statusEl.textContent;
    rec.addEventListener("click", () => {
      const wasPlaying = rec.classList.contains("is-playing");
      records.forEach((r) => {
        r.classList.remove("is-playing");
        const s = r.querySelector(".record-status");
        if (s) s.textContent = s.dataset.idle;
      });
      if (!wasPlaying) {
        rec.classList.add("is-playing");
        if (statusEl) statusEl.textContent = "♪ playing — tap again to relive";
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
