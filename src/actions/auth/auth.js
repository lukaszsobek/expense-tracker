import { firebase, googleAuthProvider } from "../../firebase"
import { LOG_IN, LOG_OUT } from "../../constants"

export const logIn = uid => ({
    type: LOG_IN,
    uid
})

export const logOut = () => ({
    type: LOG_OUT
})


export const startLogin = () => {
    return firebase.auth().signInWithPopup(googleAuthProvider)
}

export const startLogout = () => {
    return firebase.auth().signOut()
}
