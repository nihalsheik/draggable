function Draggable(elem, dragger) {

    var px = 0, py = 0;

    dragger = dragger ? document.getElementById(dragger) : elem;

    dragger.onmousedown = function (e) {
        e = e || window.event;
        e.preventDefault();
        px = e.clientX;
        py = e.clientY;
        document.onmouseup = function () {
            document.onmouseup = null;
            document.onmousemove = null;
        }
        document.onmousemove = function (e) {
            e = e || window.event;
            e.preventDefault();
            elem.style.top = (elem.offsetTop - (py - e.clientY)) + "px";
            elem.style.left = (elem.offsetLeft - (px - e.clientX)) + "px";
            px = e.clientX;
            py = e.clientY;
        };
    }
}

(function ($) {
    $.fn.draggable = function (def) {
        def = def || {};
        return this.each(function () {
            new Draggable(this, def.dragger);
        });
    };
}(jQuery));