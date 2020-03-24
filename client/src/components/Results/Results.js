import React from 'react'
import ResultCard from '../../components/ResultCard'
import {
    Card,
    CardBody,
    Container
} from 'reactstrap'


const Results = () => {
    return (
        <Container className="mt-4">
            <Card>
                <h4 className="m-2 text-muted">Results</h4>
                <CardBody>
                    <ResultCard />
                </CardBody>
            </Card>
        </Container>
    )
}

export default Results