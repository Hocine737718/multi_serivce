import { createStore } from 'vuex'
import {useAxios} from '@/assets/js/global.js';
import axios from 'axios';
import Swal from 'sweetalert2';
export default createStore({
  state: {
    baseURL: "http://localhost:80/server/MULTI_SERVICES/_php",
    offers:[]
  },
  getters: {
  },
  mutations: {
    set_offers(state, offers) {
      state.offers = offers;
    },
  },
  actions: {
    async addToNewsLetter(context,email){
      const dataLabel="news_letter";
      const dataContent=`{
                          "email":"${email}"
                        }`;
      const serverUrl=`${context.state.baseURL}/news_letter.php`;
      const res=await useAxios(dataLabel,dataContent,serverUrl);
      if(!res.error){                
        Swal.fire({
          icon: "success",title: "Succès",text: res.msg,
        });
      }
      else{
        console.error("Add To News Lettre-> ",res.msg);
        Swal.fire({
          icon: "error",title: "Erreur",text: "Vous n'êtes pas ajoutés à la newsletter !",
        });
      }  
    },
    async contact(context,{name,email,message}){
      const dataLabel="contact";
      const dataContent=`{
                          "name":"${name}",
                          "email":"${email}",
                          "message":"${message}"
                        }`;
      const serverUrl=`${context.state.baseURL}/contact.php`;
      const res=await useAxios(dataLabel,dataContent,serverUrl);
      if(!res.error){                
        Swal.fire({
          icon: "success",title: "Succès",text: res.msg,
        });
      }
      else{
        console.error("Contact-> ",res.msg);
        Swal.fire({
          icon: "error",title: "Erreur",text: "Votre message n'a pas été enovoyé !",
        });
      }  
    },
    async job_application(context,{data,file}){
      try
      {
          const sendData = new FormData();
          sendData.append('job_application', JSON.stringify(data));
          sendData.append('attachment_file', file);
          const response = await axios.post(`${context.state.baseURL}/job_application.php`, sendData);
          if(response.data.success)
          {
            Swal.fire({
              icon: "success",title: "Succès",text: response.data.msg,
            });
          } 
          else if(response.data.msg) throw new Error(response.data.msg);
          else throw new Error(response.data);
      }
      catch(error){
        console.error("Job Application -> ",error);
        Swal.fire({
          icon: "error",title: "Erreur",text: "Votre candidature n'a pas été enovoyé !",
        });
      }  
    },
    async get_offers(context){
      const dataLabel="get_offers";
      const dataContent="";
      const serverUrl=`${context.state.baseURL}/get_offers.php`;
      const res=await useAxios(dataLabel,dataContent,serverUrl);
      if(!res.error){                
        console.log("Get Offers-> ",res.msg);
        context.commit('set_offers', res.data);
      }
      else{
        console.error("Get Offers-> ",res.msg);
      }       
    },  
    async add_click(context,id){
      const dataLabel="add_clicks";
      const dataContent=`{
                          "id":"${id}"
                          }`;
      const serverUrl=`${context.state.baseURL}/add_clicks.php`;
      const res=await useAxios(dataLabel,dataContent,serverUrl);
      if(!res.error){    
          console.log("Add Clicks-> ",res.msg);       
      }
      else{
          console.error("Add Clicks-> ",res.msg);
      }  
    },
    async quote(context,{data,file}){
      try
      {
          const sendData = new FormData();
          sendData.append('quote', JSON.stringify(data));
          sendData.append('attachment_file', file);
          const response = await axios.post(`${context.state.baseURL}/quote.php`, sendData);
          if(response.data.success)
          {
            Swal.fire({
              icon: "success",title: "Succès",text: response.data.msg,
            });
          } 
          else if(response.data.msg) throw new Error(response.data.msg);
          else throw new Error(response.data);
      }
      catch(error){
        console.error("Quote -> ",error);
        Swal.fire({
          icon: "error",title: "Erreur",text: "Votre candidature n'a pas été enovoyé !",
        });
      }  
    }
  },
  modules: {
  }
})