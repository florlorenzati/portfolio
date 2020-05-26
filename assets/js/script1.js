var puntos=0;
function ingresar(){
    var primera=document.getElementsByName("primera");
    if(primera[2].checked){
        puntos=puntos+1;
    }
    else{
        puntos=puntos+0;
    }
    var segunda=document.getElementsByName("segunda");
    if(segunda[0].checked){
        puntos=puntos+1;
    }
    else{
        puntos=puntos+0;
    }
    var tercera=document.getElementsByName("tercera");
    if(tercera[1].checked){
        puntos=puntos+1;
    }
    else{
        puntos=puntos+0;
    }
    var cuarta=document.getElementsByName("cuarta");
    if(cuarta[2].checked){
        puntos=puntos+1;
    }
    else{
        puntos=puntos+0;
    }
    var quinta=document.getElementsByName("quinta");
    if(quinta[0].checked){
        puntos=puntos+1;
    }
    else{
        puntos=puntos+0;
    }
    alert("Ha obtenido un puntaje de: "+puntos+ " puntos");
    puntos=0;
}