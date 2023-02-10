const fs = require("fs");
exports.default = (Folder_path, File) => {
    if (!File) return console.error(`ERROR "getElement": File isn't specified.`)
    if (!fs.existsSync(`${Folder_path}/${File.replaceAll('.', '')}.json`)) return console.error(`ERROR "getElement": File "${File}" doesn't exist.`);
    const element = fs.readFileSync(`${Folder_path}/${File.replaceAll('.', '')}.json`);
    const elementData = JSON.parse(element);
    return elementData;
}