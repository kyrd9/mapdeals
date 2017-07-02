<template>
<div class="page-welcome">
  <div class="container">
    <div class="title">
      <h1>MapDeals</h1>
    </div>
    <form v-on:submit.prevent="onSubmit" class="form">
      <input v-model="email" class="input" type="email" name="email" placeholder="boss@awesome.tld" required autofocus>
      <button v-bind:disabled="isLogin" class="button" type="submit" name="button">Enter</button>
    </form>
    <transition name="error">
      <p v-if="isError" class="error">Access Denied</p>
    </transition>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      isLogin: false,
      isError: false
    }
  },
  methods: {
    onSubmit () {
      this.isLogin = true
      this.isError = ''
      const payload = {
        email: this.email
      }

      this.$store.dispatch('user/login', payload)
        .then(this.onSuccess)
        .catch(this.onFailure)
    },
    onSuccess () {
      this.isLogin = false
      this.$router.push({
        name: 'dashboard'
      })
    },
    onFailure () {
      this.isLogin = false
      this.isError = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/theme.scss';

.page-welcome {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.container {
  width: $container-min-width;
  height: 100%;
  background-color: $theme--color-primary;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-variant: small-caps;
}

.form {
  width: $container-min-width - 32px;
}

.input {
  display: block;
  width: 100%;
  height: 32px;
  margin-bottom: 8px;
  color: white;
  background: none;
  border: none;
  outline: none;
  border-bottom: 2px solid white;
  text-align: center;
  text-transform: uppercase;
  font-size: 10pt;
  font-weight: bold;
  &::-webkit-input-placeholder {
    color: white;
    font-weight: normal;
  }
}

.button {
  @include button--inverted;
  width: 100%;
  height: 32px;
  font-size: 10pt;
  &:disabled {
    background-image: linear-gradient(
      -45deg,
      rgba(255, 255, 255, .125) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, .125) 50%,
      rgba(255, 255, 255, .125) 75%,
      transparent 75%,
      transparent
    );
    background-size: 32px 32px;
    animation: button-disabled 4s linear infinite;
  }
}
.error {
  font-size: 10pt;
  font-variant: small-caps;
}

.error-enter-active, .error-leave-active {
  opacity: 1;
  transform: translateY(0);
  transition: all 240ms;
  transition-property:  opacity, transform;
}
.error-enter, .error-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

@keyframes button-disabled {
  from {
    background-position-x: 0%
  }
  to {
    background-position-x: 100%
  }
}
</style>
