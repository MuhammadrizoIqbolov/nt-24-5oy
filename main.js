
let url = 'https://fakestoreapi.com/products'

fetch (url)
.then ((res)=> res.json())
.then ((data)=> {
    console.log(data);
}
)

// Input elementini olish va "Enter" tugmasini bosish uchun hodisalarni qo'shish
const input = document.getElementById("inp");
input.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    const searchQuery = input.value;
    // Qidiruv so'rovini bajarish yoki boshqa istalgan hodisani amalga oshirish
    console.log("Qidiruv so'rovi:", searchQuery);
    input.value = ""; // Input maydonchasini tozalash
  }
});

// "Korzina" tugmasini olish va hodisalar joylash
const cartButton = document.querySelector(".fa-cart-shopping");
cartButton.addEventListener("click", function() {
  // "Korzina" tugmasi bosilganda amalni bajarish
  console.log("Korzina tugmasi bosildi");
});

// "Produkt" tugmasini olish va hodisalar joylash
const productsButton = document.querySelector(".fa-shop");
productsButton.addEventListener("click", function() {
  // "Produkt" tugmasi bosilganda amalni bajarish
  console.log("Produkt tugmasi bosildi");
});

// "Saqlash" tugmasini olish va hodisalar joylash
const saveButton = document.querySelector(".fa-heart");
saveButton.addEventListener("click", function() {
  // "Saqlash" tugmasi bosilganda amalni bajarish
  console.log("Saqlash tugmasi bosildi");
});


function goToPage(page) {
    window.location.href = page + ".html";
  }
 

//   // "Все продукты" tugmasi bosilganda ishlaydigan funksiya
// function redirectToAllProductsPage() {
//   window.location.href = "path/to/all-products-page.html";
// }

// // "В корзину" tugmasi bosilganda ishlaydigan funksiya
// function redirectToCartPage() {
//   window.location.href = "path/to/cart-page.html";
// }

// // "Все продукты" tugmasiga click hodisasini qo'shish
// document.querySelector('.menu_text').addEventListener('click', redirectToAllProductsPage);

// // "В корзину" tugmasiga click hodisasini qo'shish
// document.querySelector('.menu_btn').addEventListener('click', redirectToCartPage);
function addToCart() {
  // Bu funksiya korzina sahifasiga o'tishni amalga oshiradi
  window.location.href = "korzina.html";
}

// "В корзину" tugmasiga click hodisasini qo'shish
document.querySelector('.menu_btn').addEventListener('click', addToCart);
