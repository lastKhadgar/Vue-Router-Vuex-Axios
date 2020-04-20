/**
 * Author: weizq
 * Create Time: 2020/04/16 14:36
 * Description: 菜单
 */

const menuData = [
    { title: 'XX信息管理', index: '1', icon: 'el-icon-location', role: 'K100',
        children: [
            { title: 'XX信息管理一', index: '/InfoManage1', icon: '', role: 'K110' },
            { title: 'XX信息管理二', index: '/InfoManage2', icon: '', role: 'K120' }
        ]
    },
    { title: 'XX流程管理', index: '2', icon: 'el-icon-menu', role: 'K200',
        children: [
            { title: 'XX流程管理一', index: '/pathManage1', icon: '', role: 'K210' },
            { title: 'XX流程管理二', index: '/pathManage2', icon: '', role: 'K220' }
        ]
    },
    { title: 'XX人员管理', index: '/peopleManage', icon: 'el-icon-menu', role: 'K300' }
]

export default menuData
