$(document).ready(function(){
  $('a[href=#]').click(function(){
    $.scrollTo(100,'slow');
    return false;
  });
});
