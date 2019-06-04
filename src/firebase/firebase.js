import * as firebase from "firebase"

const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.FIREBASE_APP_ID
}

firebase.initializeApp(firebaseConfig)

const database = firebase.database()

export { firebase, database as default }

// database.ref("expenses").on("child_removed", snapshot => {
// 	console.log(snapshot.key, snapshot.val())
// })

// database.ref("expenses").on("child_changed", snapshot => {
// 	console.log(snapshot.key, snapshot.val())
// })

// database.ref("expenses").on("child_added", snapshot => {
// 	console.log(snapshot.key, snapshot.val())
// })

// database
// 	.ref("expenses")
// 	.once("value")
// 	.then(snapshot => {
// 		const expenses = []

// 		snapshot.forEach(childSnapshot => {
// 			expenses.push([
// 				{
// 					id: childSnapshot.key,
// 					...childSnapshot.val()
// 				}
// 			])
// 		})

// 		console.log(expenses)
// 	})

// database.ref("expenses").push({
// 	description: "Expense 2 Description",
// 	note: "Note 2",
// 	amount: 9382,
// 	createdAt: 1573452467
// })

// database.ref("notes/-LfzGlEP4_s58RbU6y9L").remove()

// database.ref("notes").push({
// 	title: "First Note",
// 	body: "My note"
// })

// database.ref("notes").push({
// 	title: "Something",
// 	body: "Something else"
// })

// const firebaseNotes = {
// 	notes: {
// 		jdfbugarsxjn: {
// 			title: 'First Note',
// 			body: 'My note'
// 		},
// 		savsajfbshfsi: {
// 			title: 'Second Note'		},
// 			body: 'My second note'
// 	}
// }

// const onValueChange = database.ref().on(
// 	"value",
// 	snapshot => {
// 		console.log(
// 			snapshot.val().name,
// 			"is a",
// 			snapshot.val().job.title,
// 			"at",
// 			snapshot.val().job.company
// 		)
// 	},
// 	error => {
// 		console.log("Error with data fetching", error)
// 	}
// )

// setTimeout(() => {
// 	database.ref("job/company").set("Google")
// }, 3500)

// setTimeout(() => {
// 	database.ref().off("value", onValueChange)
// }, 3500)

// setTimeout(() => {
// 	database.ref("job/company").set("Amazon")
// }, 3500)

// const onvalueChange = database.ref().on(
// 	"value",
// 	snapshot => {
// 		console.log(snapshot.val())
// 	},
// 	error => {
// 		console.log("Error with data fetching", error)
// 	}
// )

// setTimeout(() => {
// 	database.ref("age").set(26)
// }, 3500)

// setTimeout(() => {
// 	database.ref().off("value", onvalueChange)
// }, 7000)

// setTimeout(() => {
// 	database.ref("age").set(27)
// }, 10500)

// database
// 	.ref("location/city")
// 	.once("value")
// 	.then(snapshot => {
// 		const val = snapshot.val()
// 		console.log(val)
// 	})
// 	.catch(error => {
// 		console.log("Error fetching details", error)
// 	})

// database
// 	.ref()
// 	.set({
// 		name: "Nikhil Raj",
// 		age: 22,
// 		stressLevel: 6,
// 		job: {
// 			title: "Frontend Developer",
// 			company: "Google India"
// 		},
// 		location: {
// 			city: "Bangalore",
// 			country: "India"
// 		}
// 	})
// 	.then(() => {
// 		console.log("Data is saved")
// 	})
// 	.catch(error => {
// 		console.log("This failed", error)
// 	})

// database.ref().update({
// 	stressLevel: 9,
// 	"job/company": "Tapas",
// 	"location/city": "Delhi"
// })

// database
// 	.ref("isSingle")
// 	.remove()
// 	.then(() => {
// 		console.log("Data removed")
// 	})
// 	.catch(error => {
// 		console.log("Data not removed", error)
// 	})
