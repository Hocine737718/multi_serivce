import axios from 'axios';
import Swal from 'sweetalert2';
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
export function select_file(id) {
  var file_input = document.getElementById(id);
  file_input.click();
}

export async function handleFileChange(event){
  var selected_file="";
  const maxSizeInBytes = 20 * 1024 * 1024;
  try{
    const fileList = event.target.files;
    if (fileList.length == 1) 
    {
      selected_file=fileList[0];
      if(
        selected_file.type !== "image/jpeg" && 
        selected_file.type !== "image/png" &&
        selected_file.type !== "image/jpg" &&
        selected_file.type !== "application/pdf" &&
        selected_file.type !== "application/msword" && // For .doc files
        selected_file.type !== "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) // For .docx files
      {
        Swal.fire({
          icon: "error",title: "Erreur",text: "Erreur de type !",
        }); 
        throw new Error("Erreur de type !");
      }
      else if(selected_file.size> maxSizeInBytes)
      {
        Swal.fire({
          icon: "error",title: "Erreur",text: "Ne dépasse pas 20 Mo !",
        }); 
        throw new Error("Ne dépasse pas 20 Mo !");
      }
      console.log('selected1',selected_file);
      return selected_file;
    }
    else if(fileList.length > 1)
    {
      Swal.fire({
        icon: "error",title: "Erreur",text: "Séléctionner un seul fichier seulement !",
      });
      return "";
    }
  }
  catch (error) {
    console.error(error);
    return "";
  }
}
export function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
export function validatePhone(phone) {
  const re = /^\d{10}$/;
  return re.test(String(phone));
}

