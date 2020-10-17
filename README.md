# Guard

Guard is an application for coordinating someone to wait in the hospital lobby for you while you are undergoing a medical procedure.

## Build instructions

1. Verify that you have downloaded and installed Docker, which can be found [here](https://www.docker.com/) 
2. Once Docker has been downloaded and installed, execute the following command from the server folder to build it: docker build -t guard-server .
3. Execute the following command from the same folder to run it: docker run -d -p 8080:80 --name guard-server guard-server
4. Once the server is running, execute the following command from the client folder to build it: docker build --rm -t guard-client:latest .
5. Execute the following command from the same folder to run it: docker run --rm -d -p 90:80/tcp --name guard-client guard-client:latest

## Data store Information

Server: joshly.com
Database: guard
User: sa
Pass: (contact me on slack)
Port: (contact me on slack)
