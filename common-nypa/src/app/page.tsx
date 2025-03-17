'use client'; // Add this line to mark the component as a Client Component
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';

const Home: React.FC = () => {
    return (
        <div>
            <Header title="Welcome to My Next.js App" />
            <main>
                <h1>Main Content of the Homepage</h1>
                <Button label="Click Me" onClick={() => alert('Button clicked!')} />
            </main>
            <Footer copyright="© 2023 My Next.js App"  />
        </div>
    );
};

export default Home;