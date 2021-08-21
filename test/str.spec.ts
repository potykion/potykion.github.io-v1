import {replaceWithArray} from "~/logic/core/str";

describe('str', () => {
  test("replaceWithArray", () => {
    expect(
      replaceWithArray("_ and _", ["ass", "tities"])
    )
      .toStrictEqual("ass and tities");
  });
});
