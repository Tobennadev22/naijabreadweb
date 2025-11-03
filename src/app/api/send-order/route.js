import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { cart, customerInfo } = await request.json();

    // Validate environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Email credentials not configured");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Create a transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const totalAmount = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    // Use a publicly accessible image URL for the header background
    const headerBackgroundImage =
      process.env.EMAIL_HEADER_IMAGE ||
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80";

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ORDER_RECEIVING_EMAIL || process.env.EMAIL_USER,
      subject: `New Bakery Order from ${customerInfo.name || "Customer"}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body { 
                font-family: 'Arial', sans-serif; 
                line-height: 1.6; 
                color: #333; 
                margin: 0; 
                padding: 0; 
                background-color: #f9f9f9;
              }
              .email-container {
                max-width: 600px;
                margin: 0 auto;
                background: white;
                border-radius: 10px;
                overflow: hidden;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              }
              .header {
                background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${headerBackgroundImage}');
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                color: white;
                padding: 40px 20px;
                text-align: center;
                min-height: 150px;
                flex-direction: column;
                justify-content: center;
                align-items: center;
              }
              .header h1 {
                margin: 0;
                font-size: 2.5em;
                font-weight: bold;
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
               
              }
              .header p {
                margin: 10px 0 0 0;
                font-size: 1.2em;
                text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
              }
              .content { 
                padding: 30px; 
              }
              .customer-info { 
                background: #f8f9fa; 
                padding: 20px; 
                margin: 20px 0; 
                border-radius: 8px; 
                border-left: 4px solid #f97316; 
              }
              .order-item { 
                border-bottom: 1px solid #e9ecef; 
                padding: 15px 0; 
                display: flex;
                justify-content: space-between;
                align-items: center;
              }
              .order-item:last-child {
                border-bottom: none;
              }
              .item-details {
                flex: 1;
              }
              .item-price {
                text-align: right;
                min-width: 100px;
              }
              .total { 
                font-size: 1.3em; 
                font-weight: bold; 
                margin-top: 25px; 
                padding: 20px; 
                background: #fff3e0; 
                border-radius: 8px; 
                text-align: center;
                border: 2px solid #f97316;
              }
              .footer {
                text-align: center;
                padding: 20px;
                background: #2d3748;
                color: white;
                margin-top: 30px;
              }
              .info-label {
                font-weight: bold;
                color: #4a5568;
                min-width: 120px;
                display: inline-block;
              }
              @media (max-width: 600px) {
                .header h1 { font-size: 2em;}
                .header p { font-size: 1em; }
                .order-item { flex-direction: column; align-items: flex-start; }
                .item-price { text-align: left; margin-top: 10px; }
              }
            </style>
          </head>
          <body>
            <div class="email-container">
              <div class="header">
                <h1>Naijabreads</h1>
                <p>New Order Received!</p>
              </div>
              
              <div class="content">
                <div class="customer-info">
                  <h3 style="margin-top: 0; color: #2d3748;">👤 Customer Information</h3>
                  <p><span class="info-label">Name:</span> ${
                    customerInfo.name || "Not provided"
                  }</p>
                  <p><span class="info-label">Email:</span> ${
                    customerInfo.email || "Not provided"
                  }</p>
                  <p><span class="info-label">Phone:</span> ${
                    customerInfo.phone || "Not provided"
                  }</p>
                  <p><span class="info-label">Address:</span> ${
                    customerInfo.address || "Not provided"
                  }</p>
                  ${
                    customerInfo.deliveryTime
                      ? `<p><span class="info-label">Delivery Time:</span> ${customerInfo.deliveryTime}</p>`
                      : ""
                  }
                  ${
                    customerInfo.paymentMethod
                      ? `<p><span class="info-label">Payment Method:</span> ${customerInfo.paymentMethod}</p>`
                      : ""
                  }
                  ${
                    customerInfo.referral
                      ? `<p><span class="info-label">Referral Source:</span> ${customerInfo.referral}</p>`
                      : ""
                  }
                  <p><span class="info-label">Special Instructions:</span> ${
                    customerInfo.instructions || "None"
                  }</p>
                </div>
                
                <h3 style="color: #2d3748; margin-bottom: 20px;">📦 Order Details</h3>
                ${cart
                  .map(
                    (item) => `
                  <div class="order-item">
                    <div class="item-details">
                      <strong style="color: #2d3748;">${item.name}</strong>
                      <div style="color: #718096; font-size: 0.9em;">
                        Quantity: ${item.quantity} × $${item.price} each
                      </div>
                    </div>
                    <div class="item-price">
                      <strong style="color: #f97316;">$${(
                        item.price * item.quantity
                      ).toFixed(2)}</strong>
                    </div>
                  </div>
                `
                  )
                  .join("")}
                
                <div class="total">
                  <span style="color: #2d3748;">💰 Total Amount: </span>
                  <span style="color: #f97316; font-size: 1.4em;">$${totalAmount.toFixed(
                    2
                  )}</span>
                </div>
                
                <p style="text-align: center; color: #718096; margin-top: 30px; font-style: italic;">
                  ⏰ Order received at: ${new Date().toLocaleString()}
                </p>
              </div>
              
              <div class="footer">
                <p>Thank you for choosing Fresh Bakery! 🎉</p>
                <p style="font-size: 0.9em; opacity: 0.8;">
                  We'll contact you shortly to confirm your order.
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Order sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending order:", error);
    return NextResponse.json(
      { error: "Failed to send order. Please try again." },
      { status: 500 }
    );
  }
}
