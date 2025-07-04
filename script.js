let selectedCategory = null;
let selectedWatch = null;

function startLogin(category) {
  selectedCategory = category;
  document.getElementById("mainGallery").style.display = "none";
  document.getElementById("loginSection").style.display = "block";
}

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email && password && selectedCategory) {
    document.getElementById("loginSection").style.display = "none";
    showCategoryWatches(selectedCategory);
  } else {
    alert("Please fill all details.");
  }
});

const watches = {
  mens: [
    { img: "Menswatch/Menswatchd.jpeg", brand: "Titan", price: "₹3000", warranty: "2 Years" },
    { img: "Menswatch/Menswatchc.jpeg", brand: "Fossil", price: "₹3500", warranty: "1.5 Years" },
    { img: "Menswatch/Menswatchb.jpeg", brand: "Casio", price: "₹4000", warranty: "2 Years" }
  ],
  womens: [
    { img: "Women watch/Women watch a.jpeg", brand: "Sonata", price: "₹2500", warranty: "1 Year" },
    { img: "Women watch/Women watch b.jpeg", brand: "Timex", price: "₹2700", warranty: "1 Year" },
    { img: "Women watch/Women watch c.jpeg", brand: "Fastrack", price: "₹2900", warranty: "1.5 Years" }
  ],
  kids: [
    { img: "kidswatch/Herotime.jpeg", brand: "Zoop", price: "₹1500", warranty: "6 Months" },
    { img: "kidswatch/zoop.jpeg", brand: "Disney", price: "₹1700", warranty: "1 Year" },
    { img: "kidswatch/Disney.jpeg", brand: "HeroTime", price: "₹1600", warranty: "1 Year" }
  ]
};

function showCategoryWatches(category) {
  const gallery = document.getElementById("categoryGallery");
  gallery.innerHTML = "";

  watches[category].forEach(watch => {
    const card = document.createElement("div");
    card.className = "watch-card";
    card.innerHTML = `
      <img src="images/${watch.img}" alt="${watch.brand}" onclick="selectWatch('${watch.img}', '${category}')" />
      <p>${watch.brand} - ${watch.price}</p>
    `;
    gallery.appendChild(card);
  });

  gallery.style.display = "flex";
}

function selectWatch(img, category) {
  const selected = watches[category].find(watch => watch.img === img);
  if (!selected) {
    alert("Watch not found!");
    return;
  }

  selectedWatch = selected;

  document.getElementById("categoryGallery").style.display = "none";
  document.getElementById("detailsSection").style.display = "block";
  document.getElementById("watchImage").src = "images/" + selected.img;
  document.getElementById("brandName").textContent = selected.brand;
  document.getElementById("warranty").textContent = selected.warranty || "Not specified";
}


function showPayment() {
  document.getElementById("paymentOptions").style.display = "block";
}


function confirmOrder() {
  document.getElementById("detailsSection").style.display = "none";
  document.getElementById("thankYouSection").style.display = "block";
}


function goHome() {
  document.getElementById("thankYouSection").style.display = "none";
  document.getElementById("mainGallery").style.display = "flex";
  selectedCategory = null;
  selectedWatch = null;
}
