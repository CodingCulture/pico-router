import ReactDOM from 'react-dom';

/**
 * React Router, done slim
 *
 * @author Niels Vermaut <nielsvermaut@gmail.com>
 */
class Router
{
    /**
     * Router constructor.
     */
    constructor()
    {
        this.routes = [];
        this.defineRoutes();
    }

    /**
     * Returns the default route for the application.
     * This function is abstract and needs an override in order to work.
     *
     * @returns {boolean}
     * @throw TypeError
     */
    getDefaultRoute()
    {
        throw new TypeError('getDefaultRoute must be of a childclass of router, and should not be called directly.')
    }

    /**
     * Stores all the routes.
     * This method is abstract and needs an override in order to work.
     */
    defineRoutes()
    {
        throw new TypeError('defineRoutes must be of a childclass of Router, and should not be called directly.')
    }

    /**
     * Returns the ReactComponent linked to the route.
     *
     * @param name
     * @returns {ReactComponent}
     */
    getRoute(name)
    {
        return this.routes[name];
    }

    /**
     * Returns the url the user has requested
     *
     * @returns {string}
     */
    getRequestedRoute()
    {
        return window.location.hash.substr(1).split('?')[0];
    }

    /**
     * Returns if the user wants to access the default route
     *
     * @returns {boolean}
     */
    isDefaultRoute()
    {
        return this.getRequestedRoute() == 0;
    }

    /**
     * Returns the query params.
     *
     * @returns {Array}
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
     * Returns one query param with a certain name
     *
     * @param name
     * @returns {*|undefined}
     */
    getQueryParam(name)
    {
        return this.getQueryParams()[name];
    }

    /**
     * Returns the raw query string.
     *
     * @returns {string}
     */
    getQueryString()
    {
        var request = window.location.hash.substr(1).split('?', 2);
        return (request[1] !== undefined) ? request[1] : '';
    }

    /**
     * Navigates to the requested ReactComponent.
     *
     * @returns {*}
     */
    navigate()
    {
        var target = this.getRoute(this.getRequestedRoute());

        if (this.isDefaultRoute()) {
            target = this.getDefaultRoute();
        }

        if (target == undefined) {
            target = this.getDefaultRoute();
        }

        ReactDOM.render(
            target,
            document.getElementById('target-pages')
        );
    }
}

export default Router;