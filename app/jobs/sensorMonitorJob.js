import JobController from '../modules/jobs'

const CronMasterJob = require('cron-master').CronMasterJob

module.exports = new CronMasterJob({

    // Optional. Used to determine when to trigger the 'time-warning'. Fires after
    // the provided number of milliseconds (e.g 2 minutes in the case below) has
    // passed if the job has not called the done callback

    timeThreshold: (5 * 60 * 1000),
    meta: {
        name: 'job to save ongoing metering of meters in DB',
        requestID: ''
    },
    cronParams: {
        cronTime: '55 23 * * *',
        onTick: async (job, done) => {
            logger.info('cron jobs', 'cron job running', {}, '')
            await JobController.monitorMeter()
            done(null, 'ok')
        }
    }
})
