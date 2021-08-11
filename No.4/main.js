let left = 10;
let ans;

//ボタンが押されたら
document.getElementById("button").addEventListener('click', function () {
    document.getElementById("text").value = "";
    //answer
    if (left === 10) {
        ans = SetAnswer();
    }
    console.log(ans);
    const number = document.getElementById("text").value - 0;
    let num = new Array(3);
    num[0] = number % 10;
    num[1] = ((number - num[0]) / 10) % 10;
    num[2] = (((number - num[0]) / 10 - num[1]) / 10) % 10;

    //数字に重複があるか
    if (((num[0] - num[1]) * (num[1] - num[2]) * (num[2] - num[0]) === 0) ||
        (number < 100) || (number >= 1000)) {
        alert("try again");
        return;
    } else {

        const eat = IsEAT(num, ans), bite = IsBITE(num, ans);
        if (eat === 3) {
            alert("EAT");
            left = 10;
            return;
        }
        else if (bite === 3) {
            alert("BITE");
        } else {
            alert(`${eat}EAT ${bite}BITE `);
        }

    }
    if ((--left === 0)) {
        alert(`game over`);
        left = 10;
    }
    console.log(left);
});

function IsEAT(ans, num) {
    let count = 0;

    for (let i = 0; i < 3; i++) {
        if (num[i] === ans[i]) {
            count++;
        }
    }
    return count;
}
function IsBITE(ans, num) {
    let count = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if ((num[i] === ans[j]) && (i != j)) {
                count++;
            }
        }
    }
    return count;
}

function SetAnswer() {
    let ans = Array(3);

    do {
        ans[0] = Math.floor(Math.random() * 10);
        ans[1] = Math.floor(Math.random() * 10);
        ans[2] = Math.floor(Math.random() * 10);
    } while (((ans[0] - ans[1]) * (ans[1] - ans[2]) * (ans[2] - ans[0]) === 0))

    return ans;
}