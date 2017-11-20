import React, { Component } from 'react';
import { Header} from 'semantic-ui-react'
import Overview from '../components/Overview';
import Policy from './Policies';
import policies from '../mocks/policies'
import attacks from '../mocks/attacks'

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div className='dashboard'>
            <Header textAlign={'center'} as={'h1'}>Dashboard</Header>
            <Overview attacks={attacks} />
            <Policy policies={policies} />
        </div>);
    }

}

export default Dashboard;
