import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import './App.css';



const firstName = "Ighalo Emmanuel"; 

function App() {
  return (
    <Container className="my-5">
      <Card style={{ width: '18rem' }} className="text-center shadow-sm">
        <Card.Body>
          <Image />
          <Card.Title><Name /></Card.Title>
          <Card.Subtitle className="mb-2 text-muted"><Price /></Card.Subtitle>
          <Card.Text><Description /></Card.Text>
        </Card.Body>
      </Card>

      <div className="mt-4">
        {firstName ? (
          <>
            <p>Hello, {firstName}!</p>
            <img src="https://via.placeholder.com/50" alt="Welcome" className="welcome-image" />
          </>
        ) : (
          <p>Hello, there!</p>
        )}
      </div>
    </Container>
  );
}

export default App;
