let timer;
document.getElementById("button").addEventListener('click', function () {
    let dt = moment(document.getElementById("calender").value);
    console.log(dt);
    if (dt) {

        if (timer) {
            clearInterval(timer);
        }


        console.log(dt);
        dt = moment(dt);
        timer = setInterval(function () {
            console.log("test");
            //const dt = moment([2112, 10, 3]);
            const diff = dt.diff(moment());
            const day = Math.floor(diff / (1000 * 60 * 60 * 24));

            /*
            const year = Math.floor(temp / 365);
            const month = Math.floor((temp - year * 365) / 31);
            const day = Math.floor((temp - year * 365 - month * 31))
            */


            const hoge = Math.floor((diff - day * 1000 * 60 * 60 * 24) / 1000);
            const hour = Math.floor(hoge / (60 * 60));
            const minute = Math.floor((hoge - hour * 60 * 60) / 60);
            const second = Math.floor(hoge - hour * 60 * 60 - minute * 60);
            document.getElementById("text").textContent =
                `${moment(dt).format("YY/MM/DD")}まで${day}日${hour}時間${minute}分${second}秒`;
        }, 1000);
    }

});


