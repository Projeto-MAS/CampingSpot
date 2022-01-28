var quantidade = document.getElementById("quantidade");
var preco = document.getElementById("preco");

var precoproduto1 = parseFloat(document.getElementById("precoproduto1").value);
var precoproduto2 = parseFloat(document.getElementById("precoproduto2").value);
var precoproduto3 = parseFloat(document.getElementById("precoproduto3").value);

var produto1 = parseFloat(document.getElementById("produto1").value);
var produto2 = parseFloat(document.getElementById("produto2").value);
var produto3 = parseFloat(document.getElementById("produto3").value);


function calcular(){

    precoproduto1 = parseFloat(document.getElementById("precoproduto1").value);
    precoproduto2 = parseFloat(document.getElementById("precoproduto2").value);
    precoproduto3 = parseFloat(document.getElementById("precoproduto3").value);

    produto1 = parseFloat(document.getElementById("produto1").value);
    produto2 = parseFloat(document.getElementById("produto2").value);
    produto3 = parseFloat(document.getElementById("produto3").value);

    var somaProdutos = produto1 + produto2 + produto3;
    var precoTotal = produto1*precoproduto1 + produto2*precoproduto2 + produto3*precoproduto3;

    quantidade.innerText = somaProdutos;
    preco.innerText = precoTotal;

}


function comprar(number){
    var produto = document.getElementById("produto"+number);
    var x = parseFloat(produto.value) + 1;
    produto.value = x.toString();

    calcular();
}

function clear(){

    for (var i=1; i<=3; i++ ){
        var x = document.getElementById("produto"+i);
        x.value = "0";
    }

    quantidade.innerText = 0;
    preco.innerText = "0";
}


var vm = function () {
    var self = this;
    self.quantidade = quantidade;
    self.preco = preco;

};

ko.applyBindings(new vm());
