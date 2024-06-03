$(document).ready(function () {
    let count = 0;
    const countButton = $('#countButton');
    const resetButton = $('#resetButton');
    const counter = $('#counter');
    countButton.click(function () {
        count++
        counter.text(count);

    });
    resetButton.click(function () {
        counter.text('リセット押した');
    });
});