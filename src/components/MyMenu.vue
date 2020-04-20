<template>
    <el-menu
            @select="handleSelect"
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#071429"
            text-color="#fff"
            active-text-color="#ffd04b">
        <div v-for="(item, index) in menuData" :key="index">
            <el-submenu v-if="item.children && ifHasRole(item.role)" :index="item.index">
                <template slot="title">
                    <i :class="item.icon"></i>
                    <span>{{ item.title }}</span>
                </template>
                <div v-for="(item1, index1) in item.children" :key="index1">
                    <el-menu-item v-if="ifHasRole(item1.role)" :index="item1.index">{{ item1.title }}</el-menu-item>
                </div>
            </el-submenu>
            <el-menu-item v-if="!item.children && ifHasRole(item.role)" :index="item.index">
                <i :class="item.icon"></i>
                <span slot="title">{{ item.title }}</span>
            </el-menu-item>
        </div>
    </el-menu>
</template>

<script>
    import menuData from './../app.menu'
    import { ifHasRole } from './../core/utils/roles'
    export default {
        name: "MyMenu",
        data () {
            return {
                menuData: {}
            }
        },
        mounted () {
            this.menuData = menuData
        },
        methods: {
            handleSelect (key) {
                this.$router.push(key)
            },
            ifHasRole (role) {
                return ifHasRole(role)
            }
        }
    }
</script>

<style>
    .el-menu {
        border: 0px;
    }
    .el-menu-vertical-demo li {
        text-align: left;
    }
</style>