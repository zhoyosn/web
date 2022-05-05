var now = '1';
$('body').on('click', '.m-sbox1', (e)=>{
slideD(e);
})
$('body').on('click', '.m-sbox2', (e)=>{
slideD(e);
})
$('body').on('click', '.m-sbox3', (e)=>{
slideD(e);
})
function slideD(e) {
let t = e.currentTarget;
let next = $(t).attr('box_num');
//颜色
$(t).parent().find('.focus').removeClass('focus');
$(t).addClass('focus');
//内容
let contentList = $(t).parent().next().children();
contentList.map((index,item)=>{
let id = $(item).attr('box_num');
console.log(id);
if ( id == now) {
$(item).addClass('hide');
}
if ( id == next) {
$(item).removeClass('hide');
}
})
// 当前所处位置变化
now = next;
}