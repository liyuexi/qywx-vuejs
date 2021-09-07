<template>
<div class="page">
    <div class="page__hd">
        <h1 class="page__title" > 素材管理 </h1>
    </div>
    <div class="page__bd page__bd_spacing">

    <div class="weui-flex">   
            <div class="weui-flex__item">
              <div class="placeholder">
                   <input type="file" name="file"  @change="update"><br>
             </div>
            </div>        
             <div class="weui-flex__item">
              <div class="placeholder">
                  <a href="javascript:" class="weui-btn weui-btn_mini weui-btn_primary" @click="uploadMedia">上传临时素材</a>  
             </div>
            </div>     

       </div>

      <div class="weui-flex">   
            <div class="weui-flex__item">
              <div class="placeholder">
                   <input type="file" name="file"  @change="update"><br>
             </div>
            </div>        
             <div class="weui-flex__item">
              <div class="placeholder">
                  <a href="javascript:" class="weui-btn weui-btn_mini weui-btn_primary" @click="uploadImg">上传照片</a>  
             </div>
            </div>     

       </div>


      <div class="weui-flex">   
              <div class="weui-flex__item">
              <div class="placeholder">
                  <input v-model="meidaId" placeholder="输入media id" /> 
             </div>
            </div>   

            <div class="weui-flex__item">
              <div class="placeholder">
                  <a href="javascript:" class="weui-btn weui-btn_mini weui-btn_primary" @click="downloadMedia">查看素材</a>                                                  
             </div>
            </div>             
       </div>

    
    </div>
</div>
</template>

<script>

import {uploadMedia,uploadImg} from '../api/media'

export default {
  name: 'Media',
  data() {
      return {
          file: null,
          meidaId:'',
      }
  },
  created() {
    
  },
  methods: {
      update(e){
         this.file = e.target.files[0];
      },
      uploadImg(){
        let params = new FormData(); //创建form对象
        params.append('media',this.file);//通过append向form对象添加数据
        console.log(params.get('media')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
        uploadImg(params).then((res)=>{
                console.log(res)
                alert(  JSON.stringify(res)  )
        })
      },
      uploadMedia(){
        let params = new FormData(); //创建form对象
        params.append('media',this.file);//通过append向form对象添加数据
        console.log(params.get('media')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
        uploadMedia(params).then((res)=>{
                console.log(res)
                alert(  JSON.stringify(res)  )
        })
      },
      downloadMedia(){
        let downloadURL = import.meta.env.VITE_API_URL+"/media/download?corp_id="+import.meta.env.VITE_CORP_ID+"&media_id="+this.meidaId
         window.open(downloadURL) ;
      }
   },
}
</script>