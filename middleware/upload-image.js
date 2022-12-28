const multer = require('multer');
const fs = require('fs');

exports.uploadImage = (params) => {
  const { destination } = params;
  
  return imageUpload = multer({
    storage: multer.diskStorage({
      destination: function (req, file, cb) {
        const path = `./public/images/${destination}/`;
        fs.mkdirSync(path, { recursive: true })
        cb(null, path);
      },
      // By default, multer removes file extensions so let's add them back
      filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname }`)
      }
    }),
    limits: { fileSize: 20000000 },
    fileFilter: function (req, file, cb) {
      if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
        console.log(file);
        req.fileValidationError = {
          'param': file.fieldname,
          'msg': 'Only .jpg, .jpeg, and .png format allowed!'
        };
        cb(null, false);
      }
      cb(null, true);
    }
  })
}