class TodoList {//store task in array
  constructor() {
    this.tasks = [];
  }

  add(task) {
    this.tasks.push(task);
    console.log(`Added: ${task}`);
  }

  remove(task) {
    this.tasks = this.tasks.filter(t => t !== task);
    console.log(` Removed: ${task}`);
  }

  list() {
    console.log("📋 Todo List:");
    this.tasks.forEach((t, i) => console.log(`${i + 1}. ${t}`));
  }
}

// Usage
const todos = new TodoList();
todos.add("Learn JavaScript");
todos.add("Build mini projects");
todos.list();
todos.remove("Learn JavaScript");
todos.list();
