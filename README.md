# [Simple] WhatsApp Chat Widget for Websites
This repository provides a simple, customizable JavaScript function to add a floating WhatsApp chat widget to your website. Users can easily click on the widget to initiate a conversation with a pre-defined phone number, and optionally, a pre-filled message.

## Features
- Easy Integration: Just one JavaScript function to call.
- Customizable Position: Place the widget at the bottom-left or bottom-right of the screen.
- Set Phone Number: Specify the WhatsApp phone number to contact.
- Pre-filled Message: Optionally include a default message that appears in the user's chat input.
- Simple Styling: Basic, clean styling to make the widget stand out.

## Installation
There's no complex installation or package manager needed. Simply copy and paste the provided JavaScript code into your project.

 1. Create a JavaScript file (e.g., whatsapp-widget.js) in your project, or directly embed the code within your HTML.
 2. Copy the addWhatsAppWidget function from the whatsapp-widget.js example below and paste it into your chosen location.

## Usage
After including the addWhatsAppWidget function in your project, call it in your HTML file, ideally just before the closing </body> tag.

```HTML
<!DOCTYPE html>
<html lang="en">
    <head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>My Website</title>
    </head>
    <body>

	<script src="https://your-domain.com/inc/js/whatsapp-widget.js"></script>

	<script>
	 
	 // Call the function to add the widget
	 // Required: Phone number including country code, no "+" or spaces (e.g., "27821234567")
	 // Optional: 'bottom-left' or 'bottom-right' (defaults to 'bottom-right')
	 // Optional: A pre-filled message for the chat

	 // Example 1: Basic widget on the bottom-right with a phone number
	 addWhatsAppWidget('bottom-right', '27821234567');

	 // Example 2: Widget on the bottom-left with a phone number and a pre-filled message
	 // addWhatsAppWidget('bottom-left', '27829876543', 'Hello, I have a question about your service.');
	</script>
    </body>
</html>
```

### Parameters

- position (String, optional):
  - 'bottom-left'
  - 'bottom-right' (Default if not specified or invalid)
- phoneNumber (String, required): The full WhatsApp phone number, including the country code, without any + signs or spaces (e.g., '27821234567').
- message (String, optional): A pre-filled message that will appear in the WhatsApp chat input field when the user clicks the widget.

## Customization

The widget's appearance can be easily customized by modifying the CSS properties within the addWhatsAppWidget function.

 - Icon: The current icon uses a simple emoji (💬). For a more professional look, consider replacing whatsappIcon.textContent = '💬'; with an <img> tag pointing to a WhatsApp logo SVG or PNG, or using an icon font.
 - Colors & Sizes: Adjust fontSize, width, height, backgroundColor, color, bottom, left/right, and boxShadow to match your website's design.
 - Tooltip: Customize the tooltipText styling (background, color, padding, etc.) for the hover effect.

## License

This project is open-source and available under the MIT License.
