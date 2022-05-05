/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2021-03-25 00:45:12
 * @version $Id$
 */

// 1 p1 Turn red
document.getElementById("p1").addEventListener('click', function (e) {
    this.style = "color:red";
});

// 2 add date
document.getElementsByTagName("li")[1].addEventListener('click', function (e) {
    var a = new Date();
    document.getElementsByTagName('h1')[0].innerHTML = a.getFullYear().toString() + '-' + (a.getMonth() + 1).toString() + '-' + a.getDate().toString();
});

// 3 add "fn-active"
document.getElementsByTagName("li")[2].addEventListener('click', function (e) {
    var a = this.parentElement.children;
    for (let i = 0; i < a.length; i++) {
        a[i].classList.add("fn-active");
    }
});

// 4 delete element p8
document.getElementsByTagName("li")[3].addEventListener('click', function (e) {
    var a = this.parentElement.children;
    for (let i = 0; i < a.length; i++) {
        if ("p8" === a[i].innerHTML) {
            a[i].remove();
        }
    }
});

// 5 open taobao.com
document.getElementsByTagName("li")[4].addEventListener('click', function (e) {
    window.open("https://www.taobao.com/");
});

// 6 add element p9
document.getElementsByTagName("li")[5].addEventListener('click', function (e) {
    var ul = document.getElementsByTagName("ul")[0];
    var li = document.createElement("li");
    li.innerHTML = "p9";
    ul.appendChild(li);
});

// 7 show li's number
    var ul = document.getElementsByTagName("ul")[0];
    var li = ul.children;
    for (let i = 0; i < li.length; i++) {
        li[i].addEventListener('click', function (e) {
            window.alert(this.innerHTML.charAt(1));
        })
    }


// 8 adjust the width
    var ul = document.getElementsByTagName("ul")[0];
    var li = ul.children;
    for (let i = 0; i < li.length; i++) {
        li[i].addEventListener('click', function (e) {
            if ("p7" === li[i].innerHTML) {
                document.getElementsByClassName("m-box")[0].style.width = document.body.clientWidth.toString() + "px";
            }
        })
    }


