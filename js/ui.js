export const frase = document.querySelector('.frase')
export const btnGera = document.querySelector('#btnGera')

export function mostrarFrase(texto) {
     frase.innerHTML = `<p>${texto}</p>`
}