<template>
<div class="page">
    <div class="page__hd">
        <h1 class="page__title" > 应用消息 </h1>
    </div>
    <div class="page__bd page__bd_spacing">
        
        <div class="weui-flex">   
            <div class="weui-flex__item">
                <div class="placeholder">
                    <input v-model="userId" placeholder="输入发送至的userid" /> 
                </div>
            </div>          
        </div>

        <div class="weui-flex">
            
             <div class="weui-flex__item">
                <div class="placeholder">
                    <input v-model="textMsg" placeholder="输入发送的内容" /> 
                </div>
            </div>       
            <div class="weui-flex__item">
              <div class="placeholder">
              <a class="weui-btn weui-btn_mini weui-btn_primary" @click="sendMsgText" >发送应用消息 文本</a>
             </div>
            </div>
         </div>

        <div class="weui-flex">   
                <div class="weui-flex__item">
                <div class="placeholder">
                    <input v-model="mediaId" placeholder="输入图片media id" /> 
              </div>
              </div>   

              <div class="weui-flex__item">
                <div class="placeholder">
                    <a  class="weui-btn weui-btn_mini weui-btn_primary" @click="sendImage">发送应用消息 图片</a>                                                  
              </div>
              </div>             
        </div>
    </div>
</div>
 </template>

<script>

import { mapGetters, mapActions } from 'vuex'
import {sendMsg,sendImg} from '../api/message'

export default {
  name: 'Message',
  data() {
    return {
        userId:'',
        mediaId: '',
        textMsg:'ToB Dev企业微信开发'
    }
   },
  computed: {
    ...mapGetters([
      'userInfo',
    ]),
  },
  created() {
      if(this.userInfo){
        this.userId = this.userInfo.userid
      }

  },
   methods: {
    sendMsgText(){

        let params = {'to_user_id':this.userId,'text':this.textMsg}
        sendMsg(params).then((res)=>{
           
         }) 
    },
    sendImage(){
        let params = {'to_user_id':this.userId,'media_id':this.mediaId}
        sendImg(params).then((res)=>{
           
         }) 
    },
   },
}
</script>