import { firebase, googleAuthProvider } from "../../firebase"

export const logIn = uid => ({
    type: "LOG_IN",
    uid
})

export const logOut = () => ({
    type: "LOG_OUT"
})


export const startLogin = () => {
    return firebase.auth().signInWithPopup(googleAuthProvider)
}

export const startLogout = () => {
    return firebase.auth().signOut()
}
