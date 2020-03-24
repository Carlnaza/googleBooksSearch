import React from 'react'
import {
    Container,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Card,
    CardBody
} from 'reactstrap'

const SearchForm = () => {
    return (
        <Container className="mt-2">
            <Card>
            <h4 className="m-2 text-muted">Book Search</h4>
                <CardBody>
                    <Form>
                        <FormGroup>
                            <Label for="bookSearch">Book</Label>
                            <Input type="text" name="bookSearch" id="bookSearch" placeholder="Book Title" />
                        </FormGroup>
                    </Form>
                    <Button color="primary">Search</Button>
                </CardBody>
            </Card>
        </Container>
    )
}

export default SearchForm