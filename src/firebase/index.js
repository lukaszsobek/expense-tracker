import * as firebase from "firebase"

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
}

firebase.initializeApp(config)
const database = firebase.database()
const expenses = database.ref("expenses")

export { firebase, database, expenses }


// const expenses = database.ref("expenses")

// expenses.on("child_changed", snapshot => {
//     console.log(snapshot.val())
// })


// expenses.on("value",snapshot => {

//     const expensesList = []

//     snapshot.forEach(item => {
//         expensesList.push({
//             ...item.val(),
//             id: item.key
//         })
//     })

//     console.log(expensesList)
// })

// expenses.once("value").then(snapshot => {
//     snapshot.forEach(item => console.log(item.key,item.val()))
// })

// const onChange = database.ref("age").on("value", snapshot => {
//     console.log(snapshot.val())
// })

// setTimeout(() => {
//     database.ref("age").set(29)
// },4000)

// setTimeout(() => {
//     database.ref("age").off("value", onChange)
// },8000)

// setTimeout(() => {
//     database.ref("age").set(31)
// },12000)


// const test = database.ref().once("value")
// test.then(snapshot => {
//     console.log(snapshot.val())
// })

// firebase.database().ref().set({
//     name: "Łukasz Sobek",
//     age: 26,
//     isMale: true
// })

// firebase.database().ref("attributes").set({
//     height: 180,
//     weight: 90
// })

// firebase.database().ref("attributes").set(null)

