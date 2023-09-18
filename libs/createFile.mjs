/* STRIKESHARK'S 1ST MODULE
Created by: JhonArroyo 2023-08-02 19:45:56 */

import fs from 'fs'
import path from 'path'

// Array Filenames to create custom files extension *TODO*
const arrayOfObjects = [
    { controller: "Controller.mjs" },
    { model: ".mjs" },
    { component: ".ejs" }
]

// Get the custom filename from the command-line arguments
const customFilename = process.argv[2]

// Declare Re-usable variables
let concatPath
let filePath
let fileContent
let folderPath
let CapitalizedChar

switch (customFilename) {
    case null:
        console.error('Please provide a member name.');
        process.exit(1);
    case 'help':
        console.error(`
            Usage: npm run new:strikeshark <your_own_member_name>
        `);
        process.exit(1);
    default:
        arrayOfObjects.forEach((object) => {
            // Access the properties of each object and do something with them
            if (object.controller) {
                // Capitalize the first character and concatenate it with the rest of the string
                CapitalizedChar = customFilename.charAt(0).toUpperCase() + customFilename.slice(1);
                concatPath = customFilename+object.controller
                // The content to be injected
                fileContent =
`import ${CapitalizedChar} from './models/${CapitalizedChar}.mjs' // Update the path as needed
// Example controller actions
// Note: All todo are example

export async function list${CapitalizedChar}(req, res) {
    const users = await ${CapitalizedChar}.find();
    res.render('components/user', { users });
}

export async function create${CapitalizedChar}(req, res) {
    const { todo } = req.body;
    const new${CapitalizedChar} = new ${CapitalizedChar}({ todo });
    await new${CapitalizedChar}.save();
    res.redirect('/');
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
`import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  // Place your declarations here
  todo: String,
});
const ${CapitalizedChar} = mongoose.model('${CapitalizedChar}', userSchema);
export default ${CapitalizedChar}`

                folderPath = "./models"
                // Combine the folder path and filename to create the full file path
                filePath = path.join(folderPath, concatPath);

                // Write the content to the custom filename
                fs.writeFileSync(filePath, fileContent);

            } else if (object.component) {
                concatPath = "strikeshark-"+customFilename+object.component
                // The content to be injected
                fileContent = '<p> <!--Place your code here--> </p>'

                folderPath = "./views/components"
                // Combine the folder path and filename to create the full file path
                filePath = path.join(folderPath, concatPath);

                // Write the content to the custom filename
                fs.writeFileSync(filePath, fileContent);
            }

          })

        console.log(`🦈Created ${customFilename} member Succesfully`)
}

