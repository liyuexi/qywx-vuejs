<template>
<div class="page">
    <div class="page__hd">
        <h1 class="page__title" > 家校通讯录相关 </h1>
    </div>
    <div class="page__bd page__bd_spacing">
        <div class="weui-flex">
            <div class="weui-flex__item"> 
                <div class="placeholder">
                    <input v-model="deptPid" placeholder="输入父级部门id" /> 
                </div>
            </div>
            <div class="weui-flex__item">
              <div class="placeholder">
                   <a href="javascript:" class="weui-btn weui-btn_mini weui-btn_primary" @click="getDeptList">获取部门(班级)</a>             
             </div>
            </div>
        </div>
         <div class="weui-flex">
             <div class="weui-flex__item"> 
                <div class="placeholder">
                    <input v-model="deptId" placeholder="输入部门id" /> 
                </div>
            </div>
            <div class="weui-flex__item">
              <div class="placeholder">
                
                    <a href="javascript:" class="weui-btn weui-btn_mini weui-btn_primary" @click="getDeptUserList">获取部门人员（家长及家长下学生）</a>   
             </div>
            </div>
        </div>
        
        <div class="weui-flex">
            <div class="weui-flex__item"> 
                <div class="placeholder">
                     <input v-model="userId" placeholder="输入用户id" /> 
                </div>
            </div>

            <div class="weui-flex__item">
              <div class="placeholder">
                    <a href="javascript:" class="weui-btn weui-btn_mini weui-btn_primary" @click="getDeptUserDetail">获取学生或家长详情</a>   
             </div>
            </div>
        </div>

        <div class="weui-flex">
            <div class="weui-flex__item">
              <div class="placeholder">
                    <a href="javascript:" class="weui-btn weui-btn_mini weui-btn_primary" @click="getSubscribeQr">获取学校通知二维码</a>   
             </div>
            </div>
        </div>

         
        <div class="weui-flex">   
            <div class="weui-flex__item">
                <div class="placeholder">
                    <input v-model="parentUserid" placeholder="输入发送至的to_parent_userid" /> 
                </div>
            </div>       
             <div class="weui-flex__item">
                <div class="placeholder">
                    <input v-model="studentUserid" placeholder="输入发送至的to_student_userid" /> 
                </div>
            </div>            
        </div>

        <div class="weui-flex">
            
             <div class="weui-flex__item">
                <div class="placeholder">
                    <input v-model="textMsg" placeholder="输入发送的内容" /> 
                </div>
            </div>       
            <div class="weui-flex__item">
              <div class="placeholder">
              <a class="weui-btn weui-btn_mini weui-btn_primary" @click="sendMsgText" >学校通知 文本</a>
             </div>
            </div>
         </div>

        <div class="weui-flex">   
                <div class="weui-flex__item">
                <div class="placeholder">
                    <input v-model="mediaId" placeholder="输入图片media id" /> 
              </div>
              </div>   

              <div class="weui-flex__item">
                <div class="placeholder">
                    <a  class="weui-btn weui-btn_mini weui-btn_primary" @click="sendImage">学校通知 图片</a>                                                  
              </div>
              </div>             
        </div>
        
    </div>
</div>
 </template>


<script>
import { deptList,deptUserList,deptUserDetail ,subscribeQr,sendMsg,sendImg} from '../api/school'

export default {
    name: 'SchoolContact',
    data() {
        return {
             deptPid:'',
             deptId: 0,
             parentUserid:'',
            studentUserid:''
        }
    },
    created() {
        
    },
    methods: {
        getDeptList(){
            let params = {"dept_id":this.deptPid}
            deptList(params).then((res)=>{
                console.log(res)
                alert(  JSON.stringify(res)  )
            })
        },
        getDeptUserList(){
            let params = {'department_id':this.deptId}
            deptUserList(params).then((res)=>{
                console.log(res)
                alert(  JSON.stringify(res)  )
            })
        },
         getDeptUserDetail(){
            let params = {'user_id':this.userId}
            deptUserDetail(params).then((res)=>{
                console.log(res)
                alert(  JSON.stringify(res)  )
            })
        },
        getSubscribeQr(){
            let params = {}
            subscribeQr(params).then((res)=>{
                console.log(res)
                alert(  JSON.stringify(res)  )
            })
        },
        sendMsgText(){
            let params = {'to_parent_userid':this.parentUserid,'to_student_userid':this.studentUserid,'text':this.textMsg}
            sendMsg(params).then((res)=>{
            
            }) 
        },
        sendImage(){
            let params = {'to_parent_userid':this.parentUserid,'to_student_userid':this.studentUserid,'media_id':this.mediaId}
            sendImg(params).then((res)=>{
            
            }) 
        },
    },
    
}
</script>