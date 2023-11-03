const { items } = require('../models')
const { imageKit } = require('../utils');
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

module.exports = {
    create: async (req, res) => {
        try {

            const data = await prisma.items.create({
                data: {
                    name: req.body.name,
                    image: `/images/${req.file.filename}`,
                    description: req.body.description,
                    quantity: parseInt(req.body.quantity),
                    category_id: parseInt(req.body.category_id)
                }
            })

            return res.status(200).json({
                data
            })

        } catch (error) {
            console.log(error)
            return res.status(500).json({
                error
            })
        }
    },

    createWithImageKit: async (req, res) => {
        try {
            const fileTostring = req.file.buffer.toString('base64')

            const uploadFile = await imageKit.upload({
                fileName: req.file.originalname,
                file: fileTostring
            })

            const data = await items.create({
                data: {
                    name: req.body.name,
                    image: uploadFile.url,
                    description: req.body.description,
                    quantity: parseInt(req.body.quantity),
                    category_id: parseInt(req.body.category_id)
                }
            })

            return res.status(201).json({
                data
            })

        } catch (error) {
            console.log(error)
            return res.status(500).json({
                error
            })
        }
    },

    uploadToImageKit: async (req, res) => {
        try {
            const fileTostring = req.file.buffer.toString('base64')

            const uploadFile = await imageKit.upload({
                fileName: req.file.originalname,
                file: fileTostring
            })
    
    
            return res.status(200).json({
                name: uploadFile.name,
                url: uploadFile.url,
                type: uploadFile.fileType
            })

        } catch (error) {
            console.log(error)
            return res.status(500).json({
                error
            })
        }
    },

    getItems: async (req, res) => {
        try {
            const data = await items.findMany()

            return res.status(200).json({
                data
            })
        } catch (error) {
            return res.status(500).json({
                error
            })
        }
    }
}