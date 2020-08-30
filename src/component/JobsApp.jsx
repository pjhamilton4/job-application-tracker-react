import React, { Component } from 'react';
import ListJobsComponent from './ListJobsComponent';
import JobFormComponent from './JobFormComponent';

class JobsApp extends Component {
    render() {
        return (
            <>
                <h1>Jobs Application</h1>
                <ListJobsComponent />
                <JobFormComponent />
            </>
        )
    }
}

export default JobsApp