// Dependencies
import React, { useState } from 'react';

// MUI Components
import { Paper, Typography, TextField, Button, Box } from '@mui/material';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', { name, message }); // Log form submission
        const mailtoLink = `mailto:allenhurstcleaners@gmail.com?subject=Website Contact Form Submission from ${name}&body=${encodeURIComponent(message)}`;

        // Clear the form fields
        setName('');
        setMessage('');
        console.log('State after clearing:', { name, message }); // Log state after clearing

        // Delay navigation to allow state updates to take effect
        setTimeout(() => {
            window.location.href = mailtoLink;
        }, 100);
    };

    return (
        <>
            <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
                <Typography variant="h5" gutterBottom>
                    Send Us a Message
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        margin="normal"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        multiline
                        rows={4}
                        margin="normal"
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <Box display="flex" justifyContent="flex-end" mt={2}>
                        <Button type="submit" variant="contained" color="primary">
                            Send Message
                        </Button>
                    </Box>
                </form>
            </Paper>
        </>
    );
};

export default ContactForm;