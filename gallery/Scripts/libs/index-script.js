(function () {
    "use strict";

    $("#datepicker").datepicker.defaults.format = "mm/dd/yy";
    $("#datepicker").datepicker();
    UUI.Panels.init();

    $(".uui-image-text").hover(function () {
        $(this).find(".image-text-section.description").removeClass("hidden");
    }, function () {
        $(this).find(".image-text-section.description").addClass("hidden");
    });

})();