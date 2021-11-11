const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const PORT = process.env.NEXT_PUBLIC_PORT || 8081;

app.prepare()
  .then(() => {
    const server = express();

    server.get('/editgame/:name', (req, res) => {
      const page = '/editgame/:name';
      const params = { name: req.params.name }
      console.log(params);
      //req, res, pathname, query
      app.render(req, res, page, params)
    });

    server.get('*', (req, res) => {
      return handle(req, res)
    });

    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log("> Ready on Server Port: " + PORT)
    })
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  })
