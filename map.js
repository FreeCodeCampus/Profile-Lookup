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
  contacts.map(item => {
    if (item["firstName"] === name && item.hasOwnProperty(prop)) {
      console.log(item[prop])
    }
    else if(name !== item["firstName"]){
      console.log("No such contact")
    }
    else {
      console.log("No such property")
    }
  })

}

lookUpProfile("Sherlock", "likes")
