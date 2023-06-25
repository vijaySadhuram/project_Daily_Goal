# Daily Goal App using ReactJS with Local Storage, React Hooks (useState and useeffect)

### Live Demo

https://watch.screencastify.com/v/e1Ff8wOaZ7qjlmn6XH2x


This project aims to create a Task Management application using ReactJS, incorporating concepts 

such as local storage, React Hooks (specifically useState and useEffect), and validation.

### Key Features:

**Task Creation**: 
Users can add new tasks to the application by providing a task description. The entered task will 

be validated to ensure it is not empty or contains only whitespace characters.

**Task Deletion:**
Users can delete existing tasks from the application. Each task will have a 

corresponding delete button, allowing users to remove tasks from the list.

Local Storage:  The application will utilize the browser's local storage to persist the task list 

even after refreshing or closing the browser window. This ensures that tasks remain intact and can 

be accessed later.

React Hooks (useState and useEffect): The useState hook will be used to manage the task list state 

and update it whenever a new task is added or an existing task is deleted. The useEffect hook will 

be utilized to synchronize the task list with the local storage, ensuring that any modifications 

are reflected consistently.

**Validation:**
 
 The application will implement validation to ensure that task descriptions meet specific criteria. 
 
 It will prevent users from adding empty or whitespace-only tasks. Proper error messages or visual 
 
 cues will be displayed to guide the user in providing valid task descriptions.
