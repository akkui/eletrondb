const fs = require("fs");
exports.default = (Folder_path, File, Element) => {
    if (!File) return console.error(`ERROR "removeElement": File isn't specified.`)
    if (!fs.existsSync(`${Folder_path}/${File.replaceAll('.', '')}.json`)) return console.error(`ERROR "removeElement": File "${File}" doesn't exist.`);
    const element = fs.readFileSync(`${Folder_path}/${File.replaceAll('.', '')}.json`);
    const data = JSON.parse(element);
    i = 0;
    data.forEach(e => { if (e[Element] !== undefined) data.splice(i, 1); i = i + 1; })
    fs.unlink(`${Folder_path}/${File.replaceAll('.', '')}.json`, function () { });
    fs.writeFile(`${Folder_path}/${File.replaceAll('.', '')}.json`, JSON.stringify(data), function (err) {
        if (err) return;
    });
}