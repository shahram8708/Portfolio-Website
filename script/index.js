const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function () {
    const top = window.scrollY;
    if (top >= 100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})
function setVisitCount() {
    var visitCount = parseInt(localStorage.getItem('visitCount')) || 0;
    visitCount++;
    localStorage.setItem('visitCount', visitCount);
    document.getElementById('visitCount').textContent = 'You Visits This Website : ' + visitCount + ' Time';
}

function displayLastUpdated() {
    var lastUpdatedElement = document.getElementById('lastUpdated');
    var lastUpdatedDate = new Date(document.lastModified);
    lastUpdatedElement.textContent = 'Last Updated: ' + lastUpdatedDate.toLocaleDateString();
}

document.addEventListener('DOMContentLoaded', function () {
    setVisitCount();
    displayLastUpdated();
});