export function FnsCreator(dicts, defaultReturn) {
    return (events, ...args) => {
        if (events in dicts) {
            return dicts[events](...args)
        }
        return defaultReturn;
    }
}

export function IsArray(arr) {
    return (Object.prototype.toString.call(arr) === '[object Array]')
}
