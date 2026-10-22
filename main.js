const bikes = [
  {id:1, brand:"YAMAHA", name:"YZF-R1", category:"Sport", price:18500, power:200, engine:"998 cc", speed:"299 km/soat", year:2024, image:"https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=85", description:"Poyga ruhidagi kuchli sport mototsikl. Tezkor boshqaruv, agressiv dizayn va yuqori darajadagi dinamika."},
  {id:2, brand:"KAWASAKI", name:"Ninja ZX-10R", category:"Sport", price:17200, power:203, engine:"998 cc", speed:"299 km/soat", year:2024, image:"https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=900&q=85", description:"Trassada ham, ochiq yo‘lda ham o‘zini ko‘rsatadigan, kuch va aniqlikni birlashtirgan sport bayk."},
  {id:3, brand:"BMW", name:"S 1000 RR", category:"Sport", price:21900, power:205, engine:"999 cc", speed:"303 km/soat", year:2025, image:"https://images.unsplash.com/photo-1580310614729-ccd69652491d?auto=format&fit=crop&w=900&q=85", description:"Ilg‘or elektronika, yengil konstruksiya va kuchli dvigatelga ega premium sport mototsikl."},
  {id:4, brand:"DUCATI", name:"Panigale V4", category:"Sport", price:28000, power:215, engine:"1103 cc", speed:"300+ km/soat", year:2025, image:"https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&q=85", description:"Italiya dizayni va poyga texnologiyasi uyg‘unlashgan, xarakteri keskin va ko‘rinishi o‘ziga xos model."},
  {id:5, brand:"KTM", name:"1290 Super Duke", category:"Naked", price:19500, power:180, engine:"1301 cc", speed:"280 km/soat", year:2024, image:"https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=85", description:"Yalang‘och dizayn, katta moment va shaharda chaqqon harakat uchun yaratilgan kuchli naked mototsikl."},
  {id:6, brand:"YAMAHA", name:"MT-09", category:"Naked", price:11200, power:119, engine:"890 cc", speed:"225 km/soat", year:2024, image:"https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=900&q=85", description:"Yengil, chaqqon va haydashdan zavq olishga mo‘ljallangan zamonaviy naked bayk."},
  {id:7, brand:"HONDA", name:"CB1000R", category:"Naked", price:12800, power:143, engine:"998 cc", speed:"230 km/soat", year:2024, image:"https://images.unsplash.com/photo-1558980394-0c7b3c6a3e30?auto=format&fit=crop&w=900&q=85", description:"Minimalistik neo-sport dizayni va ishonchli Honda muhandisligi bilan ajralib turadi."},
  {id:8, brand:"BMW", name:"R 1250 GS", category:"Adventure", price:20500, power:136, engine:"1254 cc", speed:"220 km/soat", year:2024, image:"https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=900&q=85", description:"Uzoq safarlar va notekis yo‘llar uchun mos, qulay va ko‘p qirrali adventure mototsikl."},
  {id:9, brand:"HONDA", name:"Africa Twin", category:"Adventure", price:15800, power:101, engine:"1084 cc", speed:"200 km/soat", year:2024, image:"https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=85", description:"Sarguzasht va uzoq masofali sayohatni yoqtiradiganlar uchun muvozanatli va chidamli model."},
  {id:10, brand:"HARLEY-DAVIDSON", name:"Street Glide", category:"Touring", price:28500, power:105, engine:"1923 cc", speed:"180 km/soat", year:2025, image:"https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=85", description:"Katta yo‘llar uchun qulay o‘rindiq, o‘ziga xos ovoz va klassik Amerika touring uslubi."},
  {id:11, brand:"SUZUKI", name:"Hayabusa", category:"Sport", price:19000, power:190, engine:"1340 cc", speed:"299 km/soat", year:2024, image:"https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=900&q=85", description:"Afsonaviy tezkor mototsikl. Barqaror yurish, kuchli dvigatel va taniqli aerodinamik shakl."},
  {id:12, brand:"INDIAN", name:"Scout Bobber", category:"Cruiser", price:13500, power:105, engine:"1133 cc", speed:"190 km/soat", year:2024, image:"https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&q=85", description:"Past o‘rindiq, qora detallari va klassik cruiser ko‘rinishi bilan ajralib turadigan mototsikl."},
  {id:13, brand:"TRIUMPH", name:"Bonneville T120", category:"Cruiser", price:12500, power:80, engine:"1200 cc", speed:"190 km/soat", year:2024, image:"https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=900&q=85", description:"Retro ko‘rinish zamonaviy texnika bilan uchrashgan, kundalik sayr va shahar uchun yoqimli model."},
  {id:14, brand:"KAWASAKI", name:"Versys 1000", category:"Touring", price:14500, power:118, engine:"1043 cc", speed:"220 km/soat", year:2024, image:"https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=900&q=85", description:"Uzoq masofalarda qulaylik va turli yo‘l sharoitlarida ishonchli boshqaruv uchun yaratilgan."},
  {id:15, brand:"APRILIA", name:"RS 660", category:"Sport", price:11200, power:100, engine:"659 cc", speed:"240 km/soat", year:2024, image:"https://images.unsplash.com/photo-1580310614729-ccd69652491d?auto=format&fit=crop&w=900&q=85", description:"Yengil sport mototsikl: zamonaviy ko‘rinish, yaxshi boshqaruv va kundalik foydalanishga moslik."},
  {id:16, brand:"HONDA", name:"Rebel 500", category:"Cruiser", price:6800, power:46, engine:"471 cc", speed:"160 km/soat", year:2024, image:"https://images.unsplash.com/photo-1558980394-0c7b3c6a3e30?auto=format&fit=crop&w=900&q=85", description:"Past o‘rindiqli, boshqarish oson va cruiser uslubiga kirish uchun mos model."},
  {id:17, brand:"SUZUKI", name:"V-Strom 800", category:"Adventure", price:10500, power:84, engine:"776 cc", speed:"200 km/soat", year:2024, image:"https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=900&q=85", description:"Har kuni yurish va dam olish kunlaridagi safarlar uchun amaliy adventure mototsikl."},
  {id:18, brand:"KAWASAKI", name:"Z900", category:"Naked", price:9800, power:125, engine:"948 cc", speed:"240 km/soat", year:2024, image:"https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=900&q=85", description:"Kuchli to‘rt silindrli dvigatel va keskin dizaynni xohlaydiganlar uchun ommabop naked model."}
];

const grid = document.getElementById("bikeGrid");
const searchInput = document.getElementById("searchInput");
const filterWrap = document.getElementById("categoryFilters");
const sortSelect = document.getElementById("sortSelect");
const resultsCount = document.getElementById("resultsCount");
const emptyState = document.getElementById("emptyState");
const modal = document.getElementById("bikeModal");
const toast = document.getElementById("toast");
let activeCategory = "Barchasi";
let toastTimer;
let currentModalBikeId = null;

const money = amount => "$" + amount.toLocaleString("en-US");
const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({
  "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
}[char]));

/* ===================== SAVATCHA ===================== */
const cartBtn = document.getElementById("cartBtn");
const cartPanel = document.getElementById("cartPanel");
const cartOverlay = document.getElementById("cartOverlay");
const cartItemsEl = document.getElementById("cartItems");
let cart = [];
try { cart = JSON.parse(localStorage.getItem("mzCart")) || []; } catch (e) { cart = []; }
const saveCart = () => { try { localStorage.setItem("mzCart", JSON.stringify(cart)); } catch (e) {} };

function renderCart() {
  document.getElementById("cartCount").textContent = cart.reduce((sum, item) => sum + item.qty, 0);
  let total = 0;
  cartItemsEl.innerHTML = cart.length ? cart.map(item => {
    const bike = bikes.find(b => b.id === item.id);
    if (!bike) return "";
    total += bike.price * item.qty;
    return `<div class="cart-item">
      <img src="${escapeHtml(bike.image)}" alt="${escapeHtml(bike.brand + " " + bike.name)}">
      <div class="cart-info"><small>${escapeHtml(bike.brand)}</small><b>${escapeHtml(bike.name)}</b><span>${money(bike.price)}</span></div>
      <div class="cart-qty">
        <button data-cart="dec" data-id="${bike.id}" aria-label="Kamaytirish">−</button><em>${item.qty}</em><button data-cart="inc" data-id="${bike.id}" aria-label="Ko‘paytirish">+</button>
      </div>
      <button class="cart-del" data-cart="del" data-id="${bike.id}" aria-label="O‘chirish">🗑</button>
    </div>`;
  }).join("") : '<p class="cart-empty">Savatcha bo‘sh</p>';
  document.getElementById("cartTotal").textContent = money(total);
  saveCart();
}

function addToCart(id) {
  const bike = bikes.find(b => b.id === id);
  if (!bike) return;
  const found = cart.find(item => item.id === id);
  if (found) found.qty++; else cart.push({ id, qty: 1 });
  renderCart();
  showToast(`${bike.brand} ${bike.name} savatchaga qo‘shildi`);
}

function openCart() {
  cartPanel.classList.add("open");
  cartOverlay.classList.add("open");
  cartPanel.setAttribute("aria-hidden", "false");
}
function closeCart() {
  cartPanel.classList.remove("open");
  cartOverlay.classList.remove("open");
  cartPanel.setAttribute("aria-hidden", "true");
}

cartBtn.addEventListener("click", () => cartPanel.classList.contains("open") ? closeCart() : openCart());
cartOverlay.addEventListener("click", closeCart);
document.getElementById("cartClose").addEventListener("click", closeCart);
document.getElementById("cartClear").addEventListener("click", () => { cart = []; renderCart(); });
cartItemsEl.addEventListener("click", event => {
  const button = event.target.closest("[data-cart]");
  if (!button) return;
  const id = Number(button.dataset.id);
  const item = cart.find(i => i.id === id);
  if (!item) return;
  if (button.dataset.cart === "inc") item.qty++;
  if (button.dataset.cart === "dec") item.qty--;
  if (button.dataset.cart === "del" || item.qty <= 0) cart = cart.filter(i => i.id !== id);
  renderCart();
});
/* ===================== BUYURTMA ===================== */
const orderModal = document.getElementById("orderModal");
const orderForm = document.getElementById("orderForm");
const orderSuccess = document.getElementById("orderSuccess");
const orderName = document.getElementById("orderName");
const orderPhone = document.getElementById("orderPhone");
const orderNote = document.getElementById("orderNote");

function cartTotal() {
  return cart.reduce((sum, item) => {
    const bike = bikes.find(b => b.id === item.id);
    return sum + (bike ? bike.price * item.qty : 0);
  }, 0);
}
function openOrder() {
  if (!cart.length) return showToast("Savatcha bo‘sh. Avval mototsikl tanlang.");
  closeCart();
  document.getElementById("orderSummary").innerHTML = cart.map(item => {
    const bike = bikes.find(b => b.id === item.id);
    if (!bike) return "";
    return `<div class="order-line"><span><b>${escapeHtml(bike.brand + " " + bike.name)}</b> × ${item.qty}</span><span>${money(bike.price * item.qty)}</span></div>`;
  }).join("");
  document.getElementById("orderTotal").textContent = money(cartTotal());
  orderForm.hidden = false;
  orderSuccess.hidden = true;
  clearErrors();
  orderModal.classList.add("open");
  orderModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  orderName.focus();
}
function closeOrder() {
  orderModal.classList.remove("open");
  orderModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
function clearErrors() {
  ["Name", "Phone"].forEach(key => {
    document.getElementById("err" + key).textContent = "";
    document.getElementById("order" + key).closest(".field").classList.remove("invalid");
  });
}
function setError(input, errId, message) {
  document.getElementById(errId).textContent = message;
  input.closest(".field").classList.add("invalid");
}
function formatPhone(value) {
  let digits = value.replace(/\D/g, "");
  if (digits.startsWith("998")) digits = digits.slice(3);
  digits = digits.slice(0, 9);
  const parts = [digits.slice(0, 2), digits.slice(2, 5), digits.slice(5, 7), digits.slice(7, 9)].filter(Boolean);
  return digits ? "+998 " + parts.join(" ") : "";
}

orderPhone.addEventListener("input", () => { orderPhone.value = formatPhone(orderPhone.value); });
orderPhone.addEventListener("focus", () => { if (!orderPhone.value) orderPhone.value = "+998 "; });

orderForm.addEventListener("submit", event => {
  event.preventDefault();
  clearErrors();
  const name = orderName.value.trim();
  const phoneDigits = orderPhone.value.replace(/\D/g, "");
  let valid = true;
  if (name.length < 2) { setError(orderName, "errName", "Ismingizni kiriting"); valid = false; }
  if (phoneDigits.length !== 12) { setError(orderPhone, "errPhone", "Telefon raqamni to‘liq kiriting"); valid = false; }
  if (!valid) return;

  const order = {
    id: Date.now().toString().slice(-6),
    date: new Date().toISOString(),
    name,
    phone: orderPhone.value,
    note: orderNote.value.trim(),
    items: cart.map(item => {
      const bike = bikes.find(b => b.id === item.id);
      return { id: item.id, name: bike ? bike.brand + " " + bike.name : "", qty: item.qty, price: bike ? bike.price : 0 };
    }),
    total: cartTotal()
  };
  try {
    const orders = JSON.parse(localStorage.getItem("mzOrders")) || [];
    orders.push(order);
    localStorage.setItem("mzOrders", JSON.stringify(orders));
  } catch (e) {}
  console.log("Yangi buyurtma:", order);

  document.getElementById("orderNumber").textContent = "#" + order.id;
  document.getElementById("successPhone").textContent = order.phone;
  orderForm.hidden = true;
  orderSuccess.hidden = false;
  orderForm.reset();
  cart = [];
  renderCart();
});

document.getElementById("cartOrder").addEventListener("click", openOrder);
document.getElementById("orderClose").addEventListener("click", closeOrder);
document.getElementById("orderDone").addEventListener("click", closeOrder);
orderModal.addEventListener("click", event => { if (event.target.hasAttribute("data-close-order")) closeOrder(); });
/* ==================================================== */
/* ==================================================== */

function getVisibleBikes() {
  const term = searchInput.value.trim().toLowerCase();
  let list = bikes.filter(bike => {
    const matchesCategory = activeCategory === "Barchasi" || bike.category === activeCategory;
    const searchable = `${bike.name} ${bike.brand} ${bike.category} ${bike.engine}`.toLowerCase();
    return matchesCategory && searchable.includes(term);
  });
  switch (sortSelect.value) {
    case "price-low": list.sort((a,b) => a.price - b.price); break;
    case "price-high": list.sort((a,b) => b.price - a.price); break;
    case "power-high": list.sort((a,b) => b.power - a.power); break;
  }
  return list;
}

function renderBikes() {
  const list = getVisibleBikes();
  resultsCount.textContent = `${list.length} ta mototsikl`;
  emptyState.hidden = list.length !== 0;
  grid.hidden = list.length === 0;
  grid.innerHTML = list.map((bike, index) => `
    <article class="bike-card" style="animation-delay:${Math.min(index * 45, 360)}ms">
      <div class="bike-photo">
        <img src="${escapeHtml(bike.image)}" alt="${escapeHtml(bike.brand + " " + bike.name)}" loading="lazy"
             onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80'">
        <span class="bike-category">${escapeHtml(bike.category)}</span>
        <span class="bike-number">#${String(bike.id).padStart(2, "0")}</span>
      </div>
      <div class="bike-body">
        <div class="bike-brand">${escapeHtml(bike.brand)}</div>
        <h3>${escapeHtml(bike.name)}</h3>
        <div class="bike-specs">
          <span>⚡ <b>${bike.power} hp</b></span>
          <span>◉ <b>${escapeHtml(bike.engine)}</b></span>
          <span>▣ <b>${bike.year}</b></span>
        </div>
        <div class="bike-card-bottom">
          <div><span class="price-label">Taxminiy narx</span><strong class="bike-price">${money(bike.price)}</strong></div>
          <button class="details-btn" data-bike-id="${bike.id}" aria-label="${escapeHtml(bike.name)} tafsilotlari">↗</button>
        </div>
        <button class="add-cart" data-add-id="${bike.id}">🛒 Savatchaga</button>
      </div>
    </article>
  `).join("");
}

function openBikeModal(id) {
  const bike = bikes.find(item => item.id === Number(id));
  if (!bike) return;
  currentModalBikeId = bike.id;
  document.getElementById("modalImage").src = bike.image;
  document.getElementById("modalImage").alt = `${bike.brand} ${bike.name}`;
  document.getElementById("modalCategory").textContent = `${bike.brand} / ${bike.category}`;
  document.getElementById("modalTitle").textContent = bike.name;
  document.getElementById("modalDescription").textContent = bike.description;
  document.getElementById("modalPrice").textContent = money(bike.price);
  document.getElementById("modalSpecs").innerHTML = [
    ["Dvigatel", bike.engine], ["Quvvat", `${bike.power} hp`],
    ["Maksimal tezlik", bike.speed], ["Model yili", bike.year]
  ].map(([label, value]) => `<div class="modal-spec"><small>${escapeHtml(label)}</small><strong>${escapeHtml(value)}</strong></div>`).join("");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.getElementById("modalClose").focus();
}
function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

searchInput.addEventListener("input", renderBikes);
sortSelect.addEventListener("change", renderBikes);
filterWrap.addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  filterWrap.querySelectorAll(".filter-btn").forEach(item => item.classList.toggle("active", item === button));
  renderBikes();
});
grid.addEventListener("click", event => {
  const addBtn = event.target.closest("[data-add-id]");
  if (addBtn) return addToCart(Number(addBtn.dataset.addId));
  const button = event.target.closest("[data-bike-id]");
  if (button) openBikeModal(button.dataset.bikeId);
});
document.getElementById("resetFilters").addEventListener("click", () => {
  searchInput.value = "";
  activeCategory = "Barchasi";
  sortSelect.value = "featured";
  filterWrap.querySelectorAll(".filter-btn").forEach(item => item.classList.toggle("active", item.dataset.category === activeCategory));
  renderBikes();
});
document.getElementById("modalClose").addEventListener("click", closeModal);
modal.addEventListener("click", event => { if (event.target.hasAttribute("data-close-modal")) closeModal(); });
document.addEventListener("keydown", event => {
  if (event.key === "Escape") { closeModal(); closeCart(); closeOrder(); }
});
document.getElementById("modalContact").addEventListener("click", () => {
  if (currentModalBikeId !== null) addToCart(currentModalBikeId);
  closeModal();
  openCart();
});
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("backTop").addEventListener("click", event => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
const menuToggle = document.getElementById("menuToggle");
menuToggle.addEventListener("click", () => {
  const nav = document.querySelector(".topbar nav");
  nav.classList.toggle("open");
  menuToggle.textContent = nav.classList.contains("open") ? "×" : "☰";
});
document.querySelectorAll(".topbar nav a").forEach(link => link.addEventListener("click", () => {
  document.querySelector(".topbar nav").classList.remove("open");
  menuToggle.textContent = "☰";
}));

renderBikes();
renderCart();
