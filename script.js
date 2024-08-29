window.onload = function() {
    const nama = prompt("Masukkan nama orang yang ulang tahun:");
    document.getElementById('nama').textContent = nama;

    const showMessageBtn = document.getElementById('showMessageBtn');

    showMessageBtn.addEventListener('click', () => {
        window.location.href = 'birthday-message.html';
    });

    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach(balloon => {
        balloon.addEventListener('animationiteration', () => {
            const randomDelay = Math.random() * 5;
            balloon.style.animationDelay = `${randomDelay}s`;
        });
    });
};
