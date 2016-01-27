import React from 'react';

/**
 * Example page, there is nothing specific here
 */
class IndexPage extends React.Component
{
    constructor(props)
    {
        super(props);

        console.log(this.props.data);
        console.log(this.props.varOne);
        console.log(this.props.varTwo);
    }

    render()
    {
        //If you want to create a link, just create an anchor tag in HTML, like you are used to.
        //As the href, you can just supply a route name you have defined in your router implementation
        return (
            <div className="page">
                <a href="#app/filtered">Click to use the router</a>
            </div>
        )
    }
}

export default IndexPage;