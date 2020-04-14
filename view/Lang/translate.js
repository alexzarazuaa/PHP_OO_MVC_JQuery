
function cambiarIdioma(lang) {
  //console.log(lang);
  // guardar la preferencia que por defectio sera el idioma español
  lang = lang || localStorage.getItem('app-lang') || 'es';
  localStorage.setItem('app-lang', lang);

  var elems = document.querySelectorAll('[data-tr]');

  //console.log(elems);

  $.ajax({
    url: 'view/Lang/' + lang + '.json',
    type: 'POST',
    dataType: 'JSON',
    success: function (data) {
      for (var x = 0; x < elems.length; x++) {
        elems[x].innerHTML = data.hasOwnProperty(lang)
          ? data[lang][elems[x].dataset.tr]
          : elems[x].dataset.tr;
      } //end_for
    } //end_succes
  }) // end_$ajax
}//end_function


$(document).ready(function () {
  //console.log("VA EL READY");
  cambiarIdioma();
   //console.log("INSIDE");
  $('#idioma').change(function () {
   // console.log("INSIDE ch");
    var selectedValue = parseInt(jQuery(this).val());
    //Depend on lang cacht one or other
    switch (selectedValue) {
      case 0:
        cambiarIdioma("en");
        console.log("en");
        break;
      case 1:
        cambiarIdioma("va");
        console.log("va");
        break;
      case 2:
        cambiarIdioma("es");
        console.log("es");
        break;
      default:
        alert("catch default");
        break;
    }
  });
});


 // html js id funci... controller php case que siga , de ahi al dao enviara la info al js($ajax) y al html