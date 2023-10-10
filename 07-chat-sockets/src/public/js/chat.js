const socketClient = io()

const h4Name = document.getElementById("name")
const form = document.getElementById("chatForm")
const inputMessage = document.getElementById("message")
const divChat = document.getElementById("chat")
let user;

Swal.fire({
    title: 'Welcome!',
    text: 'What is your name?',
    input: 'text',
    inputValidator: (value) => {
        if (!value) {
            return 'Name is required!'
        }
    },
    confirmButtonText: 'Enter'
})
    .then((input) => {
        user = input.value
        h4Name.innerText = user
        socketClient.emit("newUser", user)
    })


socketClient.on("userConnected",(user)=>{
    Toastify({
        text: "Connected user: "+user,
        duration: 3000,
        className: "info",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast();
})

socketClient.on("successLogin",(user)=>{
    Toastify({
        text: "Bienvenido: "+user,
        duration: 3000,
        className: "info",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast();
})

form.onsubmit = (e) => {
    e.preventDefault()
    const infoMessage = {
        name: user,
        message: inputMessage.value
    }
    infoMessage.innerText = ""
    socketClient.emit("message",infoMessage)
}

socketClient.on("pushMessage",(messages)=>{
    const chat = messages.map((message)=>{
        return "<p> "+ message.name+": " + message.message + " </p>"}).join(" ")
    divChat.innerHTML = chat
})