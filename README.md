This project is a small demo to test react router to navigate to a page that loads in a modal.
e.g.
/users has link to /users/1
/posts has link to /users/1

Both sources (/users and /posts) should load /users/1 and the /users/1 page which loads as a modal 
should be indifferent to the source page and should act as if it is a modal that is triggered from the parent page.
The same for /posts/1 which can be loaded from /users and /posts