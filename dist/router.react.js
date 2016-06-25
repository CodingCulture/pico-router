'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * React Router, done slim
 */

var Router = function () {
    /**
     * Binds the event that listens for URL changes
     */

    function Router(viewport) {
        _classCallCheck(this, Router);

        this.routes = [];
        this.defineRoutes();
        this.viewport = viewport;
    }

    /**
     * Defines the default route
     * @returns {*}
     */

    _createClass(Router, [{
        key: 'getDefaultRoute',
        value: function getDefaultRoute() {
            throw new TypeError('getDefaultRoute must be of a childclass of router, and should not be called directly.');
        }

        /**
         * Keeps an array of all available routes
         */

    }, {
        key: 'defineRoutes',
        value: function defineRoutes() {
            throw new TypeError('defineRoutes must be of a childclass of Router, and should not be called directly.');
        }

        /**
         * Returns the route for a given url
         * @param name
         * @returns {*}
         */

    }, {
        key: 'getRoute',
        value: function getRoute(name) {
            return this.routes[name];
        }

        /**
         * Returns the url the user has requested
         * @returns {string}
         */

    }, {
        key: 'getRequestedRoute',
        value: function getRequestedRoute() {
            return window.location.hash.substr(1).split('?')[0];
        }

        /**
         * Returns if the user wants to access the default route
         * @returns {boolean}
         */

    }, {
        key: 'isDefaultRoute',
        value: function isDefaultRoute() {
            return this.getRequestedRoute() == 0 ? true : false;
        }

        /**
         * Returns the ID for the viewport
         * @returns {*}
         */

    }, {
        key: 'getViewport',
        value: function getViewport() {
            return this.viewport;
        }

        /**
         * Gets the query params
         * @param name
         */

    }, {
        key: 'getQueryParams',
        value: function getQueryParams() {
            var raw = this.getQueryString().split('&');
            var repo = [];

            for (var i = 0; i < raw.length; i++) {
                var query = raw[i].split('=');
                repo[query[0]] = query[1];
            }

            return repo;
        }

        /**
         * Returns the query string after #
         *
         * @returns {string}
         */

    }, {
        key: 'getQueryString',
        value: function getQueryString() {
            var request = window.location.hash.substr(1).split('?', 2);
            return request[1] !== undefined ? request[1] : '';
        }

        /**
         * Navigates to the requested url
         *
         * @returns {*}
         */

    }, {
        key: 'navigate',
        value: function navigate() {
            var target = this.getRoute(this.getRequestedRoute());

            if (this.isDefaultRoute()) {
                target = this.getDefaultRoute();
            }

            if (target == undefined) {
                target = this.getDefaultRoute();
            }

            _reactDom2.default.render(target, document.getElementById(this.getViewport()));
        }

        /**
         * Initiates the router
         */

    }, {
        key: 'boot',
        value: function boot() {
            var redirect = this.getDefaultRoute();

            if (this.getRequestedRoute().length > 0) {
                redirect = this.getRoute(this.getRequestedRoute());
            }

            if (redirect == undefined) {
                redirect = this.getDefaultRoute();
            }

            _reactDom2.default.render(redirect, document.getElementById(this.getViewport()));
        }
    }]);

    return Router;
}();

exports.default = Router;