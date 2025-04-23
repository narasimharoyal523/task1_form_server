const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Serve static files (optional)
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.render('form'); // loads views/form.ejs
});

app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  res.send(`
    <h2>Form Submission Received</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <a href="/">Go Back</a>
  `);
});

// Start server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
