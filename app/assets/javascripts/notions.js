var search = {
  notions: [],
  find: function(query) {
    if (query == ""){
      for(var i=0; i<this.notions.length; i++){
        var notion = this.notions[i];
        notion.style.display = "inline-block";
      }
    }
    else {
      var name = removeDiacritics(query).replace(/[^\w\s]/i,".", "i");
      var pattern = new RegExp(name);
      for(var i=0; i<this.notions.length; i++){
        var notion = this.notions[i];
        console.log(pattern);
        if (notion.getAttribute("data-name").match(pattern)){
          notion.style.display = "inline-block";
        }
        else {
          notion.style.display = "none";
        }
      }
      console.log(this.notions);
    }
  }
}

$(document).ready(function()
{
  $(".blocnotions2").hide();
  $("#leftarrow").hide();
  $("#rightarrow").click(function()
  {
	   $(".blocnotions1").hide();
	   $(".blocnotions2").show();
	   $("#rightarrow").hide();
	   $("#leftarrow").show();
  });
  $("#leftarrow").click(function()
  {
	   $(".blocnotions2").hide();
	   $(".blocnotions1").show();
	   $("#leftarrow").hide();
	   $("#rightarrow").show();
  });
});

window.addEventListener("load",function(){
  var input = document.querySelector("#search");
  if (input) {
    search.notions = document.querySelectorAll(".notions a");
    input.addEventListener("keydown", function(){
      setTimeout(function(){
        search.find(input.value);
      },1);
    });
    }
});
