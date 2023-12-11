function toggleAudio() {
    var audio = document.getElementById('audioPlayer');

    // Check if the audio is currently paused or ended
    if (audio.paused || audio.ended) {
        audio.play();
    } else {
        audio.pause();
    }
}


// Add an event listener to the form for the submit event
document.getElementById('contactForm').addEventListener('submit', function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Create a new FormData object from the form
    var formData = new FormData(this);

    // Use the Fetch API to send the form data to the server
    fetch('your-server-endpoint', {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Assuming the server returns JSON, adjust accordingly
    })
    .then(data => {
        // Handle the successful response from the server
        console.log('Success:', data);
    })
    .catch(error => {
        // Handle errors
        console.error('Error:', error);
    });
});