const mas = ["./img/1.jpg", "./img/2.jpg", "./img/3.jpg", "./img/4.jpg", "./img/5.jpg"]
// const mas = [1, 2, 3, 4, 5]
// obj.src = `./img/${to + 1}.jpg`
let to = -1;

function right_arrow() // Открытие следующей картинки
{
    let obj = document.querySelector(".image");
    if (to < mas.length - 1) to++
    else
        to = 0;
    obj.src = mas[to];
}

function left_arrow() // Открытие предыдущей картинки
{
    let obj = document.querySelector(".image");
    if (to > 0) to--;
    else
        to = mas.length - 1;
    obj.src = mas[to];
}