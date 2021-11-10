let search = document.getElementById("searchIn");
let searchBtn = document.getElementById("srbtn");
let btnTime = document.getElementById("btnTime");

const goSearch = () => {
    let video = document.getElementById("video");
    let searchIn = document.getElementById("searchIn").value;
    searchIn = searchIn.replace('https://www.youtube.com/watch?v=', '');
    searchIn = searchIn.replace('https://youtu.be/', '');
    video.innerHTML = `<iframe src="https://www.youtube.com/embed/${searchIn}?&autoplay=1&loop=1" title="YouTube video player" enablejsapi=1 allowfullscreen></iframe>`;
}

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
    btnTime.style.cssText =
        `
        animation: Breathe 3s 0s infinite ;        
        border: none;
    `

    const timesup = () => {
        let video = document.getElementById("video");
        video.innerHTML = ``;
        btnTime.innerHTML = `Start`
        btnTime.style.cssText =
            `
        display: inline;
        width: 100px;
        height: 41px;
        border: 3px solid #0066FF;
        background-color: white;
        box-sizing: border-box;
        border-radius: 10px;
        font-size: 25px;
        color: #0066FF;
        cursor: pointer;
        position: relative;
        top: 2px;
        transition: 0.3s ease-in-out;
        `
        alert(`Ending, Good night`);
    }

    let hour = parseFloat(document.getElementById("hour").value);
    let min = parseFloat(document.getElementById("Min").value);

    if (isNaN(hour)) {
        hour = 0;
    }
    if (isNaN(min)) {
        min = 0;
    }

    let waitTime = ((hour * 60 * 60) + (min * 60)) * 1000;

    setTimeout(timesup, waitTime);
});