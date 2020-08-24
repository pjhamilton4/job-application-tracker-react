import React, { Component } from 'react';
import ListJobsComponent from './ListJobsComponent';

class JobsApp extends Component {
    render() {
        return (
            <>
                <h1>Jobs Application</h1>
                <ListJobsComponent />
            </>
        )
    }
}

export default JobsApp