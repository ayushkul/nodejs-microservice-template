import BLManager from './manager'

export default class JobController {
  static async monitorMeter () {
    await BLManager.monitorMeters().catch((err) =>
      logger.error('monitorMeter', 'Job Failed', err, 'developer')
    )
  }
}
