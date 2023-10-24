const requireAuthentication = () => {
    const accessToken = getCookie("access_token")
    if (!accessToken) {
        window.location = "/login/"
    }
}

const blockAuthenticatedUser = () => {
    const accessToken = getCookie("access_token")
    if (accessToken) {
        window.location = "/profile/"
    }
}

const getCurrentUser = async () => {
    const accessToken = getCookie("access_token")
    const { data: { user } } = await supabaseClient.auth.getUser(accessToken)

    return user
}
