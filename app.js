const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Lagkapten",
    price: 2.289,
    colors: [
      {
        code: "white",
        img: "./img/Desk1white.jpg",
      },
      {
        code: "black",
        img: "./img/Desk1black.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Malm",
    price: 2.899,
    colors: [
      {
        code: "white",
        img: "./img/Desk2White.jpg",
      },
      {
        code: "brown",
        img: "./img/Desk2brown.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Mickie",
    price: 2.089,
    colors: [
      {
        code: "white",
        img: "./img/Desk3white.jpg",
      },
      {
        code: "brown",
        img: "./img/Desk3brown.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Bekant",
    price: 4.599,
    colors: [
      {
        code: "white",
        img: "./img/Lwhite.jpg",
      },
      {
        code: "black",
        img: "./img/Lblack.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Gamer",
    price: 18.398,
    colors: [
      {
        code: "black",
        img: "./img/gamer.jpg",
      },
      {
        code: "black",
        img: "./img/gamer.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //*change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //*change the choosen product
    choosenProduct = products[index];

    //*change text of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //*Assign new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

//*Payment Services
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
