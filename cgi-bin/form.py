#!C:/Program Files (x86)/Python36-32/python.exe



# Import modules for CGI handling
import cgi, cgitb

# Create instance of FieldStorage
form = cgi.FieldStorage()

# Get data from fields
if form.getvalue('textcontent'):
   text_content = form.getvalue('textcontent')
else:
   text_content = "Not entered"

print("Content-type:text/html\r\n\r\n")
print("<head>")
print("<title>Text Area - Fifth CGI Program</title>")
print( "</head>")
print ("<body>")
print ("<h2> Entered Text Content is %s</h2>" % text_content)
print ("</body>")

f = open("file1.txt","w")
f.write(text_content)
f.close()
