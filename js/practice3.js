const inputForm = document.querySelector(".input-group__input");
const saveBtn = document.querySelector(".input-group__savebtn");
const deleteBtn = document.querySelector(".input-group__deletebtn");
const itemlist = document.querySelector(".standard-item__list")



saveBtn.addEventListener("click", () => {
    const inputData = inputForm.value;
    localStorage.setItem("standard-item", inputData);
    inputForm.value = "";
});



deleteBtn.addEventListener("click", () => {
    localStorage.removeItem("standard-item");
})