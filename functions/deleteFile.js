const fs = require("fs");
exports.default = (Folder_path, Name) => {
    if (!Name) return console.error(`ERROR "deleteFile": File isn't specified.`);
    if (!fs.existsSync(`${Folder_path}/${Name.replaceAll('.', '')}.json`)) return console.error(`ERROR "deleteFile": File "${Name}" doesn't exist.`);
    fs.unlink(`${Folder_path}/${Name.replaceAll('.', '')}.json`, function () { });
}