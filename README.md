# Student App list 
### Carlo Leiva			
### COP 4808 Full stack web development
### 3/06/23				
### Spring 2023

Description: The student list app enables the creation, addition, updating, and deletion of student records. Its backend functionality relies on POST, PUT, GET, and DELETE requests, while the front end utilizes HTML textboxes, tables, and buttons, as well as a Bootstrap navigation bar to facilitate navigation across the different pages of the application.

- GET: display a single student by ID - displayStudent.html
Get single student record page using GET request
 
 <img width="381" alt="image" src="https://user-images.githubusercontent.com/87499194/223898358-19b981db-c2a1-4ee6-b428-66509abc36c4.png">


http://localhost:5678/displayStudent.html  --> works : this gets a single student
Using a type text box with an id named “recordID” to help identify the student the user is trying to find.

<img width="414" alt="image" src="https://user-images.githubusercontent.com/87499194/223898366-2064e724-41fa-498f-9ad8-b6772c6f1b6f.png">

Using java script and ajax to get the “get” request we will retrieve the students information .This is done by pasting the “recordID” given by the user on the webpage with the url of  “http://localhost:5678/students/”  . “RecordID” will be passed at the end along with a div for messages as show bellow.

<img width="358" alt="image" src="https://user-images.githubusercontent.com/87499194/223898532-d59cc7e8-3fd1-45a8-9641-8aa4bf316cd7.png">
 
Since response is receiving data in JSON format thus convert it to JavaScript using parse so it could successfully print the student information the user wants to find. To make a table insert a string with the necessary html code to build a table then pass it to the div with the id=mydiv using “innerHTML”. This is shown bellow 

<img width="521" alt="image" src="https://user-images.githubusercontent.com/87499194/223898501-1f85766e-eeda-4184-8e83-f796f462441c.png">

if success it will do all the thing above ;however, if not then it will produce an error.
 

- GET: list all students - listStudents.html 
Gets all students in the student directory using the GET request.

<img width="271" alt="image" src="https://user-images.githubusercontent.com/87499194/223898750-a77b3c96-b949-47ba-9c7f-be9b77774590.png">


http://localhost:5678/getStudent.html  --> works : this gets all student in the list.
for the html aspect “onload” was used in body to show the student list immediately along with a div for messages.

<img width="468" alt="image" src="https://user-images.githubusercontent.com/87499194/223898918-d566aec5-4c4b-4f82-878c-bc6b38f353eb.png">

On the script part of the html shown bellow there is a text variable that hold the header of the table as well as creating the table itself.
 
 <img width="476" alt="image" src="https://user-images.githubusercontent.com/87499194/223898965-ca7df521-7609-4cb6-83c0-bfdb49b5f6c8.png">

 
Using a for loop to go thought each of the students which are in a JSON parse format thus allows to display each element of each students. Using the html table format add to text string along with the necessary student element in the required row. Once looping is done the variable that holds all the elements and correct html table format text is then displayed to “mydiv” using innerHTML.
 
 <img width="508" alt="image" src="https://user-images.githubusercontent.com/87499194/223899003-47259e43-c5da-4670-844a-88824d075a3c.png">

 
if success it will do all the thing above ;however, if not then it will produce an error.
 
 <img width="246" alt="image" src="https://user-images.githubusercontent.com/87499194/223899032-0c7c9e30-722a-4a45-bb51-f31241565835.png">



- POST: create a new student - addStudent.html
This simply adds student using a post request similar to using post man which sends a JSON file as post request.

<img width="184" alt="image" src="https://user-images.githubusercontent.com/87499194/223899055-0b08347f-5518-4bb1-af51-065335277f49.png">
 
http://localhost:5678/addStudent.html  --> works :adds a student with given attributes.
For the HTML aspect there will be 4 type text boxes which is needed for the post request to work. Those 4 are First_name,Last_name,gpa, and enrolled along with a div for messages as shown bellow.
 
<img width="468" alt="image" src="https://user-images.githubusercontent.com/87499194/223899294-c1a088fa-79df-44ef-af71-970f01f3167e.png">

 
In the script (javaScript) jquery is used to grab the necessary attributes to make the post request to work in ajax as shown bellow
 
<img width="468" alt="image" src="https://user-images.githubusercontent.com/87499194/223899198-89bd9ec4-b6e3-4b89-8959-1668935c720f.png">
 
 
If successful it will do all the thing above ;however, if not then it will produce an error.
 
 <img width="468" alt="image" src="https://user-images.githubusercontent.com/87499194/223899327-dc7b84e0-8b77-4fd6-add9-73ec9d9db7f4.png">


- DELETE: delete a student by ID - deleteStudent.html
Simply deletes student with the similar record id given by the user of the app from the student directory.
 
 <img width="310" alt="image" src="https://user-images.githubusercontent.com/87499194/223899346-fed0adf4-682e-4514-8925-985044f402fb.png">

 

http://localhost:5678/deleteStudent.html  --> works :deletes student
for the HTML aspect it has a header saying Delete student.A type text box is done so the user can enter the student ID so they can delete that type of student along with a dive to display messages. The type in text box is done so delete request works properly. Shown bellow 

<img width="468" alt="image" src="https://user-images.githubusercontent.com/87499194/223899375-a9b3c35a-6d21-4249-8828-69f96eed569e.png">

for the HTML aspect it has a header saying Delete student.A type text box is done so the user can enter the student ID so they can delete that type of student along with a dive to display messages. The type in text box is done so delete request works properly. Shown bellow 
 
In the script (javaScript)  the record is concatenated with the URL link variable in ajax so delete request works properly as shown bellow. If successful it will do all the thing above ;however, if not then it will produce an error “cannot delete student”.
 
 <img width="468" alt="image" src="https://user-images.githubusercontent.com/87499194/223899431-5b5ffbd1-8b62-4b77-aa84-b82126864ebd.png">


- PUT: update a student by ID - updateStudent.html 
Simply updates students record.

<img width="210" alt="image" src="https://user-images.githubusercontent.com/87499194/223899456-47fd168f-2642-4e7f-bdca-83f7a0f74405.png">

 
http://localhost:5678/updateStudent.html  --> works :updates student records
For the HTML aspect there will be 5 type text boxes which is needed for the put request to work and a button so the function “updateStudent()” runs when pressed. Those 5 are “recordID”, “First_name” ,”Last_name”, “gpa”, and enrolled along with a div for messages as shown bellow.

<img width="468" alt="image" src="https://user-images.githubusercontent.com/87499194/223899483-5256b732-15e5-459a-a1cb-cec30d25f04e.png">

 
In the script (javaScript)  the “recordID” is concatenated with the URL link variable in ajax so PUT request works properly as shown bellow. If successful it will do all the thing above ;however, if not then it will produce an error “cannot be updated”.
 
<img width="485" alt="image" src="https://user-images.githubusercontent.com/87499194/223899510-1b78c4f9-b934-4db3-989e-dd0e893de5e1.png">



-BOOT STRAP
Use a navigation feature that boot strap has to make the app visually pleasing.
 
 <img width="266" alt="image" src="https://user-images.githubusercontent.com/87499194/223899530-a315dd45-0a8a-48c1-b258-7d2fcc5c0565.png">


To utilize boot strap a library is needed thus past the links in the header file for each of the html files.

<img width="468" alt="image" src="https://user-images.githubusercontent.com/87499194/223899547-5c8b270a-df3e-412d-a269-a069ec80d5eb.png">

 
Add boot strap navigation to each html file so they each have a navigation. 

<img width="426" alt="image" src="https://user-images.githubusercontent.com/87499194/223899572-a92aa1e1-4087-432c-a633-08ecb423a9b3.png">

 
Also active is corresponding with the correct page . For example if page is on the home page then the active should be on the HOME button as shown bellow.  

<img width="426" alt="image" src="https://user-images.githubusercontent.com/87499194/223899597-55aed2b7-6f41-4a13-98d6-51c4c3c20d82.png">


If done properly it should look like the pages bellow which are also in the github if you need to test them.
       
 <img width="623" alt="image" src="https://user-images.githubusercontent.com/87499194/223899684-aabd4fe2-dcbb-412c-b4e4-0207398f1bab.png">

