console.log("Hey you! Yeah you! Awesome Developer! You're doing Great Fam! 💪🧑‍💻🙌")



const meObj = {
    name: "Monica Perez-Valle",
    hometown: "Money Earnin' Mount Vernon🤪",
    favoriteColors: ["red", "orange", "yellow", "green", "BLUE!", "indigo", "violet"]
}


function introduceMe (personObj){
    console.log(`Hi, my name is ${personObj.name}, and I'm from ${personObj.hometown}.`)

    console.log(`My favorite colors are ${personObj.favoriteColors}`)
    // print out: "Hi, my name is {your name}, and I'm from {your hometown}"

    // print out: "My favorite colors are {your favorite colors}"
}

introduceMe(meObj)