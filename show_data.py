import cgi

data = cgi.FieldStorage()
print(data.getfirst('wonderful_data'))
cgi.test()