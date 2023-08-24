"use server";
import ContactEmailTemp from "@/email/contact-email-temp";
import { getErrorMessage, validateString } from "@/lib/utils";
import React from "react";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
const sendEmail = async (formData: FormData) => {
  const message = formData.get("message");
  const senderEmail = formData.get("sender");

  if (!validateString(message, 500)) {
    return {
      error: "invailed message",
    };
  }

  if (!validateString(senderEmail, 50)) {
    return {
      error: "invailed sender email",
    };
  }
  var data;
  try {
    data = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: "alifouanne8@gmail.com",
      subject: "message from Contact Form",
      reply_to: senderEmail as string,
      react: React.createElement(ContactEmailTemp, {
        message: message as string,
        sender: senderEmail as string,
      }),
    });
  } catch (error) {
    return { error: getErrorMessage(error) };
  }
  return {
    data,
  };
};
export default sendEmail;
