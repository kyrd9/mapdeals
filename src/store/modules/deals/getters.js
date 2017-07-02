export const coord = (state) => state.map((item) => {
  return {position: {lat: +item.coord.split(',', 1), lng: +item.coord.split(',')[1]}}
})
