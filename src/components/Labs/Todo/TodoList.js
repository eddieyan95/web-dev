import TodoItem from "./TodoItem";
import todos from "./todos.js";
const TodoList = () => {
    return(
        <ul>
            {
                todos.map(todo => {
                    return(<TodoItem todo={todo}/>);
                })
            }
        </ul>
    );
}
export default TodoList;

/* .js is optional
reformat as JSON

don't need ` `

don't need $

use tag syntax instead
attribute as parameter
don't need join()

don't need ` `

*/
