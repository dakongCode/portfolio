'use strict';

/* 화면이 스크롤되면 네비게이션 바를 분홍색 배경으로 바꾸기 */
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('navbar_dark');
  } else {
    navbar.classList.remove('navbar_dark');
  }
});

/* 탭 메뉴를 선택했을 때 특정 태그위치로 스크롤링 되기 -scrollIntoView 함수 */
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', function (e) {
  //   console.log(e.target); - 클릭하면 target이 나옴
  const target = e.target;
  const link = target.dataset.link;

  if (link == null) {
    //값이 undefind일 때 - 메뉴 중간 쯤 애매한 위치 클릭하면 나옴
    return; //값을 출력하지 x
  }
  //   console.log(e.target.dataset.link); //html에 data-link="#home"으로 지정
  //   scrollTo.scrollIntoView({ behavior: 'smooth' });
  navbarMenu.classList.remove('open'); //밑에 토글버튼과 연관

  scrollIntoView(link);

  //   function scrollIntoView(selector) {
  //     const scrollTo = document.querySelector(selector);
  //     scrollTo.scrollIntoView({ behavior: 'smooth' });
  //   }
});

/* 내비게이션 토글버튼 클릭 시 메뉴 나오게 */
const navbarToogleBtn = document.querySelector('.navbar__toogle_btn');
const navbarIcon = document.querySelector('.fa-bars');

navbarToogleBtn.addEventListener('click', function () {
  navbarMenu.classList.toggle('open');
  if(navbarMenu.classList.contains('open')){
    navbarIcon.setAttribute('class','fas fa-times');
  }else{
    navbarIcon.setAttribute('class','fas fa-bars');
  }
});

/* contact me 버튼 눌렀을 때 #contact 섹션으로 이동 */
const contactBtn = document.querySelector('.home__contact');

contactBtn.addEventListener('click', function () {
  scrollIntoView('#contact');
  // const scrollTo = document.querySelector('#contact');
  // scrollTo.scrollIntoView({ behavior: 'smooth' });
});

/* 스크롤이 되면 #home opacity가 연하게 */
const home = document.querySelector('#home');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

/* 스크롤 되면 Up버튼 보이고 클릭하면 최상단으로 이동하는 함수 */
const UpBtn = document.querySelector('.upBtn');

document.addEventListener('scroll', () => {
  if (homeHeight / 2 < window.scrollY) {
    UpBtn.classList.add('visible');
  } else {
    UpBtn.classList.remove('visible');
  }
});
UpBtn.addEventListener('click', function () {
  scrollIntoView('#home');
});

/* Projects */
const workBtnContainer = document.querySelector('.work_catagories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  /* 버튼 클릭되면 색이 바뀌도록 */
  const active = document.querySelector('.category__btn.selected');
  active.classList.remove('selected');
  const target =
    e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
  target.classList.add('selected');

  projectContainer.classList.add('anim-out');
  setTimeout(() => {
    projects.forEach((project) => {
      console.log(project.dataset.type);
      if (filter === '*' || filter === project.dataset.type) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anim-out');
  }, 300);
});

/* 스크롤 이동 함수 */
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}
