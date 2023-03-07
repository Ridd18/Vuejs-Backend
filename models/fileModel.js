// import connection
import db from "../config/database.js";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require("fs");

const baseUrl = "http://localhost:5000/";

const baseDir = "C:/riddhesh/FullStack Projects/backend/"

//get all files

export const getListFiles = (req, res) => {
  const directoryPath =  baseDir + "/uploads/";

  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }

    let fileInfos = [];

    files.forEach((file) => {
      fileInfos.push({
        name: file,
        // url: baseUrl + file,
      });
    });

    res.status(200).send(fileInfos);
  });
};

//download

export const download = (req, res) => {
  const fileName = req.params.name;
  const directoryPath = baseDir + "/uploads/";

  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
};

// //add files to database
// //something like a model for file
// export const uploadFile = (data, result) => {
//     upload.single("file")
//     console.log("filename in filemodel",data)
//   db.query(
//     "INSERT INTO file SET file_name = ?",
//     [data],
   
//     (err, results) => {
//       if (err) {
//         console.log(err);
//         result(err, null);
//       } else {
//         result(null, results);
//       }
//     }
//   );
// };
