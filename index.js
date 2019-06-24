// Code your solution in this file.
function lowerCaseDrivers(drivers) {
return drivers.map(function(driver) {
    return driver.toLowerCase();
});
}

function nameToAttributes(list) {
    return list.map(function(driver) {
        const fName = driver.split(' ')[0]
        const lName = driver.split(' ')[1]
        
        return { firstName:fName, lastName: lName}
    })
}

function attributesToPhrase(drivers) {
 return drivers.map(function(driver) {
     return `${driver.name} is from ${driver.hometown}`
 })
}