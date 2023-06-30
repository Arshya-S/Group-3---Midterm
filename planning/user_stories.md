USER STORIES

As a ______, I want to ______, because ______.
eg. As a user, I want to be able to save posts, because I want to review them later.

1) As a user, I want to be able to see all my lists, because I want to review and edit them later.

2) As a user, I want to be able to make more lists, because I want to review and edit them later.

3) As a user, I want to be able to mark the event that is completed, because I have completed that event.

4) As a user, I want my list items to be categorized automatically, because that's the main feature.

5) As a user, I want to be able to edit the category of a list item, because of an error.

---------------
USER SCENARIOS
A user scenario is a syntactic alternative to user stories
They have the form: Given _____, when ______, then ______.


 1) Given that I'm logged in, when I click my lists, then I want to be able to view my lists.

 2) Given that I'm logged in, when click "create new", then I'm given a form to create a new list.
 
 3) Given that I'm logged in, when click "complete", then the event is marked as complete.

 4) Given that I'm logged in, when inputted event, then the event is categorized.

 5) Given that I'm logged in, once event is made, then category is changable.

----------------

Stretch: once all items are complete list is complete (moved to the bottom). -> add new table for completed and not completed ?

Stretch:  Given that I'm logged in, when I complete a list, then the list goes to a completed section.


---------------

ROUTES  

- BROWSE  GET     /lists
- READ    GET     /lists/:id
- EDIT    PATCH   /lists/:id
- ADD     POST    /lists
- DELETE  DELETE  /lists/:id






