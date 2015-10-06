/*  Ma Scripz */

$(document).ready(function(){
  //$('.first').hide();
  //$('.last').hide();
  var firstName = prompt("What is your first name?");
  var lastName = prompt("What about your last name?");
  //$('.first').text(firstName);
  //$('.last').text(lastName);
  //$('.first').show();
  //$('.last').show();
  $('.first').lettering();
  $('.last').lettering();
})