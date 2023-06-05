// list item öğelerinin seçilmesi için gerekli kod dizilimi 
let ulDom = document.querySelector("#list")
ulDom.addEventListener("click", (e) => e.target.classList.toggle("checked"));

// input içerisine girilen değerin ekle  butonuna basıldıktan sonra list items olarak yazılması

let buttonDOM = document.querySelector("#liveToastBtn");
  buttonDOM.onclick = function () {
    let input = document.querySelector("#task").value.trim();
    let liDom = document.createElement('li');
    liDom.innerHTML = input;
    ulDom.prepend(liDom);
    IconClose(liDom)
  };
  // list items öğelerinin clickle birlikte silinmesi için gerekli fonksiyon tanımlaması
  function IconClose(element) {                       
    let btn = document.createElement("button");
    btn.type = "button";
    btn.className = "close-icon close";
    btn.ariaLabel = "Close";
    btn.addEventListener("click", (e) => e.target.parentElement.parentElement.remove()); 
    btn.innerHTML = `<span aria-hidden="true">&times<span/>`;
    element.appendChild(btn);
  }
  let liDom = document.getElementsByTagName('li');
  for (let i = 0; i < liDom.length; i++) {
  IconClose(liDom[i]);
}
