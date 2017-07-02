import { v4 } from 'uuid'
import * as api from '@/lib/api'

export const fetch = ({commit, rootState}) =>
  api.getDeals(rootState.user.id)
    .then(deals => commit('fetch', deals))

export const post = ({dispatch, rootState}, deal) => {
  deal = {
    ...deal,
    id: v4(),
    userId: rootState.user.id,
    status: 'open'
  }
  api.newDeal(deal).then(() => dispatch('fetch'))
}

export const remove = ({dispatch}, id) =>
  api.delDeal(id).then(() => dispatch('fetch'))
