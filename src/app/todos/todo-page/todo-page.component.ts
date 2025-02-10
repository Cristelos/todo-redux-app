import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  standalone: false,

  templateUrl: './todo-page.component.html',
  styles: ``
})
export class TodoPageComponent {

  completado: boolean = false;

  constructor(
    private store: Store<AppState>
  ) { }


  toggleAll() {
    this.completado = !this.completado;

    this.store.dispatch(actions.toggleAll({ completado: this.completado }));

  }

}
