const input = document.querySelector(".add-task>.input");

const button = document.querySelector(".add-task >button");

const itemsContanier = document.querySelector("items");

function addTask(input) {
  const todo = input.value;

  itemsContanier.innerHTML += `
    <div class="items">
      <p>record new video</p>
      <button class="button2">
        <img src="4140207.png" alt="poubelle" class="image" />
        <img src="776203.png" alt="stylo" class="image" />
      </button>
    </div>
  `;
  input.value = "";
}
button.addEventListener("click", function () {
  addTask(input);
});
document.body.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask(input);
  }
});
