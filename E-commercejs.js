
// -----------------------
const wrapper = document.querySelector(".slideWrapper");
const menuitems = document.querySelectorAll(".menuitem");
const close = document.querySelector(".close");
const payment = document.querySelector(".payment");
const productButton = document.querySelector(".product-button");
menuitems[0].style.color = "#66fcf1";
const products = [
  {
    id: 1,
    title: "PLUSONE",
    price:`3000$`,
    colors: [
      {
        code: "blue",
        img: "./images/9d623331d7a2b26f659fe5bae728f8b0-removebg-preview.png"
      },
      {
        code: "grey",
        img: "./images/71qXYE4Np6S._AC_SL1500_-removebg-preview.png"
      }
    ]
  },
  {
    id: 2,
    title: "OPPO",
    price: `4000$`,
    colors: [
      {
        code: "blue",
        img: "./images/8b88aa34-1a12-4c8c-bbf2-1f55549815a5-removebg-preview (1).png"
      },
      {
        code: "grey",
        img: "./images/Screenshot_2025-03-07_220944-removebg-preview.png"
      }
    ]
  }
];
let chosenproduct;
const productimg = document.querySelector(".productimg");
const productTitle = document.querySelector(".product-title");
const productPrice = document.querySelector(".product-price");
const productColor = document.querySelectorAll(".color");
const productType = document.querySelectorAll(".type");
 productColor.forEach((color, index) => {
   color.addEventListener("click", () => {
     productimg.src = `${products[0].colors[index].img}`;
   });
 });
menuitems.forEach((element,index) => { 
    element.addEventListener("click", () => {
        menuitems.forEach(item => item.style.color = `white`);
        wrapper.style.transform = `translateX(${index * -100}vw)`;
        element.style.color = `var(--light-blue)`;
    });
  
});
 productTitle.textContent = `${products[0].title}`;
 productType[0].style.backgroundColor = `var(--light-blue)`;
 productType[0].style.color = `var(--light-black)`;
productType.forEach((element, index) => {
  element.addEventListener("click", () => {
    chosenproduct = index;
    productTitle.textContent = `${products[index].title}`;
    productPrice.textContent = `${products[index].price}`;
    productimg.src = `${products[index].colors[0].img}`;

    productType.forEach((element, index) => { productType[index].style.backgroundColor = `black`;
      productType[index].style.color = `white`;
    });
    
      productType[chosenproduct].style.backgroundColor = `var(--light-blue)`;
      productType[chosenproduct].style.color = `var(--light-black)`;
    productColor.forEach((color, index) => {
      color.addEventListener("click", () => {
        productimg.src = `${products[chosenproduct].colors[index].img}`;
      
      });
    });
  });
});
productButton.addEventListener("click", () => { 
  payment.style.display = "block";  });

close.onclick = () => {
payment.style.display = "none";
}


function displayProducts() {
  let productsContainer = document.getElementById("imagescontainer");


  productsContainer.innerHTML = "";
 
  let storedProducts = JSON.parse(localStorage.getItem("product")) || [] ;

  if (storedProducts.length === 0) {
    productsContainer.innerHTML = "<p>NO PRODUCTS RIGHT NOW</p>";
    return;
  }


  storedProducts.forEach((product) => {
    let div = document.createElement("div");
    div.classList.add("product-item");

    let img = document.createElement("img");
    img.src = product.photo;
    img.alt = product.title;

    let title = document.createElement("h2");
    title.textContent = product.title;

    let price = document.createElement("p");
    price.textContent = `Price: ${product.total} `;

    let buyButton = document.createElement("button");
    buyButton.textContent = "Buy Now";
    buyButton.classList.add("buy-button");

    div.appendChild(img);
    div.appendChild(title);
    div.appendChild(price);
    div.appendChild(buyButton);
    productsContainer.appendChild(div);
  });
}

displayProducts();
window.addEventListener("storage", displayProducts);


