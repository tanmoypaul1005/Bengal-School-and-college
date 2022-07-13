import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
const CartPage = (data) => {
    const { title, body, description, image } = data.item
    console.log(data.item);
    return (
        <div>
            <Container >
                {/* <Card style={{ width: '19.4rem' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Button style={{ marginLeft: '5.5rem' }} variant="primary">view More</Button>
                    </Card.Body>
                </Card> */}
            </Container>
        </div>
    );
};

export default CartPage;