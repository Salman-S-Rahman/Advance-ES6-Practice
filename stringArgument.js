
function fullName(name1, name2) {
    console.log(arguments)
    let name = "";
    for (const value of arguments) {
        name = name + value + " "
    }
    return name;
}

const nameDetails = fullName("Taskin", "Asghar", "Afghan");
console.log(nameDetails);