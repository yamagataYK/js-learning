const notification = document.getElementById("notification");
const cancel = document.getElementById("cancel");
const sidebar = document.querySelector(".sidebar");

notification.addEventListener("click", () => {
    sidebar.classList.add("show");
});


cancel.addEventListener("click", () => {
    sidebar.classList.remove("show");
});
