const Wellcome = document.getElementById("Wellcome");
const BtnWellcome = document.getElementById("BtnWellcome");
BtnWellcome.addEventListener("click", () => {
  Wellcome.classList.add("hiddeWellcome");
});
const hamburguerMenu = document.getElementById("hamburguerMenu");
const hamburguerMenuBtn = document.getElementById("hamburguerMenuBtn");
const ocultarInformacionBtn = document.getElementById("OcultarInformacion");
const infoProductos = document.getElementById("infoProductos");
const Mate = document.getElementById("Mate");
const Bombilla = document.getElementById("Bombilla");
const Termo = document.getElementById("Termo");
const Cuchillo = document.getElementById("Cuchillo");
const Tabla = document.getElementById("Tabla")
const imgGallery = document.getElementById("img-gallery")
const scrollLeftButton = document.getElementById("scrollLeft")
const scrollRightButton = document.getElementById("scrollRight")
const galleryEmpresas = document.getElementById("img-container")
const imgwidth = document.getElementById("img-container-firstImg")
const infoProducto = document.getElementById("infoProducto");
const tituloProducto = document.getElementById("tituloProducto");

scrollRightButton.addEventListener("click", (event) => {galleryEmpresas.scrollLeft += imgwidth.width})
scrollLeftButton.addEventListener("click", (event) => {galleryEmpresas.scrollLeft -= imgwidth.width})

hamburguerMenuBtn.addEventListener("click", () => {
  hamburguerMenu.classList.contains("hamburgerMenuDeployed")
    ? hamburguerMenu.classList.remove("hamburgerMenuDeployed")
    : hamburguerMenu.classList.add("hamburgerMenuDeployed");
});
document.addEventListener("DOMContentLoaded", function () {
  let hamburguerMenuchildrens = document.getElementsByClassName(
    "hamburguerMenuChildren"
  );
  for (let i = 0; i < hamburguerMenuchildrens.length; i++) {
    hamburguerMenuchildrens[i].addEventListener("click", () => {
      hamburguerMenu.classList.remove("hamburgerMenuDeployed");
    });
  }
});
function desplegarinfoProductos() {infoProductos.classList.contains("infoProductosShowed")? infoProductos.classList.remove("infoProductosShowed"): infoProductos.classList.add("infoProductosShowed"), imgGallery.classList.add("galleryOn");}
function desplegarProducto(params) {params.classList.contains("imgClicked")? params.classList.remove("imgClicked"): params.classList.add("imgClicked");}
function resetGallery() {
  Mate.classList.remove("imgClicked");
  Bombilla.classList.remove("imgClicked");
  Termo.classList.remove("imgClicked");
  Cuchillo.classList.remove("imgClicked");
  Tabla.classList.remove("imgClicked");
  infoProductos.classList.remove("infoProductosShowed");
  imgGallery.classList.remove("galleryOn")
}
function productoClicked(params){resetGallery();desplegarProducto(params);setTimeout(() => {desplegarinfoProductos();}, 700);}
function printInfoProducto(name, text){
    infoProducto.innerText = '';
    tituloProducto.innerText = '';
    setTimeout(() => {infoProducto.innerText = text;tituloProducto.innerText = name;}, 700)
}

Mate.addEventListener("click", () => {productoClicked(Mate), printInfoProducto("Mate","info mate info mate info mate info mate info mate info mate info mate")});
Bombilla.addEventListener("click", () => {productoClicked(Bombilla), printInfoProducto("Bombilla","info bombilla info bombilla info bombilla")});
Termo.addEventListener("click", () => {productoClicked(Termo), printInfoProducto("Portatermos","info Portatermos info Portatermos info Portatermos")});
Cuchillo.addEventListener("click", () => {productoClicked(Cuchillo), printInfoProducto("Cuchillo","info cuchillos info cuchillos info cuchillos")});
Tabla.addEventListener("click", () => {productoClicked(Tabla), printInfoProducto("Tablas","info tablas info tablas info tablas")});

ocultarInformacionBtn.addEventListener("click", () => {resetGallery()});
