import "./index.css";
import { sneakers } from "./products";

const ProductsContainer = document.querySelector("#products");

const mapSneakers = (sneakers) => {
  const mappedSneakers = sneakers.map((sneaker) => ({
    name: sneaker.name,
    price: sneaker.price,
    seller: sneaker.seller,
    image: sneaker.image,
  }));

  console.log(sneakers);

  printSneakers(mappedSneakers);
};

const printSneakers = (sneakers) => {
  ProductsContainer.innerHTML = ""; //Si no hago esto, pese a filtrar, me saca todos los productos

  for (let sneaker of sneakers) {
    const article = document.createElement("article");

    article.innerHTML = `
    <h3>${sneaker.name}</h3>
    <img src=${sneaker.image} alt=${sneaker.name} />
    <h3>${sneaker.price}</h3>
    <p>${sneaker.seller}</p>
    `;

    ProductsContainer.appendChild(article);
  }
};

mapSneakers(sneakers);

const filterSneakers = (sneakers, select) => {
  console.log(sneakers, select);

  if (select === "All") {
    printSneakers(sneakers);
    return;
  }
  const filteredSneakers = sneakers.filter(
    (sneaker) => sneaker.seller === select
  );

  console.log(filteredSneakers);

  //Creo una constante para seleccionar el filtro del precio y poder ponerlo vacío
  //en caso de querer hacer un filtro por seller después de haber hecho un fitro por precio y así que este campo vuelva a estar vacīo
  const priceFilter = document.querySelector("#priceFilter");

  select === "All" ? printSneakers(sneakers) : (priceFilter.value = "");
  printSneakers(filteredSneakers);
};

const selectSearch = document.querySelector("#sellerFilter");
selectSearch.addEventListener("change", (ev) =>
  filterSneakers(sneakers, ev.target.value)
);

const filterSneakersByPrice = (sneakers, maxPrice) => {
  const filteredSneakers = sneakers.filter(
    (sneaker) => sneaker.price <= maxPrice
  );

  //Esto es para que cuando hagamos el filtro por precio, el selector de marca se ponga de vuelta a 'todas'//
  const selectSearch = document.querySelector("#sellerFilter");
  selectSearch.value = selectSearch.options[0].value;

  console.log(filteredSneakers);

  printSneakers(filteredSneakers);
};

//Esto sería para activar el filtro mediante el input y no al clickar el botón
// const priceFilter = document.querySelector("#priceFilter");
// priceFilter.addEventListener("input", (ev) =>
//   filterSneakersByPrice(sneakers, ev.target.value)
// );

const filterByPriceBtn = document.querySelector("#priceBtn");
filterByPriceBtn.addEventListener("click", () => {
  const priceFilter = document.querySelector("#priceFilter");
  const maxPrice = priceFilter.value;

  filterSneakersByPrice(sneakers, maxPrice);
});

const cleanFiltersBtn = document.querySelector("#cleanFiltersBtn");
cleanFiltersBtn.addEventListener("click", () => {
  resetFilters();
});

const resetFilters = () => {
  const selectSearch = document.querySelector("#sellerFilter");
  selectSearch.value = selectSearch.options[0].value;

  const priceFilter = document.querySelector("#priceFilter");
  priceFilter.value = "";

  printSneakers(sneakers);
};

const headerContainer = document.getElementById("headerContainer");
const logoNike = document.createElement("img");
logoNike.src =
  "https://res.cloudinary.com/dxxkog06n/image/upload/v1677399642/Screenshot_2023-02-26_at_09.18.21_lpimut.png";
const logoJordan = document.createElement("img");
logoJordan.src =
  "https://res.cloudinary.com/dxxkog06n/image/upload/v1677399642/Screenshot_2023-02-26_at_09.19.39_i2ku1u.png";
headerContainer.appendChild(logoNike);
headerContainer.appendChild(logoJordan);

const header = document.createElement("header");
header.textContent = "Zapatillas";
headerContainer.classList.add("headerContainer-class");
headerContainer.appendChild(header);

const footer = document.createElement("footer");
const footercontent = document.createElement("p");
footercontent.textContent = "2023 Nike-TheCode. Todos los derechos reservados";
footer.appendChild(footercontent);
footer.classList.add("footer-class");
document.body.appendChild(footer);
