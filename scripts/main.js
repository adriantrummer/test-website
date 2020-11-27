let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/website-drawing-scan.png') {
        myImage.setAttribute('src', 'images/download.jpg');
    }
    else {
        myImage.setAttribute('src', 'images/website-drawing-scan.png');
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Please enter your name.");

    if (!myName) {
        setUserName();
    }
    else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "That's my Test Website, " + myName;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
}
else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "That's my Test Website, " + storedName;
}

myButton.onclick = function () {
    setUserName();
}