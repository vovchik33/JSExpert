(function (win) {
    function showType(param) {
        console.log("type: "+typeof param);
    };
    function showValue(param) {
        console.log("value: "+param);
    };
    function showInfo(param) {
        showType(param);
        showValue(param);
    };
    var x;
    showInfo(x);
    x=1;
    showInfo(x);
    x = true;
    showInfo(x);
    x = "abc";
    showInfo(x);
    x = null;
    showInfo(x);
})(window);