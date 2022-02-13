import {sum} from './modules/sum'

const root = document.querySelector('#root')

if (root) {
    console.log('index.ts')
    root.textContent = sum(1, 2, 3, 4).toString()
}
