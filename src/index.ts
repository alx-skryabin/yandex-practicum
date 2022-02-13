import {sum} from './modules/sum'

const root = document.querySelector('#root')

if (root) {
    root.textContent = sum(1, 2, 3).toString()
}
