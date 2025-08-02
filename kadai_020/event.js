// h2要素とボタン要素を定数に代入
const textElement = document.getElementById("text");
const buttonElement = document.getElementById("btn");

// ボタンクリック時にh2の内容を変更する
buttonElement.addEventListener("click", function () {
  textElement.textContent = "ボタンをクリックしました";
});