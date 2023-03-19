import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addrole',
  templateUrl: './addrole.component.html',
  styleUrls: ['./addrole.component.css']
})
export class AddroleComponent implements OnInit{
  toppings = new FormControl();

  toppingList = ['Date Of Birth', 'Email', 'One Time Password', 'Sequrity Question'];
  
  name="multi"
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  isLinear = false;
  constructor (private builder:FormBuilder){

  }
  ngOnInit() {
    
    
  }
  

  Roleregister=this.builder.group({
    basic:this.builder.group({
      firstname:this.builder.control("",Validators.required),
      lastname:this.builder.control("",Validators.required)

    }),
    contact:this.builder.group({
      email:this.builder.control("",Validators.required),
      phone:this.builder.control("",Validators.required),
      fax:this.builder.control("",Validators.required)

    }),
    address:this.builder.group({
      street:this.builder.control("",Validators.required),
      city:this.builder.control("",Validators.required),
      pin:this.builder.control("",Validators.required)

    })

  });
  

}
