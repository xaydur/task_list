import { Component, OnInit } from '@angular/core';
import { UIService } from '../../service/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Mi lista de tareas';

  constructor() { }

  ngOnInit(): void {
  } 

  toggleAddTask(){
    console.log("se ejecuta toggle add task!!");
  }

}
