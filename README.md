# Resume

This repository holds the HTML and Javascript for Mark Abbott's resume held at http://www.msabbott.co.uk

# Technology Used
The site is based around basic HTML pages - namely index.html and tests.html. 

CSS content is generated using SASS, from the file resume.scss using the command
`sass resume.scss resume.css`

# Development & Testing
Development and testing can be carried out using Docker to run a small web server container.

The file docker-compose.yml will create a basic web server instance in the current directory, and can be 
run by using the command
`docker-compose up`
