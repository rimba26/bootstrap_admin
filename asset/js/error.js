const name= document.getElementById('nama')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('button', (e) => {
    let messages = []
    if (name.value === '' || name.value ==null) {
        messages.push('Mohon Masukkan Akun Anda Dengan Benar')
    }
    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(',')
    }
})