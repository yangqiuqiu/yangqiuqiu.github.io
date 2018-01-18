! function (a, d) {
    function c() {
        var w = d.documentElement.clientWidth;
        if (w > 750) w = 750;
        d.documentElement.style.fontSize = w / 750 * 100 + "px"
    }
    var b = null;
    a.addEventListener("onorientationchange" in a ? "orientationchange" : "resize", function () {
        clearTimeout(b);
        b = setTimeout(c, 300)
    }, !1);
    a.addEventListener("pageshow", function (a) {
        a.persisted && (clearTimeout(b), b = setTimeout(c, 300))
    }, !1);
    d.addEventListener('DOMContentLoaded', c, false);
}(window, document);