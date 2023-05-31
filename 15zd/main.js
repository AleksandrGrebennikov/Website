const lightModeButton = document.getElementById('light-mode-button');
const darkModeButton = document.getElementById('dark-mode-button');
const itemBlock = document.getElementById('items');

function setLightTheme() {
    document.body.style.backgroundColor = 'white';
    itemBlock.style.color = 'MediumSlateBlue';
}

function setDarkTheme() {
    document.body.style.backgroundColor = 'MediumSlateBlue';
    itemBlock.style.color = 'white';
}

lightModeButton.addEventListener('click', setLightTheme);
darkModeButton.addEventListener('click', setDarkTheme);

const categories = {
  token: ["1", "5"],
  watch: ["3"],
  clothes: ["4", "8"],
  poster: ["2","6","7"],
};

function updateProductCards(event) {
  const category = event.target.id;
  const ids = categories[category];

  Array.from(itemBlock.children).forEach((div) => {
    const div_id = div.id;
    if (ids.includes(div_id)) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  });
}
token.addEventListener("click", updateProductCards);
watch.addEventListener("click", updateProductCards);
clothes.addEventListener("click", updateProductCards);
poster.addEventListener("click", updateProductCards);
