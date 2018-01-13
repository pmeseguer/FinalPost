import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Post } from '../post';


@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsListComponent implements OnInit{

  @Input() posts: Post[];
  @Input() author;
  @Input() idC;

  controlador: boolean = true;
  controladorB: boolean = true;
  hora = Date.now();

  constructor(private _router: Router) {
    if (this.author){
      this.controlador= false;
      //console.log(this.author, 'abc')
    }
    
    ;
    
    
   }


 
  

  /*=========================================================================|
  | Red Path                                                                 |
  |==========================================================================|
  | Maneja el evento del componente PostPreviewComponent que indica la       |
  | selección del autor de un post y navega a la dirección correspondiente.  |
  | Recuerda que para hacer esto necesitas inyectar como dependencia el      |
  | Router de la app. La ruta a navegar es '/posts/users', pasando como      |
  | parámetro el identificador del autor.                                    |
  |=========================================================================*/

  ngOnInit() {
    //console.log(this.posts, 'lista');
    if (this.author){
      this.controlador= false;
      //console.log(this.author, 'llega id autor')
    }

    if (this.idC){
      this.controladorB= false;
      //console.log(this.idC, 'funciona de lujo');
    }
    
  }


  /*=========================================================================|
  | Green Path                                                               |
  |==========================================================================|
  | Maneja el evento del componente PostPreviewComponent que indica la       |
  | selección de un post y navega a la dirección correspondiente. Recuerda   |
  | que para hacer esto necesitas inyectar como dependencia el Router de la  |
  | app. La ruta a navegar es '/posts', pasando como parámetro el            |
  | identificador del post.                                                  |
  |=========================================================================*/
  seleccionarContacto(contacto):void{
    let idx = contacto.id;
    //console.log(idx);
    this._router.navigate(['/posts', idx ]);
  }
  

}
