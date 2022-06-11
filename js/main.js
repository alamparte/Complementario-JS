class List{
    constructor(day, time, task){
        this.day = day;
        this.time = time;
        this.task = task;
    }
}
const toDo = [];

debugger
toDo.push(new List (prompt("Day"), prompt("Time"), prompt("Task")));
toDo.push(new List (prompt("Day"), prompt("Time"), prompt("Task")));
toDo.push(new List (prompt("Day"), prompt("Time"), prompt("Task")));


console.log(toDo);

for (const tasks of toDo) {
    alert(`Sus tareas guardadas a realizar son:\nDate: ${tasks.day}.\nTask: ${tasks.time}\nTime: ${tasks.task}\n\nDate: ${tasks.day}.\nTask: ${tasks.time}\nTime: ${tasks.task}\n\nDate: ${tasks.day}.\nTask: ${tasks.time}\nTime: ${tasks.task}`);
}