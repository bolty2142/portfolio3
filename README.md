# portfolio3

This is the third revision to my portfolio, this app was created to showcase my skills and projects I have worked on.

## Getting Started

### Prerequisites

Must have [Node.js](https://nodejs.org/en/) version 8.4.0=> 


### Installing

Clone the repo

```
git clone https://github.com/bolty2142/portfolio3.git

```

Run 

```  yarn install  ```

Or 

``` npm install ```

## Development

Run

``` yarn startDev ```


This will kick off the backend and start a development server that will update the frontend based on your changes


## Running the tests

Tests are ran with jest, To start the tests navigate into the frontend and run

 ``` yarn test ```

 Or

 ```npm test```


 If you run into this error 

 ``` node[73550] (FSEvents.framework) FSEventStreamStart: register_with_server: ERROR: f2d_register_rpc() => (null) (-22) ```

 You will have to  ``` brew install watchman ``` or reinstall watchman



## Deployment

This app is just a static webpage, once pushed to the master branch will be built and then pushed to the AWS S3 bucket where it's hosted 



## Built With

* [React v16.0.0](https://reactjs.org/) - The web framework used
* [Redux](http://redux.js.org/) - State management
* [Material-UI](https://material-ui-next.com) - Styling
* [Jest](https://facebook.github.io/jest/) - Used to run tests



## Authors

* **Andrew Langford** - *inital work* - [GitHub Link](https://github.com/bolty2142)

See also the list of [contributors](https://github.com/bolty2142/portfolio3/graphs/contributors) who participated in this project
