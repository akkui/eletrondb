const fs = require("fs");
exports.default = (Folder_path, Name, Object) => {
    if (Name && typeof Name === 'string' && ![undefined, null, "", " "].includes(Name)) { undefined; } else { return console.error(`ERROR "createFile": "${Name}" is invalid.`); }
    if (Object && typeof Object === 'object') { undefined; } else { return console.error(`ERROR "createFile": The File Content need be an Object.`); }
    if (fs.existsSync(`${Folder_path}/${Name.replaceAll('.', '')}.json`)) return console.error(`ERROR "createFile": Already exists a file with this name.`);
    fs.writeFile(`${Folder_path}/${Name.replaceAll('.', '')}.json`, JSON.stringify([Object]), function (err) {
        if (err) return;
    });
}