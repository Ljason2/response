
import $ from 'jquery'

$(function(){

let windowW=$(window).width()

if(1160<=windowW){
    nav()
    submenu()
}
else if(980 <= windowW && windowW < 1159){
    nav()
    submenu()
}

else if(580 <=windowW && windowW<979){
    tNav()
}

else if(windowW<579){
    tNav()
}

// 공통


// reset

})

//  web nav
function nav(){

$('header nav li>a').on('click',function(e){
    const navA=$(this).attr('href');
    const aPos= $(navA).offset().top ;
    const headerHeight =$('header').innerHeight();
    $('html,body').animate({scrollTop:aPos - headerHeight},800);
    return false;
})
}
// table,mobil nav
function tNav(){

    let navW=$('header nav').width()

        // .btn click
    $('header .btn').on('click',function(e){
        $('header nav').animate({left:0},500)
        $(this).hide()

    })



    // scroll

    $('nav li>a').on('click',function(e){
        const navA=$(this).attr('href');
        const aPos= $(navA).offset().top ;
        const headerHeight =$('header').innerHeight();
        $('html,body').animate({scrollTop:aPos - headerHeight},800);
        $('nav').css('left','-'+navW+'px')
        $('header .btn').show();
        return false;
    })


    // close

    $('nav .close').on('click',function(e){
        $('nav').css('left','-'+navW+'px')
        $('header .btn').show();
    })
}


function submenu(){
// html 연결
//jquery 
$('#submenu li>a').on('click',function(e){
const liA=$(this).attr('href');
const bPos=$(liA).offset().top;
const headerHeight=$('header').innerHeight();
$('html,body').animate({scrollTop:bPos- headerHeight},800);
return false;
}
)
}


















console.log('welcome')


// DOM Object
const h4=document.querySelector('#modal h4');
const img=document.querySelector('#modal figure>img');
const day=document.querySelector('#modal dl .year');
const pro=document.querySelector('#modal dl .program');
const url=document.querySelector('#modal dl .link>a');
const content=document.querySelector('#modal dl .text');

const open=document.querySelectorAll('#all>figure')
// console.log(open)
const close=document.querySelector('#modal>.close')
// console.log(close)
const modal=document.querySelector('#modal')



// 객체를 생성자 함수로 만들 것
function Modal(title,pic,year,program,href,text){
    this.title=title;
    this.pic=pic;
    this.year=year;
    this.program=program;
    this.href=href;
    this.text=text;
}






// 매서드

// 객체안에 있는 정보를 수정하는 행위
Modal.prototype.action=function(){
h4.innerHTML=this.title;
img.setAttribute('src',this.pic);
day.innerHTML=this.year;
pro.innerHTML=this.program;
url.setAttribute('href',this.href);
url.innerHTML=this.href;
content.innerHTML=this.text;
}



// 인스턴스
let myModal=[
new Modal('title01','./images/pic01.png','2022','프로그램1','http://aaa1.com','내용1'),
new Modal('title02','./images/pic02.png','2021','프로그램2','http://aaa2.com','내용2'),
new Modal('title03','./images/pic03.png','2023','프로그램3','http://aaa3.com','내용3'),
new Modal('title04','./images/pic04.png','2024','프로그램4','http://aaa4.com','내용4'),
new Modal('title05','./images/pic01.png','2025','프로그램5','http://aaa5.com','내용5'),
new Modal('title06','./images/pic02.png','2026','프로그램6','http://aaa6.com','내용6')
]






// event->작업 ->click(figure,figure>img,#modal>.close)


// 여러개를 클릭해야되니까 forEach를 써야함.
open.forEach(function(item,index){
item.onclick=function(){
    modal.style.display='block'
    myModal[index].action();
}
})


// 한개만 클릭해도 되니까 forEach 안씀.
close.onclick=function(){
    modal.style.display='none';
}

