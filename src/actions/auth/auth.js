import { firebase, googleAuthProvider } from "../../firebase"

const startLogin = () => {
        return firebase.auth().signInWithPopup(googleAuthProvider)
}

export default startLogin