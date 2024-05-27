function calculateLove() {
    const yourName = document.getElementById('yourName').value.trim();
    const crushName = document.getElementById('crushName').value.trim();
    const yearsKnown = document.getElementById('yearsKnown').value.trim();
    const story = document.getElementById('story').value.trim();

    if (yourName === '' || crushName === '' || yearsKnown === '' || story === '') {
        alert('Please fill in all fields.');
        return;
    }

    document.getElementById('loading').style.display = 'block';
    document.getElementById('loveForm').style.display = 'none';

    setTimeout(() => {
        window.location.href = 'result.html';
    }, 3000);
}
