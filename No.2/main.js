//スロットの個数
const slot = 3;
//それぞれのボタンがストップしているかどうか
var check = new Array(slot);
var num = new Array(slot);
//ストップボタンが何回押されたか
var count;
var timer, number = 9999;
var start = false;
//スタートボタンが押されたら
document.getElementById("start").addEventListener('click', function () {
    //初期化
    check.fill(false);
    num.fill(0);
    count = 0;
    number = 0;
    if (start === false) {
        timer = setInterval(ChangeNumber, 1000);
        start = true;
    }

});

//ストップボタンが押された時の動作
const elem = document.getElementsByClassName("stop");
for (let i = 0; i < slot; i++) {
    elem[slot - i - 1].addEventListener('click', function () {
        check[i] = true;
        count++;

        console.log(count);
        if (count === slot) {
            console.log(count);
            clearInterval(timer);
            if (number % 111 === 0) {
                alert("congratulations");
            } else {
                alert("try again");
            }
            start = false;
        }
    });
}

function ChangeNumber() {

    document.getElementById("number_previous").textContent = ('000' + number).slice(-1 * slot);

    for (let i = 0; i < slot; i++) {
        if (check[i] === false) {
            num[i] = (num[i] + 1) % 10;
        }
        //i桁目の数字取得
        number += (10 ** i) * num[i];
    }

    document.getElementById("number").textContent = ('000' + number).slice(-1 * slot);
    console.log(FollowingNumber());
    document.getElementById("number_following").textContent = ('000' + FollowingNumber()).slice(-1 * slot);

}


function FollowingNumber() {
    let numb;
    let hoge = 0;
    for (let i = 0; i < slot; i++) {
        if (check[i] === false) {
            numb = (num[i] + 1) % 10;
        } else {
            numb = num[i];
        }
        //i桁目の数字取得
        hoge += (10 ** i) * numb;
    }
    return hoge;

}
