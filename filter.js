const contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

let lookUpProfile = (name, prop) => {
  const filteredName = contacts.filter(item => item["firstName"] === name)
  const result = filteredName.length ? (filteredName[0][prop] ? filteredName[0][prop] : "No such property") : "No such contact"
  console.log(result)
}

lookUpProfile("Akira", "number")
