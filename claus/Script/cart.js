var pflanzen = [{
    name: "Süße Duftblüte",
    image: "https://www.blumenbuero.de/sites/default/files/styles/slideshow/public/osmanthus_16_tvdm_november_equalise_mr.jpg?itok=fv74hqdh",
    preis: 55.00,
    qtty: 1
},
{
    name: "Farn",
    image: "https://www.blumenbuero.de/sites/default/files/online_cabin_1c9a5999_1200x900.jpg",
    preis: 20.00,
    qtty: 1
},
{
    name: "Sommerflieder",
    image: "https://www.gartenversandhaus.de/$WS/chrestensen/websale8_shop-chrestensen/produkte/medien/bilder/normal/Sommerflieder-Trio-_-P607543.jpg",
    preis: 35.00,
    qtty: 1
}];

for (let val of pflanzen) {
    document.getElementsByClassName("products")[0].innerHTML += `<div class="product col-12 col-md-6 col-lg-4 text-center fw-bold">
    <p class="product-title h3 m-3">${val.name}</p>
    <img class="product-image" src="${val.image}" width="200" height="200">
    <div class="product-details">
        <p class="product-price h4 m-3">${val.preis} €</p>
        <button class="btn btn-success product-button" type="button">IN DEN EINKAUFSWAGEN</button>
    </div>
    </div>`
};

let btns = document.getElementsByClassName("product-button");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        addToEinkaufswagen(pflanzen[i], i);
    }); 
};


var einkaufswagen =[];

function addToEinkaufswagen(pflanze, index) {
    // einkaufswagen.push(pflanze);
    // console.table(einkaufswagen);
    if (cart.length == 0) {
        einkaufswagen.push(pflanze);
    } else if (einkaufswagen.find((val) => val.name == pflanze.name)) {
        pflanze.qtty++;
    } else {
        einkaufswagen.push(pflanze);
    };
    console.table(einkaufswagen);
    createRows();
    total();
};

function createRows() {
    var result = "";
    for (let val of einkaufswagen) {
        result += `  
            <div class="cart-row row d-flex">
                <div class="cart-item col-6 my-3 ">
                    <img class="cart-item-image" src="${val.image}" width="100" height="100">
                    <span class="cart-item-title h5 ">${val.name}</span>
                </div>

                <span class="cart-price col-3 h4 my-3">${val.preis} €</span>

                <div class="cart-qtty-action col-3 d-flex">            
                    <i class="minus fa fa-minus-circle my-auto" ></i>            
                    <div class="cart-quantity p-4 h4">${val.qtty}</div>            
                    <i class="plus fa fa-plus-circle my-auto"></i>        
                    <button class="del btn btn-danger rounded-circle  my-auto ms-3 fw-bold" type="button"> X </button>            
                </div>

            </div>
        `;
    };
    document.getElementById("cart-items").innerHTML = result;

    let plus = document.getElementsByClassName("plus");

    for (let i = 0; i < plus.length; i++) {
        plus[1].addEventListener("click", function() {
            plusQtty(i)
            total();
        })
    }
};

function plusQtty(i) {
    einkaufswagen[i].qtty++;
    document.getElementsByClassName("cart-quantity")[i].innerHTML = einkaufswagen[i].qtty;
};

function total() {
    let total = 0;
    for (let val of einkaufswagen) {
        total = total + (val.preis * val.qtty);
    };
    document.getElementById("price").innerHTML = total.toFixed(2) + " €";
};

