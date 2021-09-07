<template>
<div class="page">
    <div class="page__hd">
        <h1 class="page__title" > demo </h1>
    </div>
    <div class="page__bd page__bd_spacing">
       <div class="weui-flex">
            <div class="weui-flex__item">
              <div class="placeholder">
                  <router-link to="/agent" class="weui-btn weui-btn_mini weui-btn_primary">应用管理</router-link>
             </div>
            </div>
        </div>
        <div class="weui-flex">
            <div class="weui-flex__item">
              <div class="placeholder">
                  <router-link to="/contact" class="weui-btn weui-btn_mini weui-btn_primary">通讯录</router-link>
             </div>
            </div>
        </div>
         <div class="weui-flex">
            <div class="weui-flex__item">
              <div class="placeholder">
              <router-link to="/jssdk" class="weui-btn weui-btn_mini weui-btn_primary">jssdk</router-link>
             </div>
            </div>
        </div>

        <div class="weui-flex">
            <div class="weui-flex__item">
              <div class="placeholder">
                <router-link to="/media" class="weui-btn weui-btn_mini weui-btn_primary" >素材管理</router-link>
             </div>
            </div>
         </div>


        <div class="weui-flex">
            <div class="weui-flex__item">
              <div class="placeholder">
                <router-link to="/message" class="weui-btn weui-btn_mini weui-btn_primary" >应用消息</router-link>
             </div>
            </div>
         </div>




    </div>
</div>
 </template>

<script>


export default {
  name: 'Demo',
  created() {
	  
  },
   methods: {
    
   },
}
</script>