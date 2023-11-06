const app = require('./app')
const port = 3000

if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => console.log(`Tutor server started at http://localhost:${port}`));
  }