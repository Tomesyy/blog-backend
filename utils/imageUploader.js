require('dotenv').config()
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');
const { resolve } = require('path');

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploader = (path) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(path, (err, result) => {
            if(err){
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

const uploadImage = async (file) => {
    try{
        const imagePath = path.resolve(__dirname + `/temp_images/${file.name}`);
        await file.mv(imagePath)
        const result = await uploader(imagePath);
        fs.unlink(imagePath, (err)=>{
            if(err) console.log(err);
        })
        return result
    } catch (err) {
        throw new Error(err.message)
    }
    
}

module.exports = {
    uploadImage
}