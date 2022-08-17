
function setLocalStorage() {
    const value = document.getElementById('input').value;
    localStorage.setItem('token', value)
}

function viewLocalStorage() {
    const token = localStorage.getItem('token')
    document.getElementById('localStorageValue').innerHTML = token
}
viewLocalStorage()

setTimeout(() => {
    document.getElementById('sessionStorageValue').innerHTML = sessionStorage.getItem('token_session')
}, 1000)
