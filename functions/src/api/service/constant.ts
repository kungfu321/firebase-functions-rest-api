import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin';
import { isEmpty } from 'lodash'
import LOCAL_ENV from './localEnv'

const constants: any = {
  production: {
    adminConfig: {
      credential: admin.credential.cert(require("../../production-service-account.json")),
      databaseURL: '<production-database-url>',
    }
  },
  staging: {
    adminConfig: {
      credential: admin.credential.cert(require("../../staging-service-account.json")),
      databaseURL: '<staging-database-url>',
    }
  }
}

const runtimeConfig = functions.config()
const stage: any = isEmpty(runtimeConfig) ? LOCAL_ENV : runtimeConfig.environment.stage

export default constants[stage]
