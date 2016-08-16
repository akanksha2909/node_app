exports.myFunc =function(theUrl){   console.log("in request module");
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET",url, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
};