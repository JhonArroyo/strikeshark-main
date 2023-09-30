// Controllers section
// import TODOController from '../controllers/TODOController'

//  Difinitions of each routes
export default (app) => {
  app.get('/', (req, res) => {
    res.render('welcome')
  })
  // app.get('/', TodoController.customAction);
}