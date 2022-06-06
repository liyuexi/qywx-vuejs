<template>
  <div class="page">
    <div class="page__hd">
        <h1 class="page__title" > 设置应用信息 本地 </h1>
    </div>

    <div class="page__bd page__bd_spacing">

        <a href="https://open.work.weixin.qq.com/wwopen/sso/3rd_qrConnect?appid=ww7505f7b629ddfb25&redirect_uri=https%3A%2F%2Ftestcrm.judianren.cn&state=test&usertype=admin" target="_blank"> xxxxxx </a>
        <div class="weui-flex">
          <div class="weui-flex__item">
              <div class="placeholder">
                  第一步 后端api地址设置： <br/>
                  如http://apitest.tobdev.com<br/>
                  地址可带端口如:9900结束请勿加/<br/>
                  保存时后端url会保存在当前浏览器 <br/>
                  前端所有api请求都会请求到后端url<br/>
                <select v-model="api_env">
                  <option  value="1">ToB Dev 官方线上后端</option>
                  <option value="2"> 自有运行ToB Dev后端</option>
                </select> <br/>
                <input v-model="api_url" placeholder="输入后端api地址" /> <br/>
                    <a href="javascript:" class="weui-btn weui-btn_mini weui-btn_primary" @click="verify">验证后端api</a>   <br/>
                <a href="javascript:" class="weui-btn weui-btn_mini weui-btn_primary" @click="save">保存后端api设置</a>   

              </div>  
          </div>  
        </div>

        <div class="weui-flex">
          <div class="weui-flex__item">
            <div class="placeholder">
                第二步 应用设置： <br/>
                保存时corp_id会保存在当前浏览器<br/>前端所有请求都会带上保存时corp_id为参数 <br/>并且对应配置会提交到后端api保存到数据库 <br/>
                 <input v-model="corp_id" placeholder="输入企业corp_id" /> <br/>
                  <input v-model="agent_id" placeholder="输入应用agent_id" /> <br/>
                   <input v-model="agent_secret" placeholder="输入应用secret" /> <br/>
                   <!-- aes key及 token缺少配置 -->
                <a href="javascript:" class="weui-btn weui-btn_mini weui-btn_primary" @click="set">保存应用设置</a>                                           
            </div>
          </div>
        </div>

        <div class="weui-flex">
          <div class="weui-flex__item">
            <div class="placeholder">
              <input type="file" @change="getFile($event)"><br/>
              <a href="javascript:" class="weui-btn weui-btn_mini weui-btn_primary" @click="verifyFile">上传Oauth及jssdk验证文件</a>    
              <br/>如果前端环境为ToB Dev官方需要上传<br/>如果前端环境是自有运行ToB Dev前端<br/>请自己在公网做好验证<br/>
            </div>
          </div>  
        </div>

    </div>

  </div>   
 </template>

<script>
import { mapGetters, mapActions } from 'vuex'
import  {verify,get,set ,verifyFile} from '../api/tobdev'
import { AppService } from '../services/AppStorageService'
import axios from 'axios'
import { queryString } from '../utils/index'

export default {
  name: 'TobDev',
   data() {
    return {
        api_env:1,
        api_url:'',
        corp_id:'',
        agent_id: '',
        agent_secret:'',
        file:'',
    }
   },

  computed: {
    url(){
      return window.location.href
    },
  },
  created() {

      this.api_url=  AppService.getApiUrl() == '' ?   import.meta.env.VITE_API_URL :  AppService.getApiUrl() 
  	  this.corp_id =  AppService.getCorpId() == '' ?  import.meta.env.VITE_CORP_ID   :  AppService.getCorpId() 
      this.agent_id=    AppService.getAgentId() 
      this.agent_secret =  AppService.getAgentSecret()

      //自建代开发兼容
      alert(queryString('corp_id') )
      if( queryString('corp_id') ){
        this.getAndSet( queryString('corp_id') )
      }

  },

  methods: {
     save(){
        AppService.storeApiUrl(this.api_url)
     },
     verify(){

        axios.get( this.api_url+"/tobdev/verify").then( res=>{
             console.log(res.data)
              alert(  JSON.stringify(res.data)  )
        });

     },
     getAndSet(corpId){
        let params = {
          'corp_id':corpId
        }
        //需要提前设置
        AppService.storeCorpId(corpId)
        get(params).then((res)=>{
            console.log(res)
            alert(  JSON.stringify(res)  )
            AppService.storeAgentId(res.data.agentId)
            AppService.storeAgentSecret(res.data.agentSecret)
            
        });
             
     },

     set(){
        AppService.storeCorpId(this.corp_id)
        AppService.storeAgentId(this.agent_id)
        AppService.storeAgentSecret(this.agent_secret)
        let params = {
          'corp_id':this.corp_id,
          'agent_id':this.agent_id,
          'agent_secret':this.agent_secret
          }
        set(params).then((res)=>{
              console.log(res)
              alert(  JSON.stringify(res)  )
        });
     },
     verifyFile(){

        let formData = new FormData();
        formData.append("file", this.file);
        verifyFile(formData).then((res)=>{
            console.log(res)
            alert(  JSON.stringify(res)  )
        });
     },

     getFile: function (event) {
        this.file = event.target.files[0];
        console.log(this.file);
      },

    

   },
}
</script>