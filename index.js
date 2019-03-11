// Code your solution in this file.


function lowerCaseDrivers(drivers) {
    return drivers.map(d => d.toLowerCase())
}

function nameToAttributes(drivers) {
    let obj = {}
    obj = drivers.map(function(d) {
        let name = d.split(" ")
        console.log(name)
        return {
            firstName: name[0],
            lastName: name[1]
        }
    })
    return obj
}

function attributesToPhrase(drivers) {
    return drivers.map(d => `${d.name} is from ${d.hometown}`)
}