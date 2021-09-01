<template>
<div class="page">
    <div class="page__hd">
        <h1 class="page__title" > Jssdk </h1>
    </div>
    <div class="page__bd page__bd_spacing">

      <div class="weui-flex">   
            <div class="weui-flex__item">
              <div class="placeholder">
                  <a href="javascript:" class="weui-btn weui-btn_mini weui-btn_primary" @click="">上传照片</a>    
                  <a href="javascript:" class="weui-btn weui-btn_mini weui-btn_primary" @click="download">下载临时素材</a>                                                  
             </div>
            </div>             
       </div>

    </div>
</div>
 </template>

<script>

import {jsSign,jsAgentSign} from '../api/jssdk'


export default {
  name: 'Media',

  created() {
    this.getJsSign()
  },
   methods: {
 
 
   },
}
</script>