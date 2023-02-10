const fs = require("fs");
exports.default = (folder_path) => {
    let folder_ = folder_path.replaceAll(" ", "_");
    if ([undefined, null, "", " "].includes(folder_)) return console.error(`ERROR "setup": The name of database folder at setup is invalid.`);
    if (!fs.existsSync(folder_)) fs.mkdirSync(folder_);
    return { folder: folder_ }
};