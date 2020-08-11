$(document).ready(function(){
  $("button#bark").click(function(){
  $("ul#dog").append("<li>Bark</li>");
  $("ul#cat").prepend("<li>Meaow</li>")

  })

  $("button#meaow").click(function(){
    $("ul#dog").prepend("<li>Bark</li>")
    $("ul#cat").append("<li>Meaow</li>")
  })




})