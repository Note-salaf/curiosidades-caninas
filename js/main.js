import {btnGera, mostrarFrase } from "./ui.js"
import { gera } from "./api.js"


btnGera.addEventListener('click', async () => {
 mostrarFrase( await gera())

})