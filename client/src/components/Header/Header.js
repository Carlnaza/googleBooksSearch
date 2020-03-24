import React from 'react'
import { Jumbotron, Container } from 'reactstrap'

const Header = () => {
    return (
        <Container className="mt-4">
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3 text-center">(React) Google Books Search</h1>
                    <p className="lead text-center">Search for and Save Books of Interest</p>
                </Container>
            </Jumbotron>
        </Container>
    )
}

export default Header