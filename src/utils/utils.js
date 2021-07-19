const getSessionItem = (key, other, isJson) => {
    if (typeof sessionStorage !== 'undefined' && sessionStorage.getItem(key) !== null) {
        if(isJson){
            return JSON.parse(sessionStorage.getItem(key))
        }
        return sessionStorage.getItem(key)
    }
    return other
}

const setSessionItem = (key, value) => {
    if (typeof sessionStorage !== 'undefined') {
        sessionStorage.setItem(key, value)
    }
}

export {
    getSessionItem,
    setSessionItem,
}