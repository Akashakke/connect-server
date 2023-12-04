import express from 'express'
const router = express.Router()
import multer from 'multer'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(file, "public/images");
    },
    filename: (req, file, cb) => {
      cb(file, req.body.name);
    },
  });
const upload = multer({ storage: storage });


router.post("/", upload.single("file"), (req, res) => {
    try {
      return res.status(200).json("File uploded successfully");
    } catch (error) {
      console.error(error);
    }
  });

export default router
