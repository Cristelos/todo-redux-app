import { createReducer, on } from '@ngrx/store';
import { borrar, crear, editar, limpiarCompletados, toggle, toggleAll } from './todo.actions';
import { Todo } from './models/todo.model';

export const estadoInicial: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Vencer a Thanos'),
  new Todo('Comprar traje de Iron Man'),
  new Todo('Robar escudo del Capitán América'),
];

export const todoReducer = createReducer(
  estadoInicial,
  on(crear, (state, { texto }) => [...state, new Todo(texto)]),

  on(borrar, (state, { id }) => state.filter( todo =>  todo.id !== id ) ),

  on(limpiarCompletados, (state) => state.filter( todo => !todo.completado) ),

  on(toggle, (state, { id }) => {

    return state.map(todo => {

      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        }
      } else {
        return todo;
      }

    });
    
  }),

  on(toggleAll, (state, { completado }) => {

    return state.map(todo => {
        return {
          ...todo,
          completado: completado
        }
    });
    
  }),

  on(editar, (state, { id, texto }) => {

    return state.map(todo => {

      if (todo.id === id) {
        return {
          ...todo,
          texto: texto
        }
      } else {
        return todo;
      }

    });
    
  }),
);