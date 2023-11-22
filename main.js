   function tocaSom(idElementoAudio) {
      document.querySelector(idElementoAudio).play();
   }

  const listaDeteclas = document.querySelectorAll('.tecla');

  let contador =0

  //enquanto
  while(contador < listaDeteclas.length) {

   const tecla=listaDeteclas[contador]
   const instrumento =tecla.classList[1];

   console.log(instrumento)

   const idAudio = `#som_{instrumento}`

   //'#som_(instrumento)'

    tecla.onclick = function() {
      tocaSom('#som_tecla_som');
    }

    contador=contador+1;

    console.log(contador);
  }

