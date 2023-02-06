import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const multer = require("multer");

export const upload = multer({
    dest: './uploads/'
})