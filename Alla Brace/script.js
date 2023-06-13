function formatarPreco(elemento) {
    let valor = elemento.value.replace(/\D/g, "");
    valor = (valor / 100).toFixed(2).replace(".", ",");
    elemento.value = "R$ " + valor;
  }
  
  function validarNumero(elemento) {
    if (elemento.value < 0) {
      elemento.value = "";
    }
  }

  $(function() {
    $("#data-inicio").datepicker();
    $("#data-fim").datepicker();
  });
