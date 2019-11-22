import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

export default class Search extends Component {
    render() {
        return (


                <Form>

<h2>Let's find your perfect home!</h2>

                    <Form.Group controlId="formBasicPassword">

                        <Form.Control className="srch" type="text" placeholder="Address, City, Zip Code" />
                    </Form.Group>

                    {/* <Button variant="primary" type="submit">
                        Submit
  </Button> */}
                </Form>


        )
    }
}
