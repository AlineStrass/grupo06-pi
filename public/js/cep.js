var campoCep = document.getElementById("cep");

campoCep.onblur = function (){
    var valorCep = this.value;

    fetch("https://brasilapi.com.br/api/cep/v1/" + valorCep)
    .then(async function(resposta){
        var dados = await resposta.json();  
        var campoEndereco = document.getElementById("endereco");
        var campoBairro = document.getElementById("bairro");
        var campoCidade = document.getElementById("cidade");
        var campoEstado = document.getElementById("estado");

        campoEndereco.value = dados.street;
        campoBairro.value = dados.neighborhood;
        campoCidade.value = dados.city;
        campoEstado.value = dados.state;
    });
}