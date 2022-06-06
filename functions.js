const csvtojson = require('csvtojson')

let filePath = "./tp-data.csv"

// load csv data and convert to json
async function loadData() {
    return await csvtojson().fromFile(filePath)
}

// filter json for drug name and active ingredient
async function filterForNameAndActiveIngredient(arrayOfDrugs, drugName) {
    drugName = drugName.toUpperCase()
    let results = await arrayOfDrugs.filter((drugObj) => {
        return drugObj.product_name.includes(drugName) || drugObj.active_ingredients.includes(drugName)
    })
    return results
}

// function to search via drugname (both name and active ingredient)
async function searchDrug(drugName) {
    let data = await loadData(filePath)
    let result = await filterForNameAndActiveIngredient(data, drugName)
    return result
}


// function to get all dosageforms
async function getAllDosageForms() {
    console.log("called")
    let data = await loadData(filePath)
    let result = await data.map((drugObj) => {
        return drugObj.dosage_form
    })
    let unique = new Set()
    for (let i = 0; i < result.length; i++) {
        unique.add(result[i])
    }
    
    return unique
}


module.exports = {
    loadData,
    searchDrug,
    getAllDosageForms
}