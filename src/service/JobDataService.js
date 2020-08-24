import axios from 'axios'

const JOB_API_URL = 'http://localhost:8080/api'

class JobDataService {

    retrieveAllJobs() {
        return axios.get(`${JOB_API_URL}/jobs`);
    }
}

export default new JobDataService()

