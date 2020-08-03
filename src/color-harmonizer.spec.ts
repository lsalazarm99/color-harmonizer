import ColorHarmonizer, { HarmonizedColors } from "./color-harmonizer";

describe("Color Harmonizer", () => {
  test("should throw if no colors are passed", () => {
    expect(() => {
      ColorHarmonizer.get([], 0);
    }).toThrow();
  });

  test("should throw if the index color doesn't exist", () => {
    expect(() => {
      ColorHarmonizer.get([[0, 0, 0]], 1);
    }).toThrow();
  });

  test("should return colors ordered by distance", () => {
    const expectedResult: HarmonizedColors = {
      mainColor: [5, 0, 0],
      additionalColors: [
        [9, 0, 0],
        [8, 0, 0],
        [3, 0, 0],
        [4, 0, 0],
      ],
    };

    expect(
      ColorHarmonizer.get(
        [
          [5, 0, 0],
          [3, 0, 0],
          [4, 0, 0],
          [9, 0, 0],
          [8, 0, 0],
        ],
        0
      )
    ).toEqual(expectedResult);
  });

  test("should prioritize the green channel", () => {
    const expectedResult: HarmonizedColors = {
      mainColor: [5, 105, 0],
      additionalColors: [
        [4, 109, 0],
        [3, 108, 0],
        [8, 103, 0],
        [9, 104, 0],
      ],
    };

    expect(
      ColorHarmonizer.get(
        [
          [5, 105, 0],
          [3, 108, 0],
          [4, 109, 0],
          [9, 104, 0],
          [8, 103, 0],
        ],
        0
      )
    ).toEqual(expectedResult);
  });
});
