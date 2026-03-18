const express = require('express');
const app = express();

// --- TASK 5 VULNERABILITY (Static) ---
const DB_PASSWORD = "super_secret_password_999"; 

// --- TASK 6 VULNERABILITY (Dynamic) ---
// This route makes the Task 5 secret "discoverable" by ZAP
app.get('/debug-config', (req, res) => {
    // DANGEROUS: Exposing internal config to the web
    res.json({
        status: "running",
        db_key: DB_PASSWORD // ZAP will flag this as "Sensitive Information Disclosure"
    });
});

// Existing XSS route from earlier
app.get('/search', (req, res) => {
    res.send(`<h1>Results for: ${req.query.q}</h1>`); 
});

app.listen(3000, () => console.log('Server running on port 3000'));
