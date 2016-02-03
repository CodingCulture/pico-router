//Import React and ReactDOM
import React from 'react';
import ReactDOM from  'react-dom';

//Import the router you created
import GrandRouter from './GrandRouter.react.js';

//Globally define the router
var router = new GrandRouter('target-pages');

//Create an entrypoint for your application
class Main extends React.Component
{
    /**
     * Main constructor.
     * @param props
     */
    constructor(props)
    {
        super(props);
        this.router = router;
    }

    //Render an empty page, will be overwritten
    render()
    {
        return (<div id="target-pages"></div>);
    }
}
//Use jQuery or an event listener to bind
window.addEventListener('hashchange', function() {
    router.navigate()
});

//Call the router the first time to go to the application's first view.
router.boot('application');