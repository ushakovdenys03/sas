const checkbox = document.querySelector("#theme-toggle");

checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark", checkbox.checked);

    // Сохраняем выбор темы
    localStorage.setItem("theme", checkbox.checked ? "dark" : "light");
});

// Загружаем тему при старте
if (localStorage.getItem("theme") === "dark") {
    checkbox.checked = true;
    document.body.classList.add("dark");
}
