const express = require('express')
let utils = require("./functions")
require('dotenv').config()

const app = express()
let filePath = "./tp-data.csv"

app.use(express.json())


async function main() {
    app.get("/" , async (req,res) => {
        console.log("called")
        let data = await utils.loadData(filePath)
        res.status(200).json(data)
    })
}

main()


app.listen(process.env.PORT || 9090, () => {
    console.log("Server Started")
})







