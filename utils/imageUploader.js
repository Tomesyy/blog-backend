require('dotenv').config()
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

cloudinary.config({ 
    cloud_name: 'tomesyy', 
    api_key: process.env.CLOUDINAY_API_KEY, 
    api_secret: process.env.CLOUDINAY_API_SECRET
});

const uploadImage = (file) => {
    
} 

module.exports = {
    uploadImage
}