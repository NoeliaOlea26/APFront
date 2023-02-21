import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EducacionService } from 'src/app/servicios/educacion.service';
//import { ImagesService } from 'src/app/servicios/images.service';
import { Educacion } from '../model/educacion.model';
import { getStorage, ref } from "firebase/storage";
import { ImageneduService} from 'src/app/servicios/imagenedu.service'

@Component({
  selector: 'app-editeduc',
  templateUrl: './editeduc.component.html',
  styleUrls: ['./editeduc.component.css']
})
export class EditeducComponent implements OnInit {

  educ: Educacion= null;

  constructor(private educacionS: EducacionService, private activatedRouter: ActivatedRoute,
    private router: Router , public imagen: ImageneduService)// , public imagen: ImageneduService , public imageS: ImagesService
     { }
  
    ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.findeduc(id).subscribe(data => {
      this.educ = data;
    }, err => {
      alert("Error al MODIFICAR educ");
      this.router.navigate(['']);
    }    )
  }
  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    //this.educ.logo = this.imageS.url;
    
    this.educ.logo = this.imagen.url;

    //console.log(this.educ);
    // this.educ.logo = this.imageService.url;
    this.educacionS.editEduc(id, this.educ).subscribe(
      data => {
       // console.log(this.exp);
        this.router.navigate(['']);
    }, err => {
      console.log(err);
      alert("Error al modificar educacion");
      this.router.navigate(['']);
    }); 
  }

  uploadImagen($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "educ" + id;
    console.log(name);
    //this.imagenes.uploadImage2($event, name);

    this.imagen.uploadImage2($event, name);
    console.log(name + "cargada");     
  }

  // uploadImage($event: any) {
  //   const id = this.activatedRouter.snapshot.params['id'];
  //   const name0 = "escuela" + id;
  //   //this.imageS.uploadImage($event, name0);

  //   const storage = getStorage();

  //   // Points to the root reference
  //   const storageRef = ref(storage);
    
  //   // Points to 'images'
  //   const imagesRef = ref(storageRef, 'imagesFire');
    
  //   // Points to 'images/space.jpg'
  //   // Note that you can use variables to create child values

  //   //const fileName = 'space.jpg';
  //   const spaceRef = ref(imagesRef, name0);
    
  //   // File path is 'images/space.jpg'
  //   const path = spaceRef.fullPath;
    
  //   // File name is 'space.jpg'
  //   const name1 = spaceRef.name;
    
  //   // Points to 'images'
  //   const imagesRefAgain = spaceRef.parent;

  // }

//   public uploadImage(event: any, name: string){
//     const file = $event.target.files[0];
//     const imagRef = ref(this.storage, 'image/' + name);
//     uploadBytes(imagRef, file)
//     .then(response => {this.getImages()})
//     .catch(error => console.log(error));
//   }

//   getImages() {
//     const imagRef = ref(this.storage, 'image');
//     list (imagRef)
//     .then( async response => {
//       for(let image of response.images) {
//         this.url = await getDownloadURL(image);
//         console.log("la url es: "+ this.url);
                
//   }
// })
// .catch(err => console.log(error));

// }

}