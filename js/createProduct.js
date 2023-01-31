const createProduct = (data) => {
    let productContainer = document.querySelector('.product-container');
    productContainer.innerHTML += ` 
    <div class="product-card">
    <button class="btn edit-btn" onclick="location.href = '/add-product/${data.id}'"><img src="images/edit.png" alt=""></button>
    <button class="btn open-btn" onclick="location.href = '/products/${data.id}'"><img src="images/open.png" alt=""></button>
    <button class="btn delete-btn" onclick="deleteItem('${data.id}')><img src="images/delete.png" alt=""></button>
    <img src="${data.image}" class="product-img" alt="">
    <p class="product-name">${data.tags[0]}</p>
</div>
`;
}

const deleteItem = (id) => {
    fetch('/delete-product', {
        method: 'post',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify({id: id})
    }).then(res => res.json())
    .then(data => {
        //process data
        if(data == 'success'){
            location.reload();
        } else{
            showAlert('some error occured');
        }
    })
}