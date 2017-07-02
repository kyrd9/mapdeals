<template>
<div class="deal-form">
  <div class="title">New Deal</div>
  <form @submit.prevent="onSubmit" class="form">
    <input v-model="form.title" class="input" type="text" placeholder="title" required>
    <input v-model="form.coord" class="input" type="text" placeholder="lat, lng" required>
    <button class="button" type="submit">Create</button>
  </form>
  <input v-model="form.adress" @keyup.enter="addCoord()" class="input" type="text" placeholder="adress">
</div>
</template>

<script>
import { getCoord } from '@/lib/apiYandex'

export default {
  data () {
    return {
      form: {
        title: '',
        coord: ''
      }
    }
  },
  methods: {
    onSubmit () {
      this.$emit('submit', { ...this.form })
      this.form.title = ''
      this.form.coord = ''
      this.form.adress = ''
    },
    addCoord () {
      if (this.form.adress !== undefined && this.form.adress !== '') {
        getCoord(this.form.adress).then((c) => {
          console.log(c)
          this.form.coord = `${c.lat}, ${c.lng}`
        })
      };
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/theme.scss';

.deal-form {
  padding: 8px;
  border: 2px solid $theme--color-primary;
}
.title {
  @include title;
}
.form {
  display: flex;
  flex-direction: column;
}
.input {
  @include input;
}
.button {
  @include button;
  margin-top: 8px
}
</style>
