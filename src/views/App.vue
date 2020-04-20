<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import loginService from './../services/login.service'
  import Vue from 'vue'

  export default {
    name: 'app',
    mounted() {
      loginService.logined().then(res => {
        if (res && res.data) {
          this.$store.dispatch('setUserInfo', res.data.user)
        }
      }).catch(() => {})
      Vue.eventEmitter.on('log_out', () => {
        let flag = true
        if (flag) {
          this.$message.error('token失效，请重新登陆')
          this.$store.dispatch('setUserInfo', null)
          window.localStorage.token = ''
          flag = false
        }
        setTimeout(() => {
          flag = true
          this.$router.replace('/login')
        }, 500)
      })
    }
  }
</script>

<style>
html,body {
  height: 100%;
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
