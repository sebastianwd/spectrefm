import { User } from '@generated/graphql'

export interface StoreModel {
  user: Partial<User>
  layout: {
    leftDrawerWidth: number
  }
}

// -----------------

const storeModel: StoreModel = {
  user: {},
  layout: {
    leftDrawerWidth: 140,
  },
}

export default storeModel
