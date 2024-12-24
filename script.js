// Functie om over te schakelen naar de desktopversie
function switchToDesktop() {
    window.location.href = "desktop.html"; // Verander dit naar de juiste desktop URL
} 

function searchArticles() {
    const query = document.getElementById('search').value.toLowerCase();
    // Logica om artikelen te filteren op basis van de zoekopdracht
    console.log("Zoeken naar:", query);
} 

function postComment() {
    const comment = document.getElementById('comment').value;
    const commentSection = document.getElementById('comment-section');
    const newComment = document.createElement('p');
    newComment.textContent = comment;
    commentSection.appendChild(newComment);
    document.getElementById('comment').value = ''; // Leeg het tekstvak
} 

function subscribe() {
    const email = document.querySelector('.newsletter input').value;
    console.log("Ingeschreven met:", email);
    // Logica om het e-mailadres op te slaan
} 

function submitFeedback() {
    const feedback = document.querySelector('.feedback textarea').value;
    console.log("Feedback ontvangen:", feedback);
    // Logica om feedback op te slaan
} 

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
} 

function submitPoll() {
    const form = document.getElementById('poll-form');
    const selected = form.poll.value;
    document.getElementById('poll-result').innerText = `Je stem is geregistreerd voor: ${selected}`;
} 

function editProfile() {
    const newName = prompt("Voer je nieuwe naam in:");
    document.getElementById('user-name').innerText = newName;
} 

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
} 
