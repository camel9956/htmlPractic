let cards = document.querySelectorAll(".card");
console.log(cards); //NodeList(5)，五個區塊共五個節點
console.log(cards[0]); //div.card.active這個節點
cards.forEach((card) => {
  //箭頭函式中若只有一個參數，可以省略括號( )不寫
  card.addEventListener("click", () => {
    removeActiveClasses(); //把原本的active先移除
    card.classList.add("active"); //再新增active到點擊的圖片上
  });
});

// 移除active
function removeActiveClasses() {
  cards.forEach((card) => {
    card.classList.remove("active");
  });
}
