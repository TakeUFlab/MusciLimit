let search = document.getElementById("searchIn");
let searchBtn = document.getElementById("srbtn");
let github = document.getElementById("gitdiv");
let what = document.getElementById("what");
let closeFirstTab = document.getElementById("close");

closeFirstTab.addEventListener("click", () => {
    let first = document.getElementById("first");
    first.style.cssText = 'display: none;'
})


what.addEventListener("click", () => {
    window.location.assign('./Notice.html');
});

const Notice = () => {
    window.location.assign('./Notice.html');
}

github.addEventListener("click", () => {
    window.location.assign('https://github.com/TakeUFlab/MusciLimit');
});

const goSearch = () => {
    let video = document.getElementById("video");
    let searchIn = document.getElementById("searchIn").value;
    video.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${searchIn}" title="YouTube video player" enablejsapi=1></iframe>`;
}

searchBtn.addEventListener("click", () => {
    goSearch();
});

search.addEventListener("keydown", (e) => {
    if (e.keyCode == 13) {
        goSearch();
    }
});

let btnTime = document.getElementById("btnTime");

btnTime.addEventListener("click", () => {
    console.log("start");
    
    const timesup = () => {                            
        let video = document.getElementById("video");  
        video.innerHTML = ``;                          // 這裡先自訂timesup函數的內容

        alert(`Ending, Good night`);                   
    }

    let hour = parseFloat(document.getElementById("hour").value); //獲取hour值
    let min = parseFloat(document.getElementById("Min").value);   //獲取min值

    if (isNaN(hour)) {
        hour = 0;      //假如hour是空值(NaN)就把hour設回0
    }
    if (isNaN(min)) {
        min = 0;       //假如min值是空值(NaN)就把min設為0
    }

    let waitTime = ((hour*60*60)+(min*60))*1000;  //設定要倒數的時間(毫秒)

    setTimeout(timesup, waitTime);    //回呼函數 等待waitTime，時間到時執行timesup函數
});                                   //因為這是回呼函數所以在計時的時候不會阻塞其他函數的功能D