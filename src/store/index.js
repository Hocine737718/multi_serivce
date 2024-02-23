import { createStore } from 'vuex'
import {useAxios} from '@/assets/js/global.js';
import axios from 'axios';
import Swal from 'sweetalert2';

export default createStore({
  state: {
    //baseURL: "http://localhost/server/multi_services/_php",
    baseURL: "https://gms-php.000webhostapp.com/_php",
    offers:[],
    line_business_stats:[],
    services_stats:[]
  },
  getters: {
  },
  mutations: {
    set_offers(state, offers) {
      state.offers = offers;
    },
    set_stats(state,{stats, stats_name} ) {
      if(stats_name=="line_business_stats") state.line_business_stats=stats;
      if(stats_name=="services_stats") state.services_stats=stats;
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
    },

    async get_stats(context,stats_name){
      const dataLabel=stats_name;
      const dataContent="";
      const serverUrl=`${context.state.baseURL}/${stats_name}.php`;
      const res=await useAxios(dataLabel,dataContent,serverUrl);
      if(!res.error){                
        console.log("Stats - "+stats_name+"-> ",res.msg);
        context.commit('set_stats',{ stats:res.data, stats_name:stats_name});
      }
      else{
        console.error("Stats - "+stats_name+"-> ",res.msg);
      }       
    },  

    async download(context,filename){
      const serverUrl=`${context.state.baseURL}/download.php?filename=${filename}`;
      axios({
        url: serverUrl,
        method: 'GET',
        responseType: 'blob', // Indique que la réponse est un blob (fichier)
      })
      .then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
      })
      .catch(e => {
        Swal.fire({
          icon: "error",title: "Erreur",text: e.message,
        });      
      });
    }
  },
  modules: {
  }
})
