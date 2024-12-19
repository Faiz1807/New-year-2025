// Логика для отображения пожеланий
const presents = document.querySelectorAll('.present');
const messageBox = document.getElementById('message');

// Сделаем подарки интерактивными
presents.forEach(present => {
    present.addEventListener('click', () => {
        const message = present.getAttribute('data-message');
        messageBox.innerText = message; // Отобразить текст пожелания
        present.style.visibility = 'hidden'; // Скрыть подарок после клика
    });
});

// Функция для создания снежинки
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄️';
    snowflake.style.left = Math.random() * window.innerWidth + 'px'; // Случайная позиция по горизонтали
    snowflake.style.animationDuration = Math.random() * 3 + 5 + 's'; // Разная скорость падения
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px'; // Разный размер снежинок
    document.getElementById('snow-container').appendChild(snowflake);

    // Удаление снежинки после завершения анимации
    setTimeout(() => {
        snowflake.remove();
    }, 8000);
}

// Генерация снежинок каждые 200 миллисекунд
setInterval(createSnowflake, 200);