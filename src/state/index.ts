import { createStore } from 'easy-peasy'
import { User } from '~/generated/graphql'
import { PlayerModel, playerModel } from './player'
import { layoutModel, LayoutModel } from './layout'

export interface StoreModel {
  player: PlayerModel
  user: Partial<User>
  layout: LayoutModel
}

const storeModel: StoreModel = {
  player: playerModel,
  user: {},
  layout: layoutModel,
}

const store = createStore(storeModel)

export default store
