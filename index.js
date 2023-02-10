const storage = {
    folder_path: 'undefined'
}

/**
* Set the folder that the json files will be saved.
* @param {string} folder_name - Folder name
*/
function setup(folder_name) {
    const getJS = require("./functions/setup").default(folder_name);
    if (getJS) storage.folder_path = getJS.folder;
    return undefined;
}

/**
* Create a File inside the Database.
* @param {string} file_name - File name
* @param {object} data - The Content of the File (Use {} for empty)
*/
function createFile(file_name, data) {
    return require("./functions/createFile").default(storage.folder_path, file_name, data);
}

/**
* Delete a File inside the Database.
* @param {string} file_name - File name
*/
function deleteFile(file_name) {
    return require("./functions/deleteFile").default(storage.folder_path, file_name);
}

/**
* Add new Objects to a Database File.
* @param {string} file_name - File name
* @param {object} content - The new Object that will be added
*/
function addElement(file_name, content) {
    return require("./functions/addElement").default(storage.folder_path, file_name, content);
}

/**
* Remove an Object from a Database File.
* @param {string} file_name - File name
* @param {string} object_name - The Name of the Object that will be removed
*/
function removeElement(file_name, object_name) {
    return require("./functions/removeElement").default(storage.folder_path, file_name, object_name);
}

/**
* Get the Object Data inside a Database File.
* @param {string} file_name - File name
* @param {string} object_name - The Name of the Object
*/
function getSpecificElement(file_name, object_name) {
    return require("./functions/getSpecificElement").default(storage.folder_path, file_name, object_name);
}

/**
* Get All the Objects in a Database File.
* @param {string} file_name - File name
*/
function getAllElements(file_name) {
    return require("./functions/getAllElements").default(storage.folder_path, file_name);
}

module.exports = { setup, createFile, deleteFile, addElement, removeElement, getSpecificElement, getAllElements }
