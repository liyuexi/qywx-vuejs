<template>
<div class="page">
 
    <div class="weui-tabbar">

        <router-link  to="/auth" class="weui-tabbar__item" active-class="weui-bar__item_on">
            <!-- <span class="weui-tabbar__icon"  ></span> -->
            <p class="weui-tabbar__label qywx-tabbar-item">登录</p>
        </router-link>

        <router-link  to="/demo" class="weui-tabbar__item" active-class="weui-bar__item_on">
            <!-- <span class="weui-tabbar__icon"  ></span> -->
            <p class="weui-tabbar__label qywx-tabbar-item">Demo</p>
        </router-link>

        <router-link  to="/user" class="weui-tabbar__item" active-class="weui-bar__item_on">
            <!-- <span class="weui-tabbar__icon"  ></span> -->
            <p class="weui-tabbar__label qywx-tabbar-item">我的</p>
        </router-link>
        
    </div>
</div>


</template>

<style>
.qywx-tabbar-item {
    padding:10px 0;
}
</style>

<script>
export default {
  name: 'TabBar',
  created() {
	  
  },
  methods: {

  },
}
</script>