type city = {
  name: String
  age: number
}

type population = {
  values: String
  isAdmin: boolean
}

type collection = city & population

let thisValue: collection = {
  name: "prashant",
  age: 18,
  values: "hello world",
  isAdmin: true,
}

console.log(thisValue.name)
