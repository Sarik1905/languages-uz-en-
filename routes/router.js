const {Router} = require("express")
const { getHome, getAbout, getContact, getService } = require('../controllers/pages')

const router = Router(); // shu fayl uchun router degan server yaratilmoqda

router.get('/', getHome)
router.get('/about', getAbout)
router.get('/contact', getContact)
router.get('/service', getService)


module.exports = router