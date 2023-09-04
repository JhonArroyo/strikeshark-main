const fs = require('fs')
const path = require('path')

// Array Filenames to create custom files extension *TODO*
const arrayOfObjects = [{ controller: "Controller.js" }, { model: ".js" }, { component: ".ejs" }]

// Get the custom filename from the command-line arguments
const customFilename = process.argv[2]

// Declare Re-usable variables
let concatPath
let filePath
let fileContent
let folderPath
let CapitalizedChar

if (!customFilename) {
    console.error('Please provide a custom filename.');
    process.exit(1);
}

arrayOfObjects.forEach((object) => {
    // Access the properties of each object and do something with them
    if (object.controller) {
        // Capitalize the first character and concatenate it with the rest of the string
        CapitalizedChar = customFilename.charAt(0).toUpperCase() + customFilename.slice(1);
        concatPath = customFilename+object.controller
        // The content to be injected
        fileContent =
`const ${CapitalizedChar} = require('./models/${CapitalizedChar}');

// Example controller actions
// Note: All todo are example

exports.list${CapitalizedChar} = async (req, res) => {
    const ${customFilename} = await ${CapitalizedChar}.find()
    res.render('components/${customFilename}', { ${customFilename} })
}

exports.create${CapitalizedChar} = async (req, res) => {
    const { todo } = req.body
    const new${CapitalizedChar} = new ${CapitalizedChar}({ todo })
    await new${CapitalizedChar}.save()
    res.redirect('/')
}`

        folderPath = "./controllers"
        // Combine the folder path and filename to create the full file path
        filePath = path.join(folderPath, concatPath);

        // Write the content to the custom filename
        fs.writeFileSync(filePath, fileContent);

    } else if (object.model) {
        // Capitalize the first character and concatenate it with the rest of the string
        CapitalizedChar = customFilename.charAt(0).toUpperCase() + customFilename.slice(1);

        concatPath = CapitalizedChar+object.model

        // The content to be injected
        fileContent =
`const mongoose = require('mongoose')
const ${CapitalizedChar} = mongoose.model('${CapitalizedChar}', new mongoose.Schema({
    // Place your declarations here
    todo: String,
}))
module.exports = ${CapitalizedChar}`

        folderPath = "./models"
        // Combine the folder path and filename to create the full file path
        filePath = path.join(folderPath, concatPath);

        // Write the content to the custom filename
        fs.writeFileSync(filePath, fileContent);

    } else if (object.component) {
        concatPath = customFilename+object.component
        // The content to be injected
        fileContent = '<p> <!--Place your code here--> </p>'

        folderPath = "./views/components"
        // Combine the folder path and filename to create the full file path
        filePath = path.join(folderPath, concatPath);

        // Write the content to the custom filename
        fs.writeFileSync(filePath, fileContent);
    }

  })

console.log(`Created ${customFilename} member Succesfully`)
