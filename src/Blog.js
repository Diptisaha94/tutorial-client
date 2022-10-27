import React from 'react';

const Blog = () => {
    return (
        <div className='container mt-5'>
            <h2>1.what is cors?</h2>
            <p>Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos. Certain "cross-domain" requests, notably Ajax requests, are forbidden by default by the same-origin security policy. CORS defines a way in which a browser and server can interact to determine whether it is safe to allow the cross-origin request.[3] It allows for more freedom and functionality than purely same-origin requests, but is more secure than simply allowing all cross-origin requests.The specification for CORS is included as part of the WHATWG's Fetch Living Standard.[4] This specification describes how CORS is currently implemented in browsers.</p>
            <h2>2.Why are you using firebase? What other options do you have to implement authentication?</h2>
            <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
            <p>User Authentication Platforms [Auth0, Firebase Alternatives]</p>
            <li>STYTCH.</li>
            <li>Supabase</li>
            <li>Okta.</li>
            <li>PingIdentity.</li>
            <li>Keycloak.</li>
            <h2>3.How does the private route work?</h2>
            <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
            <h2>What is Node? How does Node work?</h2>
            <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. Working of Node.</p>
        </div>
    );
};

export default Blog;