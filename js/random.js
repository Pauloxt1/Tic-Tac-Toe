$(document).ready(function(){

var xo = $('.xo');
var now = 'O';
var SpanNow = $('#now');
var val = xo.attr('val');
var win = 0;
SpanNow.html(now);

xo.click(function(){
  if($(this).html() === '' && win != 'O' && win != 'X'){
    $(this).html(now);
    ChangePlayer(now);
  }
});

function ChangePlayer(player){
    if(player === 'O'){
      now = 'X'
      SpanNow.html(now)
    } else {
      now = 'O'
      SpanNow.html('O');
    }
}

setInterval(function(){
  if(win === 0){  
   var value0 = $('#0').html();
   var value1 = $('#1').html();
   var value2 = $('#2').html();
   var value3 = $('#3').html();
   var value4 = $('#4').html();
   var value5 = $('#5').html();
   var value6 = $('#6').html();
   var value7 = $('#7').html();
   var value8 = $('#8').html();
   
    if(value0 === 'O' && value1 ==='O' && value2 ==='O' || value0 === 'X' && value1 ==='X' && value2 ==='X'){
       win = value0;        
   } else if(value3 === 'O' && value4 === 'O' && value5 === 'O' || value3 === 'X' && value4 === 'X' && value5 === 'X' ){
       win = value3;
   } else if(value6 === 'O' && value7 === 'O' && value8 === 'O' || value6 === 'X' && value7 === 'X' && value8 === 'X' ){
       win = value6;
   } else if(value0 === 'O' && value4 === 'O' && value8 === 'O' || value0 === 'X' && value4 === 'X' && value8 === 'X'){
       win = value0;
   } else if(value2 === 'O' && value4 === 'O' && value6 === 'O' || value2 === 'X' && value4 === 'X' && value6 === 'X' ){
       win = value2;
   } else if(value2 === 'O' && value5 === 'O' && value8 === 'O' || value2 === 'X' && value5 === 'X' && value8 === 'X' ){
       win = value2;
   } else if(value0 === 'O' && value3 === 'O' && value6 === 'O' || value0 === 'X' && value3 === 'X' && value6 === 'X' ){ 
       win = value0;
   } else if(value1 === 'O' && value4 === 'O' && value7 === 'O' || value1 === 'X' && value4 === 'X' && value7 === 'X' ){
       win = value1;
   } else if( value1 != '' && value2 != '' && value3 != '' && value4 != '' && value5 != '' && value6 != '' && value7 != '' && value8 != ''){
     win = 'nothing';   
   }   

} else {
  if(win != 'nothing'){
   $('#hd').html('Congratulations to the player: <b class="win">'+win+ '<b/>');
 } else {
   $('#hd').html('<b class="win">Neither player won the game.<b/>');
 }
} 
},100);

});