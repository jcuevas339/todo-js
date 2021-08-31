import './styles.css';
import { Todo, TodoList } from './classes/index';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml);

todoList.todos[0].imprimirClase();
//const tarea = new Todo('Aprender Java Script');

//todoList.nuevoTodo(tarea);

//tarea.completado=true;

//console.log(todoList);

//crearTodoHtml(tarea);


//localStorage.setItem('mi-key', 'ABC123');
