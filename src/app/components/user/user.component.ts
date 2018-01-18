import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	name:string;
	age:number;
	email:string;
	address:Address;
	hobbies:string[];
	bla:any;
  posts:Post[];
  isEdit:Boolean = false;


  constructor(private dataService: DataService) { 
  	console.log('holi...');
  }

  ngOnInit() {
  	console.log('ngOnInit...')
  	this.name  = 'Chancho Paisa';
  	this.age = 25;
  	this.email = 'chancho@example.com'
  	this.address = {
  		street: 'Calle 15',
  		city: 'Medellin',
  		state: 'Antioquia'
  	}
  	this.hobbies = ['Leer', 'Jugar', 'Comer'];
  	this.bla = 1;

    this.dataService.getPosts().subscribe((posts) => {
     // console.log(posts);
     this.posts = posts;
    });
  }

  onClick(){
    this.name = "Caro Penagos";
    this.hobbies.push('Dormir');
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
     for(let i = 0; i < this.hobbies.length; i++){
       if(this.hobbies[i] == hobby){
         this.hobbies.splice(i, 1);
       }
     }
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

}


interface Address{
	street:string,
	city:string,
	state:string
}

interface Post{
  id: number,
  title:string,
  body:string,
  userId:number
}