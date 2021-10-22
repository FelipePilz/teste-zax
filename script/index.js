// 0 Nenhuma restricao
// Se tiver restricao, sera numerada as lojas restritas
var motoboys = [2, 2, 2, 2, 5];

var lojas = [
    [50, 50, 50], //Loja 1
    [50, 50, 50], //Loja 2
    [50, 50, 100], //Loja 3
];

var lojasTaxaEntrega = [5, 5, 15];

var lojasDisplayElement = document.getElementById("lojasDisplay");
var pedidosDisplayElement = document.getElementById("pedidosDisplay");

var motoboyElement = document.getElementById("motoboySelect");
var lojasElement = document.getElementById("lojasSelect");
var pedidosElement = document.getElementById("pedidosInput");

var resultado = document.getElementById("resultado");

//Caso o valor do motoboy altere, vai acontecer isso daqui
motoboyElement.addEventListener("change", () => {
    let optionValue = parseInt(motoboyElement.value);

    if (optionValue >= 0) {
        lojasDisplayElement.style.display = "block";
        resultado.innerHTML = "";

        if (optionValue == 3) {
            lojasElement.innerHTML = `
						<option selected>Nenhum</option>
						<option value="1">Loja 1</option>`;
        } else {
            lojasElement.innerHTML = `
					<option selected>Nenhum</option>
					<option value="0">Loja 1</option>
                        <option value="1">Loja 2</option>
                        <option value="2">Loja 3</option>`;
        }
    } else {
        lojasDisplayElement.style.display = "none";
        pedidosDisplay.style.display = "none";
        resultado.innerHTML = "Motoboy invalido";
    }
});

lojasElement.addEventListener("change", () => {
    let optionValue = parseInt(lojasElement.value);
    if (optionValue >= 0) {
        pedidosDisplay.style.display = "block";
    } else {
        pedidosDisplay.style.display = "none";
    }
});

const pegarPedido = () => {
    resultado.innerHTML = "";

    var qualMotoboy = parseInt(motoboyElement.value);
    var qualLoja = parseInt(lojasElement.value);
    var qtdPedidos = parseInt(pedidosInput.value);
    var valorDaCompra = 0;

    if (qtdPedidos < 4 && qtdPedidos > 0) {
        alert("Pedido feito com sucesso!");
        for (let i = 0; i < qtdPedidos; i++) {
            valorDaCompra += parseInt(lojas[qualLoja][i]);
        }
        var valorGanho =
            parseInt(motoboys[qualMotoboy]) +
            valorDaCompra * (lojasTaxaEntrega[qualLoja] / 100);
        resultado.innerHTML =
            "O motoboy " +
            (qualMotoboy + 1) +
            " vai receber R$ " +
            valorGanho.toFixed(2) +
            " por esse pedido.";
    } else {
        resultado.innerHTML = "Valor invalido";
    }
};
