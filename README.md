# Project : Boba

_Helpful modules for DND all held within a cute lil' dashboard_

**Note : Do whatever tf you think is good for the project :3**



## Developer's Guide

### Good practices

- Check the git channel on Discord to see recent changes to the repo
- Always pull before starting your work
- Commit frequently

### Taking up new work

1. Check the [issues page](https://github.com/AmandaBoo/ProjectBoba/issues) to find new issues to work on
2. Please assign yourself to any issues you would like to work on
3. Move the story to 'In Progress' in its respective Project Board

- If you don't know what to work on, feel free to just ping the Discord

### Committing Work

1. Pull first (if merge conflicts occur - stash your work, pull again, then unstash)

2. Push your work and use the following examples to structure your commit message

   - Leave the issue open -> `` git commit -m "#[Issue number] : [Brief description of what you accomplished]"``

   - Close the issue -> ``git commit -m "close #[Issue number] : [Brief description of what you accomplished]"``

   - Examples : 
     - ``git commit -m "#11 : Added save functionality"``
     - ``git commit -m "close #11 : Added save functionality"``



## Project Boards

- [Project Board Link](https://github.com/AmandaBoo/ProjectBoba/projects)
- Each module will have its own Project Board with the following structure  [Backlog | To Do | In Progress | Done]
  - Backlog : New ideas that may or may not be converted into issues 
  - To Do : Issues to be taken up 
  - In Progress : Issues that are currently being worked 
  - Done : Issues that have been completed
- *Feel free to toss ideas into the backlog as you come up with them* 



## Issues

*I prefer the word 'stories' but whatever*

### Opening up an issue

1. Navigate to the [Project Board](https://github.com/AmandaBoo/ProjectBoba/projects) and find the backlog card that you want to convert into an issue
2. Convert it into an issue and move to the 'To Do' column
3. Navigate to the [Issues page](https://github.com/AmandaBoo/ProjectBoba/issues) and open up the issue you just converted
4. Assign a developer to the issue if this is known ahead of time
5. Add in the following labels :
   - Project label (same name as the Project Board it came from)
   - Type of issue (bug, feature, etc)
6. Use the following template when writing descriptions

```
Issue : Description of the problem 
Acceptance Criteria : 
- Short description of features that need to be implemented
```

```
**Exm using the template**
Issue : I want to be able to delete characters in the table
Acceptance Criteria : 
- A button labeled "Delete" is seen on the right side of each row in the table
- When clicked, the button remoes the row from the table
```

### Helpful links
How to deploy a React Project to Github Pages : https://create-react-app.dev/docs/deployment/#github-pages
Run -> ```npm install --save-dev @babel/core @babel/preset-env``` if you get the babel not installed error 



