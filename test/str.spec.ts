import {replaceWithArray, toTitleCase} from "~/logic/core/str";

describe('str', () => {
  test("replaceWithArray", () => {
    expect(
      replaceWithArray("_ and _", ["ass", "tities"])
    )
      .toStrictEqual("ass and tities");
  });

  test("toTitleCase", ( ) => {
    expect(
      toTitleCase("much of her advice was not useful at all.")

    ).toBe("Much of her advice was not useful at all.")
  })
});
