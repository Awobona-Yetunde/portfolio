"use server";

export const sendContactEmailAction = async (formData: FormData) => {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    await sendEmail({
      to: process.env.CONTACT_TO_EMAIL, // Your email
      from: process.env.CONTACT_FROM_EMAIL, // Verified sender
      subject: `New Contact Message from ${name}`,
      text: emailText,
      html: emailHtml,
    });

    return {errorMessage: null};
  } catch (error) {
    console.error(error);
    return{errorMessage: "Something went wrong"};
  }
};
