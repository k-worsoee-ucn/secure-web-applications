const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Middleware til at parse JSON (til CSP-rapporter)
app.use(express.json({ type: ['application/json', 'application/csp-report'] }));

// Aktiv CSP-header
const cspHeader = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self'";

// Report-Only CSP-header (bruges til test uden at blokere)
const cspReportOnly = "default-src 'self'; script-src 'self' 'unsafe-inline'; report-uri /csp-report";

app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', cspHeader);
  res.setHeader('Content-Security-Policy-Report-Only', cspReportOnly);
  next();
});

// Log CSP rapporter
app.post('/csp-report', (req, res) => {
  console.log('🔒 CSP REPORT RECEIVED:\n', JSON.stringify(req.body, null, 2));
  res.sendStatus(204);
});

// Server statiske filer
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`CSP demo kører på http://localhost:${port}`);
});
