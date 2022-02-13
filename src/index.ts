import {sum} from './modules/sum'
// import '../index.scss'

const root = document.querySelector('#root')

if (root) {
    root.textContent = sum(1, 2, 3).toString()
}
