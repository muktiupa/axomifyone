export const sendEmail = async (data: any) => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("------------------------------------------------");
    console.log("MOCK EMAIL SENT TO: infoaxomify@gmail.com");
    console.log("SUBJECT: New Enquiry - " + data.type.toUpperCase());
    console.log("DATA:", JSON.stringify(data, null, 2));
    console.log("------------------------------------------------");

    return { success: true, message: "Email sent successfully!" };
};
