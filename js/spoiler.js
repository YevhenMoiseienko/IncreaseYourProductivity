$(document).ready(function() {
   $('.questions__question').click(function (event) {
       $(this).toggleClass('active').next().slideToggle(300);
   });
});