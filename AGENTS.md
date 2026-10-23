This document defines the rules, standards, and constraints for AI agents interacting with this repository, ensuring alignment with _Coworking with AI_ practices.

---

## 1. Engineering and Architecture Principles

- **Minimum Viable Code (Anti-Overengineering):**
  - Write only the code strictly necessary to meet the current requirement or pass the test.
  - Avoid creating premature abstractions, extra layers, or generic utilities unless there is a real and immediate need.
  - Prefer simple, readable, and direct solutions (KISS / YAGNI).

- **Respect for the Test Cycle (Vitest):**
  - **NEVER delete, disable, or modify failing tests** to make them pass artificially. A test failure is a clear sign of a problem that needs to be resolved in the implementation code, not in the test.
  - Always validate your changes by running existing tests via `vitest`.

---

## 2. Tech Stack and Code Standards

- **Core:** NestJS, Node.js, and TypeScript.
- **Database and ORM:** PostgreSQL alongside TypeORM for data mapping and migrations.
- **Testing:** Vitest for unit and E2E testing, combined with Supertest for API requests.
- **Code Quality and Formatting:** Oxlint for fast linting and Prettier for code formatting.

---

## 3. Agent Workflow

1. **Analysis:** Before writing any line of code, analyze the existing context, database schemas, and current tests.
2. **Minimalist Implementation:** Write the least amount of code possible to solve the task, following NestJS architectural patterns (Modules, Controllers, Services).
3. **Validation:** Run the test suite (`vitest`) and ensure no previous tests were broken.
4. **Reporting:** Upon completion, succinctly explain what was changed.

---

## 4. What NEVER to do

- ❌ Delete, skip (`skip`), or comment out failing tests.
- ❌ Add new external dependencies without explicit justification.
- ❌ Write code "for the future" (speculations on unrequested features).
- ❌ Mix inline styles or pure CSS where Tailwind CSS should be used.
