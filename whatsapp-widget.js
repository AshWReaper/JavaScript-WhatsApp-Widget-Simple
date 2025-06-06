function addWhatsAppWidget(position = 'bottom-right', phoneNumber, message = '') {
    if (!phoneNumber) {
        console.error("WhatsApp Widget Error: Phone number is required.");
        return;
    }

    // Create the main container div for the widget
    const whatsappWidget = document.createElement('div');
    whatsappWidget.id = 'whatsapp-widget';
    whatsappWidget.style.
		   position = 'fixed';
    whatsappWidget.style.bottom = '20px'; // Default bottom spacing
    whatsappWidget.style.zIndex = '1000'; // Ensure it's above other content

    // Set position based on argument
    if (position === 'bottom-left') {
        whatsappWidget.style.left = '20px';
    } else if (position === 'bottom-right') {
        whatsappWidget.style.right = '20px';
    } else {
        console.warn("WhatsApp Widget Warning: Invalid position specified. Defaulting to 'bottom-right'.");
        whatsappWidget.style.right = '20px';
    }

    // Create the WhatsApp link
    const whatsappLink = document.createElement('a');
    let whatsappUrl = `https://wa.me/${phoneNumber}`;
    if (message) {
        whatsappUrl += `?text=${encodeURIComponent(message)}`;
    }
    whatsappLink.href = whatsappUrl;
    whatsappLink.target = '_blank'; // Open in a new tab
    whatsappLink.rel = 'noopener noreferrer'; // Security best practice

    // Create the WhatsApp icon (using a simple emoji for demonstration, ideally you'd use an SVG or image)
    const whatsappIcon = document.createElement('span');
    whatsappIcon.textContent = '💬'; // WhatsApp chat bubble emoji
    whatsappIcon.style.fontSize = '40px'; // Adjust size as needed
    whatsappIcon.style.display = 'block';
    whatsappIcon.style.width = '60px'; // Make it clickable easily
    whatsappIcon.style.height = '60px';
    whatsappIcon.style.borderRadius = '50%';
    whatsappIcon.style.backgroundColor = '#25D366'; // WhatsApp green
    whatsappIcon.style.color = 'white';
    whatsappIcon.style.display = 'flex';
    whatsappIcon.style.justifyContent = 'center';
    whatsappIcon.style.alignItems = 'center';
    whatsappIcon.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    whatsappIcon.style.cursor = 'pointer';

    // Append the icon to the link, and the link to the widget container
    whatsappLink.appendChild(whatsappIcon);
    whatsappWidget.appendChild(whatsappLink);

    // Add a tooltip/text label that appears on hover
    const tooltipText = document.createElement('div');
    // tooltipText.textContent = 'Chat on WhatsApp';
    tooltipText.innerHTML = '<span>Chat on </span><br /><span>WhatsApp</span>';
    tooltipText.style.position = 'absolute';
    tooltipText.style.bottom = '70px'; // Position above the icon
    tooltipText.style.backgroundColor = 'rgba(0,0,0,0.7)';
    tooltipText.style.color = 'white';
    tooltipText.style.padding = '5px 10px';
    tooltipText.style.borderRadius = '5px';
    tooltipText.style.whiteSpace = 'nowrap';
    tooltipText.style.textAlign = 'center';
    tooltipText.style.opacity = '0';
    tooltipText.style.transition = 'opacity 0.3s ease-in-out';
    tooltipText.style.pointerEvents = 'none'; // So it doesn't block clicks on the icon

    // Position tooltip based on widget's position
    if (position === 'bottom-left') {
        tooltipText.style.left = '50%';
        tooltipText.style.transform = 'translateX(-50%)';
    } else {
        tooltipText.style.right = '50%';
        tooltipText.style.transform = 'translateX(50%)';
    }

    whatsappWidget.appendChild(tooltipText);

    // Show tooltip on hover
    whatsappIcon.addEventListener('mouseenter', () => {
        tooltipText.style.opacity = '1';
    });

    whatsappIcon.addEventListener('mouseleave', () => {
        tooltipText.style.opacity = '0';
    });

    // Append the widget to the body
    document.body.appendChild(whatsappWidget);

    // Optional: Add some basic styling for better appearance
    const style = document.createElement('style');
    style.innerHTML = `
        #whatsapp-widget a:hover .whatsapp-icon {
            transform: scale(1.1);
            transition: transform 0.2s ease-in-out;
        }
    `;
    document.head.appendChild(style);
}
