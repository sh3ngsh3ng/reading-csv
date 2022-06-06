const csvtojson = require('csvtojson')


async function loadData(filePath) {
    return await csvtojson().fromFile(filePath)
}


module.exports = {
    loadData
}