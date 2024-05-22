import nodemailer from 'nodemailer'

import { resolve } from 'styled-jsx/css'
const contact = require('@/app/lib/schemas/contact')
export default async function handler(req, res) {
    const { mail, msg, name, subject } = req.body
    try {
        

       
       
        const trasporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'akashgohil.av@gmail.com',
                pass: 'kgse oncc wwzb vdsn'
            }
        })

        await new Promise((resolve, reject) => {
            // verify connection configuration
            trasporter.verify(function (error, success) {
                if (error) {
                    console.log(error);
                    reject(error);
                } else {
                    console.log("Server is ready to take our messages");
                    resolve(success);
                }
            });
        });
        const mailOptions = {
            from: 'akashgohil.av@gmail.com',
            to: "akashgohil.av@gmail.com",
            subject: 'New Message from Contact Form',
            text: `Name: ${name}\nEmail: ${mail}\nSubject: ${subject}Message: ${msg}`,
        }
        // const done = await trasporter.sendMail(mailOptions);
            await new Promise((resolve,reject)=>{
                trasporter.sendMail(mailOptions, function(err, data) {
                    if (err) {
                      console.log("Error " + err);
                      reject(err)
                    } else {
                        resolve(data)
                            res.status(200).json({ massage: "contact form submitted and email send" })
                            
                        
                    }
                  });
            })

       
        // console.log("done "+done)



    } catch (error) {
res.status(400).json({error})
    }


}
