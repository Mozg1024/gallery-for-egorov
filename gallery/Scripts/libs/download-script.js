(function () {
    "use strict";

    var i,
        $items = $('#thumbCarousel .item'),
        itemsLength = $items.length,
        $itemsChildren = $items.children();

    for (i = 0; i < itemsLength; i++) {
        $($itemsChildren.clone().splice(i - 1, 1)).addClass('fade').prependTo($items[i]);
        $($itemsChildren.clone().splice(i - 2, 1)).addClass('fade').prependTo($items[i]);
        $($itemsChildren.clone().splice((i + 1) % itemsLength, 1)).addClass('fade').appendTo($items[i]);
        $($itemsChildren.clone().splice((i + 2) % itemsLength, 1)).addClass('fade').appendTo($items[i]);
    }

    $('#bigCarousel').carousel({
        interval: 10000
    });

    $('#thumbCarousel').carousel({
        interval: 10000
    });

})();