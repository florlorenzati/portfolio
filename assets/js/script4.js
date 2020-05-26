function insertar(){
    var nombre=document.getElementById("nombre").value;
    var apellido=document.getElementById("apellido").value;
    var direccion=document.getElementById("direccion").value;
    var ocupacion=document.getElementById("ocupacion").value;
    document.getElementById("campo1").innerHTML="Nombre completo: "+nombre+" "+apellido;
    document.getElementById("campo2").innerHTML="Dirección: "+direccion;
    document.getElementById("campo3").innerHTML="Ocupación: "+ocupacion;
    document.getElementById("contenedor").style.visibility="visible";
}