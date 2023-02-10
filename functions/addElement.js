const fs = require("fs");
exports.default = (Folder_path, File, Object) => {
    if (!File) return console.error(`ERROR "addElement": File isn't specified.`)
    if (!fs.existsSync(`${Folder_path}/${File.replaceAll('.', '')}.json`)) return console.error(`ERROR "addElement": File "${File}" doesn't exist.`);
    const element = fs.readFileSync(`${Folder_path}/${File.replaceAll('.', '')}.json`);
    const data = JSON.parse(element)
    data.push(Object)
    fs.unlink(`${Folder_path}/${File.replaceAll('.', '')}.json`, function () { });
    fs.writeFile(`${Folder_path}/${File.replaceAll('.', '')}.json`, JSON.stringify(data), function (err) {
        if (err) return;
    });
}