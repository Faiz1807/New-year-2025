// Логика для отображения пожеланий
const presents = document.querySelectorAll('.present');
const messageBox = document.getElementById('message');
const videoContainer = document.getElementById('video-container');

// Добавляем обработчик на все подарки
presents.forEach(present => {
    present.addEventListener('click', () => {
        const message = present.getAttribute('data-message');

        // Если это последний подарок, показать видео
        if (present.id === 'video-link') {
            messageBox.innerText = message; // Отобразить текст "Переходи к праздничному видео!"
            videoContainer.style.display = 'block'; // Показать встроенное видео
        } else {
            messageBox.innerText = message; // Отобразить текст пожелания
            present.style.visibility = 'hidden'; // Скрыть подарок после клика
        }
    });
});