(function () {
    "use strict";

    $(".uui-image-text").hover(function () {
        $(this).find(".image-text-section.description").removeClass("hidden");
        $(this).find(".image-text-section.date").removeClass("hidden");
    }, function () {
        $(this).find(".image-text-section.description").addClass("hidden");
        $(this).find(".image-text-section.date").addClass("hidden");
    });

})();