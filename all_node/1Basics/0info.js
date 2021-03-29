
Nodejs or Node is an open source cross platform runtime env for executing js code 
outside browser.

We use node to build backend services and api's.

It helps to create highly scalable & superfast web/mobile app which interact with the server.

Other backend libraries are: asp.net/rails/django.

Node helps in prototyping and agile development. 

Companies using Nodejs: Paypal. 

----------HISTORY-----------

Earlier only browsers had a js engine which converted js code to machine code.

Browser provides a runtime environment and DOM with which we execute js code.

Eg. for js engines - 
Internet explorer : chakra engine.
Mozilla - spider monkey engine.
Chrome - v8 engine.

(Note: js code may behave differently in different browsers due to their engines)

In 2009 Ryan Dahl thought that it would be better to 
run js code outside browser and hence created Nodejs.

He took chrome v8 engine and embedded it in C++ program and 
called that program as node.exe. He later added additional functionalities like environment objects.
We could create server or read file system via Node which is not possible through a browser. 

Nodejs is = v8 engine + additional facilities 

Node is not a programming language or a framework
like asp.net/ django...... Its a runtime env...

--------------HOW IT WORKS? -------------- 

Node is non blocking / asynchronus which means it has single thread
which handles multiple requests.

Blocking/ synchronous - we have to wait for previous request to complete, to execute
our next query. But Node is non-blocking! 

For synchronous system we may need multiple threads to handle requests.
For large number of concurrent clients you may run out of threads which is a problem.
Asp.net is synchronus but it can be made asynchronous ~ after putting in some extra work!

Node basically has an event queue and it monitors it and processes it.
Node is good for building i/o intensive apps and is scalable.

Though Node is not good for cpu intensive tasks like video encoding.

--------------HOW WEB WORKS?----------------

you type your query on your browser, which reaches out to domain name servers , 
so basically the browser sends the request with the ip address to the server.

Now if the backend of server is using Nodejs then, basically node spins up the server
and is able to handle the incoming request. The backend could be 
Node/Asp.net/Django etc.

The server sends back the response via json/xml to client which is then parsed.

PARSE: RENDERING STREAM OF DATA (usually text) INTO STRUCTURED DATA.

The response may be equipped with headers for giving the meta data about our response.

Now the req and res follows a protocol or a standardised way these protocols/rules are
defined by http ( hyper text transfer protocol) ~ a  protocol for transfering data 
which is understood by browser and server.

Through http we define how a valid res / req should look like.
http ~launches server + encryption = https ~launches ssl server.

------------------NODEJS PROGRAM LIFECYCLE----------------------

Our core node application is managed by the Event Loop. 

When we run our server, the loop keeps running until event listeners are registered 
like server.listen.

Since Node is single threaded. 
with the concept of event loop it continues running and respond to multiple req.

Also note: process.exit() would quit listener. 
----------------------------------

