import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from '../post';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.css']
})
export class PostPreviewComponent implements OnInit{

  constructor(private _router: Router){}

  @Input() post: Post;
  @Input() idC;

  caUno;
  caDos;
  caTres;
  caCuatro;
  caCinco;

  control: boolean = true;
  catA={
    "id": 1,
    "name": "Hipsters"
  };
  catB={
    "id": 2,
    "name": "Esto es serio"
  };
  catC={
    "id": 3,
    "name": "Tendencias"
  };
  catD={
    "id": 4,
    "name": "Postureo"
  }; 
  catE={
    "id": 5,
    "name": "Poor thing"
  };

  /*=========================================================================|
  | Red Path                                                                 |
  |==========================================================================|
  | Expón un atributo de salida con el decorador correspondiente. El tipo de |
  | este atributo debe permitir la emisión de eventos; la idea es enviar al  |
  | componente padre el usuario sobre el cuál se ha hecho clic. Y puesto que |
  | dicho clic se realiza en el template de este componente, necesitas,      |
  | además, un manejador para el mismo.                                      |
  |=========================================================================*/

  notificarAutor(id){
    this._router.navigate(['/posts/users', id ]);
    console.log(id);
  }


  /*=========================================================================|
  | Green Path                                                               |
  |==========================================================================|
  | Expón un atributo de salida con el decorador correspondiente. El tipo de |
  | este atributo debe permitir la emisión de eventos; la idea es enviar al  |
  | componente padre el post sobre el cuál se ha hecho clic. Y puesto que    |
  | dicho clic se realiza en el template de este componente, necesitas,      |
  | además, un manejador para el mismo.                                      |
  |=========================================================================*/

  @Output() emisionConstacto = new EventEmitter <string>();

  notificarConstacto(post):void{
    this.emisionConstacto.emit(post);
  }

  plainTextToHtml(text: string): string {
    return text ? `<p>${text.replace(/\n/gi, '</p><p>')}</p>` : '';
  }

  ngOnInit() {
    if(this.idC){
      this.control = false;
    }
    this.idC = parseInt(this.idC);
    if (this.post.categories.length == 1){
      this.caUno = this.post.categories[0];
      //console.log(typeof(this.caUno.id));
      //console.log(this.caUno.id);
      //console.log(typeof(this.idC));
      //console.log(this.idC);
      if (this.caUno.id === this.idC){
        this.control = true; 
      }
      
    }else if (this.post.categories.length == 2){
      //console.log('tiene 2')
      this.caUno = this.post.categories[0];
      this.caDos = this.post.categories[1];

      if (this.caUno.id === this.idC){
        this.control = true; 
      }
      if (this.caDos.id === this.idC){
        this.control = true; 
      }

    }else if (this.post.categories.length == 3){
      //console.log('tiene 3')
      this.caUno = this.post.categories[0];
      this.caDos = this.post.categories[1];
      this.caTres = this.post.categories[2];

      if (this.caUno.id === this.idC){
        this.control = true; 
      }
      if (this.caDos.id === this.idC){
        this.control = true; 
      }
      if (this.caTres.id === this.idC){
        this.control = true; 
      }

    }else if (this.post.categories.length == 4){
      //console.log('tiene 4')
      this.caUno = this.post.categories[0];
      this.caDos = this.post.categories[1];
      this.caTres = this.post.categories[2];
      this.caTres = this.post.categories[3];

      if (this.caUno.id === this.idC){
        this.control = true; 
      }
      if (this.caDos.id === this.idC){
        this.control = true; 
      }
      if (this.caTres.id === this.idC){
        this.control = true; 
      }
      if (this.caCuatro.id === this.idC){
        this.control = true; 
      }

    }else if (this.post.categories.length == 5){
      //console.log('tiene 5')
      this.caUno = this.post.categories[0];
      this.caDos = this.post.categories[1];
      this.caTres = this.post.categories[2];
      this.caTres = this.post.categories[3];
      this.caTres = this.post.categories[4];

      if (this.caUno.id === this.idC){
        this.control = true; 
      }
      if (this.caDos.id === this.idC){
        this.control = true; 
      }
      if (this.caTres.id === this.idC){
        this.control = true; 
      }
      if (this.caCuatro.id === this.idC){
        this.control = true; 
      }
      if (this.caCinco.id === this.idC){
        this.control = true; 
      }

    }else{
     // console.log('tiene 0')

    }
    
  }

}
