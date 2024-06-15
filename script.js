// Function to get device details
function getDeviceDetails() {
    return {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        colorDepth: window.screen.colorDepth
    };
}

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

    // Simulate an API call or some processing
    setTimeout(() => {
        // Store the details in sessionStorage to be retrieved in result.html
        const deviceDetails = getDeviceDetails();
        const loveDetails = {
            yourName: yourName,
            crushName: crushName,
            yearsKnown: yearsKnown,
            story: story,
            deviceDetails: deviceDetails
        };
        sessionStorage.setItem('loveDetails', JSON.stringify(loveDetails));
        window.location.href = 'result.html';
    }, 3000);
}

function displayResult() {
    const loveDetails = JSON.parse(sessionStorage.getItem('loveDetails'));
    if (loveDetails) {
        const loveMessage = `
            Patticheee.....

            P.S. All your info is saved in our database and will be sent to your friends and ${loveDetails.crushName}. 😂,  also no AI is involved in this....
        `;
        document.getElementById('loveMessage').innerHTML = loveMessage;
    }
}

// Call displayResult when the result.html page loads
if (window.location.pathname.includes('result.html')) {
    displayResult();
}
