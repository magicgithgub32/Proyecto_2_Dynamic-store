import './index.css'

const products = [
  {
    name: 'Air Jordan 1 Retro High OG',
    price: '180€',
    seller: 'Jordan',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/50544d3c-3be0-4451-9691-702f6800b0c2/air-jordan-1-retro-high-og-zapatillas.png'
  },
  {
    name: 'Nike x Billie Ellish Air Force 1 High',
    price: '153€',
    seller: 'NikeLab',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/23e27f6f-7422-4d9f-8ca9-a0a24e96ba29/billie-eilish-air-force-1-high-07-shoes-kTSN8S.png'
  },
  {
    name: 'Air Jordan 7 Retro',
    price: '200€',
    seller: 'Jordan',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f00e0c1d-9500-4063-843d-01f3f40ec1c7/air-jordan-7-retro-zapatillas.png'
  },
  {
    name: 'Air Jordan Legacy 312 Low',
    price: '140€',
    seller: 'Jordan',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9bfad942-8485-4cf7-8953-e7fe1272bc91/air-jordan-legacy-312-low-zapatillas-GbnrhZ.png'
  },
  {
    name: 'Nike Dunk Low',
    price: '120€',
    seller: 'Nike Sportswear',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ba65b84e-8236-42e1-a3a1-1396a0f4460e/dunk-low-zapatillas-fhBsJ7.png'
  },
  {
    name: 'Nike x Ambush Air Adjust Force',
    price: '190€',
    seller: 'NikeLab',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2188c181-55aa-4b9b-ad2e-100216f79315/ambush-air-adjust-force-zapatillas-6KxrD6.png'
  },
  {
    name: 'Nike Dunk High 1985',
    price: '140€',
    seller: 'Nike by You',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/019f60a9-aa10-4327-b5f6-b940b753fbdb/dunk-high-1985-zapatillas-GqvNRg.png'
  },
  {
    name: 'Nike Air More Uptempo 96',
    price: '180€',
    seller: 'Nike Sportswear',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2557b521-7942-40b2-af87-9839b62bba32/air-more-uptempo-96-zapatillas-X7WGvQ.png'
  },
  {
    name: 'Nike Air Max Plus',
    price: '190€',
    seller: 'Nike by You',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/djwtlio5mqtf2ds5fkmp/air-max-plus-zapatillas-P1Fh7n.png'
  },
  {
    name: 'Nike Air Max Dawn',
    price: '60€',
    seller: 'Nike by You',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0216ab55-5213-48a4-a80a-a13b1d0efdb6/air-max-dawn-zapatillas-SFj5Qh.png'
  },
  {
    name: 'Air Jordan 5 x DJ Khaled',
    price: '225€',
    seller: 'Jordan',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/852c5323-cf29-435d-919d-2936c4bce051/air-jordan-5-dj-khaled-zapatillas.png'
  },
  {
    name: 'Nike Air Max 90',
    price: '150€',
    seller: 'Nike by You',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/34627b2f-87d6-4cd8-aae4-dc1e452679c6/air-max-90-ltr-zapatillas-4qFl8H.png'
  },
  {
    name: 'Air Jordan 1 Mid',
    price: '130€',
    seller: 'Jordan',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9666574d-f12c-46c8-b04b-fc50b3581e91/air-jordan-1-mid-zapatillas-00qK2m.png'
  }
]


const container = document.querySelector("#app");

const mapProducts = (products) => {

  const mappedProducts = products.map((product) => ({
    name: product.name,
    price: product.price,
    seller: product.seller,
    image: product.image
  }));

  console.log(products)

printProducts(mappedProducts);
}

const printProducts = (products) => {
  for (let product of products) {
    const article = document.createElement("article");

    article.innerHTML = `
    <h2>${product.name}</h2>
    <h3>${product.price}</h3>
    <p>${product.seller}</p>
    <img src=${product.image} alt=${product.name} />
    `;

    container.appendChild(article);
  }
}

mapProducts(products)
