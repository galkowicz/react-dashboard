import React, {Component} from 'react';
import {Header, Table, Button} from 'semantic-ui-react'
import Policy from '../components/Policy'

class Policies extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.addPolicy = this.addPolicy.bind(this);

        this.state = {policies: this.props.policies, length: this.props.policies.length}
    }

    render() {
        return (<div className='dashboard-policy'>
            <Header textAlign={'center'} as={'h1'}>Policy</Header>
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Group</Table.HeaderCell>
                        <Table.HeaderCell>Mode</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {this.state.policies.map((policy, index) => {
                        return <Policy onDelete={this.handleDelete}
                                       onSave={this.handleSave}
                                       key={index} index={index} data={policy}/>
                    })}
                </Table.Body>
            </Table>
            <Button onClick={this.addPolicy}>Add Policy</Button>
        </div>);
    }

    handleDelete(policyId) {
        const newArray = [...this.state.policies];
        const index = newArray.findIndex(i => i.id === policyId);

        newArray.splice(index, 1);
        this.setState({policies: newArray});
    }

    handleSave(policyId, updatedPolicy) {
        const newArray = [...this.state.policies];
        const index = newArray.findIndex(i => i.id === policyId);
        const {name, mode, group} = updatedPolicy;
        const policyToSave = {
            id: policyId,
            name,
            mode,
            group
        };

        newArray.splice(index, 1, policyToSave);
        this.setState({policies: newArray});
    }

    addPolicy() {
        const policyCount = this.state.length;
        const policy = {id: policyCount + 1, name: '', user: '', group: '', mode: ''};

        let newArray = [...this.state.policies];
        newArray.push(policy);
        this.setState({policies: newArray, length: policyCount + 1});
    }
}

export default Policies;
