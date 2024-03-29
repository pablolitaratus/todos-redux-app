import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../todo.actions'

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  completado; boolean = false;

  constructor( private store: Store) { }

  ngOnInit(): void {
  }

  toogleAll(){
    this.completado = !this.completado;
    this.store.dispatch( actions.toggleAll( { completadoAll : this.completado }))
  }

}
