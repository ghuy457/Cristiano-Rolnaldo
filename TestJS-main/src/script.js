function pickImage() {
  const options = ["img1.jpg", "img2.jpg", "img3.jpg"];

  const randomIndex = Math.floor(Math.random() * options.length);

  const randomImg = "img/" + options[randomIndex];

  const img = document.querySelector("#header_image");

  img.setAttribute("src", randomImg);
}
