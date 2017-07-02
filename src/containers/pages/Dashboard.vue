<template>
  <div class="container">
    <header class="header">
      <div class="header-title">
        <span>MapDeals</span>
        <small>{{ role }}</small>
      </div>
      <button class="header-button" v-on:click="onLogoutClick">Logout</button>
    </header>
    <DealForm v-on:submit="onDealSubmit"  class="deal-form"></DealForm>
    <DealList v-bind:deals="deals" v-on:delete="onDealDelete" class="deal-list"></DealList>
    <div class="map">
      <gmap-map :center="center" :zoom="2" style="width: 1000px; height: 500px">
      <gmap-marker v-for="m in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position">
      </gmap-marker>
      </gmap-map>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import DealForm from '@/components/DealForm'
import DealList from '@/components/DealList'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBT37wdcRmfAtoWxTHn2SSCOUXUbzbQC_U',
    v: '3.27'
    // libraries: 'places', //// If you need to use place input
  }
})

export default {
  data () {
    return {
      center: {lat: 10, lng: 30}
    }
  },
  computed: {
    markers () {
      return this.$store.getters['deals/coord']
    },
    role () {
      return this.$store.state.user.role.title
    },
    deals () {
      return this.$store.state.deals
    }
  },
  methods: {
    onDealSubmit (deal) {
      this.$store.dispatch('deals/post', deal)
    },
    onDealDelete (id) {
      this.$store.dispatch('deals/remove', id)
    },
    onLogoutClick () {
      this.$store.dispatch('user/logout')
        .then(() => this.$router.push({name: 'welcome'}))
    },
    geoLocation () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
          console.log(pos)
          const coord = `${pos.lat}, ${pos.lng}`
          console.log(`${pos.lat}, ${pos.lng}`)
          this.$store.dispatch('deals/post', coord)
        })
      }
    }
  },
  mounted () {
    this.$store.dispatch('deals/fetch')
    this.geoLocation()
  },
  components: { DealForm, DealList }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/theme.scss';

.map{
  width:85%;
  margin: 0 auto;
  text-align: center;
}

.container {
  width: 100%;
}
.header {
  height: 32px;
  padding: 0 16px;
  background-color: $theme--color-primary;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &-title {
    @include title;
    color: white;
  }
  &-button {
    @include button--inverted;
    text-align: right;
  }
}
.deal-form,
.deal-list {
   margin: 16px;
}
</style>
