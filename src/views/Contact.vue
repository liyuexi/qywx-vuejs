<template>
<div class="page">
    <div class="page__hd">
        <h1 class="page__title" > 通讯录相关 </h1>
    </div>
    <div class="page__bd page__bd_spacing">
        <div class="weui-flex">
            <div class="weui-flex__item">
              <div class="placeholder">
                   <a href="javascript:" class="weui-btn weui-btn_mini weui-btn_primary" @click="getDeptList">获取部门</a>             
             </div>
            </div>
        </div>
         <div class="weui-flex">
            <div class="weui-flex__item">
              <div class="placeholder">
                    <input v-model="deptId" placeholder="输入部门id" /> 
                    <a href="javascript:" class="weui-btn weui-btn_mini weui-btn_primary" @click="getDeptUserList">获取部门人员</a>   
             </div>
            </div>
        </div>
        
        <div class="weui-flex">
            <div class="weui-flex__item">
              <div class="placeholder">
                    <input v-model="deptId" placeholder="输入部门id" /> 
                    <a href="javascript:" class="weui-btn weui-btn_mini weui-btn_primary" @click="getDeptUserDetailList">获取部门人员详情</a>   
             </div>
            </div>
        </div>

        <div class="weui-flex">
            <div class="weui-flex__item">
              <div class="placeholder">
                    <input v-model="userId" placeholder="输入用户id" /> 
                    <a href="javascript:" class="weui-btn weui-btn_mini weui-btn_primary" @click="getDeptUserDetail">获取人员详情</a>   
             </div>
            </div>
        </div>


    </div>
</div>
 </template>


<script>
import { deptList,deptUserList,deptUserDetailList,deptUserDetail } from '../api/user'

export default {
    name: 'Jssdk',
    data() {
        return {
             deptId: 0,
             userId:''
        }
    },
    created() {
        
    },
    methods: {
        getDeptList(){
            let params = {}
            deptList(params).then((res)=>{
                console.log(res)
                alert(  JSON.stringify(res)  )
            })
        },
        getDeptUserList(){
            let params = {'department_id':this.deptId}
            deptUserList(params).then((res)=>{
                console.log(res)
                alert(  JSON.stringify(res)  )
            })
        },
         getDeptUserDetailList(){
            let params = {'department_id':this.deptId}
            deptUserDetailList(params).then((res)=>{
                console.log(res)
                alert(  JSON.stringify(res)  )
            })
        },
         getDeptUserDetail(){
            let params = {'user_id':this.userId}
            deptUserDetail(params).then((res)=>{
                console.log(res)
                alert(  JSON.stringify(res)  )
            })
        },
    },
}
</script>