<template>
<div class="page">
    <div class="page__hd">
        <h1 class="page__title" > Oa </h1>
    </div>
    <div class="page__bd page__bd_spacing">

         <div class="weui-flex">
            <div class="weui-flex__item">
              <div class="placeholder">
                    <input v-model="thirdNo" placeholder="组织者" /> 
                    <input v-model="thirdNo" placeholder="日历简介" /> 
                    <input v-model="thirdNo" placeholder="日历颜色" /> 
                     <input v-model="thirdNo" placeholder="日历共享成员" /> 
             </div>
            </div>  
            <div class="weui-flex__item">
              <div class="placeholder">
                  <a href="javascript:" class="weui-btn weui-btn_mini weui-btn_primary" @click="getAprrovalState">创建日历</a>                                           
             </div>
            </div>
         </div>

        <div class="weui-flex">
            <div class="weui-flex__item">
              <div class="placeholder">
                    <input v-model="thirdNo" placeholder="组织者" /> 
             </div>
            </div>  
            <div class="weui-flex__item">
              <div class="placeholder">
                  <a href="javascript:" class="weui-btn weui-btn_mini weui-btn_primary" @click="getAprrovalState">获取日历详情</a>                                           
             </div>
            </div>
         </div>



         <div class="weui-flex">
            <div class="weui-flex__item">
              <div class="placeholder">
                    <input v-model="thirdNo" placeholder="日历id" />
             </div>
            </div>  

            <div class="weui-flex__item">
              <div class="placeholder">
                  <a href="javascript:" class="weui-btn weui-btn_mini weui-btn_primary" @click="getAprrovalState">获取日历下的日程列表</a>                                           
             </div>
            </div>
         </div>

        <div class="weui-flex">
        <div class="weui-flex__item">
            <div class="placeholder">
                <input v-model="thirdNo" placeholder="组织者" /> 
                <input v-model="thirdNo" placeholder="日程简介" /> 
                <input v-model="thirdNo" placeholder="日程其它" /> 
                    <input v-model="thirdNo" placeholder="日程参与者" /> 
            </div>
        </div>  
        <div class="weui-flex__item">
            <div class="placeholder">
                <a href="javascript:" class="weui-btn weui-btn_mini weui-btn_primary" @click="getAprrovalState">创建日程</a>                                           
            </div>
        </div>
        </div>

        <div class="weui-flex">
            <div class="weui-flex__item">
              <div class="placeholder">
                    <input v-model="thirdNo" placeholder="组织者" /> 
             </div>
            </div>  

            <div class="weui-flex__item">
              <div class="placeholder">
                  <a href="javascript:" class="weui-btn weui-btn_mini weui-btn_primary" @click="getAprrovalState">获取日程详情</a>                                           
             </div>
            </div>
         </div>

            
    </div>
</div>
 </template>

<script>

import {jsSign,jsAgentSign} from '../api/jssdk'
import {aprrovalFlowInit,approvalFlowStatus} from '../api/oa'

export default {
  name: 'Oa',
  data () {
      return {
          templateId: '',
          thirdNo:'',
      }
  },
  created() {
    this.getJsSign()
    this.initAprroval()
  },
   methods: {
      initAprroval(){
         let params = {}
         aprrovalFlowInit(params).then((res)=>{
               this.templateId = res.data.templateId
               this.thirdNo =  res.data.thirdNo
         });
      },
      getAprrovalState(){
         let params = {'third_no':this.thirdNo}
         approvalFlowStatus(params).then((res)=>{
                console.log(res)
                alert(  JSON.stringify(res)  )
         });
      },
      createAprroval(){
         wx.invoke('thirdPartyOpenPage', {
            "oaType": "10001",// String
            "templateId": this.templateId,// String
            "thirdNo": this.thirdNo,// String
            "extData": {
               'fieldList': [{
                     'title': '采购类型',
                     'type': 'text',
                     'value': '市场活动',
               },
               {
                     'title': '订单链接',
                     'type': 'link',
                     'value': 'https://work.weixin.qq.com',
               }],
               }
            },
            function(res) {
               // 输出接口的回调信息
               console.log(res);
            }
         );
      },

      getJsSign(){
         let   url =  window.location.href.split('#')[0]
         let params = {'url':url}
         jsSign(params).then((res)=>{
            //获取签名
            wx.config({
               beta: true,// 必须这么写，否则wx.invoke调用形式的jsapi会有问题
               debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
               appId: res.data.appId, // 必填，企业微信的corpID
               timestamp:res.data.timestamp , // 必填，生成签名的时间戳
               nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
               signature: res.data.signature,// 必填，签名，见 附录-JS-SDK使用权限签名算法
               jsApiList: ['thirdPartyOpenPage'] // 必填，需要使用的JS接口列表，凡是要调用的接口都需要传进来
           
            });
         })

         wx.ready(function(){
            jsAgentSign(params).then((res)=>{
                 wx.agentConfig({
                     corpid: res.data.corpId, // 必填，企业微信的corpid，必须与当前登录的企业一致
                     agentid: res.data.agentId, // 必填，企业微信的应用id （e.g. 1000247）
                     timestamp: res.data.timestamp, // 必填，生成签名的时间戳
                     nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
                     signature: res.data.signature,// 必填，签名，见附录-JS-SDK使用权限签名算法
                     jsApiList: ['thirdPartyOpenPage'], //必填，传入需要使用的接口名称
                     success: function(res) {
                        // 回调
                        console.log(res);
                     },
                     fail: function(res) {
                        if(res.errMsg.indexOf('function not exist') > -1){
                              alert('版本过低请升级')
                        }
                     }
                  });
                  
             })
             wx.checkJsApi({
               jsApiList: ['thirdPartyOpenPage'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
               success: function(res) {
                  console.log(res)
                  // 以键值对的形式返回，可用的api值true，不可用为false
                  // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
               }
            });
           // alert("ready.config成功")
            // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
         });


         wx.error(function(res){
           // alert(  JSON.stringify(res)  )

            // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
         });
    
      }
   },
}
</script>