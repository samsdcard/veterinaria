
$(document).ready(function() {
    $('#enviar').click(function() {
        // Obtener datos del cliente
        var nombre = $('#txt_nombre').val();
        var email = $('#txt_mail').val();
        var telefono = $('#txt_tel').val();
        var direccion = $('#txt_direccion').val();
        
        // Obtener datos de la mascota
        var nombreMascota = $('#txt_mascota').val();
        var tipoMascota = $('#txt_tipo').val();
        var raza = $('#txt_raza').val();
        var edad = $('#txt_edad').val();
        
        // Crear el mensaje para mostrar en el alert
        var mensaje = "INFORMACION DEL CLIENTE:\n" +
                      "Nombres: " + nombre + "\n" +
                      "Email: " + email + "\n" +
                      "N° de telefono: " + telefono + "\n" +
                      "Direccion: " + direccion + "\n\n" +
                      "INFORMACION DE LA MASCOTA:\n" +
                      "Nombre de Mascota: " + nombreMascota + "\n" +
                      "Tipo de Mascota: " + tipoMascota + "\n" +
                      "Raza: " + raza + "\n" +
                      "Edad: " + edad;
        
        // Mostrar el alert con la información
        alert(mensaje);
    });
});
