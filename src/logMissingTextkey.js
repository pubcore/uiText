import post from 'pubcore-http'

var missingTextkeys = {},
    missingTextkeyData = {},
    missingTextkeyTimer,
    postUri, timeout = 1000, postUriCallback

var postStatus = () => post(postUri, missingTextkeyData).then(
    response => {
        missingTextkeyData = {}
        missingTextkeys = {}
    }
)
const startPostMissingTextkeyTimer = () => {
    if(missingTextkeyTimer){
        clearTimeout(missingTextkeyTimer)
    }

    if(timeout){
        missingTextkeyTimer = setTimeout(postStatus, timeout)
    }else{
        postStatus()
    }
}

export const isMissingTextkey = (key) => {
    return missingTextkeys[key] || false
}

export const initLogMissingTextkey = config => {
    ({postUri, timeout} = config)
}

export default (key, replacement, defaultText) => {
    if(!missingTextkeys[key]){
        missingTextkeys[key] = true
        missingTextkeyData[key] = (defaultText || key) + (replacement ?
                ' ' + JSON.stringify(replacement)
                : '')
        postUri && startPostMissingTextkeyTimer()
    }
}
