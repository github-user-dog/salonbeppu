
//タスクリストの実態
var ul = document.getElementById('list');
var i = 0;
//Addが押されたとき
document.getElementById("add").addEventListener('click', function () {
    const task = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    //doneが押されたとき
    button.addEventListener('click', function () {
        //li要素削除
        ul.removeChild(task);
    });

    task.appendChild(span);
    task.appendChild(button);


    //textbox
    const NewTask = document.getElementById('task');

    //リストに追加、listに記録
    ul.appendChild(task);
    list.push(NewTask.value);

    //textboxの初期化
    NewTask.textContent = "";

    //文字入力
    span.textContent = list[list.length - 1];
    button.textContent = "done"

});

