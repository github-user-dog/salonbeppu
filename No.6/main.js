let rand, count = 0;
const hoge = [1, 1, 2, 2, 3, 3, 4, 4];
let ans = [];
let first = -1, second = -1;
const images = document.getElementsByClassName("image");
//答えを作る
let array = new Array(8);

for (let i = 0; i < 8; i++) {


    do {
        rand = Math.floor(Math.random() * 8);
    } while (array.includes(rand))
    array[i] = rand;
    ans.push(hoge[rand]);
    console.log(`ans:${ans},array:${array}`);

}

for (let i = 0; i < 8; i++) {
    images[i].addEventListener(`click`, function () {
        //裏返す
        images[i].src = "image2.jpg";
        //選んだカード記憶
        if (first === -1) {
            first = i;

        } else {
            second = i;
            console.log(`first${first},second${second}`);
            if (ans[first] === ans[second]) {
                //カード削除
                images[first].remove();
                images[second].remove();
                count++;
            }
            if (count === 4) {
                alert("finish!");
                return;
            }
            first = -1;
            second = -1;
        }

    });
}
