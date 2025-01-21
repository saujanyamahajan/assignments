const Todo = require('../hard/todo-list');

describe('Todo', () => {
    let todoList;

    beforeEach(() => {
        todoList = new Todo();
    });

    test('add and getAll', () => {
        todoList.add('Task 1');
        todoList.add('Task 2');
        todoList.add('Task 3');

        expect(todoList.getAll()).toEqual(['Task 1', 'Task 2', 'Task 3']);
    });

    test('remove', () => {
        todoList.add('Task 1');
        todoList.add('Task 2');
        todoList.add('Task 3');

        todoList.remove(1);
        expect(todoList.getAll()).toEqual(['Task 1', 'Task 3']);
    });

    test('remove with invalid index', () => {
        todoList.add('Task 1');
        todoList.add('Task 2');

        expect(() => todoList.remove(5)).toThrow('Invalid index');
    });

    test('update', () => {
        todoList.add('Task 1');
        todoList.add('Task 2');

        todoList.update(1, 'Updated Task 2');
        expect(todoList.get(1)).toBe('Updated Task 2');
    });

    test('update with invalid index', () => {
        todoList.add('Task 1');
        todoList.add('Task 2');

        expect(() => todoList.update(3, 'Invalid Task')).toThrow('Invalid index');
    });

    test('get', () => {
        todoList.add('Task 1');
        todoList.add('Task 2');

        expect(todoList.get(0)).toBe('Task 1');
        expect(todoList.get(1)).toBe('Task 2');
    });

    test('get with invalid index', () => {
        todoList.add('Task 1');
        expect(() => todoList.get(5)).toThrow('Invalid index');
    });

    test('clear', () => {
        todoList.add('Task 1');
        todoList.add('Task 2');

        todoList.clear();
        expect(todoList.getAll()).toEqual([]);
    });

    test('add duplicate tasks', () => {
        todoList.add('Task 1');
        todoList.add('Task 1');

        expect(todoList.getAll()).toEqual(['Task 1', 'Task 1']);
    });
});
