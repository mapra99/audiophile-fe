import { dummy } from ".";

it("returns the same string converted to uppercase", () => {
  expect(dummy("hello")).toEqual("HELLO");
});
