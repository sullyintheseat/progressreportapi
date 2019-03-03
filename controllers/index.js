const IndexController = {

  test: async (req, res) => {
    try{ 
      res.send('done').status(200);
    } catch(err) { 
      res.status(500).send('Unknown server error');

    }
  }
}

module.exports.Controller = IndexController;
module.exports.controller = (app) => {
  app.get('/', IndexController.test);
}
