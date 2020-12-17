const express = require('express');
const https = require('https')
const fs = require('fs')
const path = require('path')


const router = express.Router()

const ocr_aws = "https://xeta.tech"



const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
});
  


const options_home = {
    hostname: 'xeta.tech',
    port: 443,
    path: '/',
    method: 'GET',
    agent: httpsAgent,
    headers: {
        'Content-Type': 'application/json',
    }
}

// const req_aws_ocr = https.request(options_home, res => {
//     console.log(`statusCode: ${res.statusCode}`)
//     res.on('data', d => {
//         process.stdout.write(d)
//     })
// })
  
// req_aws_ocr.on('error', error => {
//     console.error(error);
// })

// req_aws_ocr.write(data)
// req_aws_ocr.end()

router.get('/home', (req, res) => {
    const req_aws_ocr = https.request(options_home, res => {
        console.log(`statusCode: ${res.statusCode}`)
        res.on('data', d => {
            process.stdout.write(d)
        })
    })
      
    req_aws_ocr.on('error', error => {
        console.error(error);
    })
    
    // req_aws_ocr.write(data)
    req_aws_ocr.end()
})

// console.log(process.cwd())
// fs.readFile(`${process.cwd()}/ss.jpeg`, (err, img) => {
//     if(err) res.status(500).send(err);

//     let base64Image = new Buffer(img, 'binary').toString('base64');
//     console.log(base64Image)
// })

function getOcrData(photo){
    return new Promise((resolve, reject) => {
        fs.readFile(`${process.cwd()}/ss3.png`, async (err, img) => {
            if(err) res.status(500).send(err);
            // console.log(img)
            let base64Image = new Buffer(img).toString('base64');
            // console.log(base64Image)
    
            const data = JSON.stringify({
                photo: base64Image
            })
    
            const options_ocr = {
                hostname: 'xeta.tech',
                port: 443,
                path: '/ocr',
                method: 'POST',
                agent: httpsAgent,
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': data.length
                },
                data: data
            }
    
            const req_aws_ocr = https.request(options_ocr, response => {
                console.log(`statusCode: ${response.statusCode}`)
                response.on('data', d => {
                    // process.stdout.write(d)
                    var DATA = d.toString('utf8');
                    // DATA = JSON.parse(DATA);
                    console.log(DATA)
                    resolve(DATA)
                })

                // console.log("hello")
            })
              
            req_aws_ocr.on('error', error => {
                console.error(error);
            })
            // console.log("res_aws_ocr")
            req_aws_ocr.write(data)
            req_aws_ocr.end()
    
            // console.log(data)
            // resolve()
        })
    })
}

router.get('/ocr', async (req, res) => {
    const extractedKm = await getOcrData();
    res.statusCode = 200;
    // console.log(extractedKm)
    res.json({
        hello: "hello",
        data:  extractedKm
    })
    // req.end()
})


module.exports = router;