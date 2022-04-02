// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector ('#value');
cont btns = document.querySelectorAll('#.btn');



btns.forEach(function (btn) {
    btn.addeeventlistener("click", function (e) {
        cont styles = e.currentTarget.classlist;
        if (styles.contains("decrease")) {
            count--;
        }
        value.textContent = count;
    });
});