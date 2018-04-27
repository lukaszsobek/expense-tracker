import { firebase, googleAuthProvider } from "../../firebase"

const startLogin = () => {
    return firebase.auth().signInWithPopup(googleAuthProvider)
}

export const startLogout = () => {
    return firebase.auth().signOut()
}

export default startLogin