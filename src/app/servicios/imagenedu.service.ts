import { Injectable } from '@angular/core';
//import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {Storage, ref, uploadBytes, list, getDownloadURL, getStorage} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageneduService {
  url: string ="";

  constructor(private storage: Storage) { }
    public uploadImage2($event: any, name: string){
    const file = $event.target.files[0];
    const imagRef = ref(this.storage, `educacion/` + name);
    console.log(imagRef);
    console.log(name);
    uploadBytes(imagRef, file)
    .then(response => {this.getImages()})
    .catch(error => console.log(error));

  }

getImages() {
  const imagRef = ref(this.storage, 'educacion');
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
