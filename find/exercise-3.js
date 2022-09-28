/*
Exercise 3: Finding a blog post using an ID

This exercise is similar to the last. We are going to find
a person using the '.find()' array method, however we will
need to check two separate values this time.

This time round there is a much larger set of data that
is over 1000 lines of code. You can have a quick look at the file,
'exercise-3-data.js', which is in the same directory as this file.

You will need to find a todo that has the following properties:
  userId: 3,
  id: 43,

*/
import { todos } from './exercise-3-data.js';

const foundTodo = todos.find ((currentUserId, currentId) => {
  if (currentUserId.userId === 3) {
    return true;
  } 
  else if (currentId.id === 43){
    return true;
  }
}); 

console.log('Found todo: ', foundTodo);

// Returns: 
// Found todo:  
// {userId: 3, 
// id: 41, title: 'aliquid amet impedit consequatur aspernatur placeat eaque fugiat suscipit', completed: false}

