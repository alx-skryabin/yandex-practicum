export function sum(...args: number[]) {
    if (args.length === 0) {
        throw Error('sum required at least 1 argument')
    }

    return args.reduce((result, current) => {
        return result + current
    }, 0)
}
