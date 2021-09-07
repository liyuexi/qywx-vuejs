<template>
<div class="page">
    <div class="page__hd">
        <h1 class="page__title" > 身份验证 </h1>
        <p class="page__desc">企业微信应用Oauth及非企业微信环境PC网站扫码登录，可自动跳转</p>
         <p class="page__desc">当前url: {{ url}}</p>
    </div>

    <div class="page__bd page__bd_spacing">
        <div class="weui-flex">
            <div class="weui-flex__item">
              <div class="placeholder">
                <a href="javascript:" class="weui-btn weui-btn_mini weui-btn_primary" @click="getOauthUrl">跳转企业微信应用Oauth授权</a>
             </div>
            </div>
        </div>

         <div class="weui-flex">
            <div class="weui-flex__item">
              <div class="placeholder">
                <a href="javascript:" class="weui-btn weui-btn_mini weui-btn_primary" @click="getAdminOauthUrl">PC 网站扫码授权登录</a>
             </div>
            </div>
        </div>

            <div class="weui-flex">
            <div class="weui-flex__item">
              <div class="placeholder">
                <router-link v-if="userToken" router-link to="/user" class="weui-btn weui-btn_mini weui-btn_primary" >当前用户已登录，点击查看用户信息</router-link>
             </div>
            </div>
         </div>

    </div>
</div>
 </template>

 <script>
import { mapGetters, mapActions } from 'vuex'
import { oauthUrl ,oauthAdminUrl} from '../api/user'

export default {
  name: 'Auth',
  created() {
    
  },
  computed: {
    ...mapGetters([
      'userToken'
    ]),
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
       //console.log(oauthCallback)
       let params = {'oauth_callback': oauthCallback}
        oauthUrl(params).then((res)=>{
          alert(res.data.oauth_url)
         window.location.href = res.data.oauth_url
        });
     },
     getAdminOauthUrl(){
        let oauthCallback =  encodeURI(window.location.protocol+'//'+window.location.host+"/#/adminCallback") 
       //console.log(oauthCallback)
       let params = {'oauth_callback': oauthCallback}
        oauthAdminUrl(params).then((res)=>{
          alert(res.data.oauth_url)
         window.location.href = res.data.oauth_url
        });
     }
   },
}
</script>