// console.log('Connected');


var todos = [];
var input = prompt('what do you want to do?');
while(input !== 'quit'){
	if (input === 'new') {
		addTodo();
	}else if (input === 'list') {
		listTodo();
	}else if (input === 'delete') {
		deleteTodo();
	}
	input = prompt('What do you want to do?');
}
console.log("ok you're now exit")



function addTodo(){
	
	var newtodo = prompt('Enter todo');
	todos.push(newtodo);
	console.log('Added todo');	
}

function listTodo(){
	console.log('********');
	todos.forEach(function(todo,i)
	{
		console.log(i+ ':' + todo);
	});
	console.log('********')
}

function deleteTodo(){
	var index = prompt('which index you want to delete?');
	todos.splice(index,1); //splice()
	console.log("Deleted todo")
}

