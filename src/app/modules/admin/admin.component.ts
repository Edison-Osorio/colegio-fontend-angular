import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
user:any
  constructor(private router:Router) {}

  ngOnInit(): void {
    this.styleSidebar();
   const userJson:any =  localStorage.getItem('usuario')
   this.user  = JSON.parse(userJson);
  }

  logout(){
    localStorage.removeItem('usuario')
    this.router.navigate(['/'])
  }

  styleSidebar() {
    var el: any = document.getElementById('wrapper');
    var toggleButton: any = document.getElementById('menu-toggle');

    toggleButton.onclick = function () {
      el.classList.toggle('toggled');
    };
  }
}
