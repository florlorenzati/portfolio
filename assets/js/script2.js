
var porcentaje=0;
var contando= setInterval(ejecutar,2000);
function ejecutar(){
    document.getElementById("intervalo").innerHTML += "Cargando "+porcentaje+"% ";
    porcentaje=porcentaje+10;
    if  (porcentaje==110){
        clearInterval(contando);
    }
}


