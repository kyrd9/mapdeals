import axios from 'axios'

export function getCoord (adress) {
  return axios.get('https://geocode-maps.yandex.ru/1.x/?format=json&geocode=' + adress)
  .then(response => response.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos)
  .then((pos) => ({
    lat: pos.split(' ')[1],
    lng: pos.split(' ')[0]
  })
)
}
