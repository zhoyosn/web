var num = 0;
$('body').on('click', '.m-button', (e) => {
Add(e);
})
$('body').on('click', '.m-del', (e) => {
Del(e);
})
function Add(e) {
let v = e.currentTarget;
let item = `<div class="m-content">
  <div class="m-num">${++num}</div>
  <div class="m-detal"></div>
  <div class="m-del">Delete</div>
</div>`
$(v).prev().append(item);
}
function Del(e) {
let v = e.currentTarget;
$(v).parent().remove();
num --;
update();
}
//*** 
function update() {
let contentList = $('.m-box').children();
let i = num;
contentList.map((index,item) => {
$(item).find('.m-num').text(num - (--i));
})
}