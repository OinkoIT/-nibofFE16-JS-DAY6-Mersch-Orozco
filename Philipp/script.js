const productList = JSON.parse(products);

var cart = []

const listContainer = document.querySelector(".container-products");
const cartBtns = document.getElementsByClassName("cart-add");

function addToCart (product) {
  console.log(cart)
  console.log(product.name)
  let item = cart.find((val) => val.name == product.name);
  console.log(item)
  if (item) {
      item.quantity++;
  } else {
      cart.push(product)
  }
  console.log(cart)
  printRows();
  total();
}

const printCards = () => {
  listContainer.innerHTML = "";

  productList.forEach((product) => {
    listContainer.innerHTML += ` <div class="col-lg-4 col-md-6 col-sm-12 my-3">
      <div class="card shadow">
        <img src="${product.image}" class="card-img-top cover-fit" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p>${product.description}</p>
          <hr>
          <div class="row justify-content-end gap-2 px-3">
            <button class="col-auto btn btn-info cart-add">Add to cart</button>
          </div>
        </div>
      </div>
    </div>`;
  });
  for (let i = 0; i < cartBtns.length; i++) {
    cartBtns[i].addEventListener("click", function() {
        addToCart(productList[i]);
    })
  }
};

const incrementQty = (i) => {
  cart[i].quantity++;
  document.getElementsByClassName("cart-quantity")[i].innerHTML = cart[i].quantity;
}

const decrementQty = (i) => {
  if (cart[i].quantity == 1) {
    cart.splice(i, 1);
    printRows();
  } else {
    cart[i].quantity -= 1;
    document.getElementsByClassName("cart-quantity")[i].innerHTML = cart[i].quantity;
  }
}

const deleteItem = (i) => {
  cart[i].quantity = 1;
  cart.splice(i, 1);
  printRows();
}

/*
function addEvtListeners () {
  for (let i = 0; i < cart.length; i++) {
    plus[i].addEventListener("click", function() {
        incrementQty(i);
        total();
    });
    minus[i].addEventListener("click", function() {
        decrementQty(i);
        total();
    });
    del[i].addEventListener("click", function() {
        deleteItem(i);
        total();
    });
  }
}
*/
function printRows() {
  var result = "";

  for (let product of cart) {
    result += `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <div class="ms-2 me-auto">
        <div class="fw-bold product">${product.name}</div>
        </div>
        Quantity:
        <span class="badge bg-primary rounded-pill ms-2 me-3 cart-quantity">${product.quantity}</span>
        <span class="btn btn-info rounded-pill plus me-2">+</span>
        <span class="btn btn-info rounded-pill minus">-</span>
        <button class="del btn btn-danger rounded-circle  my-auto ms-3 fw-bold" type="button"> X </button>            
      </li>
      `;
  }
  document.getElementById("cart-items").innerHTML = result;

  let plus = document.getElementsByClassName("plus");
  let minus = document.getElementsByClassName("minus");
  let del = document.getElementsByClassName("del");

  for (let i = 0; i < cart.length; i++) {
    plus[i].addEventListener("click", function() {
        incrementQty(i);
        total();
    });
    minus[i].addEventListener("click", function() {
        decrementQty(i);
        total();
    });
    del[i].addEventListener("click", function() {
        deleteItem(i);
        total();
    });
  }
}

function total() {
  let total = 0;
  for (let val of cart) {
      total = total + (val.price * val.quantity);
  }
  if (total < 1000) {
    document.getElementById("price").innerHTML = total.toFixed(2) + " €";
  } else {
    document.getElementById("price").innerHTML = total.toFixed(2) * .9 + " € (with 10% (" + total*.1 + "€) Discount!)";
  }
}

printCards();
printRows();