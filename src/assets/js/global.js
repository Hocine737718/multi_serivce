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
/*function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
export function generateColorsCodes(nbColors){
  let i=0;
  let colors=[];
  while(i<nbColors){
    var red = Math.floor(Math.random() * 256); // Valeur entre 0 et 255
    var green = Math.floor(Math.random() * 256); // Valeur entre 0 et 255
    var blue = Math.floor(Math.random() * 256); // Valeur entre 0 et 255
    
    // Construire le code de couleur hexadécimal
    var color = "#" + componentToHex(red) + componentToHex(green) + componentToHex(blue);
    
    colors.push(color);
    i=i+1;
  }
  return colors;
}*/
export function generateColors(numColors) {
  const colorCodes = [];
  const goldenRatio = 0.618033988749895; // Utilisé pour générer des couleurs équilibrées

  for (let i = 0; i < numColors; i++) {
      const hue = (i * goldenRatio) % 1;
      const hexColor = HSVtoRGB(hue, 0.5, 0.95); // Saturation et luminosité fixes, juste pour la variation de couleur
      colorCodes.push(hexColor);
  }

  return colorCodes;
}

// Fonction utilitaire pour convertir HSV (Teinte, Saturation, Luminosité) en RGB
function HSVtoRGB(h, s, v) {
  let r, g, b, i, f, p, q, t;
  if (s === 0) {
      r = g = b = v;
      return '#' + Math.round(r * 255).toString(16).padStart(2, '0') +
          Math.round(g * 255).toString(16).padStart(2, '0') +
          Math.round(b * 255).toString(16).padStart(2, '0');
  }
  h *= 6;
  i = Math.floor(h);
  f = h - i;
  p = v * (1 - s);
  q = v * (1 - s * f);
  t = v * (1 - s * (1 - f));
  switch (i % 6) {
      case 0: r = v; g = t; b = p; break;
      case 1: r = q; g = v; b = p; break;
      case 2: r = p; g = v; b = t; break;
      case 3: r = p; g = q; b = v; break;
      case 4: r = t; g = p; b = v; break;
      case 5: r = v; g = p; b = q; break;
  }
  return '#' + Math.round(r * 255).toString(16).padStart(2, '0') +
      Math.round(g * 255).toString(16).padStart(2, '0') +
      Math.round(b * 255).toString(16).padStart(2, '0');
}



