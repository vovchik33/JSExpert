/**
 * Пример использования внешнего скрипта с асинхронной подгрузкой (используя аттрибут async)
 * vovchik33@gmail.com
 */
(function (win) {
    var params = {
        states: {
            url: "/",
            template: "template.js"
        }
    };
    function setStates(params) {
        if (win && !win.params) {
            win.params = params;
        }
    };
    setStates();
    console.log(params.states.template);
})(window);