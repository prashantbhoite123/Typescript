// const hello = {
//   name: "prashant",
//   age: 20,
//   isPaid: false,
// }

// function createObject({ name: string, isPaid: boolean }) {
//   return
// }

// let newUser = { name: "prashant", isPaid: false, email: "prashu@gmail.com" }
// createObject(newUser)

// function createCourse(): { name: string; price: number } {
//   return { name: "javascript", price: 399 }
// }

// type User = {
//   name: string
//   email: string
//   isActive: boolean
// }

// function createUser(user: User): void {
//   return
// }


type User = {
  readonly _id:string,
  name: string,
  email: string,
  isActive: boolean,
  creadCardDetail:number
}


let myUser: User = {
  _id:"jgsfdjkdshf sd",
  name: "prashant",
  email: "prashant@gmail.com",
  isActive: true,
  creadCardDetail:908560456
}

myUser.name = "Vishal"
myUser.email = "V@gmail.com"

type cardNumber = {
  cardNumber:string
}


type cardDate = {
  cardDate:string
}

type cardDetail = cardNumber & cardDate & {
  cvv:number
}

export { }

