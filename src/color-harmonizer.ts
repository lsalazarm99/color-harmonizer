import * as ColorConvert from "color-convert";
import * as DeltaE from "delta-e";

export default class ColorHarmonizer {
  /**
   * Select the main color from an array of colors and order the other colors based on the distance from the main color.
   */
  static get(colors: Color[], indexColor = 0): HarmonizedColors {
    this.validateParameters(colors, indexColor);

    const colorDistances = this.getColorDistances(colors, indexColor);
    const harmonizedColors: HarmonizedColors = {
      mainColor: colors[indexColor],
      additionalColors: [],
    };

    colorDistances.sort((distanceA, distanceB) => {
      return distanceB.distance - distanceA.distance;
    });

    colorDistances.forEach((colorDistance) => {
      harmonizedColors.additionalColors.push(colorDistance.comparedColor);
    });

    return harmonizedColors;
  }

  private static validateParameters(colors: Color[], indexColor: number) {
    if (colors.length === 0) {
      throw new Error("No colors were passed.");
    }

    if (colors[indexColor] === undefined) {
      throw new Error("The specified index color doesn't exist.");
    }
  }

  /**
   * Calculate the distance between one color in an array and the other colors in the array.
   */
  private static getColorDistances(
    colors: Color[],
    indexColor: number
  ): ColorDistance[] {
    const distances: ColorDistance[] = [];
    const color = colors[indexColor];
    const colorLab = ColorConvert.rgb.lab(color);
    const colorLabObjet = {
      L: colorLab[0],
      A: colorLab[1],
      B: colorLab[2],
    };

    colors.forEach((comparedColor, i) => {
      if (i !== indexColor) {
        const comparedColorLab = ColorConvert.rgb.lab(comparedColor);
        const comparedColorLabObject = {
          L: comparedColorLab[0],
          A: comparedColorLab[1],
          B: comparedColorLab[2],
        };

        distances.push({
          distance: DeltaE.getDeltaE00(colorLabObjet, comparedColorLabObject),
          color: color,
          comparedColor: comparedColor,
        });
      }
    });

    return distances;
  }
}

export type Color = [number, number, number];
type ColorDistance = {
  distance: number;
  color: Color;
  comparedColor: Color;
};

export interface HarmonizedColors {
  mainColor: Color;
  additionalColors: Color[];
}
