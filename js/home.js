

// image collage blur

const collageImages = [...document.querySelectorAll('.collage-img')]

collageImages.map((item, i) => {
    item.addEventListener('mouseover', () => {
        collageImages.map((image, index) => {
            if (index != i) {
                image.style.filter = 'blur(10px)';
                item.style.zIndex = 2;
            }
        })
    })

    item.addEventListener('mouseleave', () => {
        collageImages.map((image, index) => {
            image.style = null;
        })
    })
})

// get product functions
let productId = null; 
const getProducts = (tag) => {
    return fetch('/get-products', {
        method: 'post',
        headers: new Headers({ 'Content-Type': 'applcation/json' }),
        body: JSON.stringify({ tag: tag })
    })
        .then(res => res.json())
        .then(data => {
            return data
        })
}



const createProductCards = (data, title, ele) => {
    let container = document.querySelector(ele);
    container.innerHTML += ` 
    <h1 class="section-title">${title}</h1>
    <div class="product-container">
        ${createCards(data)}
    </div> 
    `;
}

const createCards = data => {
    let cards = '';

    data.forEach(item => {
        if (item.id != productId) {
            cards += `
        <div class="product-card">
        <img src="${item.image}" onclick="location.href = '/products/${item.id}'" class="product-img" alt="">
        <p class="product-name">${item.name} ➡</p>
    </div> 
        `
        }
    })

    return cards;
}
