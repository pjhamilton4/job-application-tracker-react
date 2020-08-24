import React, { Component } from 'react';
import JobDataService from '../service/JobDataService';

class ListJobsComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            jobs: [],
            message: null
        }
        this.refreshJobs = this.refreshJobs.bind(this)
    }

    componentDidMount() {
        this.refreshJobs();
    }

    refreshJobs() {
        JobDataService.retrieveAllJobs().then(
            response => {
                console.log(response.data);
                this.setState({ jobs: response.data._embedded.jobs });
            }
        )
    }

    render() {
        return (
            <div className="container">
                <h3>All Jobs</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Company</th>
                                <th>Date Applied</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Link</th>
                                <th>Technologies</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.jobs.map(
                                    (job, index) =>
                                        <tr key={index+1}>
                                            <td>{index+1}</td>
                                            <td>{job.company}</td>
                                            <td>{job.dateApplied}</td>
                                            <td>{job.title}</td>
                                            <td>{job.description}</td>
                                            <td>{job.linkToJob}</td>
                                            <td>asdfasdf</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div >
        )
    }
}

export default ListJobsComponent;