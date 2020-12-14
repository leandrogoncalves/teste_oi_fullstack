'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')


Route.group(() => {
  Route.get('/', 'StateController.index').as('state.index')
  Route.post('/', 'StateController.store').as('state.store')
  Route.get('/bulk-import', 'StateController.bulkImport').as('state.bulkImport')
  // Route.get('create', 'StateController.create').as('state.create')
  // Route.get('/:id', 'StateController.show').as('state.show')
  // Route.put('/:id', 'StateController.update').as('state.update')
  // Route.patch('/:id', 'StateController.update')
  // Route.get('/:id/edit', 'StateController.edit').as('state.edit')
  // Route.delete('/:id', 'StateController.destroy').as('state.destroy')
}).prefix('api/v1/state')


Route.group(() => {
  Route.get('/', 'CityController.index').as('city.index')
  Route.post('/', 'CityController.store').as('city.store')
  Route.get('/bulk-import', 'CityController.bulkImport').as('city.bulkImport')
  Route.get('/state/:state', 'CityController.getByState').as('city.getByState')
}).prefix('api/v1/city')

Route.group(() => {
  Route.get('/:id', 'PersonController.getById').as('person.getById')
  Route.get('/', 'PersonController.index').as('person.index')
  Route.post('/', 'PersonController.store').as('person.store')
}).prefix('api/v1/person')

