import nodemailer from 'nodemailer'
import connectDB from '@/app/lib/mongocon'
const contact = require('@/app/lib/schemas/contact')
export default async function handler(req, res) {
    const { mail, msg, name, subject } = req.body
    try {
        await connectDB()

        console.log(req.body)
        const test = new contact({
            msg, name, mail, subject
        })
        const okay =await test.save();
        console.log(okay)
        if(okay){
            res.status(200).json({ massage: "contact form submitted" })

        }
        const trasporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'akashgohil.av@gmail.com',
                pass: 'kgse oncc wwzb vdsn'
            }
        })
        const mailOptions = {
            from: 'akashgohil.av@gmail.com',
            to: "akashgohil.av@gmail.com",
            subject: 'New Message from Contact Form',
            text: `Name: ${name}\nEmail: ${mail}\nSubject: ${subject}Message: ${msg}`,
        }
        const done = await trasporter.sendMail(mailOptions);
        console.log(done)



    } catch (error) {
res.status(400).json({error})
    }


}