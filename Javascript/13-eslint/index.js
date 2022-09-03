let name = "Carlos"
console.log(name)
let lastName = "Ortega"
console.log(lastName)
let student = `${name} ${lastName}`
console.log(student)
let studentUp = student.toUpperCase()
console.log(studentUp)
let studentLow = student.toLowerCase()
console.log(studentLow)
let lengthStudent = student.length
console.log(lengthStudent)
let firstLetter = name.substring(0, 1)
console.log(firstLetter)
let lastLetter = lastName.substring(lastName.length -1)
console.log(lastLetter)
let lastNameNoSpace = lastName.replace(/ /g, "")
console.log(lastNameNoSpace)
let isStudent = student.includes(name)
console.log(isStudent)