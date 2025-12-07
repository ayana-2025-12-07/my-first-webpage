window.addEventListener('DOMContentLoaded', function () {
    alert('Веб-бет сәтті жүктелді!');

    const changeTextButton = document.getElementById('changeTextButton');
    const introText = document.getElementById('intro-text');

    changeTextButton.addEventListener('click', function () {
        introText.textContent = 'Мәтін JavaScript көмегімен өзгертілді. ' +
            'Бұл динамикалық веб-бет мысалы болып табылады.';
    });

    const form = document.getElementById('feedbackForm');
    const nameInput = document.getElementById('nameInput');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Браузердің әдеттегі жіберуін тоқтатамыз

        const value = nameInput.value.trim();

        if (value === '') {
            alert('Қате: Атыңызды енгізуіңіз керек!');
        } else {
            alert('Рахмет, ' + value + '! Форма сәтті жіберілді.');
            // Қаласаң, осы жерге form.reset(); қосуға болады
        }
    });
});
