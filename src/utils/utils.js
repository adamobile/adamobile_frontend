const getSessionItem = (key, other) => {
    if (typeof sessionStorage !== 'undefined') {
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