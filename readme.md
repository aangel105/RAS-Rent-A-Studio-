# RAS (Rent A Studio)
RAS is an application that allows users to book a studio in NYC in a simple and effective way. At the same time, it allows studio owners to host and promote their studios in our application, which will increase traffic to their place. 

# Database Schema

.users
 -get all users from the database
 -a single user can have multiple studios that have multiple rooms
 

.studios
  -each studio can have multiple room 
  -each client will be able to book a studio and rooms

.rooms
 -host can add studios with multiple rooms
  
.operations_hours
 -shows the hour the studio is in operation
 -host can choose their hours

.bookings
 -save all the booking made by users, show it to host and users

.reviews
 -save all review received by host and users.

# Back-End 

./allusers
 -get all users from the database
 -users can have multiple studios

./studios
 -get all studios from the database
 -each studios can have multiple rooms

./rooms
 -get all rooms from the database
 -each rooms can have multiple reviews

./reviews
 -get all the reviews from the database

./operationhours
 -get the hours of operations for each studios

./bookings
 -get all the bookings history and show to the user and host

./studiosinfo 
 -get all studios information 

./studios/:id
 -get a single studio information

./studiosinfo/:userid
 -get studios by users

./rooms/:roomname
 -get single room 

./bookings/user/:userid
 -get boking by user 

./bookings/host/:hostid
 -get booking by host

./newbooking"
 -post new bookings to the database

./newstudio
 -create new studios by host

# Front-End

./hostprofile
 -render the host profile, accounts, reviews, bookings

./userprofile
 -render the user profile, accounts, reviews, bookings

./login
 -allow the user to login either users or host and see their profile

./contact
 -render a form to contact us 

./search
 -allow users to search for a studio in order to book it

./signup
 -render the signup page 

./login
 -render a login form where existing users or host can login to their profile
