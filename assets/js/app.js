
$(function(){
      var date_input=$('input[name="date"]'); //our date input has the name "date"
      var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
      var options={
        format: 'mm/dd/yyyy',
        container: container,
        todayHighlight: true,
        autoclose: true,
      };
      date_input.datepicker(options);
    });

 $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    responsiveClass: true,
    rtl: true,
    responsive : {
        0 : {
            items:1,
            nav:true
        },
        600 : {
            items:2,
            nav:false
        },
        1000 : {
            items:3,
            nav:true,
            loop:false
        }
    }
   
});


 
 


