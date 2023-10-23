## Test Map Application

<img src="./public/Screen Shot 2023-10-23 at 11.32.06 PM.png">

This is an app employs the Esri Arcgis JS SDK to display NZ land parcel data on an interactive map. It is build on React-Typescript, and uses the Jest testing library as well as Redux.

## How to run, test, and build:

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Then the app is ready to be deployed!

## Achievements and Challenges
I'm pretty happy with how this one came out given the relatively short time spent on it. It works well and looks pretty, and in the end what more can you ask for?

I really enjoyed this first foray into the Arcgis SDK. There is so much you can do with it, and I feel like I am beging to understand the workflow and have whet the appetite to go deeper.

As awesome as this library is, the biggest challenges were getting it to play well with React and Jest. It took me quite a while to figure out how to mock all the modules just right so the Jest tests would run. Nonetheless, it was a good learning experience. 

There is of course plenty of room for improvement. To make this app production ready I would love to dive deeper into the data and the Arcgis SDK, to see what interesting insights and analysis could be extracted and visualised in the app. As the NZ parcel data set is also quite large, the performance of the app could be certainly be improved. I would love to explore various methods of doing so. 

Overall it was great fun. Hope you enjoy experimenting with it!
