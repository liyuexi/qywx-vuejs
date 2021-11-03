<template>
<div class="page">
    <div class="page__hd">
        <h1 class="page__title" > 通讯录相关 </h1>
    </div>
    <div class="page__bd page__bd_spacing">

        <div class="weui-flex">
           
            <div class="weui-flex__item">
              <div class="placeholder">
                   <a href="javascript:" class="weui-btn weui-btn_mini weui-btn_primary" @click="followUserList">获取配置客户功能员工列表</a>             
             </div>
            </div>
        </div>

        <div class="weui-flex">
            <div class="weui-flex__item"> 
                <div class="placeholder">
                    <input v-model="userId" placeholder="输入成员id"  /> 
                 </div>
            </div>    
            <div class="weui-flex__item">
              <div class="placeholder">
                   <a href="javascript:" class="weui-btn weui-btn_mini weui-btn_primary" @click="list">获取某员工客户列表</a>             
             </div>
            </div>
        </div>

         <div class="weui-flex">
            <div class="weui-flex__item"> 
                <div class="placeholder">
                       <input v-model="extUserId" placeholder="输入客户id" /> 
                 </div>
            </div>       
            <div class="weui-flex__item">
              <div class="placeholder">
                    <a href="javascript:" class="weui-btn weui-btn_mini weui-btn_primary" @click="detail">获取客户详情</a>   
             </div>
            </div>
        </div>
        
        <div class="weui-flex">
             <div class="weui-flex__item"> 
                <div class="placeholder">
                        <input v-model="userId" placeholder="输入成员id" /> 
                 </div>
            </div>       

            <div class="weui-flex__item">
              <div class="placeholder">
                    <a href="javascript:" class="weui-btn weui-btn_mini weui-btn_primary" @click="groupChatlist">获取客户聊天群列表</a>   
             </div>
            </div>
        </div>

        <div class="weui-flex">
              <div class="weui-flex__item"> 
                <div class="placeholder">
                       <input v-model="chatId" placeholder="输入聊天群id" /> 
                 </div>
            </div>       

            <div class="weui-flex__item">
              <div class="placeholder">
                  
                    <a href="javascript:" class="weui-btn weui-btn_mini weui-btn_primary" @click="groupChatDetail">取客户聊天群详情</a>   
             </div>
            </div>
        </div>

        <div class="weui-flex">

            <div class="weui-flex__item"> 
                <div class="placeholder">
                    <input v-model="userId" placeholder="输入成员id" /> 
                    <input v-model="extUserId" placeholder="输入客户id" /> 
                    <input v-model="text" placeholder="输入文本" /> 
                    
                 </div>
            </div>       

            <div class="weui-flex__item">
              <div class="placeholder">
                    <a href="javascript:" class="weui-btn weui-btn_mini weui-btn_primary" @click="addMsgTemplatea">发送企业消息</a>   
             </div>
            </div>

        </div>
    

    </div>
</div>
 </template>


<script>
import { followUserList,list,detail,groupChatlist,groupChatDetail,sendWelcomeMs,addMsgTemplatea } from '../api/extContact'

export default {
    name: 'ExtContact',
    data() {
        return {
            userId:'',
            extUserId: '',
            chatId:'',
            text:'',
        }
    },
    created() {
        
    },
    methods: {
        followUserList(){
            let params = {}
            followUserList(params).then((res)=>{
                console.log(res)
                alert(  JSON.stringify(res)  )
            })
        },
        list(){
            let params = {'user_id':this.userId}
            list(params).then((res)=>{
                console.log(res)
                alert(  JSON.stringify(res)  )
            })
        },
        detail(){
            let params = {'ext_userid':this.extUserId}
            detail(params).then((res)=>{
                console.log(res)
                alert(  JSON.stringify(res)  )
            })
        },
        groupChatlist(){
            let params = {'user_id':this.userId}
            groupChatlist(params).then((res)=>{
                console.log(res)
                alert(  JSON.stringify(res)  )
            })
        },
        groupChatDetail(){
            let params = {'chat_id':this.chatId}
            groupChatDetail(params).then((res)=>{
                console.log(res)
                alert(  JSON.stringify(res)  )
            })
        },
        sendWelcomeMs(){
            let params = {'user_id':this.userId}
            groupCsendWelcomeMshatlist(params).then((res)=>{
                console.log(res)
                alert(  JSON.stringify(res)  )
            })
        },
        addMsgTemplatea(){
            let params = {'user_id':this.userId,'ext_userid':this.extUserId,'text':this.text}
            addMsgTemplatea(params).then((res)=>{
                console.log(res)
                alert(  JSON.stringify(res)  )
            })
        },
         
    },
}
</script>