// Логика для отображения пожеланий
const presents = document.querySelectorAll('.present');
const messageBox = document.getElementById('message');

// Добавляем обработчик на все подарки
presents.forEach(present => {
    present.addEventListener('click', () => {
        const message = present.getAttribute('data-message');

        // Если это последний подарок, открыть видео на YouTube
        if (present.id === 'video-link') {
            window.location.href = 'https://youtu.be/QJsLiE5CV4c'; // Ссылка на видео
        } else {
            messageBox.innerText = message; // Отобразить текст пожелания
            present.style.visibility = 'hidden'; // Скрыть подарок после клика
        }
    });
});