let search = document.getElementById("searchIn");
let searchBtn = document.getElementById("srbtn");
let languege = document.getElementById('languegeEn');
let btnTime = document.getElementById("btnTime");


const Notice = () => {
    window.location.assign('./Notice.html');
}

const goSearch = () => {
    let video = document.getElementById("video");
    let searchIn = document.getElementById("searchIn").value;
    searchIn = searchIn.replace('https://www.youtube.com/watch?v=', '');
    searchIn = searchIn.replace('https://youtu.be/', '');
    video.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${searchIn}" title="YouTube video player" enablejsapi=1></iframe>`;
}

languege.addEventListener('click', () => {
    let languege = document.getElementById('languegeEn');
    languege.innerHTML = `English`;
    
    languege.addEventListener("click", () => {
        window.location.assign(location);
    });

    const Time = document.getElementById('time');    
    
    Time.innerHTML = ` <h1>時間設定</h1>
    <input id="hour" type="text" placeholder="小時">
    <input id="Min" type="text" placeholder="分鐘">
    <button id="btnTime">開始</button>
    <br>
    <div id="notice">
        <img src="img/exclamation-circle-solid.svg" alt="!">
        <p>按下開始按鈕就開始倒數囉，記得開始播放音樂(started是指已經開始了)</p>
    </div>`;

    let btnTime = document.getElementById("btnTime");
    btnTime.addEventListener("click", () => {
        console.log("start");
        btnTime.innerHTML = `Started`
        
        const timesup = () => {                            
            let video = document.getElementById("video");  
            video.innerHTML = ``;                          // 這裡先自訂timesup函數的內容
            btnTime.innerHTML = `開始`
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
});

searchBtn.addEventListener("click", () => {
    goSearch();
});

search.addEventListener("keydown", (e) => {
    if (e.keyCode == 13) {
        goSearch();
    }
});

btnTime.addEventListener("click", () => {
    console.log("start");
    btnTime.innerHTML = `Started`
    const timesup = () => {                            
        let video = document.getElementById("video");  
        video.innerHTML = ``;                          // 這裡先自訂timesup函數的內容
        btnTime.innerHTML = `Start`
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