import replace from './replace'

export {initLogMissingTextkey} from './logMissingTextkey'

export default (T, key, arg3, arg4) => {
    return replace({
        text:T[key],
        defaultText:typeof arg3 === 'string' ? arg3 : '',
        replacement:typeof arg3 === 'object' ? arg3 : arg4,
        key
    })
}

export const uiTextOptional = (T, key, arg3, arg4) => {
    return replace({
        text:T[key] === undefined ?
            (typeof arg3 === 'string' ? arg3 : '')
            : T[key],
        defaultText:'',
        replacement:typeof arg3 === 'object' ?
            arg3
            : arg4,
        key
    })
}
