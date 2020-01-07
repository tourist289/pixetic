(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

document.addEventListener('DOMContentLoaded', function () {
  console.log('0_o');
  $('.js-img-link').on('click', function () {
    $('.form__img_wrapper').trigger('click');
    $('.form__img_wrapper').on('change', function (e) {
      if (e.target.files.length > 0) {
        var filename = e.target.files[0].name;
        $(this).find('.name-holder').text(filename);
        $('.js-img-link').hide();
        $(this).addClass('active');
      } else {
        $(this).find('.name-holder').text('');
        $('.js-img-link').show();
        $(this).removeClass('active');
      }
    });
  }); // $('.cards__tabs > div').on('click', function () {
  //     let tabId = $(this).attr('data-tab');
  //
  //     $('.cards__wrapper').attr('data-tab', tabId);
  //     $(this).siblings().removeClass('active');
  //     $(this).addClass('active');
  // });

  document.querySelectorAll('.cards__tabs > div').forEach(function (element) {
    element.addEventListener('click', function (e) {
      var tabId = this.attributes['data-tab'].value;
      document.getElementsByClassName('cards__wrapper')[0].attributes['data-tab'].value = tabId;
      document.querySelectorAll('.cards__tabs > div').forEach(function (element) {
        element.classList.remove('active');
      });
      this.classList.add('active');
    });
  });
}); //************  Masked Input

$('.js-masked').mask('+38(999)999-99-99', {
  placeholder: "+38 (000) 000-00-00"
});
$('.js-masked-date').mask('99/9999', {
  placeholder: "mm/yyyy"
}); //============  Masked Input END

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQUVBLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBVztBQUNyRCxFQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksS0FBWjtBQUdBLEVBQUEsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQixFQUFsQixDQUFxQixPQUFyQixFQUE4QixZQUFZO0FBQ3RDLElBQUEsQ0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0IsT0FBeEIsQ0FBZ0MsT0FBaEM7QUFDQSxJQUFBLENBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCLEVBQXhCLENBQTJCLFFBQTNCLEVBQXFDLFVBQVUsQ0FBVixFQUFhO0FBRTlDLFVBQUcsQ0FBQyxDQUFDLE1BQUYsQ0FBUyxLQUFULENBQWUsTUFBZixHQUF3QixDQUEzQixFQUE2QjtBQUN6QixZQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBRixDQUFTLEtBQVQsQ0FBZSxDQUFmLEVBQWtCLElBQWpDO0FBQ0EsUUFBQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVEsSUFBUixDQUFhLGNBQWIsRUFBNkIsSUFBN0IsQ0FBa0MsUUFBbEM7QUFDQSxRQUFBLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0IsSUFBbEI7QUFDQSxRQUFBLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUSxRQUFSLENBQWlCLFFBQWpCO0FBQ0gsT0FMRCxNQUtPO0FBQ0gsUUFBQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVEsSUFBUixDQUFhLGNBQWIsRUFBNkIsSUFBN0IsQ0FBa0MsRUFBbEM7QUFDQSxRQUFBLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0IsSUFBbEI7QUFDQSxRQUFBLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUSxXQUFSLENBQW9CLFFBQXBCO0FBQ0g7QUFDSixLQVpEO0FBYUgsR0FmRCxFQUpxRCxDQXNCckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBQSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsb0JBQTFCLEVBQWdELE9BQWhELENBQXdELFVBQUEsT0FBTyxFQUFJO0FBQy9ELElBQUEsT0FBTyxDQUFDLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFVBQVUsQ0FBVixFQUFhO0FBQzNDLFVBQUksS0FBSyxHQUFHLEtBQUssVUFBTCxDQUFnQixVQUFoQixFQUE0QixLQUF4QztBQUNBLE1BQUEsUUFBUSxDQUFDLHNCQUFULENBQWdDLGdCQUFoQyxFQUFrRCxDQUFsRCxFQUFxRCxVQUFyRCxDQUFnRSxVQUFoRSxFQUE0RSxLQUE1RSxHQUFvRixLQUFwRjtBQUNBLE1BQUEsUUFBUSxDQUFDLGdCQUFULENBQTBCLG9CQUExQixFQUFnRCxPQUFoRCxDQUF3RCxVQUFBLE9BQU8sRUFBSTtBQUMvRCxRQUFBLE9BQU8sQ0FBQyxTQUFSLENBQWtCLE1BQWxCLENBQXlCLFFBQXpCO0FBQ0gsT0FGRDtBQUdBLFdBQUssU0FBTCxDQUFlLEdBQWYsQ0FBbUIsUUFBbkI7QUFDSCxLQVBEO0FBUUgsR0FURDtBQVVILENBeENELEUsQ0EyQ0E7O0FBQ0EsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQixJQUFoQixDQUFxQixtQkFBckIsRUFBeUM7QUFBQyxFQUFBLFdBQVcsRUFBRTtBQUFkLENBQXpDO0FBQ0EsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUIsSUFBckIsQ0FBMEIsU0FBMUIsRUFBb0M7QUFBQyxFQUFBLFdBQVcsRUFBRTtBQUFkLENBQXBDLEUsQ0FFQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIid1c2Ugc3RyaWN0JztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKCcwX28nKTtcblxuXG4gICAgJCgnLmpzLWltZy1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuZm9ybV9faW1nX3dyYXBwZXInKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAkKCcuZm9ybV9faW1nX3dyYXBwZXInKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcblxuICAgICAgICAgICAgaWYoZS50YXJnZXQuZmlsZXMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgbGV0IGZpbGVuYW1lID0gZS50YXJnZXQuZmlsZXNbMF0ubmFtZTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5uYW1lLWhvbGRlcicpLnRleHQoZmlsZW5hbWUpO1xuICAgICAgICAgICAgICAgICQoJy5qcy1pbWctbGluaycpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcubmFtZS1ob2xkZXInKS50ZXh0KCcnKTtcbiAgICAgICAgICAgICAgICAkKCcuanMtaW1nLWxpbmsnKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG5cbiAgICAvLyAkKCcuY2FyZHNfX3RhYnMgPiBkaXYnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgLy8gICAgIGxldCB0YWJJZCA9ICQodGhpcykuYXR0cignZGF0YS10YWInKTtcbiAgICAvL1xuICAgIC8vICAgICAkKCcuY2FyZHNfX3dyYXBwZXInKS5hdHRyKCdkYXRhLXRhYicsIHRhYklkKTtcbiAgICAvLyAgICAgJCh0aGlzKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAvLyAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgLy8gfSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZHNfX3RhYnMgPiBkaXYnKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGxldCB0YWJJZCA9IHRoaXMuYXR0cmlidXRlc1snZGF0YS10YWInXS52YWx1ZTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhcmRzX193cmFwcGVyJylbMF0uYXR0cmlidXRlc1snZGF0YS10YWInXS52YWx1ZSA9IHRhYklkO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRzX190YWJzID4gZGl2JykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9KVxuICAgIH0pXG59KTtcblxuXG4vLyoqKioqKioqKioqKiAgTWFza2VkIElucHV0XG4kKCcuanMtbWFza2VkJykubWFzaygnKzM4KDk5OSk5OTktOTktOTknLHtwbGFjZWhvbGRlcjogXCIrMzggKDAwMCkgMDAwLTAwLTAwXCJ9KTtcbiQoJy5qcy1tYXNrZWQtZGF0ZScpLm1hc2soJzk5Lzk5OTknLHtwbGFjZWhvbGRlcjogXCJtbS95eXl5XCJ9KTtcblxuLy89PT09PT09PT09PT0gIE1hc2tlZCBJbnB1dCBFTkRcbiJdfQ==
