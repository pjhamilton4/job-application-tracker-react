import React, { Component } from 'react';

class JobFormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) { this.setState({ value: event.target.value }); }
    handleSubmit(event) {
        alert('A name was submitted: ' + event);
        event.preventDefault();
    }


    /**
     * 
     *
     * private String company;
     * private boolean applied;
     * private String title;
     * private String description;
     * private Date dateApplied;
     * private boolean interview
     * private Date interviewDate;
     * private String contactAtCompany;
     * private String linkToJob;
     * private ArrayList<String> technologies;
     */
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Company:
                    <br />
                    <input
                        name="company" type="text"
                        value={this.state.company}
                        onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Applied:
                    <br />
                    <select value={this.state.applied} onChange={this.handleChange}>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        <option value="contacted">Contacted By Recruiter</option>
                        <option value="interviewing">Interviewing</option>
                    </select>
                </label>
                <br />
                <label>
                    Role Title:
                    <br />
                    <input type="text" value={this.state.role} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Role Description:
                    <br />
                    <textarea value={this.state.roleDesc} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Date Applied:
                    <br />
                    <input type="date" value={this.state.dateApplied} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Interview Round:
                    <br />
                    <select value={this.state.interviewRound} onChange={this.handleChange}>
                        <option value="yes">None</option>
                        <option value="no">Phone Screen</option>
                        <option value="contacted">Hiring Manager</option>
                        <option value="interviewing">Technical Round</option>
                    </select>
                </label>
                <br />
                <label>
                    First Interview Date:
                    <br />
                    <input type="date" value={this.state.interviewDate} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Contact Name:
                    <br />
                    <input type="text" value={this.state.contactName} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Link(To job or company):
                    <br />
                    <input type="text" value={this.state.webLink} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Technologies Used:
                    <br />
                    <select multiple size="10" value={this.state.tech} onChange={this.handleChange}>
                        <option value="Java">Java</option>
                        <option value="Java">SQL</option>
                        <option value="Java">React</option>
                        <option value="Java">Angular</option>
                        <option value="Java">NodeJS</option>
                        <option value="Java">JavaScript</option>
                        <option value="Java">C#/.NET</option>
                        <option value="Java">Python</option>
                        <option value="Java">Ruby/Rails</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default JobFormComponent;