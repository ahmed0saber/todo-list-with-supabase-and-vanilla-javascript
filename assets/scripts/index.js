const handleFormSubmission = () => {
    const email = document.querySelector("#email-input").value
    const password = document.querySelector("#password-input").value

    supabaseClient.auth
        .signUp({ email, password })
        .then((response) => {
            if (response.error) {
                alert(response.error.message)
            } else {
                setCookie("access_token", response.data.session.access_token, 3600)
                alert('Logged in as ' + response.data.user.email)
                window.location = "/profile/"
            }
        })
        .catch((err) => {
            alert(err)
        })
}

const initRegisterPage = () => {
    blockAuthenticatedUser()

    document.querySelector(".form-container").addEventListener("submit", (e) => {
        e.preventDefault()
        handleFormSubmission()
    })
}
initRegisterPage()
