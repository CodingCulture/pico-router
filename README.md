## μRouter

μRouter or pico-router is a very lightweight React router with zero fat. It was created to do routing, and only do
routing. The use of pico-router is fairly easy for any new React beginner.

Make sure you can reference the source file (router.react.js) by importing it, extend it by creating a new router object
that has a defineRoutes method and a getDefaultRoute method, inject it into your main application and create an event
listener.

### Howto Use
Step by step on how to implement pico-router into your project.

#### Extend the base Router

Extend the Base Router like you would do with any ES6 class.

```
import Router from './Router/router.react.js';

class GrandRouter extends Router
{
    
}

export default GrandRouter;
```


#### defineRoutes method

The defineRoutes method will statically store an array in which all routes should be defined. The structure of this array
is simple by design. For each item, the key holds the route you want to use and the value will have an instance of the
React Component you want to display when a user visits that URL. 

In the defineRoutes, you will be able to pass all the query parameters or only a selection to the React Component, like
you would do with any data in React, by injecting it in the props.

You can call the methods getQueryParams() to get all query params and store them in an array, or use the getQueryParam(name)
method to specify which variable the view needs.

Remember to only apply changes to the this.routes parameter.

```
import Router from './Router/router.react.js';

class GrandRouter extends Router
{
    defineRoutes()
    {
        this.routes['index'] = (<Index />);
        this.routes['search'] = (<Search query={this.getQueryParams()} />;
        this.routes['profile'] = (<UserProfile id={this.getQueryParam(userId)} />);
    }
}

export default GrandRouter;
```

#### getDefaultRoute method

The getDefaultRoute method you need to implement will just need to return the default React Component that will be used.
You can use the Router's this.getRoute() method with a route as parameter to make this pain free.


``` 
import Router from './Router/router.react.js';

class GrandRouter extends Router
{
    defineRoutes()
    {
        this.routes['index'] = (<Index />);
        this.routes['search'] = (<Search query={this.getQueryParams()} />;
        this.routes['profile'] = (<UserProfile id={this.getQueryParam(userId)} />);
    }
    
    getDefaultRoute()
    {
        this.getRoute('index');
    }
}

export default GrandRouter;
```


#### Inject into your Main

Define the router globally (viewport as parameter) and inject it into your main application. Then after defining your 
main application, initiate your Main, by calling the router's getDefaultRoute function. 

To see an example of this, you can refer to the example/Main.js

#### Create the event listener

As a last step, you will need to listen to changes to the url. Use the following snippet in your Main's constructor, or
implement something without jQuery

```
window.addEventListener('hashchange', function() {
    router.navigate()
});
```

