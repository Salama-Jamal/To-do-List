import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import { getDatabase,
                ref, 
                push} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-database.js";



const firebaseConfig = {
databaseURL: "https://todo-list-ef861-default-rtdb.firebaseio.com/"
}

const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const tasksRef = ref(database, 'tasks')



const newTaskInput = document.getElementById('new-task')
const addCompletedButton = document.getElementById('add-completed')
const taskList = document.createElement('ul')




addCompletedButton.addEventListener("click", function() {
    push(tasksRef, newTaskInput.value )
    newTaskInput.value = ""
})