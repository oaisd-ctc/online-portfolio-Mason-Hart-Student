const navItems = document.querySelectorAll('.Navbar > h2');
const masonsPortfolio = document.querySelector('.MasonsPortfolio');
const experience = document.querySelector('.Experience');
const certifications = document.querySelector('.Certifications');
const aboutme = document.querySelector('.Aboutme');

/**
 * Sets the display of the MasonsPortfolio, Experience, Certifications, and Aboutme
 * divs to block, none, none, and none, respectively.
 */

function toHome() {
    const text = document.querySelector('.home')
    text.style.textDecoration = 'underline';
    text.style.color = 'rgb(100, 100, 222)';
    masonsPortfolio.style.display = 'block';
    experience.style.display = 'none';
    certifications.style.display = 'none';
    aboutme.style.display = 'none';
}
function toExperience() {
    const text2 = document.querySelector('.exp')
    text2.style.textDecoration = 'underline';
    text2.style.color = 'rgb(100, 100, 222)';
    masonsPortfolio.style.display = 'none';
    experience.style.display = 'block';
    certifications.style.display = 'none';
    aboutme.style.display = 'none';
}
function toCertifications() {
    const text3 = document.querySelector('.cert');
    text3.style.textDecoration = 'underline';
    text3.style.color = 'rgb(100, 100, 222)';
    masonsPortfolio.style.display = 'none';
    experience.style.display = 'none';
    certifications.style.display = 'block';
    aboutme.style.display = 'none';
}
function toAbout() {
    const text4 = document.querySelector('.about')
    text4.style.textDecoration = 'underline';
    text4.style.color = 'rgb(100, 100, 222)';
    masonsPortfolio.style.display = 'none';
    experience.style.display = 'none';
    certifications.style.display = 'none';
    aboutme.style.display = 'block';
}

