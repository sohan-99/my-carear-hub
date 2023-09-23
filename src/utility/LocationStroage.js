const getStroageApplication = () => {
    const StoredJobApplication = localStorage.getItem('job-application')
    if (StoredJobApplication) {
        return JSON.parse(StoredJobApplication)
    }
    return []
}

const saveApplication = id => {

    const StoredJobApplication = getStroageApplication();
    const exists = StoredJobApplication.find(jobId => jobId === id);
    if (!exists) {
        StoredJobApplication.push(id);
        localStorage.setItem('job-application', JSON.stringify(StoredJobApplication))
    }

}
export { getStroageApplication, saveApplication }

