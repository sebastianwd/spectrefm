import { User } from '@generated/graphql'

interface AppConfigModel {
  user: Partial<User>
}

interface StoreModel {
  appConfig: AppConfigModel
}

const appConfigModel: AppConfigModel = {
  user: {},
}

const storeModel: StoreModel = {
  appConfig: appConfigModel,
}

export default storeModel
