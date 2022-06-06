const express = require('express')
let utils = require("./functions")
require('dotenv').config()

const app = express()


app.use(express.json())


async function main() {
    app.get("/" , async (req,res) => {
        console.log("called")
        let data = await utils.loadData()
        console.log(data)
        res.status(200).json(data)
    })

    app.get("/:drugname", async (req,res) => {
        let drugName = req.params.drugname
        console.log(drugName)
        let result = await utils.searchDrug(drugName)
        res.json(result)
    })
}

main()


app.listen(process.env.PORT || 7070, () => {
    console.log("Server Started")
})







