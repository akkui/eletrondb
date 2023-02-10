# EletronDB
A simple local database that works with json files.

## Installation Methods
``npm install eletron.db``

## How Use
Firstly, make a <b>require</b> of the database in your code.<br>
And, setup the folder what the database files will be saved.<br>
```
const eletrondb = require("eletron.db");
eletrondb.setup("Folder_Name");
```
The code accept subfolder, for example: ``First_folder/Second_folder``<br>
After the setup, you can start use the database functions.

## Functions
### Create a File inside the Database:
```
eletrondb.createFile("File_Name", {
  name: "akkuii",
  aboutme: "Hello!"
});
```
### Delete a File inside the Database:
```
eletrondb.deleteFile("File_Name");
```
### Add new Objects to a Database File:
```
eletrondb.addElement("File_Name", {
  status: "online"
});
```

### Remove an Object from a Database File:
```
eletrondb.removeElement("File_Name", "Element Name (example: status)");
```

### Get All the Objects in a Database File:
```
const data = eletrondb.getAllElements("File_Name");
```

### Get the Object Data inside a Database File:
```
const data = eletrondb.getSpecificElement("File_Name", "Element Name (example: name)");
```
