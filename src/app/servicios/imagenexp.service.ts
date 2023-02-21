import { Injectable } from '@angular/core';
import {Storage, ref, uploadBytes, list, getDownloadURL, getStorage} from '@angular/fire/storage';

//import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
@Injectable({
  providedIn: 'root'
})
export class ImagenexpService {
  url: string ="";

  constructor(private storage: Storage) { }
    public uploadImage($event: any, name: string){
    const file = $event.target.files[0];
    const imagRef = ref(this.storage, `experiencias/` + name);
    console.log(imagRef);
    console.log(name);
    uploadBytes(imagRef, file)
    .then(response => {this.getImages()})
    .catch(error => console.log(error));
  }

getImages() {
  const imagRef = ref(this.storage, 'experiencias');
    list (imagRef)
  .then( async response => {
        for(let item of response.items)//   image of response.images)
    { this.url = await getDownloadURL(item);
      console.log("la url es: "+ this.url);
    }
})
.catch(err => console.log(err));

}
  
}

