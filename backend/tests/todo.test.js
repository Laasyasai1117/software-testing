const { addTodo, deleteTodo } = require("../src/todo");

describe("Todo Functions - Unit Tests", () => {
    let todos;

    beforeEach(() => {
        todos = []; 
    });

    test("should add a new task", () => {
        const newTodo = { id: 101, text: "Complete CI/CD workflow setup" };
        todos = addTodo(todos, newTodo);
        
        expect(todos).toHaveLength(1);
        expect(todos[0]).toEqual(newTodo);
    });

    test("should remove a task by ID", () => {
        const todo1 = { id: 202, text: "Read about GitHub Actions" };
        const todo2 = { id: 303, text: "Write integration tests for API" };
        todos = [todo1, todo2];

        todos = deleteTodo(todos, 202);

        expect(todos).toHaveLength(1);
        expect(todos).not.toContain(todo1);
    });

});
