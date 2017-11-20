import React, {Component} from 'react';
import {Header, Table, Button} from 'semantic-ui-react'

class Overview extends Component {
    constructor(props) {
        super(props);
        this.updateAttacks = this.updateAttacks.bind(this);
    }

    render() {
        return (<div className='dashboard-overview'>
            <Header textAlign={'center'} as={'h1'}>Overview Attacks</Header>
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>User</Table.HeaderCell>
                        <Table.HeaderCell>Application</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {this.props.attacks.map((attack, index) => {
                        return <Table.Row key={index} index={index}>
                            <Table.Cell>{attack.attackId}</Table.Cell>
                            <Table.Cell>{attack.user}</Table.Cell>
                            <Table.Cell>{attack.application}</Table.Cell>
                            <Table.Cell>{attack.description}</Table.Cell>
                        </Table.Row>
                    })}
                </Table.Body>
            </Table>
            <Button onClick={this.updateAttacks}>Refresh</Button>
        </div>);
    }

    updateAttacks() {
        console.log('update attacks');
    }

}

export default Overview;
