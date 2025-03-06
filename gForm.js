document.getElementById("gForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Page reload hone se rokne ke liye

    let formData = new FormData(this);
    fetch("https://docs.google.com/forms/d/e/1FAIpQLSfY12h3yyHV7YFrHu1WRy2HR-JjNyOmJz0IMlvxanvNKtguqw/formResponse", {
        method: "POST",
        body: formData,
        mode: "no-cors"
    }).then(() => {
        document.getElementById("gForm").style.display = "none";
        document.getElementById("thankYouMessage").style.display = "block";
    }).catch(error => console.error("Error:", error));
});