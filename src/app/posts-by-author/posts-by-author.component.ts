import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service'

import { NativeWindow } from '../window';
import { Post } from '../post';
import { User } from '../user';

@Component({
  templateUrl: './posts-by-author.component.html',
  styleUrls: ['./posts-by-author.component.css']
})
export class PostsByAuthorComponent /*implements OnInit*/ {

  posts: Post[];
  author: User;
  numA;
  autorNombre: string;
  upv: string;

  numeroAutor(numero): void{
    this.numA = numero;
  }

  
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _postService: PostService,
    @Inject(NativeWindow) private _window) {
      
     }

    

  ngOnInit(): void {
    this._activatedRoute.data.subscribe((data: { posts: Post[] }) => {
      this.posts = data.posts;
    this.author = data.posts[1].author;
      this._window.scrollTo(0, 0);
    });

    this._activatedRoute.params.subscribe(params=>{
      this.numA = params['userId'];
      this.author = params['userId'];
    });

    if (this.author == 1){
      this.autorNombre = "PymCoder";
    }else if(this.author == 2){
      this.autorNombre = "Booker DeWitt";
    }else if (this.author == 3){
      this.autorNombre = "Denny Crane";
    }else if (this.author == 4){
      this.autorNombre = "Hank Moody";
    }else if (this.author == 5){
      this.upv = "UPV NOTICIAS";
    }else{
      this.autorNombre = ""
    }



    
  }

}
