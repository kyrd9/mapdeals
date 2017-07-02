import axios from 'axios'

const api = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:3000'
})

export const login = (email) =>
  api.get('/users', {params: {email}})
    .then(({data}) => {
      if (data.length !== 1) throw new Error('Not Authorized')
      return data[0]
    })

export const getDeals = (userId) =>
  api.get('/deals', {params: {userId}}).then(r => r.data)

export const newDeal = (deal) =>
  api.post('/deals', deal).then(r => r.data)

export const delDeal = (id) =>
  api.delete(`/deals/${id}`)
