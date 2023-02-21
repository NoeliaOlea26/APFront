import { Injectable } from '@angular/core';
//import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {Storage, ref, uploadBytes, list, getDownloadURL, getStorage} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImagenproyService {
  downloadURL1: string ="";
  constructor(private storage: Storage) { }
  public uploadImage($event: any, name: string){
  const file = $event.target.files[0];
  const imagRef = ref(this.storage, `proyectos/` + name);
  console.log(imagRef);
  console.log(name);
  uploadBytes(imagRef, file)
  .then(response => {this.getImages()})
  .catch(error => console.log(error));
}

getImages() {
const imagRef = ref(this.storage, 'proyectos');
  list (imagRef)
.then( async response => {
      for(let item of response.items)//   image of response.images)
  { this.downloadURL1 = await getDownloadURL(item);
    console.log("la url es: "+ this.downloadURL1);
  }
})
.catch(err => console.log(err));

}

}
