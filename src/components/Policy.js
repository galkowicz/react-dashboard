import React, {Component} from 'react';
import {Table, Button, Dropdown} from 'semantic-ui-react'

class Policy extends Component {
    constructor(props) {
        super(props);
        this.handleRowClick = this.handleRowClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.deletePolicy = this.deletePolicy.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleDiscard = this.handleDiscard.bind(this);

        const {data} = this.props;
        this.state = {editMode: false, name: data.name, group: data.group, mode: data.mode};
    }

    componentWillReceiveProps(nextProps) {
        const {name, group, mode} = nextProps.data;
        this.setState({name, group, mode});
    }

    render() {
        const {data, index} = this.props;
        const {name, group, mode} = this.state;
        return (
            <Table.Row index={index}>
                <Table.Cell width={1}>{data.id}</Table.Cell>
                <Table.Cell width={2}
                    onClick={this.handleRowClick}>{this.state.editMode ?
                    <input name='name'
                           onChange={this.handleChange}
                           placeholder={name}
                           type="text"/> : name}</Table.Cell>
                <Table.Cell width={2}
                    onClick={this.handleRowClick}>{this.state.editMode ?
                    <input name='group'
                           onChange={this.handleChange}
                           placeholder={group}
                           type="text"/> : group}</Table.Cell>
                <Table.Cell width={2}
                    onClick={this.handleRowClick}>{this.state.editMode ?
                    <Dropdown placeholder='Mode'
                              name='mode'
                              onChange={this.handleChange}
                              selection
                              options={[{value: 'detect', text: 'Detect'}, {
                                  value: 'prevent',
                                  text: 'Prevent'
                              }]}/> : mode}</Table.Cell>
                <Table.Cell width={2}>
                    <Button onClick={this.deletePolicy.bind(this, data.id)}>DELETE</Button>
                </Table.Cell>
                 <Table.Cell width={2}>
                    <Button onClick={this.handleSave.bind(this, data.id)}>SAVE</Button>
                    <Button onClick={this.handleDiscard}>DISCARD</Button>
                </Table.Cell>
            </Table.Row>
        );
    }

    handleRowClick() {
        this.setState({editMode: true});
    }

    handleChange(event, data) {
        let field = event.target.getAttribute('name');
        let newValue = event.target.value;
        if (!field) { // dropdown case
            field = data.name;
            newValue = event.target.innerText;
        }
        let tempValue = `temp${field}`;
        this.setState({[tempValue]: newValue});
    }

    deletePolicy(policyId) {
        this.props.onDelete(policyId);
    }

    handleSave(policyId) {
        const {tempname, tempgroup, tempmode, name, group, mode} = this.state;
        let newPolicy = {
            name: !!tempname ? tempname : name,
            group: !!tempgroup ? tempgroup : group,
            mode: !!tempmode ? tempmode : mode,
            editMode: false
        };
        this.setState({...newPolicy}, this.props.onSave(policyId, newPolicy));
    }

    handleDiscard() {
        this.setState({editMode: false});
    }
}

export default Policy;