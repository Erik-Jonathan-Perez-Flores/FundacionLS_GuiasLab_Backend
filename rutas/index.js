'use strict'

const express = require('express')
const guideCtrl = require('../controles/guias')
const UploadFile=require('../controles/uploadFile')
const Galeria = require('../controles/uploadFile')
const router = express.Router()

// Routes

router.get('/practica', guideCtrl.getPractica)
router.get('/practica/:pId', guideCtrl.getPracticaId)//para mostrara una sola
router.post('/practica', guideCtrl.savePractica)
router.put('/practica/:pId', guideCtrl.updatePractica)
router.delete('/practica/:pId', guideCtrl.deletePractica)
//////////
router.get('/materia', guideCtrl.getMateria)
router.post('/materia', guideCtrl.saveMateria)
/////////
router.post('/subirArchivo',UploadFile.uploadFile)
router.get('/subirArchivo',Galeria.galeria)
router.delete('/subirArchivo/:pId', Galeria.deletefile)


module.exports = router
