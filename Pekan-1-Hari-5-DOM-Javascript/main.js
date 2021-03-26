// Data
let items = [
    ['001', 'Keyboard Logitek', 60000, 'Keyboard yang mantap untuk kantoran', 'img/logitek.jpg'], 
    ['002', 'Keyboard MSI', 300000, 'Keyboard gaming MSI mekanik', 'img/msi.jpg'],
    ['003', 'Mouse Genius', 50000, 'Mouse Genius biar lebih pinter', 'img/genius.jpeg'],
    ['004', 'Mouse Jerry', 30000, 'Mouse yang disukai kucing', 'img/jerry.jpg']
];
let cartNumber = 0;

// Template
let UpdateTemplateBarang = (all_item) => {
    let HtmllistBarang = document.querySelector('#listBarang');
    HtmllistBarang.innerHTML = all_item.map((item) => {
        return `
        <div class ="col-4 mt-2"> 
        <div class="card" style="width: 18rem;">
            <img src="${item[4]}" class="card-img-top" height="200px" width="200px" alt="...">
            <div class="card-body">
                <h5 class="card-title" id="itemName">${item[1]}</h5>
                <p class="card-text" id="itemDesc">${item[3]}</p>
                <p class="card-text">Rp ${item[2]}</p>
                <a href="#" class="btn btn-primary" id="addCart">Tambahkan ke keranjang</a>
            </div>
        </div>
        </div>
        `;
    });
}

let UpdateTemplateCart = (nomor) => {
    let cart = document.getElementById("cart");
    cart.innerHTML = `<i class="fas fa-shopping-cart"></i>(${cartNumber})`;
}

// Action
let SearchBarang = (textInput, all_item) => {
    return all_item.filter((item) => {
        if (textInput === 'Keyboard' || textInput === 'Mouse') {
            return item[1].search(textInput) >= 0;
        } else {
            return false;
        }
    });
}

let TambahCart = () => {
    cartNumber += 1;
}

// Event
let form = document.getElementById("formItem");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let formInput = document.getElementById("keyword");
    let filtered_items = SearchBarang(formInput.value, items);
    UpdateTemplateBarang(filtered_items);
});

document.addEventListener("click", (event) => {
    // Event Delegation 
    // https://stackoverflow.com/questions/34896106/attach-event-to-dynamic-elements-in-javascript
    if(event.target && event.target.id== 'addCart'){
        TambahCart();
        UpdateTemplateCart(cartNumber);
    }
});

// Initialisasi
UpdateTemplateBarang(items);
