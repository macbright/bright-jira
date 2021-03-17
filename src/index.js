const todoObjectList = [];



class Todo_Class {
    constructor(item){
        this.ulElement =item;
    } 
	

    add() {
        const todoInput = document.querySelector("#myInput").value;
        if (todoInput == "") {
            alert("You did not enter any item!") 
						console.log(todoObjectList)
        } else {
            const todoObject = {
                id : todoObjectList.length,
                todoText : todoInput,
                isDone : false,
            }

        todoObjectList.unshift(todoObject);
        this.display();
				console.log("GREAT")
        document.querySelector("#myInput").value = '';

        }
    }

    done_undone(x) {
        const selectedTodoIndex = todoObjectList.findIndex((item)=> item.id == x);
        console.log(todoObjectList[selectedTodoIndex].isDone);
        todoObjectList[selectedTodoIndex].isDone == false ? todoObjectList[selectedTodoIndex].isDone = true : todoObjectList[selectedTodoIndex].isDone = false;
        this.display();
    }

    deleteElement(z) {
        const selectedDelIndex = todoObjectList.findIndex((item)=> item.id == z);

        todoObjectList.splice(selectedDelIndex,1);

        this.display();
    }

		tasksCount(){
			const completedTasks = todoObjectList.filter(task => task.isDone === true);
			const unCompletedTasks = todoObjectList.filter(task => task.isDone === false);
			const totalTasks = todoObjectList.length;
			const  completedTasksCount = completedTasks.length
			const  unCompletedTasksCount = unCompletedTasks.length
			const tasks = document.querySelector("#tasksCount")
			const doneTasks = document.querySelector("#completedTasksCount")
			const undoneTasks = document.querySelector("#unCompletedTasksCount")
			tasks.innerHTML = totalTasks
			doneTasks.innerHTML = completedTasksCount
			undoneTasks.innerHTML = unCompletedTasksCount
		}



    display() {
        this.ulElement.innerHTML = "";
				this.tasksCount()

        todoObjectList.forEach((object_item) => {

            const liElement = document.createElement("li");
            const delBtn = document.createElement("i");
						const checkbox = document.createElement('input');
						checkbox.type = "checkbox";
						checkbox.name = "name";


            liElement.innerText = object_item.todoText;
            liElement.setAttribute("data-id", object_item.id);

            delBtn.setAttribute("data-id", object_item.id);
            delBtn.classList.add("far", "fa-trash-alt");
						checkbox.classList.add("checkbox");

            liElement.appendChild(delBtn);
						liElement.appendChild(checkbox);
            
            delBtn.addEventListener("click", function(e) {
                const deleteId = e.target.getAttribute("data-id");
                myTodoList.deleteElement(deleteId);
            })

						checkbox.addEventListener("click", function(e) {
                const selectedId = liElement.getAttribute("data-id");

                myTodoList.done_undone(selectedId);
            })
            

            if (object_item.isDone) {
                liElement.classList.add("checked");
								checkbox.checked = true
            }

            this.ulElement.appendChild(liElement);
        })
    }
} 




////-----MAIN PROGRAM------------
const listSection = document.querySelector("#myUL");

myTodoList = new Todo_Class(listSection);
myTodoList.tasksCount()


document.querySelector(".addBtn").addEventListener("click", function() {
    myTodoList.add()
})

document.querySelector("#myInput").addEventListener("keydown", function(e) {
    if (e.keyCode == 13) {
        myTodoList.add()
    }
})