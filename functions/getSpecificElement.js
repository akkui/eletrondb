const fs = require("fs");
exports.default = (Folder_path, File, Element) => {
    if (!File) return console.error(`ERROR "getSpecificElement": File isn't specified.`)
    if (!Element) return console.error(`ERROR "getSpecificElement": Specific the element to get the content.`)
    if (!fs.existsSync(`${Folder_path}/${File.replaceAll('.', '')}.json`)) return console.error(`ERROR "getSpecificElement": File "${File}" doesn't exist.`);
    const element = fs.readFileSync(`${Folder_path}/${File.replaceAll('.', '')}.json`);
    const elementData = JSON.parse(element);
    let data;
    i = 0;
    elementData.forEach(e => { if (e[Element] !== undefined) data = e[Element]; i = i + 1; })
    return data;
}