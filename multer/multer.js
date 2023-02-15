import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import db from "../config/database.js";
import * as mime from 'mime-types';

export const multer = require("multer");

export const storage  = multer.diskStorage({
    destination: function (req,file,cb) {
      cb(null, './uploads/');
    },
    filename: function (req,file,cb) {
      const name = file.originalname;
      console.log("filename in multer line 15",name)
      /* need to use the file's mimetype because the file name may not have an extension at all */
    //   let ext = mime.extension(file.mimetype);
      cb(null, `${name}`);
      db.query(
        "INSERT INTO file SET file_name = ?",
        [name],
       
        (err, results) => {
          if (err) {
            console.log(err);
          } else {
            console.log(results);
          }
        }
      );
    }
  });
  
  export const upload =  multer({ storage: storage });



 