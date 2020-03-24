import React from 'react'
import {
    Card,
    CardImg,
    CardTitle,
    CardSubtitle,
    CardText,
    Button
} from 'reactstrap'

const ResultCard = () => {
    return (
        <Card className="m-2">
            <div className="m-2">
                <div className="clear-fix">
                    <div className="float-left">
                        <CardTitle>Test Book</CardTitle>
                        <CardSubtitle>Bookity book book Devyn Booker</CardSubtitle>
                        <p>Written by: Test</p>
                    </div>
                    <div className="float-right">
                        <Button className="mr-1" color="primary">View</Button>
                        <Button color="success">Save</Button>
                    </div>
                </div>
            </div>
            <div className="clear-fix m-2">
                <CardImg className="w-25 float-left mr-2" src="https://via.placeholder.com/300" alt="Test Book" />
                <CardText>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</CardText>
            </div>
        </Card>
    )
}

export default ResultCard