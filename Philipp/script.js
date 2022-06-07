const productList = JSON.parse(flowers);

const listContainer = document.querySelector(".container-products");


const printCards = () => {
  listContainer.innerHTML = "";

  productList.forEach((product) => {
    listContainer.innerHTML += ` <div class="col-lg-4 col-md-6 col-sm-12 my-3">
      <div class="card shadow">
        <div class="card-header m-0 pb-0">
          <div class="row justify-content-between">
            <span class="col-auto btn btn-info text-white px-2 py-1 mx-1">Task</span>
            <span type="button" class="col text-end">
              <svg xmlns="http://www.w3.org/2000/svg" height="20" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
              </svg>
            </span>
            <h5 type="button" class="col-1 text-end m-0">︙<h5>
          </div>
        </div>
        <img src="${product.image}" class="card-img-top cover-fit" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p>${product.description}</p>
          <div class="my-3">
            ⚠️ Priority Level:&nbsp; <span class="btn btn-success py-0 px-2 prio-btn prio-count">${product.quantity}</span>
          </div>
          <hr>
          <div class="row justify-content-end gap-2 px-3">
            <button class="col-auto btn btn-danger">🗑 Delete</button>
            <button class="col-auto btn btn-success">✔ Done</button>
          </div>
        </div>
      </div>
    </div>`;
  });
};

const increasePriority = () => {
  const prioBtn = document.querySelectorAll(".prio-btn");
  prioBtn.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      productList[i].quantity++;
      btn.innerHTML = productList[i].quantity;
      btn.className = `btn btn-${colorBtn(productList[i])} py-0 px-2 prio-btn prio-count`
      console.log(productList[i]);
    });
  });
};

printCards();
increasePriority();
