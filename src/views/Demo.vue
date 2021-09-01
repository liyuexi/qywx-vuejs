<template>
<div class="page">
    <div class="page__hd">
        <h1 class="page__title" > demo </h1>
    </div>
    <div class="page__bd page__bd_spacing">
        <div class="weui-flex">
            <div class="weui-flex__item">
              <div class="placeholder">
                  <router-link to="/contact" class="weui-btn weui-btn_mini weui-btn_primary" @click="getOauthUrl" >通讯录</router-link>
             </div>
            </div>
        </div>
         <div class="weui-flex">
            <div class="weui-flex__item">
              <div class="placeholder">
              <router-link to="/jssdk" class="weui-btn weui-btn_mini weui-btn_primary" @click="getOauthUrl" >jssdk</router-link>
             </div>
            </div>
        </div>

        <div class="weui-flex">
            <div class="weui-flex__item">
              <div class="placeholder">
              <a class="weui-btn weui-btn_mini weui-btn_primary" @click="sendMsgText" >发送应用消息</a>
             </div>
            </div>
         </div>


        <div class="weui-flex">
            <div class="weui-flex__item">
              <div class="placeholder">
              <a class="weui-btn weui-btn_mini weui-btn_primary" @click="sendMsgText" >素材管理</a>
             </div>
            </div>
         </div>

    </div>
</div>
 </template>

<script>
import {sendMsg} from '../api/user'

export default {
  name: 'Demo',

  created() {
	  
  },
   methods: {
    sendMsgText(){
        let params = {'to_user_id':"LiYueXi",'text':"hello tobdev liyuexi"}
        sendMsg(params).then((res)=>{
           
         }) 
    }
   },
}
</script>