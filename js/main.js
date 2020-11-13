$(function(){
  $('.blog__slider').slick({
    dots: true,
    arrows: false,
  })

  $('.menu__btn, .menu a').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
  })

  $(document).ready(function(){
    $(".menu").on("click","a", function (event) {
      //отменяем стандартную обработку нажатия по ссылке
      event.preventDefault();
  
      //забираем идентификатор бока с атрибута href
      var id  = $(this).attr('href'),
  
      //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
      
      //анимируем переход на расстояние - top за 1500 мс
      $('body,html').animate({scrollTop: top}, 1500);
    });
  });
  $(".header__top").headroom({
    onPin : function() {},
  });

  // var myElement = document.querySelector(".header__top");

  // var headroom  = new Headroom(myElement);

  // headroom.init();
  

  var mixer = mixitup('.gallery__images');
});