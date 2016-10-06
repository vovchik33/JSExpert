(function () {
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

    var x = 1;
    showInfo(x);

    x=String(x);
    showInfo(x);

    x=Boolean(x);
    showInfo(x);

    x=Number(x);
    showInfo(x);
})();