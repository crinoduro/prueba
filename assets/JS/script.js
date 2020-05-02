$(function(){

    $("a").click(function(event){
      if (this.hash !== "") {
        event.preventDefault();
  
        var salto = this.hash;
  
        $("html, body").animate({
          scrollTop: $(salto).offset().top
        }, 800, function(){
          window.location.hash = salto;
        });
      }
    });
  
    $('[data-toggle="tooltip"]').tooltip();
  
  });
  