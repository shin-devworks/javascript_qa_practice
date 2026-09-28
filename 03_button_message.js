const button = document.getElementById("checkButton");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.textContent = "確認が完了しました";
  button.textContent = "確認済み";
  button.disabled = true;
});