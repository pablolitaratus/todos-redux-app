import { createReducer, on } from '@ngrx/store';
import * as actions from './filtro.actions';
// import { Todo } from './models/models.todo';

export const estadoInicial: actions.filtrosValidos = 'todos'

const _filtroReducer = createReducer(estadoInicial,
    on( actions.setFiltro, (state, { filtro }) => filtro ),
);

export function filtroReducer(state, action){
    return _filtroReducer( state, action );
}