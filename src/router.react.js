import ReactDOM from 'react-dom';

/**
 * React Router, done slim
 */
class Router
{
    /**
     * Binds the event that listens for URL changes
     */
    constructor()
    {
        this.routes = [];
        this.defineRoutes();
    }

    /**
     * Defines the default route
     * @returns {*}
     */
    getDefaultRoute()
    {
        throw new TypeError('getDefaultRoute must be of a childclass of router, and should not be called directly.')
    }

    /**
     * Keeps an array of all available routes
     */
    defineRoutes()
    {
        throw new TypeError('defineRoutes must be of a childclass of Router, and should not be called directly.')
    }

    /**
     * Returns the route for a given url
     * @param name
     * @returns {*}
     */
    getRoute(name)
    {
        return this.routes[name];
    }

    /**
     * Returns the url the user has requested
     * @returns {string}
     */
    getRequestedRoute()
    {
        return window.location.hash.substr(1).split('?')[0];
    }

    /**
     * Returns if the user wants to access the default route
     * @returns {boolean}
     */
    isDefaultRoute()
    {
        return this.getRequestedRoute() == 0 ? true : false;
    }

    /**
     * Gets the query params
     * @param name
     */
    getQueryParams()
    {
        var result = [];

        var rawQueries = this.getQueryString().split('&');

        for (let queryblob in rawQueries) {
            var essence = queryblob.split('=', 2);
            result[essence[0]] = (essence[1] !== undefined) ? essence[1] : true;
        }

        return result;
    }

    /**
     * Returns the query string after #
     * @returns {string}
     */
    getQueryString()
    {
        var request = window.location.hash.substr(1).split('?', 2);
        return (request[1] !== undefined) ? request[1] : '';
    }

    /**
     * Navigates to the requested url
     * @returns {*}
     */
    navigate()
    {
        console.log('Navigate trigger');
        var target = this.getRoute(this.getRequestedRoute());

        if (this.isDefaultRoute()) {
            target = this.getDefaultRoute();
        }

        if (target == undefined) {
            target = this.getDefaultRoute();
        }

        ReactDOM.render(
            target,
            document.getElementById('application')
        );
    }

    /**
     * Initiates the router
     * @param {string} domId
     */
    boot(domId)
    {
        var redirect = this.getDefaultRoute();

        if (this.getRequestedRoute().length > 0) {
            redirect = this.getRoute(this.getRequestedRoute());
        }

        ReactDOM.render(redirect, document.getElementById(domId));
    }
}

export default Router;