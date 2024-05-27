function calculateLove() {
    document.getElementById('loading').style.display = 'block';
    document.getElementById('loveForm').style.display = 'none';

    setTimeout(() => {
        window.location.href = 'result.html';
    }, 3000);
}
