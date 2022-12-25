const multer = require('multer');
const fs = require('fs');

exports.upload = (params) => {
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
      if (!file.originalname.match(/\.(jpg|JPG|webp|jpeg|JPEG|png|PNG|gif|GIF|jfif|JFIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(null, false);
      }
      cb(null, true);
    }
  })
}