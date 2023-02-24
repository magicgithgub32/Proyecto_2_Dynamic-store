import "./index.css";
import { sneakers } from "./products";

const container = document.querySelector("#app");

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
  container.innerHTML = ""; //Si no hago esto, pese a filtrar, me saca todos los productos

  for (let sneaker of sneakers) {
    const article = document.createElement("article");

    article.innerHTML = `
    <h3>${sneaker.name}</h3>
    <img src=${sneaker.image} alt=${sneaker.name} />
    <h3>${sneaker.price}</h3>
    <p>${sneaker.seller}</p>
    `;

    container.appendChild(article);
  }
};

mapSneakers(sneakers);

const filterSneakers = (sneakers, select) => {
  console.log(sneakers, select);

  const filteredSneakers = sneakers.filter(
    (sneaker) => sneaker.seller === select
  );

  console.log(filteredSneakers);

  select === "All" ? printSneakers(sneakers) : printSneakers(filteredSneakers);
};

const selectSearch = document.querySelector("#sellerFilter");
selectSearch.addEventListener("change", (ev) =>
  filterSneakers(sneakers, ev.target.value)
);

const filterSneakersByPrice = (sneakers, maxPrice) => {
  const filteredSneakers = sneakers.filter(
    (sneaker) => sneaker.price <= maxPrice
  );
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
  printSneakers(sneakers);
});
