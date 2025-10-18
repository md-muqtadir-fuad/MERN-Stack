from flask import Flask

app = Flask(__name__) #application instance
#WSGI
"""
Web
Server
Gateway
Interface
Application instance is an object of flask.

Route and View function: 
Association of URL and function called route.
url----> WSGI server route=/id ----> view function func for '/id'
url accessed by client > flask application needs to know what function needs to be run
for each url requested is called view function.

define a route in flask application by @app.route('/')
define  a view function as index()

how to run flask app:
1. use env variable
2. programatically

pass some parameters and get the result --> dynamic routing


flask application can be run on debug mode optionally

flask --help
flask run
"""
@app.route('/')
# clinet sent request --> slash means domain or ip only --> it calls index funtion and send back return function as response
def index():
    return "Hello World"
@app.route('/<name>')
def print_name(name):
    return "Hi, {}".format(name)

if __name__ == '__main__':
    app.run(debug = True)
