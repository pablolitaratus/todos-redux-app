import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from './models/models.todo';

export const estadoInicial: Todo[] = [
    new Todo('Salvar al mundo'),
    new Todo('Vencer a Thanos'),
    new Todo('Comprar trabje de Ironan'),
    new Todo('Robar escudo del Capitán américa'),
];

const _todoReducer = createReducer(estadoInicial,
    on( actions.crear, (state, { texto }) => [...state, new Todo( texto ) ]),
    on( actions.borrar, (state, { id }) => state.filter( todo => todo.id !== id )),
    on( actions.limpiarCompletados, state => state.filter( todo => !todo.completado)),
    on( actions.toggleAll, (state, { completadoAll }) => {
        return state.map( todo => {
            return {
                ...todo,
                completado: completadoAll 
            }
        })
    }),
    on( actions.toggle, (state, { id }) => {
        return state.map( todo => {
            if( todo.id === id ){
                 return {
                ...todo,
                completado: !todo.completado
            }
            }else{
                return todo;    
            }      
        })
    }),
    on( actions.editar, ( state, { id, texto } ) => {
        return state.map( todo => {
            if( todo.id === id ){
                 return {
                ...todo,
                texto: texto
            }
            }else{
                return todo;    
            }      
        })
    }),
);

export function todoReducer(state, action){
    return _todoReducer( state, action );
}

// export function contadorReducer( state: number = 10, action: Action){

//     switch ( action.type ) {

//         case íncrementar.type:
//             return state += 1;

//         case decrementar.type:
//             return state -= 1;
    
//         default:
//             return state;
//     }

// }