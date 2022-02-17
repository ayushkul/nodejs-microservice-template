/**
 * Created by Developer
 */

const path = require('path')
const cronMaster = require('cron-master').getInstance()

/**
 * Initialize Jobs
 */
function initialiseJob (job) {
  job.on('tick-started', function () {
  })

  job.on('tick-complete', function (err, res, time) {
  })

  job.on('time-warning', function () {
  })

  job.on('overlapping-call', function () {
  })

  job.on('stopped', function (err, res, time) {
    initialiseJob(job)
  })
}

cronMaster.loadJobs(path.join(__dirname, '../app/jobs'), function (err, jobs) {
  if (err) {
    throw err
  } else if (jobs.length === 0) {
    throw new Error('No jobs found!')
  } else {
    jobs.forEach(initialiseJob)
    cronMaster.startJobs()
  }
})
