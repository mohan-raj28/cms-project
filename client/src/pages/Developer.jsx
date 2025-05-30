import React from 'react';

function Developer(props) {
    return (
        <div>
            Developer page
            <h1>Developer Information</h1>
            <p>
                This page is dedicated to providing information about the developers behind this project. Here, you can find details about their roles, contributions, and how to contact them.
            </p>
            <h2>Meet the Developers</h2>
            <ul>
                <li><strong>MOHANRAJ S</strong></li>
                <li><strong>LOKPRASANTHKUMAR</strong></li>
                <li><strong>HARISH VS</strong></li>
            </ul>
            <h2>Contact Information</h2>
            <p>
                If you have any questions or feedback, feel free to reach out to the developers via email or through our project's GitHub repository.
            </p>
            <h2>Contributions</h2>
            <p>
                The developers are continuously working on improving the project. Contributions are welcome! You can contribute by submitting issues, pull requests, or suggestions on our GitHub page.
            </p>
            <h2>Follow Us</h2>
            <p>
                Stay updated with the latest developments by following us on social media or subscribing to our newsletter.
            </p>
            <h2>Thank You!</h2>
            <p>
                We appreciate your interest in our project and the hard work of our developers. Your support helps us to continue improving and expanding the features of this application.
            </p>    
        </div>
    );
}

export default Developer;