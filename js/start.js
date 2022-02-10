
// ibg
function ibg() {

   let ibg = document.querySelectorAll(".ibg");
   for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector('img')) {
         ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
      }
   }
}

ibg();
//

// бургер 
const iconMenu = document.querySelector('.header__burger');
if (iconMenu) {
   const menuBody = document.querySelector('.menu__body');
   iconMenu.addEventListener("click", function (e) {
      // document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   });
}
//

const chatMenu = document.querySelector('.header__chat_card');
if (iconMenu) {
   const chatBody = document.querySelector('.header__chat');
   chatBody.addEventListener("click", function (e) {
      // document.body.classList.toggle('_lock');
      chatBody.classList.toggle('_active');
      chatMenu.classList.toggle('_active');
   });
}

const bellMenu = document.querySelector('.header__bell_card');
if (iconMenu) {
   const bellBody = document.querySelector('.header__bell');
   bellBody.addEventListener("click", function (e) {
      // document.body.classList.toggle('_lock');
      bellBody.classList.toggle('_active');
      bellMenu.classList.toggle('_active');
   });
}



function zero_first_format(value) {
   if (value < 10) {
      value = '0' + value;
   }
   return value;
}

/* функция получения текущей даты и времени */
function date_time() {
   var current_datetime = new Date();
   var day = zero_first_format(current_datetime.getDate());
   var month = zero_first_format(current_datetime.getMonth() + 1);
   var year = current_datetime.getFullYear();
   // var hours = zero_first_format(current_datetime.getHours());
   // var minutes = zero_first_format(current_datetime.getMinutes());
   // var seconds = zero_first_format(current_datetime.getSeconds());

   return day + "." + month + "." + year + " ";
}

/* выводим текущую дату и время на сайт в блок с id "current_date_time_block" */
document.getElementById('current_date_time_block').innerHTML = date_time();


let screen = window.innerWidth;
console.log(screen);