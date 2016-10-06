(function () {
    function showParams() {
        for(item of arguments) {
            console.log(item);
        }
    };
    
    var x,y,z;
    x=y=z=0;
    
    showParams(x,y,z);
    
    x=1;
    y=2;
    z=3;

    showParams(x,y,z);
})();