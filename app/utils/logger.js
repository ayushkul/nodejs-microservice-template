import Utils from "./index";
import {httpConstants} from "../common/constants";

export default class Logger {

    static info(functionName, message, payload, developerAlias) {
        Logger.log(functionName, message, payload, developerAlias, httpConstants.LOG_LEVEL_TYPE.INFO)
    }

    static warn(functionName, message, payload, developerAlias) {
        Logger.log(functionName, message, payload, developerAlias, httpConstants.LOG_LEVEL_TYPE.WARN)
    }

    static error(functionName, message, payload, developerAlias) {
        Logger.log(functionName, message, payload, developerAlias, httpConstants.LOG_LEVEL_TYPE.ERROR)
    }

    /**
     * @param functionName
     * @param message
     * @param payload:should be in object form
     * @param developerAlias
     * @param logType ["INFO", "WARNING", "ERROR"]
     * @constructor
     */
    static log(functionName, message, payload, developerAlias, logType = 'INFO') {
        console.log(`[ ${Utils.getFormattedDate()} ] ${logType}: ${functionName}: ${message}: ${JSON.stringify(payload)}: Developer : ${developerAlias}`)
    }
}
