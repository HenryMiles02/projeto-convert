//cotação de moedas por dia 
const USD = 5.92
const EUR = 6.26
const GBP = 7.51

//obtendo os elementos do formulario
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")

// manipulando o input amount para receber apenas numeros
amount.addEventListener("input", () => {

    const hasCharactersRegex = /\D+/g //pegar caracteres do tipo texto
    amount.value = amount.value.replace(hasCharactersRegex, "") //vai substituir as letras(regex) por nada("")
})

//capturando o evento de submit(enviar) do formulario
form.onsubmit = (event) => {
    event.preventDefault()//evita o comportamento padrão de recarregar a pagina

    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, EUR, "£")
            break
    }
}

//função para converter a moeda 
function convertCurrency(amount, price, symbol) {
    try {
        //exibindo a cotação da moeda selecionada
        description.textContent = `${symbol}1 = ${formatCurrencyBRL(price)}`

        //aplica a classe que exibe o footer para mostrar o resultado
        footer.classList.add("show-result")
    } catch (error) {
        console.log(error)

        //remove a classe do footer removendo ele da tela.
        footer.classList.remove("show-result")
        alert("Mão foi posspível converter. Tente novamente mais tarde.")
    }
}

//formata a moeda em Real brasileiro
function formatCurrencyBRL(value) {
    return Number(value).toLocaleString("pt-BR", {
        style: "currency", 
        currency: "BRL", 
    })
}