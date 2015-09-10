$(document).ready(function(){
    $("#errorMsg").hide();
    $("#btLogin").click(function(){
        var correo = $("#correo").val();
        var contrasenia = $("#contrasenia").val();
        $.post("192.168.43.3/php/envio.php",{correo : correo, contrasenia : contrasenia},function(respuesta){
            if (respuesta == true) {
                //$.mobile.changePage("php/usuario.php");
                window.location.href="php/usuario.php";
            }
            else{
                $.mobile.changePage('#paginaError', 'pop', true, true);
            }
        });
    });
});


/*function volver(){
    window.location.href="#index";
}*/