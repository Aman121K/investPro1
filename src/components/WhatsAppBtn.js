import React from 'react';

const WhatsAppButton = ({ phoneNumber, message }) => {
    const whatsappLink = `https://wa.me/${phoneNumber}`;

    return (
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <p>Contact via WhatsApp</p>
        </a>
    );
};

export default WhatsAppButton;