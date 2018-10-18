$(document).ready(function() {
    $(window).scroll(function() { // check if scroll event happened
        if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
            $(".navWebSection").css("background-color", "rgba(255, 255, 255, 0.98)");
        } else {
            $(".navWebSection").css("background-color", "transparent"); // if not, change it back to transparent
        }
    });
});