let customSlideIndex = 0;

function mudarSlideCustom(n) {
  const slides = document.querySelectorAll(".custom-slide-item");
  const totalSlides = slides.length;
  const carrossel = document.querySelector(".custom-carrossel");

  let slidesToShow;

  if (window.innerWidth < 576) {
    slidesToShow = 1;
  } else if (window.innerWidth >= 576 && window.innerWidth <= 700) {
    slidesToShow = 2;
  } else {
    slidesToShow = 3;
  }

  customSlideIndex += n;

  if (customSlideIndex > totalSlides - slidesToShow) {
    customSlideIndex = 0; // Retorna ao início
  } else if (customSlideIndex < 0) {
    customSlideIndex = totalSlides - slidesToShow;
  }

  const translateValue = -customSlideIndex * (100 / slidesToShow);
  carrossel.style.transform = `translateX(${translateValue}%)`;
}

window.addEventListener("resize", () => mudarSlideCustom(0));

document.addEventListener("DOMContentLoaded", () => {
  const spraySection = document.getElementById("contato");
  const animatedImage = document.getElementById("animatedImage");
  const contactButton = document.getElementById("contactButton");
  const formWrapper = document.getElementById("formWrapper");
  const textoRevelado = document.getElementById("texto-revelado");
  const vassoura = document.getElementById("vassoura");

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom > 0
    );
  }

  function checkAnimation() {
    if (isElementInViewport(spraySection)) {
      animatedImage.style.opacity = "1";
      animatedImage.style.animationPlayState = "running";
      animatedImage.addEventListener("animationend", () => {
        contactButton.style.display = "block";
        contactButton.style.opacity = "1";
      });
      window.removeEventListener("scroll", checkAnimation); // Remove o listener após a animação iniciar
    }
  }

  // Pausa a animação inicialmente
  animatedImage.style.animationPlayState = "paused";

  // Verifica a animação ao carregar a página
  window.onload = checkAnimation;

  // Verifica a animação ao rolar a página
  window.addEventListener("scroll", checkAnimation);

  vassoura.addEventListener("animationend", () => {
    textoRevelado.style.opacity = "1";
  });

  contactButton.addEventListener("click", () => {
    formWrapper.style.display = "flex";
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  document.querySelectorAll(".button").forEach((button) => {
    button.addEventListener("click", () => {
      const content = document.getElementById("extraContent");
      content.style.display =
        content.style.display === "none" || content.style.display === ""
          ? "block"
          : "none";
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menuIcon");
  const sideMenu = document.getElementById("sideMenu");

  menuIcon.addEventListener("click", (event) => {
    event.stopPropagation();
    sideMenu.classList.toggle("active"); 
  });

  // Fecha o menu ao clicar em qualquer link dentro dele
  sideMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      sideMenu.classList.remove("active");
    });
  });

  
  document.addEventListener("click", (event) => {
    if (!sideMenu.contains(event.target) && !menuIcon.contains(event.target)) {
      sideMenu.classList.remove("active");
    }
  });


  sideMenu.addEventListener("click", (event) => {
    event.stopPropagation(); 
  });
});
