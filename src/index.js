import {sum} from './modules/sum'

const root = document.querySelector('#root')
root.textContent = sum(2, 4, 6, 8).toString()
