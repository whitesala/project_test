let min = document.querySelectorAll('.min-photo li');
let max = document.querySelectorAll('.photos li');
let bt = document.querySelector('.bt');
let left = document.querySelector('.left-bt');
let right = document.querySelector('.right-bt');
let mainBox = document.querySelector('.photo_alter')


let index = 0;//定义图片的序号
let time;//计时

for(let i = 0; i < min.length; i++) {
    min[i].addEventListener('mouseenter', function(){
        common(i)
        index = i
    })
}

right.addEventListener('click', function(){
    index++
    index = index % min.length
    common(index)

})

left.addEventListener('click', function(){
    index--
    index = (min.length + index) % min.length
    common(index)

})

timer = setInterval(() => {
    right.click;
}, 1000);

mainBox.addEventListener('mouseenter',function(){
    clearInterval(timer)
})

mainBox.addEventListener('mouseleave',function(){
    timer = setInterval(() => {
        right.click;
    }, 1000);
})



function common(n){
    document.querySelector('.min-photos .active').classList.remove('active')
    min[n].classList.add('active')

    document.querySelector('.photos .active').classList.remove('active')
    max[n].classList.add('active')
}