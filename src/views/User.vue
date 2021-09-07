<template>
  <div class="page">
    <div class="page__hd">
        <h1 class="page__title" > 用户登录信息 </h1>
    </div>

    <div class="page__bd page__bd_spacing">
        <div  v-if="userInfo" class="weui-flex">
            <div class="weui-flex__item">
              <div class="placeholder">
                <div style="  word-break: break-all;
  white-space: normal;">登录信息 :{{user}}</div>
              </div>
            </div>
        </div>
        
        <div  v-if="userToken" class="weui-flex">
              <div class="weui-flex__item">
                <div class="placeholder">
                  <div style="  word-break: break-all;
    white-space: normal;">登录信息 :{{userToken}}
                  </div>
              </div>
              </div>
          </div>
    </div>

  </div>   
 </template>

<script>
import { mapGetters, mapActions } from 'vuex'


export default {
  name: 'User',
  computed: {
    ...mapGetters([
      'userToken',
      'userInfo',
    ]),
    url(){
      return window.location.href
    },
    user(){
      return JSON.stringify(this.userInfo)
    }
  },
  created() {
	  
  },
   methods: {
	
   },
}
</script>