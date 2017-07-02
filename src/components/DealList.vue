<template>
<div class="deal-list">
  <div class="title">Deal list</div>
  <div class="list">
    <transition-group name="list">
      <div v-for="deal of deals" v-bind:key="deal.id" class="item">
        <span class="item-title">{{ deal.title }}</span>
        <button v-on:click="onDelete(deal.id)" class="item-button" type="button">&times;</button>
      </div>
    </transition-group>
  </div>
</div>
</template>

<script>
export default {
  props: ['deals'],
  methods: {
    onDelete (id) {
      this.$emit('delete', id)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/theme.scss';

.deal-list {
  padding: 8px 0;
  border: 2px solid $theme--color-primary;
}
.title {
  @include title;
  padding: 0 8px;
}
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  padding: 0 8px;
  transition: background-color 240ms ease;
  &:hover {
    background-color: lighten($theme--color-primary, 33%);
  }
  &-button {
    @include button;
  }
}
</style>
