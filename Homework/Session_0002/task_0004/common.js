(function () {
    function concatStrings(delimiter, firstString, secondString) {
        return firstString+delimiter+secondString;
    }
    let firstString = "JavaScript";
    var secondString = "courses";
    var resultString= concatStrings(" ", firstString, secondString);
    console.log(resultString);
})();