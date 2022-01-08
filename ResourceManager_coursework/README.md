### Tables in DB

DB Name : resourceManager

DB Type : Postgresql DB

* Departments (<u>deptId</u> : String, deptName : String)

* Semesters (<u>semId</u> : integer, <u>*deptId*</u> : String, semName : String)

* Resources (<u>resId</u> : String, <u>*semId*</u> : integer, resLink : String, description: String)

* Notices (<u>noticeId</u> : String, <u>*deptId*</u> : String, noticeLink : String, description : String)



### Table Description

* Departments : Will be used to store all unique departments, this is done to offer expandability.

* Semesters : WIll contain different semesters associated with a particular department.

* Resources : Will contain links for all the e-resources associated with each semesters.

* Notices : Will contain links for all the circulars / notices that are department specific.


# ResourceManager
