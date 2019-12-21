# technicaltest
First run 
```
npm install 
```
then:
As the server runs on Port 3000 ,

to run the app under windows change package.json start script to:
```
"start": "set PORT=3001 && react-scripts start"
```
And in Linux and Mac(possibly) to:
```
"start": "PORT=3001 react-scripts start"
```
Finally to run the project use the following command:
```
npm start
```
