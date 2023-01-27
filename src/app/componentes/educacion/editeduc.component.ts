import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { Educacion } from '../model/educacion.model';

@Component({
  selector: 'app-editeduc',
  templateUrl: './editeduc.component.html',
  styleUrls: ['./editeduc.component.css']
})
export class EditeducComponent implements OnInit {

  educ: Educacion= null;

  constructor(private educacionS: EducacionService, private activatedRouter: ActivatedRoute,
    private router: Router) { }
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
    console.log(this.educ);
    // this.educ.logo = this.imageService.url;
    this.educacionS.editEduc(id, this.educ).subscribe(
      data => {
       // console.log(this.exp);
        this.router.navigate(['']);
    }, err => {
      console.log(err);
      alert("Error al modificar educacion");
      this.router.navigate(['']);
    }    );  }

//   uploadImage($event: any) {
//     const id = this.activatedRouter.snapshot.params['id'];
//     const name = "foto_perfil" + id;
//     this.imageService.uploadImage($event, name);
//   }

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