// This setup ensures seamless looping without blank spaces
document.addEventListener("DOMContentLoaded", () => {
  const flowers = document.querySelector(".flowers");
  const flowerWidth = flowers.scrollWidth / 2; // Calculate total width of duplicate set

  // Reset animation when the loop completes
  flowers.addEventListener("animationiteration", () => {
    flowers.style.transform = `translateX(0)`;
  });

  flowers.style.transform = `translateX(-${flowerWidth}px)`;
});

document.addEventListener("DOMContentLoaded", () => {
  const leafContainer = document.querySelector(".leaves");

  // Generate 30 leaves
  for (let i = 0; i < 30; i++) {
    // Create an SVG element
    const leaf = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    leaf.setAttribute("viewBox", "0 0 1024 1024");
    leaf.setAttribute("class", "leaf");
    leaf.setAttribute("width", "20");
    leaf.setAttribute("height", "20");
    leaf.innerHTML = `
      <path d="M67.043226 726.78912c50.16576-284.59008 179.1232-390.20544 331.74016-432.5888 191.0016-53.1968 357.72416-15.0528 518.81984-90.86464 97.3312-45.80352 93.31712 36.41344 91.60704 49.62304-24.64768 190.30016-125.36832 371.57376-340.66944 457.6256-234.8288 93.80352-466.5856-79.87712-634.71104 193.34144a6.8096 6.8096 0 0 1-5.7856 3.2512H6.821786a6.79424 6.79424 0 0 1-6.05696-9.856c63.08352-125.28128 154.02496-233.14944 270.12608-319.14496 104.61696-77.40416 229.7856-137.50272 373.376-185.40032 11.6224-3.87584 6.71744-21.2992-5.21728-18.51904-110.1056 25.6512-209.59744 59.1616-301.952 111.80544-96.512 55.00416-185.2928 131.03104-270.0544 240.72704z" fill="#f88d07"></path>
    `;

    // Randomize position and animation delay
    leaf.style.position = "absolute";
    leaf.style.left = Math.random() * 120 - 10 + "vw";
    leaf.style.animationDelay = Math.random() * 5 + "s";
    leaf.style.animationDuration = 5 + Math.random() * 3 + "s"; //

    // Randomize size
    const size = Math.random() * 20 + 20;
    leaf.setAttribute("width", size);
    leaf.setAttribute("height", size);

    // Add to container
    leafContainer.appendChild(leaf);
  }
});
// Artist banner
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".banner-image-slider img");
  let currentIndex = 0;

  function showNextImage() {
    images[currentIndex].classList.remove("active");

    currentIndex = (currentIndex + 1) % images.length;

    images[currentIndex].classList.add("active");
  }

  if (images.length > 0) {
    images[currentIndex].classList.add("active");
    setInterval(showNextImage, 3000); //
  } else {
    console.error("No images found in .banner-image-slider!");
  }
});
// Artist-card-AB
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card-inner");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("is-flipped"); //
    });
  });
});

//back to top
document.addEventListener("DOMContentLoaded", () => {
  const backToTopButton = document.getElementById("back-to-top");

  if (window.scrollY > 300) {
    backToTopButton.classList.add("show");
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
