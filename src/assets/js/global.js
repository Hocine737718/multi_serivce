import axios from 'axios';
export async function useAxios(dataLabel,dataContent,serverUrl){
  
    const res={error:false,msg:"",content:null};
    try {
      const data = new FormData();
      data.append(dataLabel, dataContent);
      
      let response = await axios.post(serverUrl, data);
      
      if(response.data.success){
        res.msg=response.data.msg;
        res.data=response.data.content;
      } 
      else if(response.data.msg) throw new Error(response.data.msg);
      else throw new Error(response.data);
    } 
    catch (error) {
      res.error=true;
      res.msg=error || "Une erreur s'est produite.";
    }  
    return res;
}