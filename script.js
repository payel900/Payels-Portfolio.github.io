// skill
(function( $){
    "use strict"
    $('.skill').waypoint(function(){
        $('.progress .progress-bar').each(function(){
            $(this).css("width",$(this).attr("aria-valuenow")+ '%');
        });
    }, {offset:'88%'});
})(jQuery);

