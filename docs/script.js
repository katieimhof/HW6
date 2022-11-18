$(document).ready(function () {
    var seconds = 00;
    var tens = 00;
    var $appendTens = $("#tens")
    var $appendSeconds = $("#seconds")
    var $buttonStart = $('#button-start');
    var $buttonStop = $('#button-stop');
    var $buttonReset = $('#button-reset');
    var interval; 
    var interval2;
    var interval3;
    var $bookImage = $("#books").css({
        position: "absolute",
        left: "0px",
        top: "0px",
        zIndex: "-1",
        backgroundSize: "cover"
    });
    var $header = $("#header").css({
        textShadow: "2px 2px #ADD8E6",
        textAlign: "center"
    });
    var $div = $(".wrapper").css({
        backgroundColor: "transparent"
    });

    // Starting color
    $("p").addClass("timer-background").css({
        backgroundColor: "grey",
        borderRadius: "12px",
        textAlign: "center",
        border: "2px solid #D3D3D3",
        width: "50%",
        display: "block",
        margin: "auto"
    }); 

    // Buttons
    $("button").addClass("button-background").css({
        backgroundColor: "lightblue",
        borderRadius: "12px",
        color: "white",
        border: "none",
        boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
        width: "100px",
        height: "30px",
        display: "block",
        margin: "auto"
    }); 
    
    $buttonStart.click(function () {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
        $("p").addClass("timer-background").css({
            backgroundColor: "green"
        }); 
       interval2 = setInterval(setOpacity, 10);
    })

    $buttonStop.click(function () {
        
        clearInterval(interval);
        if(!(seconds == "00" && tens == "00"))
        {
            $("p").addClass("timer-background").css("background-color", "red"); 
        }
        clearInterval(interval2);
        
        interval3 = setInterval(stopOpacity, 10);
    })

    $buttonReset.click(function () {
        clearInterval(interval);
        tens = "00"; 
        seconds = "00"; 
        $appendTens.text(tens);
        $appendSeconds.text(seconds);
        $("p").addClass("timer-background").css("background-color", "grey"); 
        clearInterval(interval2);
    })

    function setOpacity() {
        $("img").animate({
            opacity: '0.5'
        });
        $("img").animate({
            opacity: '1.0'
        });
    }

    function stopOpacity() {
        $("img").animate({
            opacity: '1.0'
        });
    }

    function startTimer() {
        tens++; 

        if (tens < 9) {
            $appendTens.text("0" + tens);
        }

        if (tens > 9) {
            $appendTens.text(tens);
        }

        if (tens > 99) {
            seconds++; 
            $appendSeconds.text("0" + seconds);
            tens = 0; 
            $appendTens.text("0" + 0);
        }

        if (seconds > 9) {
            $appendSeconds.text(seconds);
        }
    }
});
