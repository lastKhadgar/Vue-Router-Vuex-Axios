<template>
    <div>
        <div style="width: 300px; margin: 0 auto">
            <el-input v-model="form.username" placeholder="用户名"></el-input>
            <el-input v-model="form.password" type="password" placeholder="密码"></el-input>
            <el-button type="primary" size="small" @click="login">登陆</el-button>
        </div>
    </div>
</template>

<script>
    import loginService from './../services/login.service'
    import { setRolesList } from './../core/utils/roles'
    export default {
        name: "Login",
        data() {
            return {
                form: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            login () {
                loginService.login(this.form).then(res => {
                    if (res && res.data) {
                        this.$store.dispatch('setUserInfo', res.data.user)
                        window.localStorage.token = res.data.token
                        let rolesList = ['K100', 'K110', 'K210', 'K300', 'K121']
                        setRolesList(rolesList)
                        this.$router.push('/')
                    }
                }).catch(() => {})
            }
        }
    }
</script>

<style scoped>

</style>