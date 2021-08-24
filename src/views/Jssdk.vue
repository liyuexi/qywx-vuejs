<template>
<div class="page">
    <div class="page__hd">
        <h1 class="page__title" > Jssdk </h1>
    </div>
    <div class="page__bd page__bd_spacing">
        <div class="weui-flex">
            <div class="weui-flex__item">
              <div class="placeholder">
                  <a href="javascript:" class="weui-btn weui-btn_mini weui-btn_primary" @click="userProfile">个人信息</a>      
                  <a href="javascript:" class="weui-btn weui-btn_mini weui-btn_primary" @click="chooseUser">选人</a>           
                   <a href="javascript:" class="weui-btn weui-btn_mini weui-btn_primary" @click="scanQr">扫一扫</a>           
                  <a href="javascript:" class="weui-btn weui-btn_mini weui-btn_primary" @click="chooseImg">拍照</a>
                  <a href="javascript:" class="weui-btn weui-btn_mini weui-btn_primary" @click="shareWx">分享到微信</a>                                                  
             </div>
            </div>
        </div>

    </div>
</div>
 </template>

<script>

import {jsSign} from '../api/jssdk'
export default {
  name: 'Jssdk',

  created() {
    this.getJsSign()
  },
   methods: {
      userProfile(){

         wx.invoke('openUserProfile', {
                  "type": 1, //1表示该userid是企业成员，2表示该userid是外部联系人
                  "userid": "LiYueXi" //可以是企业成员，也可以是外部联系人
            }, function(res) {
            if(res.err_msg != "openUserProfile:ok") {
                  //错误处理
            }
         });

      },
      scanQr(){

      },
      chooseImg(){

      },
      shareWx(){
            wx.invoke(
               "shareWechatMessage", {
                        title: '分享标题', // 分享标题
                        desc: '分享标题', // 分享描述
                        link: '', // 分享链接
                        imgUrl: '' // 分享封面
            }, function(res) {
               if (res.err_msg == "shareWechatMessage:ok") {
               }
            }
         );
      },
      chooseUser(){
         wx.invoke("selectEnterpriseContact", {
                  "fromDepartmentId": -1,// 必填，表示打开的通讯录从指定的部门开始展示，-1表示自己所在部门开始, 0表示从最上层开始
                  "mode": "multi",// 必填，选择模式，single表示单选，multi表示多选
                  "type": ["department", "user"],// 必填，选择限制类型，指定department、user中的一个或者多个
                  // "selectedDepartmentIds": ["2","3"],// 非必填，已选部门ID列表。用于多次选人时可重入，single模式下请勿填入多个id
                  // "selectedUserIds": ["lisi","lisi2"]// 非必填，已选用户ID列表。用于多次选人时可重入，single模式下请勿填入多个id
         },function(res){
                  if (res.err_msg == "selectEnterpriseContact:ok")
                  {
                           if(typeof res.result == 'string')
                           {
                                 res.result = JSON.parse(res.result) //由于目前各个终端尚未完全兼容，需要开发者额外判断result类型以保证在各个终端的兼容性
                           }
                           var selectedDepartmentList = res.result.departmentList;// 已选的部门列表
                           for (var i = 0; i < selectedDepartmentList.length; i++)
                           {
                                 var department = selectedDepartmentList[i];
                                 var departmentId = department.id;// 已选的单个部门ID
                                 var departemntName = department.name;// 已选的单个部门名称
                           }
                           var selectedUserList = res.result.userList; // 已选的成员列表
                           for (var i = 0; i < selectedUserList.length; i++)
                           {
                                 var user = selectedUserList[i];
                                 var userId = user.id; // 已选的单个成员ID
                                 var userName = user.name;// 已选的单个成员名称
                                 var userAvatar= user.avatar;// 已选的单个成员头像
                           }
                  }
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
               jsApiList: ['openUserProfile','selectEnterpriseContact','chooseImage','scanQRCode','shareWechatMessage'] // 必填，需要使用的JS接口列表，凡是要调用的接口都需要传进来
            });
         })

         wx.ready(function(){
             wx.checkJsApi({
               jsApiList: ['selectEnterpriseContact','chooseImage','scanQRCode','shareWechatMessage'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
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