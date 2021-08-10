<template>
<div class="page">
    <div class="page__hd">
        <h1 class="page__title" > 授权登录 </h1>
        <p class="page__desc">企业微信应用Oauth</p>
         <p class="page__desc">当前url: {{ url}}</p>
    </div>
    <div class="page__bd page__bd_spacing">
        <div class="weui-flex">
            <div class="weui-flex__item">
              <div class="placeholder">
                <a href="javascript:" class="weui-btn weui-btn_mini weui-btn_primary" @click="getOauthUrl">跳转企业微信授权</a>
             </div>
            </div>
             <div class="weui-flex__item">
              <div class="placeholder">
                <a href="javascript:" >文档</a>
             </div>
            </div>
        </div>
       
    </div>
</div>
 </template>

 <script>
import { mapGetters, mapActions } from 'vuex'
import { oauthUrl } from '../api/user'

export default {
  name: 'Auth',
  created() {
    
  },
  computed: {
    ...mapGetters('user', {
      userToken: 'userToken',
    }),
    url(){
      return window.location.href
    }
  },
   methods: {
      ...mapActions('login', [
      'login'
     ]),
     getOauthUrl(){
       let oauthCallback =  encodeURI(window.location.protocol+'//'+window.location.host+"/#/callback") 
       console.log(oauthCallback)
       let params = {'oauth_callback': oauthCallback}
        oauthUrl(params).then((res)=>{
          alert(res.data.oauth_url)
         window.location.href = res.data.oauth_url
        });
     }
   },
}
</script>