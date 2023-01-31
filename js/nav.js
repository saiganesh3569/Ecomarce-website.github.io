//navbar

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (scrollY >= 269) {
        navbar.classList.add('bg');
    } else {
        navbar.classList.remove('bg');
    }
})

const createNavbar = () => {
    let navbar = document.querySelector('.navbar');

    navbar.innerHTML += `
    <ul class="links-container">
    <li class="link-item"><a href="#" class="link active">Home</a></li>
    <li class="link-item"><a href="#" class="link">Product</a></li>
    <li class="link-item"><a href="#" class="link">About</a></li>
    <li class="link-item"><a href="#" class="link">Contact</a></li>
</ul>
<div class="user-interactions">
    <div class="search-box">
        <input type="text" class="search" placeholder="search item">
        <button class="search-btn"><img src="../images/search.png" alt=""></button>
    </div>
    <div class="cart">
        <img src="../images/cart (1).png" class="cart-icon" alt="">
        <span class="cart-item-count">00</span>
    </div>
    <div class="user">
        <img src="../images/user.png" class="user-icon" alt="">
        <div class="user-icon-popup">
            <p>LOGIN TO YOUR ACCOUNT</p>
            <a>LOGIN</a>
        </div>
    </div>
</div>`
}

createNavbar();

// user icon popup

let userIcon = document.querySelector('.user-icon');
let userPopupIcon = document.querySelector('.user-icon-popup');

userIcon.addEventListener('click', () => userPopupIcon.classList.toggle('active'))

let text = userPopupIcon.querySelector('p');
let actionBtn = userPopupIcon.querySelector('a');
let user = JSON.parse(sessionStorage.user || null);

if (user != null) { // user logged in
    text.innerHTML = `log in as, ${user.name}`;
    actionBtn.innerHTML = 'log out';
    actionBtn.addEventListener('click', () => logout());
} else {
    text.innerHTML = 'login to your account';
    actionBtn.innerHTML = 'login';
    actionBtn.addEventListener('click', () => location.href = '/login');
}

const logout = () => {
    sessionStorage.clear()
    location.reload();
}

// search box

let searchBtn = document.querySelector('.search-btn')
let searchBox = document.querySelector('.search');

searchBtn.addEventListener('click', () => {
    if(searchBox.value.length){
        location.href = `/search/${searchBox.value}`;
    }
})
