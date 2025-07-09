# ✅ Week 6: Test & Debug Assignment – Architect Philemon

This project demonstrates unit testing, integration testing, end-to-end (E2E) testing, and debugging techniques across a full-stack MERN application.

---

## 🧪 Testing Strategy

### ✅ Unit Tests
- **Backend**: Tested utility functions in `math.js` and middleware like `logger.js`, `errorHandler.js`.
- **Frontend**: Tested isolated React components like `Deno.jsx`.

### ✅ Integration Tests
- Tested Express routes (`/api/hello`)
- Validated error responses with mock routes triggering Express middleware
- React components tested with API mocking

### ✅ End-to-End Tests (Cypress)
- Tested routes like `/dashboard`
- Simulated user flows (if app running locally on port `3000`)
- *See `/cypress/` folder for details*

---

## 📂 Folder Structure

project-root/
├── client/
│ └── src/tests/ # React unit + integration tests
├── server/
│ └── tests/ # Express unit + integration tests
├── screenshots/ # Test coverage and debug screenshots
├── cypress/ # E2E tests (if implemented)
├── README.md # This file
└── package.json

---

## 🐛 Debugging Techniques

- Implemented global error handler in Express (`errorHandler.js`)
- Simulated crashes in API routes to trigger error logging
- Console logs used in server for testing setup confirmation
- React hook error (`useState`) intentionally triggered and debugged
- Browser DevTools used to inspect state + API calls in frontend

---

## 📈 Test Coverage (Jest)

| Category   | Coverage |
|------------|----------|
| Statements | 73.68%   |
| Branches   | 50%      |
| Functions  | 66.66%   |
| Lines      | 75.67%   |



---

## 🛠️ Scripts

```bash
npm run test       # Run all Jest tests
npm run coverage   # Generate test coverage (if configured)
npm run dev        # Run frontend dev server (Vite)

🧠 Author
Philemon Mwendwa
PLP-MERN Stack Track – Week 6 Assignment
GitHub Repo: Assignment Repository