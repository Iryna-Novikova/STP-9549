document.querySelectorAll(".faq-header").forEach(header => {
  header.addEventListener("click", () => {
    const icon = header.querySelector(".icon-faq");
    const answer = header.nextElementSibling;

    const isOpen = answer.classList.contains("open");

    // Закриваємо всі
    document.querySelectorAll(".faq-answer").forEach(a => a.classList.remove("open"));
    document.querySelectorAll(".icon-faq").forEach(i => i.classList.remove("open"));

    if (!isOpen) {
      answer.classList.add("open");
      icon.classList.add("open");
    }
  });
});