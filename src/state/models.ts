import { User } from '@generated/graphql'

interface AppConfig {
  user: Partial<User>
}

interface StoreModel {
  appConfig: AppConfig
}

const appConfig: AppConfig = {
  user: {},
}

const storeModel: StoreModel = {
  appConfig,
}

export default storeModel
