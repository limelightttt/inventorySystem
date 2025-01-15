const productType = document.getElementById("type-select")
const productName = document.getElementById("product-name");
const productCount = document.getElementById("product-count");
const addProductBtn = document.querySelector(".add-product");
const clearProductBtn = document.querySelector(".clear-list");
const container = document.querySelector(".container");
const productsWrapper = document.createElement("div");
const productList = [];
productsWrapper.classList.add("products-wrapper");


container.appendChild(productsWrapper);

addProductBtn.addEventListener("click", addProduct);
clearProductBtn.addEventListener("click", clearProduct);
function addProduct() {
    const productTypeValue = productType.value.trim();
    const productNameValue = productName.value.trim();
    const productCountValue = productCount.value.trim();
    if (!productTypeValue || !productNameValue || !productCountValue) {
        alert("Заполните все поля");
    }

    let productExist = productList.some(
        (elem) => elem.productType === productTypeValue
    );

    if (!productExist) {
        let product = {
            productType: productTypeValue,
            productName: [productNameValue],
            productCount: [productCountValue],
        };
        productList.push(product);
        console.log(productList);
    } else {
        let product = productList.find(
            (elem) => elem.productType === productTypeValue
        );
        product.productName = [ ... product.productName, productNameValue];
        product.productCount = [ ... product.productCount, productCountValue];

        console.log(productList);
    }
    productType.value = "";
    productName.value = "";
    productCount.value = "";
    renderProductList();
} 

function renderProductList() {
    productsWrapper.innerHTML = "";
    productList.forEach((elem) => {
        const productCards = document.createElement("div");
        const productTitle = document.createElement("h3");
        const productDetails = document.createElement("ul");
        productCards.classList.add("products-list");
        productTitle.textContent = elem.productType;

        elem.productName.forEach((value, index) =>{
            const detailItem = document.createElement("li");
            detailItem.classList.add("product-item");
            detailItem.textContent = `${value} ${elem.productCount[index]}`;
            productDetails.appendChild(detailItem);
        });
        productCards.appendChild(productTitle);
        productCards.appendChild(productDetails);
        productsWrapper.appendChild(productCards);
    });
}
function clearProduct() {
    productList.length = 0;
    productsWrapper.innerHTML = " ";
}

