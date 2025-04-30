import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Feedback.module.css';

const Feedback = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);
        setError('');

        emailjs.sendForm(
            'service_yw4qgrr',
            'template_0mo7mwm',
            form.current,
            'YbYHf7RfMovxhaOFd' 
        )
        .then((result) => {
            console.log('Email sent successfully!', result.text);
            setIsSent(true);
            form.current.reset();
        })
        .catch((error) => {
            console.error('Error details:', error);
            setError(`Failed to send feedback: ${error.text || 'Unknown error'}. Please try again later.`);
        })
        .finally(() => {
            setIsSending(false);
        });
    };

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <h2>Send Feedback</h2>
                {isSent ? (
                    <div className={styles.successMessage}>
                        Thank you for your feedback! I'll get back to you soon.
                    </div>
                ) : (
                    <form ref={form} onSubmit={sendEmail} className={styles.form}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="user_name"
                                required
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="user_email"
                                required
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message">Your Feedback</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                placeholder="Enter your feedback here..."
                                rows="5"
                            />
                        </div>
                        {error && <div className={styles.error}>{error}</div>}
                        <button 
                            type="submit" 
                            className={styles.submitButton}
                            disabled={isSending}
                        >
                            {isSending ? 'Sending...' : 'Send Feedback'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Feedback; 