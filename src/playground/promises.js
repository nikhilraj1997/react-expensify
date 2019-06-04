const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve({
			name: "Nikhil",
			age: 22
		})
		// reject("Something went wrong")
	}, 1500)
})

console.log("before")

promise
	.then(data => {
		console.log("1", data)

		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve("My other promise")
				// reject("Something went wrong")
			}, 5000)
		})
	})
	.then(str => {
		console.log("does this run?", str)
	})
	.catch(error => {
		console.log("error", error)
	})

console.log("after")
