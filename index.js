$(document).ready(function(){
    $(".save-btn").click(function(){
        var value = $(this).siblings(".hour-text").val();
        var time = $(this).parent().attr("id");

        console.log(value, time)

        localStorage.setItem(time, value);
    })


function hourtracker(){
    let currentH = moment().hours();

    $(".time-block").each(function(){
        let blockHour = parseInt($(this).attr("id").split("-")[1]);
        
        if(blockHour < currentH){
            $(this).removeClass("past");
            $(this).addClass("present");

        }else{
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }



    });
}

hourtracker();

$("#h-9 .hour-text").val(localStorage.getItem("h-9"));
  $("#h-10 .hour-text").val(localStorage.getItem("h-10"));
  $("#h-11 .hour-text").val(localStorage.getItem("h-11"));
  $("#h-12 .hour-text").val(localStorage.getItem("h-12"));
  $("#h-13 .hour-text").val(localStorage.getItem("h-13"));
  $("#h-14 .hour-text").val(localStorage.getItem("h-14"));
  $("#h-15 .hour-text").val(localStorage.getItem("h-15"));
  $("#h-16 .hour-text").val(localStorage.getItem("h-16"));
  $("#h-17 .hour-text").val(localStorage.getItem("h-17"));

  // display current day on page
  $("#currentDay").text(moment().format("dddd, MMMM Do"));

});