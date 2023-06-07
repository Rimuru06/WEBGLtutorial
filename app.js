var initDemo = function(){
    console.log("Tá funcionando");

    var canvas = document.getElementById('glcanvas');
    var gl = canvas.getContext('webgl');

    if(!gl){
        console.log("WebGL não surpotado, caindo de volta no webgl experimental");
        gl = canvas.getContext('experimental-webgl');
    }

    if(!gl){
        alert("Seu browser não suporta WebGL");
    }

    gl.clearColor(0.75, 0.85, 0.8, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
}