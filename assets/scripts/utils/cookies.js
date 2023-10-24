const getCookie = (name) => {
    const cookies = document.cookie.split(';')
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim()
        if (cookie.startsWith(`${name}=`)) {
            return cookie.substring(name.length + 1)
        }
    }
    return null
}

const setCookie = (name, value, expiresInSeconds) => {
    let cookie = `${name}=${value}`
    if (expiresInSeconds) {
        const date = new Date()
        date.setTime(date.getTime() + (expiresInSeconds * 1000))
        cookie += `; expires=${date.toUTCString()}; path=/`
    }
    document.cookie = cookie
}

const removeCookie = (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}
