<template>
     <div  class="container">
        <router-view ></router-view>
        <br/>
          <div class="weui-footer">
            <p class="weui-footer__links">
                <a href="javascript:" class="weui-footer__link">公众号：ToB Dev</a>
            </p>
            <p class="weui-footer__text">Copyright &copy; 2020-xxxx tobdev.com</p>
        </div>
        <TabBar></TabBar>
    </div>
</template>

<style >
.container {    
  height: 100%;

  background-color:#ededed;
}
.page__hd {
      padding: 40px;
}
.page__title {
    text-align: left;
    font-size: 20px;
    font-weight: 400;
}
.page__desc {
    margin-top: 4px;
    color: var(--weui-FG-1);
    text-align: left;
    font-size: 14px;
}
.page__bd_spacing {
    padding: 0 16px;
}
.weui-flex{
  background-color:#f3f3f3;
}
.weui-flex__item{

}
 .placeholder {
    margin: 5px;
    padding: 10px;
    text-align: center;
    
}
</style>
<script>
import TabBar from './TabBar.vue'
export default {
  name: 'Layout',
  components: {
    TabBar,
  },
  created() {
	  
  },
   methods: {
	
   },
}
</script>