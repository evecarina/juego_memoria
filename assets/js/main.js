var array_pandas=["assets/img/1.jpg","assets/img/2.jpg","assets/img/3.jpg",
"assets/img/4.jpg","assets/img/5.jpg","assets/img/6.jpg","assets/img/1.jpg",
"assets/img/2.jpg","assets/img/3.jpg","assets/img/4.jpg",
"assets/img/5.jpg","assets/img/6.jpg"]

//var img_fondo="assets/img/fondo.jpg";
function tablero_imagenes(){
	var table=document.getElementById('table');
var x=0;
for (var i=0;i<3;i++){
	var tr=document.createElement("tr");

	for (var j=0;j<4;j++){
		//poniendo imagen fondo negro
		var td=document.createElement("td");
		var imgFondo=document.createElement("img");
		imgFondo.setAttribute('class',"imgFondo");
		imgFondo.setAttribute('src',"assets/img/fondo.jpg");
		td.appendChild(imgFondo);
		tr.appendChild(td);

        imgFondo.setAttribute('onclick','eliminar(this)');

		var img_pnda=document.createElement("img");
		img_pnda.setAttribute("class","img_pnda");
		img_pnda.setAttribute('src',array_pandas[x]);
		td.appendChild(img_pnda);
		tr.appendChild(td);
       x++;
	}
	table.appendChild(tr);
	table.border="1";
}

}
tablero_imagenes();

function eliminar(imgFondo){
    // imgFondo.style.visibility='hidden';
    imgFondo.style.display = "none";
}

// creando un array
var arrayMostrarPanda=[];
console.log(arrayMostrarPanda);

var tdPandas = document.getElementsByTagName('td');
//var imgPandas = document.getElementsByTagName('img_pnda');


for (var i = 0; i < tdPandas.length; i++) {
    tdPandas[i].addEventListener('click',memorizar);
}


var src1;
var src2;

var cont;




 function memorizar(event){

 	var tdPandas = document.getElementsByTagName('td');

    if(cont<2){
    	if(cont==1){
   src1=event.target.nextSibling.src;

    	}
   else if(cont==2){
   	src2=event.target.nextSibling.src;
     if (src1==src2){
   	console.log("son iguales");
      	 }
      	 else {
      	 	console.log("diferente");

      	 }
	}
 }


    	// if (arrayMostrarPanda[0]!=arrayMostrarPanda[1]){
    	// 	var imgFondo=document.getElementsByClassName('imgFondo');
     //  setTimeout(function(){tdPandas[1].appendChild(imgFondo)},100);



cont++;

 }

	//document.write(a);

memorizar();