window.onscroll = function () {
  if (document.documentElement.scrollTop > 100) {
    document.querySelector(".header-eipsa").classList.add("show-header");
    document.getElementById("logo-eipsa").src =
      "https://cdn.shopify.com/s/files/1/0040/8551/4369/files/Logo_EIPSA_color.svg?v=1660004820";
  } else {
    document.querySelector(".header-eipsa").classList.remove("show-header");
    document.getElementById("logo-eipsa").src =
      "https://cdn.shopify.com/s/files/1/0040/8551/4369/files/Logo_EIPSA_blanco.svg?v=1660004532";
  }
};
