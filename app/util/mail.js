"use server";
import nodemailer from "nodemailer";

export async function sendMail(formData){
    const { SMTP_MAIL, SMTP_PASSWORD} = process.env;

    const clientName = (formData.get("clientName"));
    const clientEmail = (formData.get("clientEmail"));
    const clientMessage = (formData.get("clientMessage"));

    const autoReplyContent = `<h1>Thank you for your message</h1><br/>
    <h3>Hello ${clientName}</h3><br/>
    <h3>Here is your message: ${clientMessage}</h3>
    <h3>I will get back to you shortly.</h3><br/>
    <h3>Best Regards,</h3>
    <h3>Leon Man</h3><br/>
    <p>This email was sent at ${new Date().toString()}</p>`

    const notice = `
    <h3>Message from: ${clientName}</h3>
    <h3>Message: ${clientMessage}</h3>
    <h3>Email: ${clientEmail}</h3><br/>
    <p>This email was sent at ${new Date().toString()}</p>`

    const transport = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user: SMTP_MAIL,
            pass: SMTP_PASSWORD,
        }
    })

    try {
        await transport.verify();
    } catch (error) {
        console.log(error);
        return (false);
    }

    try{
        const sendResult_self = transport.sendMail({
            from: SMTP_MAIL,
            to: SMTP_MAIL,
            subject:`New Message from Portfolio`,
            html:notice,
        });
        const sendResult_client = transport.sendMail({
            from: SMTP_MAIL,
            to: clientEmail,
            subject:`An auto reply from Leon Man`,
            html:autoReplyContent,
        });

        var wait = {
            result_self: await sendResult_self,
            result_client: await sendResult_client,
        }

        console.log(wait);
    } catch (error) {
        console.log(error);
        return (false);
    }
    return (true);
}