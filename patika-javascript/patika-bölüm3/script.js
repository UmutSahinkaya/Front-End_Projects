const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://thewoksoflife.com/wp-content/uploads/2014/11/dan-dan-noodles-12.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];


// ALL 
const btnAll = document.createElement("button"); 
btnAll.type = "button"; 
btnAll.classList.add("btn-item") 
btnAll.textContent = "ALL"; 
btnAll.id = "all"; 

const container1 = document.querySelector('.btn-container');
container1.appendChild(btnAll); 

// AYNI ŞEKİLDE DİĞER TANIMLAMALAR YAPILDI

// KOREA

const btnKorea = document.createElement("button");
btnKorea.type = "button";
btnKorea.classList.add("btn-item")
btnKorea.textContent = "Korea";
btnKorea.id = "korea";

const container2 = document.querySelector('.btn-container');
container2.appendChild(btnKorea);

// JAPON 

const btnJapon = document.createElement("button");
btnJapon.type = "button";
btnJapon.classList.add("btn-item")
btnJapon.textContent = "Japon";
btnJapon.id = "japon";

const container3 = document.querySelector('.btn-container');
container3.appendChild(btnJapon);

// China Butonu

const btnChina = document.createElement("button");
btnChina.type = "button";
btnChina.classList.add("btn-item")
btnChina.textContent = "China";
btnChina.id = "china";

const container4 = document.querySelector('.btn-container');
container4.appendChild(btnChina);

// CLİCKLE GÖSTERME 

let allBtn = document.querySelector('#all'); 
allBtn.addEventListener("click", menuShow); 

const menu1 = document.querySelector(".section-center") 

menu1.id = "menu"; 

function menuShow() { 
  let menuItems = menu.map(item => {  
    return `<div class="card mb-3" style="max-width: 650px;"> 
    <div class="row g-02">
      <div class="col-md-4">
        <img src="${item.img}" class="img-fluid rounded-start" alt="${item.title}">
      </div>
      <div class="col-md-7">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.desc}</p>
          <div class="badge bg-primary text-wrap" style="width: 4rem;">
          ${item.price}
          </div>
        </div>
      </div>
    </div>
  </div>`; 
  })
  menu1.innerHTML = menuItems
}
menuShow(); 


let koreaBtn = document.querySelector('#korea');
koreaBtn.addEventListener("click", koreaMenu);



function koreaMenu() {
  let menuItems = menu.map(item => {
    if(item.category == "Korea") { 
      return `<div class="card mb-3" style="max-width: 650px;"> 
      <div class="row g-02">
        <div class="col-md-4">
          <img src="${item.img}" class="img-fluid rounded-start" alt="${item.title}">
        </div>
        <div class="col-md-7">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.desc}</p>
            <div class="badge bg-primary text-wrap" style="width: 6rem;">
            ${item.price}
            </div>
          </div>
        </div>
      </div>
    </div>`
    }
  })
  menu1.innerHTML = menuItems
}



let japonBtn = document.querySelector('#japon');
japonBtn.addEventListener("click", japonMenu);



function japonMenu() {
  let menuItems = menu.map(item => {
    if(item.category == "Japan") {
      return `<div class="card mb-3" style="max-width: 650px;"> 
      <div class="row g-02">
        <div class="col-md-4">
          <img src="${item.img}" class="img-fluid rounded-start" alt="${item.title}">
        </div>
        <div class="col-md-7">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.desc}</p>
            <div class="badge bg-primary text-wrap" style="width: 6rem;">
            ${item.price}
            </div>
          </div>
        </div>
      </div>
    </div>`
    }
  })
  menu1.innerHTML = menuItems
}



let chinaBtn = document.querySelector('#china');
chinaBtn.addEventListener("click", chinaMenu);



function chinaMenu() {
  let menuItems = menu.map(item => {
    if(item.category == "China") {
      return `<div class="card mb-3" style="max-width: 650px;"> 
      <div class="row g-02">
        <div class="col-md-4">
          <img src="${item.img}" class="img-fluid rounded-start" alt="${item.title}">
        </div>
        <div class="col-md-7">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.desc}</p>
            <div class="badge bg-primary text-wrap" style="width: 6rem;">
            ${item.price}
            </div>
          </div>
        </div>
      </div>
    </div>`
    }
  })
  menu1.innerHTML = menuItems
}
