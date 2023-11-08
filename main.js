   function tocaSom(idElementoAudio) {
      document.querySelector(idElementoAudio).play();
   }
 
  const listaDeteclas = document.querySelectorAll('.tecla');

  let contador =0

  //enquanto
  while(contador < listaDeteclas.length) 
  {

    listaDeteclas[contador].onclick = tocaSom;

    contador=contador+1;

    console.log(contador);
  }

