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
    
    let hour = parseFloat(document.getElementById("hour").value);
    let min = parseFloat(document.getElementById("Min").value);

    if (isNaN(hour)) {
        hour = 0;
    }
    if (isNaN(min)) {
        min = 0;
    }

    min = min / 60;
    min.toFixed(1);
    hour = hour + min;

    const goTime = moment().add(hour, 'hours').format('HH:mm:ss');
    let nowTime = moment().format('HH:mm:ss');


    while (goTime !== nowTime) {
        nowTime = moment().format('HH:mm:ss');
    }

    console.log("Ending!!Go night");

    let video = document.getElementById("video");
    video.innerHTML = ``;

    alert("Ending!!Good night");
});