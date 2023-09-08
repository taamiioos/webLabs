function setCookie(name, value, days) {
    const date = new Date();
    date.setDate(date.getDate() + days);
    document.cookie = `${name}=${value};expires=${date.toUTCString()}`;
}

function getCookie(name) {
    const cookieName = name + '=';
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        if (cookie.startsWith(cookieName)) {
            return cookie.substring(cookieName.length);
        }
    }
    return null;
}
