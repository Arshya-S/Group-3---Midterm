### USER STORIES

1) As a user, I want to be able to see all my lists, because I want to review and edit them later.

2) As a user, I want to be able to make more lists, because I want to review and edit them later.

3) As a user, I want to be able to mark the event that is completed, because I have completed that event.

4) As a user, I want my list items to be categorized automatically, because that's the main feature.

5) As a user, I want to be able to edit the category of a list item, because of an error.

---------------
### USER SCENARIOS


1) Given that I'm logged in, when I click my lists, then I want to be able to view my lists.

2) Given that I'm logged in, when click "create new", then I'm given a form to create a new list.

3) Given that I'm logged in, when click "complete", then the event is marked as complete.

4) Given that I'm logged in, when inputted event, then the event is categorized.

5) Given that I'm logged in, once event is made, then category is changable.


Stretch: once all items are complete list is complete (moved to the bottom). -> add new table for completed and not completed ?

Stretch:  Given that I'm logged in, when I complete a list, then the list goes to a completed section.


----

### ROUTES  

- BROWSE  GET     /lists
- READ    GET     /lists/:id
- EDIT    PATCH   /lists/:id
- ADD     POST    /lists/:id
- DELETE  DELETE  /lists/:id


---

### WIREFRAMES 
(We have two interfaces: one for total user lists and one for within a list).

![Mock Style](https://github.com/Arshya-S/Group-3---Midterm/blob/master/planning/Screenshot%202023-06-30%20at%205.40.02%20PM.png?raw=true)

![Mock Style](https://github.com/Arshya-S/Group-3---Midterm/blob/master/planning/Screenshot%202023-06-30%20at%205.40.14%20PM.png?raw=true)

---

ERD

![Mock Style](https://github.com/Arshya-S/Group-3---Midterm/raw/master/planning/erd.png)








