<template>
    <div class="my-header">
        <span>欢迎，{{ fullname }}</span>
        <a href="#" @click="logout">退出</a>
    </div>
</template>

<script>
    export default {
        name: "MyHeader",
        methods: {
            logout () {
                this.$store.dispatch('setUserInfo', null)
                window.localStorage.token = ''
                this.$router.replace('/login')
            }
        },
        computed: {
            fullname: function () {
                return this.$store.state.userInfo ? this.$store.state.userInfo.fullname : ''
            }
        }
    }
</script>

<style scoped>
    .my-header {
        height: 100%;
        line-height: 81px;
        text-align: right;
        border-bottom: 1px solid #738387;
        padding-right: 20px;
    }
    .my-header a {
        text-decoration: none;
        margin-left: 20px;
    }
    .my-header a:hover {
        color: blue;
        text-decoration: underline;
    }
</style>