const express = require('express');
const app = express();

const PORT = process.env.PORT || 3011; // Default to 3011 if not specified

app.listen(PORT, function() {
    console.log('App starting on port', PORT);
});

// Other route and middleware definitions
