// const multer = require("multer");
// const path = require("path");

// // Storage configuration
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/"); // Folder where files will be stored
//   },
//   filename: (req, file, cb) => {
//     // Rename file with timestamp + original extension
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// // File filter (optional) — accept only specific file types
// const fileFilter = (req, file, cb) => {
//   const allowedTypes = /jpeg|jpg|png|gif/;
//   const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
//   const mimetype = allowedTypes.test(file.mimetype);

//   if (extname && mimetype) {
//     cb(null, true);
//   } else {
//     cb(new Error("Only images are allowed"), false);
//   }
// };

// // Multer config
// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 2 * 1024 * 1024 }, // Limit: 2MB
//   fileFilter: fileFilter,
// });

// module.exports = upload;
