function showSceneryBox(imgSource, heading, description) {
    let display = document.getElementById("display");
    document.addEventListener('mousemove', displayFollowCamera);
    display.innerHTML = "<div class='wrapper'><img class='imgScene' src='" + imgSource + "'> "+ "<p class='building-name'>" + heading + "</p>" + description + "</p></div>";
}

function displayFollowCamera() {
    let display = document.getElementById("display");

    if (event.clientY > 350) {
        display.style.top = event.clientY - 150 + "px";
    } else {
        display.style.top = event.clientY + 50 + "px";
    }

    if (event.clientX > 900) {
        display.style.left = event.clientX - 300 + "px";
    } else {
        display.style.left = event.clientX + 50 + "px";
    }
}

function removeSceneryBox() {
    let display = document.getElementById('display')
    document.removeEventListener('mousemove', displayFollowCamera);
    display.removeChild(display.childNodes[0]);
}

function showMap() {
    const map = document.getElementById('map-container');
    const preface = document.getElementById('preface-container')
    const showbtn = document.getElementById('show-map');
    const bgimg = document.getElementById('bgimg')
    const body = document.getElementById('body')

    if (map.style.display == "flex"){
        map.style.display = "none"
        bgimg.style.display = "block"
        body.style.overflowY = "hidden"

    } else {
        map.style.display = "flex"
        bgimg.style.display = "none"
        body.style.overflowY = "scroll"
    }

    if (preface.style.display == "none"){
        preface.style.display = "grid"
    } else {
        preface.style.display = "none"

    }
}

$(function() {
    $('.map').maphilight();
});
$.fn.maphilight.defaults = {
fill: true,
fillColor: '000000',
fillOpacity: 0.4,
stroke: true,
strokeColor: '630000',
strokeOpacity: 1,
strokeWidth: 4,
fade: true,
alwaysOn: false,
neverOn: false,
groupBy: false,
wrapClass: true,
shadow: false,
shadowX: 0,
shadowY: 0,
shadowRadius: 6,
shadowColor: '000000',
shadowOpacity: 0.8,
shadowPosition: 'outside',
shadowFrom: false
}

