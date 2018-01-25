//Business Logic
function letsCount(countBy,countTo) {
  var countBy = parseInt(countBy);
  var countTo = parseInt(countTo);
  var set = [];
  for (var index = countBy;index <= countTo; index += countBy){
    set.push(" "+index);
  };
  return set.toString();
};
//User Interface
$(document).ready(function() {
  $("#countParameters").submit(function(event) {
  event.preventDefault();
  var countBy = $("#countBy").val();
  var countTo = $("#countTo").val();
  var finalSet= letsCount(countBy,countTo);
  $("#printSet").html(finalSet);
  });
});
