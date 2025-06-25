document.querySelectorAll("[data-faq-header]").forEach(header => {
  header.addEventListener("click", () => {
    const item = header.closest("[data-faq-item]");
    const answer = item.querySelector("[data-faq-answer]");
    const icon = header.querySelector(".icon-faq");

    const isOpen = answer.classList.contains("open");

       document.querySelectorAll("[data-faq-answer]").forEach(a => a.classList.remove("open"));
    document.querySelectorAll(".icon-faq").forEach(i => i.classList.remove("open"));

       if (!isOpen) {
      answer.classList.add("open");
      icon.classList.add("open");
    }
  });
});