import React, { useState, useEffect } from 'react';


function Header() {
    const affirmations = [
        "I am capable of achieving my goals.",
        "I believe in myself and my abilities.",
        "I radiate confidence and positivity.",
        "I can do hard things.",
        "I am strong, resilient, and fearless.",
        "I attract success and happiness.",
        "I deserve love, success, and abundance.",
        "I am constantly growing and evolving.",
        "I choose to focus on what I can control.",
        "I am enough just as I am.",
        "I embrace challenges as opportunities for growth.",
        "I am surrounded by love and support.",
        "I have the power to create change in my life.",
        "I am grateful for all that I have.",
        "I trust myself to make the right decisions.",
        "I am worthy of happiness and peace.",
        "I release self-doubt and welcome confidence.",
        "I am in charge of my own happiness.",
        "I have everything I need within me.",
        "I am proud of who I am becoming."
    ];

    const [quote, setQuote] = useState('');

      // Function to get a random affirmation
    const randomQuote = () => {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    setQuote(affirmations[randomIndex]);
    };

    // Run once on component mount to set an initial quote
    useEffect(() => {
        randomQuote(); // Set an initial random quote
        const interval = setInterval(randomQuote, 3600000); // Update every hour

        // Clean up the interval when the component unmounts
        return () => clearInterval(interval);
    } , []); // Empty dependency array to only run on mount








    return (
        <>
        <div className="container">
            <h1>Weekly ToDos</h1>
            <p id="quote" className="quote">{quote}</p>
        </div>
        </>
    )
}

export default Header;