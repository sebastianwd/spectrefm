import { createStore } from 'easy-peasy'
import { User } from '~/generated/graphql'
import {
  PlayerModel,
  playerModel,
  playlistModel,
  PlaylistModel,
} from './player'
import { layoutModel, LayoutModel } from './layout'

export interface StoreModel {
  playlist: PlaylistModel
  player: PlayerModel
  user: Partial<User>
  layout: LayoutModel
}

const storeModel: StoreModel = {
  playlist: playlistModel,
  player: playerModel,
  user: {},
  layout: layoutModel,
}

const store = createStore(storeModel)

export default store
