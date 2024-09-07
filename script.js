$(document).ready(function() {
    // Handle scroll event for fixed header
    $(window).on("scroll", function() {
        var scrollTop = $(this).scrollTop();
        if(scrollTop >= 80){
            $('body').addClass('fixed-header');
        } else{
            $('body').removeClass('fixed-header');
        }
    });

    // Initialize typing effect
    new Typed('#type-it', {
        strings: ['Student', 'Developer', 'Designer', 'Producer'],
        typeSpeed: 50,
        loop: true
    });

    // Change background color of "Latest Projects" section when "Learn More" is clicked
    $('.colored-btn').on('click', function(event) {
        event.preventDefault(); // Prevent the default action of the anchor tag
        var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        $('#portfolio').css('background-color', randomColor);
    });
});
