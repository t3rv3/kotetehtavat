// set initial count
let count = 0;

// select valua and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
        count--;
    } else if (styles.contains("increase")) {
        count++;
    } else {
      count = 0;
    }
    if (count > 0) {
        value.style.color = "purple";
    }
    if (count < 0) {
        value.style.color = "cyan";
    }
    if (count === 0){
        value.style.color = "#123";
    }

    value.textContent = count;
});
});
// Tuomas Kilpeläinen