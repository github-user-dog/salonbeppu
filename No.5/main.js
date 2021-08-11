
let table = document.getElementById("BINGO");
let array = [], arr = [];

//代入用の二次元配列を準備
for (let i = 0; i < 5; i++) {
    array.push(GenerateRandom(i * 15));
}
array[2][2] = -1; //free

for (let i = 0; i < 5; i++) {
    for (let j = 1; j < 6; j++) {
        //行と列の逆転
        table.rows[j].cells[i].innerHTML = array[i][j - 1];
    }
}

table.rows[3].cells[2].innerHTML = "free" //freeを代入


//何から何までの数字を発生させるか調整のadjust
function GenerateRandom(adjust) {
    //10個分の配列
    let array = []
    let rand;

    for (let i = 0; i < 5; i++) {
        //重複なし1~15を発生させる
        do {
            rand = Math.floor(Math.random() * 15) + 1;

        } while (array.includes(rand + adjust))

        array.push(rand + adjust);

    }
    return array;

}


document.getElementById("button").addEventListener(`click`, function () {
    let rand;

    //重複の内容に乱数生成
    do {
        rand = Math.floor(Math.random() * 75) + 1;
    } while (arr.includes(rand))
    arr.push(rand);

    const index = [];
    console.log(rand);
    for (let i = 0; i < 5; i++) {
        if (array[i].includes(rand)) {
            index.push(array[i].indexOf(rand) + 1);
            index.push(i);
        }
    }
    if (index.length != 0) {
        alert(rand);
        table.rows.item(index[0]).cells.item(index[1]).style.backgroundColor = "red";
    }

});
