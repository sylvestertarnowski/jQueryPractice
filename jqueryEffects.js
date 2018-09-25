$("#fade").on("click", function() {
  $("div").fadeToggle(1000, function() {
    // $(this).remove();
  });
});

//The remove function after the fadeout needs to be nested within the
//anonymus fucntion inside fadeOut method. This guarantees that the
//elements are removed only AFTER the animation is finished playing.

$("#slide").on("click", function() {
  $("div").slideToggle(1000, function() {
    console.log("Slide is done!");
  });
});