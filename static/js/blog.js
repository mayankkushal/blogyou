$(function(){
  $("#likes").click(function(){
    alert("like is clicked");
    var artid = $(this).attr("data-artid");
    $.get('/blog/like', {article_id: artid}, function(data){
      $("#likes_count").html(data);
      $("#likes").hide();
    });
  });
});

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'ld2x4&_49h+_b^#qdhd@(_n$moo0flp7fc$4ia4$7e=l@z*0eq'
