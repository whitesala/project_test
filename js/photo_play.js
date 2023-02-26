let bt = document.querySelector('.bt');
let left = document.querySelector('.left-bt');
let right = document.querySelector('.right-bt');
let photos = document.querySelector('.photos');
let min = document.querySelectorAll('.min-img');

let index = 0;//����ͼƬ�����
let time;//��ʱ

bt.style.display = 'none';
photos.addEventListener('mouseenter', ()=>{
    bt.style.display = 'block';
});


function showPhotos(){
    photos.style.left = (index * -100) + "%";
}

function rightMove(){
    if (index > min.length - 1) index = 0;
    index ++;
}

function leftMove(){
    if (index < 1) index = min.length;
    index --;
}

function timer(){
    time = setInterval(() => {
        index ++;
        rightMove();
        leftMove();
        showPhotos();
    },3000);
}

right.addEventListener('click', ()=>{
    rightMove();
    showPhotos();
    clearInterval(time);
    timer();
});

left.addEventListener('click', ()=>{
    leftMove();
    showPhotos();
    clearInterval(time);
    timer();
});

for (let i = 0;i < min.length;i++){
    min[i].addEventListener('mouseenter',() => {
        index = i;
        showPhotos();
        clearInterval(time);
        timer();
    })
}
timer();