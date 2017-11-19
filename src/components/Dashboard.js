import React, { Component } from 'react';
import { Header} from 'semantic-ui-react'

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div className='login'>
            <Header textAlign={'center'} as={'h1'}>Dashboard</Header>
        </div>);
    }

}

export default Dashboard;
