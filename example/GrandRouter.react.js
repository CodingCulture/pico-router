/**
 * Import the Router base class and all the ReactComponents you will reference
 */
import Router from './Router/router.react.js';
import IndexPage from './Pages/IndexPage.react.js';

/**
 * Extend the Router class
 */
class GrandRouter extends Router
{
    /**
     * Create an array with the keys being the route (without query params).
     * E.g. if your user goes to http://example.com/#hosts/index?variable1=true, the route #hosts/index will be called.
     *
     * If you want to inject the query param string into the ReactComponent, simply call the this.getQueryParams()
     * method. You can also get a specific param with the this.getQueryParam(name) method.
     */
    defineRoutes()
    {
        this.routes['app/index'] = (<IndexPage />);
        this.routes['app/filtered'] = (<IndexPage data={this.getQueryParams()}/>);
        this.routes['app/specific'] = (
            <IndexPage varOne={this.getQueryParam(variable1)} varTwo={this.getQueryParam(variable2)}/>);
    }

    /**
     * Set the default route a user will be redirected to.
     * @returns {ReactComponent}
     */
    getDefaultRoute()
    {
        return this.getRoute('hosts/index');
    }
}

export default GrandRouter;