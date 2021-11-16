<template>
<div class="page">
    <div class="page__hd">
        <h1 class="page__title" > 效率工具 </h1>
    </div>
    <div class="page__bd page__bd_spacing">

         <div class="weui-flex">
            <div class="weui-flex__item">
              <div class="placeholder">
                    <input v-model="organize_user_id" placeholder="组织者" /> 
                    <input v-model="summary" placeholder="日历简介" /> 
                    <input v-model="color" placeholder="日历颜色" /> 
                     <input v-model="share_user_id_str" placeholder="日历共享成员" /> 
             </div>
            </div>  
            <div class="weui-flex__item">
              <div class="placeholder">
                  <a href="javascript:" class="weui-btn weui-btn_mini weui-btn_primary" @click="addCalendar">创建日历</a>                                           
             </div>
            </div>
         </div>

        <div class="weui-flex">
            <div class="weui-flex__item">
              <div class="placeholder">
                    <input v-model="calendar_id" placeholder="日历id" /> 
             </div>
            </div>  
            <div class="weui-flex__item">
              <div class="placeholder">
                  <a href="javascript:" class="weui-btn weui-btn_mini weui-btn_primary" @click="getCalendar">获取日历详情</a>                                           
             </div>
            </div>
         </div>

         <div class="weui-flex">
            <div class="weui-flex__item">
              <div class="placeholder">
                    <input v-model="calendar_id" placeholder="日历id" />
             </div>
            </div>  

            <div class="weui-flex__item">
              <div class="placeholder">
                  <a href="javascript:" class="weui-btn weui-btn_mini weui-btn_primary" @click="getScheduleList">获取日历下的日程列表</a>                                           
             </div>
            </div>
         </div>

        <div class="weui-flex">
        <div class="weui-flex__item">
            <div class="placeholder">
                     <input v-model="calendar_id" placeholder="日历id" /> 
                     <input v-model="organize_user_id" placeholder="日程组织者" /> 
                     <input v-model="summary" placeholder="日程简介" /> 
                     <input v-model="attends_str" placeholder="日程参与者" /> 
                     <input v-model="start_time" placeholder="开始时间" /> 
                     <input v-model="end_time" placeholder="结束时间" /> 
            </div>
        </div>  
        <div class="weui-flex__item">
            <div class="placeholder">
                <a href="javascript:" class="weui-btn weui-btn_mini weui-btn_primary" @click="addSchedule">创建日程</a>                                           
            </div>
        </div>
        </div>

        <div class="weui-flex">
            <div class="weui-flex__item">
              <div class="placeholder">
                    <input v-model="schedule_id" placeholder="日程id" /> 
             </div>
            </div>  

            <div class="weui-flex__item">
              <div class="placeholder">
                  <a href="javascript:" class="weui-btn weui-btn_mini weui-btn_primary" @click="getSchedule">获取日程详情</a>                                           
             </div>
            </div>
         </div>

         <div class="weui-flex">
            <div class="weui-flex__item">
              <div class="placeholder">
                     <input v-model="type" placeholder="会议类型" /> 
                     <input v-model="organize_user_id" placeholder="日程组织者" /> 
                     <input v-model="title" placeholder="会议标题" /> 
                     <input v-model="start_time" placeholder="会议开始时间" /> 
                     <input v-model="duration" placeholder="会议时长" /> 
                     <input v-model="attends_str" placeholder="会议参与者" /> 
             </div>
            </div>  

            <div class="weui-flex__item">
              <div class="placeholder">
                  <a href="javascript:" class="weui-btn weui-btn_mini weui-btn_primary" @click="addMeeting">添加会议</a>                                           
             </div>
            </div>
         </div>

         <div class="weui-flex">
            <div class="weui-flex__item">
              <div class="placeholder">
                     <input v-model="metting_id" placeholder="会议id" /> 
                      <input v-model="user_id" placeholder="用户id" /> 
                     
             </div>
            </div>  

            <div class="weui-flex__item">
              <div class="placeholder">
                  <a href="javascript:" class="weui-btn weui-btn_mini weui-btn_primary" @click="getMeetingDetail">获取会议详情</a>       
                  <a href="javascript:" class="weui-btn weui-btn_mini weui-btn_primary" @click="getUserMeeting">获取会议详情</a>                                       
             </div>
            </div>
         </div>

            
    </div>
</div>
 </template>

<script>

import {jsSign,jsAgentSign} from '../api/jssdk'
import {addCalendar,getCalendar,addSchedule,getScheduleList,getSchedule,addMeeting,getMeetingDetail,getUserMeeting} from '../api/efficiency'

export default {
  name: 'Efficiency',
  data () {
      return {
          organize_user_id: '',
          share_user_id_str:'',
          summary:'',
          color:'',
          calendar_id:'',
          attends_str:'',
          start_time:parseInt(new Date().getTime()/1000)+60,
          schedule_id:'',

           type:'1',
           title:'',
           end_time:parseInt(new Date().getTime()/1000)+120,
          duration:'120',
          metting_id:'',
          user_id:'',

      }
  },
  created() {
  },
   methods: {
      
      addCalendar(){
         let shareStrArr = this.share_user_id_str.split(",")
         let shareUserArr = shareStrArr.map(function(item,index){
            let json = {}
            json.userid = item;
            return json
         });
         let params = {
            summary:this.summary,
            color:this.color,
            organizer:this.organize_user_id,
            shares:shareUserArr,
         }
         addCalendar(params).then((res)=>{
               this.calendar_id =  res.data.cal_id
         });
      },

      getCalendar(){
         let params = {'calendar_id':this.calendar_id}
         getCalendar(params).then((res)=>{
                console.log(res)
                alert(  JSON.stringify(res)  )
         });
      },
      
      addSchedule(){
         let attendsStrArr = this.attends_str.split(",")
         let attendsArr = attendsStrArr.map(function(item,index){
            let json = {}
            json.userid = item;
            return json
         });
         let params = {
            start_time:this.start_time,
            end_time:this.end_time,
            summary:this.summary,
            calendar_id:this.calendar_id,  
            organize_user_id:this.organize_user_id,
            attends:attendsArr,
         }

         addSchedule(params).then((res)=>{
               this.schedule_id =  res.data.schedule_id
         });
      },

      getScheduleList(){
         let params = {'calendar_id':this.calendar_id}
         getScheduleList(params).then((res)=>{
                console.log(res)
                alert(  JSON.stringify(res)  )
         });
      },

      getSchedule(){
         let params = {'schedule_id':this.schedule_id}
         getSchedule(params).then((res)=>{
                console.log(res)
                alert(  JSON.stringify(res)  )
         });
      },

      addMeeting(){
           let attendsStrArr = this.attends_str.split(",")
         let attendsArr = attendsStrArr.map(function(item,index){
            return item
         });
         let params = {
            start_time:this.start_time,
            duration:this.duration,
            title:this.title,
            type:this.type,  
            organize_user_id:this.organize_user_id,
            attends:attendsArr,
         }

         addMeeting(params).then((res)=>{
               this.metting_id =  res.data.meetingid
         });
      },
      
      getMeetingDetail(){
         let params = {'metting_id':this.metting_id}
         getMeetingDetail(params).then((res)=>{
                console.log(res)
                alert(  JSON.stringify(res)  )
         });
      },
      
      getUserMeeting(){
         let params = {'user_id':this.user_id}
         getUserMeeting(params).then((res)=>{
                console.log(res)
                alert(  JSON.stringify(res)  )
         });
      },

   },
}
</script>