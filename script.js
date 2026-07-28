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
});
