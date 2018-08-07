var timer = 0;
var spm = 0;
var scount = 0;
var interval_timer = 0;
var started = false;

const Enter = 13;

var pressKeys = [];
var timeInterval = []; 

var PreviousDownTimeX = 0;
var interval = 0;

$("#input_text").bind("keypress", function(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    getInterval();
    myLineChart.data.labels.push(code);
    myLineChart.data.datasets.forEach((dataset) => {
        dataset.data.push(interval);
    });
    console.log(interval+" мс");
    myLineChart.update();
});

function getInterval(){
    if (!PreviousDownTimeX) PreviousDownTimeX = new Date ().getTime (); else{
        var CurrentDownTimeX = new Date ().getTime ();
        interval = CurrentDownTimeX - PreviousDownTimeX
        PreviousDownTimeX = CurrentDownTimeX;
}
}

// $("#input_text").keypress(function(evt){
//     if(!started){
//         startTimer();
//         started = true;
//     }
//     evt = evt || window.event;
//     $("#input_text").keyup(function(){
//         $("#scount").text($("#input_text").val().length);
//         scount = $("#input_text").val().length
//     });
//     if (evt.keyCode == Enter) {
//         stop();
//         alert(spm);
//     }
// });

// function startTimer(){
//     interval_timer = setInterval(function(){
//       timer ++;
//       $("#timer").text(timer);
//     }, 1000)
    
// }

// function stop(){
//     clearInterval(interval_timer);
//     started = false;
//     spm = Math.round(scount / (timer / 60));
//     $("#spm").text(spm);
// }