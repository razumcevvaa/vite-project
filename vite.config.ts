import { resolve } from 'path'

export default {
    base: '/JS-project/',
    build: {
        rollupOptions: {
            input: {
                // @ts-ignore
                main: resolve(__dirname, 'index.html'),
                // @ts-ignore
                page2: resolve(__dirname, 'idbm.html'),
            }
        }
    }
}