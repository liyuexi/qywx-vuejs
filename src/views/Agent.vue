<template>
<div class="page">

    <div class="page__hd">
        <h1 class="page__title" > 应用管理 </h1>
    </div>

    <div class="page__bd page__bd_spacing">

        <div class="weui-flex">         
                <div class="weui-flex__item">
                  <div class="placeholder">
                      <a href="javascript:" class="weui-btn weui-btn_mini weui-btn_primary" @click="getAgent">获取应用信息</a>  
                </div>
          </div>     
        </div>

        <div class="weui-flex">   
          <div class="weui-flex__item">
            <div class="placeholder">
                <textarea type="text" v-model="agent" />
            </div>
          </div>        
          <div class="weui-flex__item">
            <div class="placeholder">
                <a href="javascript:" class="weui-btn weui-btn_mini weui-btn_primary" @click="setAgent">设置应用信息</a>  
            </div>
          </div>     
        </div>


    </div>

</div>
</template>

<script>

import {getAgent,setAgent} from '../api/agent'

export default {
  name: 'Agent',
  data() {
      return {
          agent: null,
      }
  },
  created() {
    
  },
  computed: {
  },
  methods: {
     getAgent(){
       let params = {}
        getAgent(params).then((res)=>{
          this.agent = JSON.stringify( {'name':res.data.name,'description':res.data.description} );
        });
     },
     setAgent(){
       let params = JSON.parse(this.agent)
        setAgent(params).then((res)=>{
           alert( JSON.stringify(res)   )
        });
     }  
  },
}
</script>