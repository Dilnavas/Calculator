function btnClick(val) {
  $(".display").val($(".display").val() +  val);
}
function btnClear() {
  $(".display").val("");
}
function result() {
  var x = $(".display").val();
  var result = eval(x);
  $(".display").val(result);
}
function percentage() {
  var x = parseInt($(".display").val());
  var result = x/100;
  $(".display").val(result);
}
function plusorminus() {
  var x = parseInt($(".display").val());
  x = -x;
  $(".display").val(x);
}
