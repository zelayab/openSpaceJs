function checkPassword() {
    if (document.getElementById("password").value === "TrustNo1") {

        let inputArray = document.querySelectorAll("input");
        inputArray.forEach(function (inputElement) {
            inputElement.disabled = !(inputElement.hasAttribute("disabled") && (inputElement.id !== "launch_button"));
        });

    } else {
        document.getElementById("password").value = "";
    }
}


function checkLaunch() {
    let activateLaunch = true;
    let inputArray = document.querySelector(".check-buttons").childNodes;
    inputArray.forEach(function (inputElement) {
        if (inputElement.type === "checkbox" && inputElement.value === false) {
            activateLaunch = false;
        }
    });

    inputArray = document.querySelector(".levers").childNodes;
    inputArray.forEach(function (inputElement) {
        if (inputElement.type === "range" && inputElement.value !== "100") {
            activateLaunch = false;
        }
    });

    if (activateLaunch) {
        document.getElementById("launch_button").disabled = false;
    }
}


function launchRocket() {
    let rocket = document.querySelector(".rocket");
    let rocketWidth = rocket.getBoundingClientRect().width;
    let rocketHeight = rocket.getBoundingClientRect().height;
    let rocketRight = getComputedStyle(rocket).right.slice(0, -2);
    let rocketTop = getComputedStyle(rocket).top.slice(0, -2);

    let animation = setInterval(function () {

        if (rocketRight <= -rocketWidth || rocketTop <= -rocketHeight) {
            clearInterval(animation);
        } else {
            rocketTop = rocketTop - 10;
            rocketRight = rocketRight - 10 * Math.tan(25 * Math.PI / 180);

            rocket.style.right = rocketRight + "px";
            rocket.style.top = rocketTop + "px";
        }
    }, 20)
}
