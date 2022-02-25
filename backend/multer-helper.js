const multer = require('multer');
const nanoid = require('nanoid').nanoid;


//file storage for multer
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        if(file.originalname){
          cb(null, 'images');
        }
    },
    filename: (req, file, cb) => {
      const fileName = nanoid() + '-' + file.originalname;
      cb(null, fileName);
    }
  });
  
  //file filter
  const fileFilter = (req, file, cb) => {
    if (
      file.mimetype === 'image/png' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/jpeg' ||
      file.mimetype === 'application/pdf'
    ) {
      //console.log('file found');
      cb(null, true);
    } else {
      //console.log('file not found');
      cb(null, false);
    }
  }

  module.exports = multer({fileFilter: fileFilter, storage: fileStorage}).single('image');