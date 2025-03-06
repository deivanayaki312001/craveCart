import { sum } from "../sum.js"; // ✅ Import correctly in ES Modules

test("test for sum", () => {
  const result = sum(10, 5);
  expect(result).toBe(5);
});