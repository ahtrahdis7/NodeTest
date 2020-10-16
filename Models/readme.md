## User

<pre>
name
picture
phone 
email
isTeacher
isStudent
isParent
</pre>

## Student DB
Should be verified by Admin First
<pre>
student: [ref]
roll_no ( 6 digit )
school
mentor/teacher
subjects [array]
class
analysis_report
</pre>



## Parent DB
Can register with valid student ID
<pre>

</pre>


## Teacher DB
To be Authenticated and Verified by Admin
<pre>

</pre>


## Subject

<pre>
picture
syllabus
evaluation
marks_distribution
statistical data [year wise. It , itself contains a JSON data]
</pre>
Statistical Data
<pre>
year
Enrolled
Pass
Fail
OverallPerformance
comments
teacher
section
class
</pre>

## Notice Board

<pre>
Type [Importance Level(3 diff types)]
Notice
byUser
</pre>

## Discussion Room

<pre>
Thread
byUser
</pre>

## Blog Post

<pre>
Title
Brief
Description
Conclusion
Quote
</pre>