import configRoutes from './configRoutes'

angular
.module('myAngularApp', ['ui.router', 'templates'])
.config(configRoutes)
