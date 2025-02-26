document.getElementById("getJoke").addEventListener("click", function() {
    fetch("https://icanhazdadjoke.com/", {
        headers: {
            "Accept": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("jokeText").textContent = data.joke;
    })
    .catch(error => console.error("Error:", error));
});

document.body.addEventListener("mousemove", function(event) {
    const x = (event.clientX - window.innerWidth / 2) / window.innerWidth;
    const y = (event.clientY - window.innerHeight / 2) / window.innerHeight;
    document.body.style.backgroundPosition = `${50 + x * 30}% ${50 + y * 30}%`;
});
