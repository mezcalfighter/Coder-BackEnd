// console.log("Probando websocket");
const socketClient = io()

const form = document.getElementById("form");
const inputPrice = document.getElementById("price")
const priceP = document.getElementById("priceP").textContent

form.onsubmit = (e) => {
  e.preventDefault()
  const price = inputPrice.value
  parseInt(price) > parseInt(priceP)
    ? socketClient.emit("newPrice", price)
    : console.log("El nuevo precio tiene que ser mayor de: ", priceP);
}

socketClient.on("priceUpdate", (value) => {
  let newPrice = document.getElementById("priceP")
  newPrice.innerText = value
})

// socketClient.on("welcome", message => {
//   alert(message)
// })