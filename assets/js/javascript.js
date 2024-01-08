function openLoginForm() {
    document.getElementById('overlay').style.display = 'flex';
}

function closeLoginForm() {
    document.getElementById('overlay').style.display = 'none';
}

function goBack() {
    document.getElementById('overlay').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    const hamburgerIcon = document.getElementById('humburger-icon');
    const navBar = document.querySelector('.nav-bar');

    hamburgerIcon.addEventListener('click', function () {
        navBar.classList.toggle('active');
    });
});

 

 