function findMatching(drivers,string) {
    const matchResult = drivers.filter((driver) => driver.toUpperCase() === string.toUpperCase())
    return matchResult
}

function fuzzyMatch(drivers,string) {
    const letterResult = drivers.filter((driver) => driver[0] === string[0])
    return letterResult
}

function matchName(drivers, string) {
    const nameResult = drivers.filter((driver) => driver.name === string)
    return nameResult
}