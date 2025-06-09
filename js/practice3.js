const inputForm = document.querySelector(".input-group__input");
const saveBtn = document.querySelector(".input-group__savebtn");
const deleteBtn = document.querySelector(".input-group__deletebtn");
const itemlist = document.querySelector(".standard-item__list")


//ローカリストレージのデータ取得とjSONデータオブジェクトもどす
function getItems() {
    const data = localStorage.getItem("standard-item");
    return data ? JSON.parse(data) : [];
}

//保存 JSONデータ文字列へ変換
function saveItems(items) {
    localStorage.setItem("standard-item", JSON.stringify(items));
}
//最初の画面
function renderInitialList() {
    const items = getItems();
    items.forEach(item => {
        itemlist.insertAdjacentHTML(
            "afterbegin",
            `<li>
            <input type="checkbox" class="item-checkbox">
            ${item}</li>`)
    })
}

//保存ボタンをおしたときのやつ
saveBtn.addEventListener("click", () => {
    const inputData = inputForm.value.trim();
    if (!inputData) return;

    const items = getItems();
    items.push(inputData);
    saveItems(items);
    itemlist.insertAdjacentHTML(
        "afterbegin",
        `<li>
        <input type="checkbox" class="item-checkbox">
        ${inputData}</li>
        `)

    inputForm.value = "";

});


// チェック付き削除ぼたん
deleteBtn.addEventListener("click", () => {
    const checkboxs = document.querySelectorAll(".item-checkbox");
    const items = getItems();
    const newItems = [];

    checkboxs.forEach((checkbox, index) => {
        if (!checkbox.checked) {
            newItems.push(items[index]);
        }
    })
    saveItems(newItems);
    itemlist.innerHTML = "";
    renderInitialList();
})

renderInitialList();