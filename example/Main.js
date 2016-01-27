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

        //Use jQuery or an event listener to bind
        $(window).bind('hashchange', function() {
            this.router.navigate();
        }.bind(this));

    }

    //Render the target
    render()
    {
        return (<div id="target-pages"></div>);
    }
}

//Call the router the first time to go to the application's first view.
ReactDOM.render(router.getDefaultRoute(), document.getElementById('application'));