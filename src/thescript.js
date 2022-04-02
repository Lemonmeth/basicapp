// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector ('#value');
const btns = document.querySelectorAll('#.btn');



btns.forEach(function (btn) {
    btn.addeeventlistener("click", function (e) {
        const styles = e.currentTarget.classlist;
        if (styles.contains("decrease")) {
            count--;
        }
        value.textContent = count;
    });
});