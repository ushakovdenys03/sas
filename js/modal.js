// Все карточки меню и локации
const cards = document.querySelectorAll(".menu__content, .location__content, .chuvachki__content");

// Модальное окно
const modalWindow = document.querySelector(".modal-window");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");

// Кнопка закрытия
const closeModal = document.querySelector(".close-modal");

// Вешаем обработчик на каждую карточку
cards.forEach(card => {
    card.addEventListener("click", () => {

        // Берём данные из data-атрибутов
        const title = card.dataset.title;
        const text = card.dataset.text;
        const img = card.dataset.img;

        // Подставляем в модальное окно
        modalTitle.textContent = title;
        modalText.textContent = text;
        modalImg.src = img;

        // Показываем модалку
        modalWindow.classList.remove("is-delete");
    });
});

// Закрыть модалку
closeModal.addEventListener("click", () => {
    modalWindow.classList.add("is-delete");
});
