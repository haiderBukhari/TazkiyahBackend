import express from "express"
const uploadRoutes = express.Router()
import multer from 'multer';
import { getEbook, uploadEbook } from "../Controller/EbookController.js";


const EbookRoutes = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './files')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() +  '-' + file.originalname;
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

const upload = multer({ storage: storage })
EbookRoutes.post('/', upload.single('file'), uploadEbook)
EbookRoutes.get('/', getEbook)

export default EbookRoutes;