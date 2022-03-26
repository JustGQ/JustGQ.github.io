document.addEventListener('DOMContentLoaded', function() {

	document.querySelector("#new-todo").onsubmit = function(){
		const li = document.createElement('li');

		let task_text = document.querySelector('#task').value;
		let task_priority = document.querySelector('#priority').value;
		let new_task_html = `
			<span> ${task_text} </span>
			<br>
			<span> This task is ${task_priority} </span>
			<button class="remove"> Remove To-Do Item </button>
			<button class="done"> Done with To-Do Item </button>
			<br>
			<br>
		`;

		li.innerHTML = new_task_html;

		document.querySelector("#todo_list").append(li);
		document.querySelector("#task").value = '';
		return false;

	}

	document.addEventListener('click', function(event) {
		element = event.target;
		if (element.className === 'remove') {
			element.parentElement.remove();
		}
		if (element.className === 'done') {
			element.parentElement.style.cssText = 'text-decoration:line-through';
		}
	})

})