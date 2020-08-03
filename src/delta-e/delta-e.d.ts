declare module "delta-e" {
  // Type definitions for delta-e
  // Project: https://www.npmjs.com/package/delta-e
  // Definitions by: Leonardo Salazar <https://github.com/lsalazarm99>

  /**
   * A package of dE76, dE94, and dE00 algorithms.
   * @example
   * var DeltaE = new DeltaE();
   * var labColor1 = {L: 50, A: 50, B: 50};
   * var labColor2 = {L: 20, A: 20, B: 20};
   *
   * DeltaE.getDeltaE94(labColor1, labColor2);
   */
  class DeltaE {
    /**
     * The CIE76 color difference algorithm: a simple euclidean distance calculation.
     * http://en.wikipedia.org/wiki/Color_difference#CIE76
     */
    getDeltaE76(labColor1: Lab, labColor2: Lab): number;

    /**
     * The CIE94 algorithm: an iteration of the CIE76 algorithm.
     * http://en.wikipedia.org/wiki/Color_difference#CIE94
     */
    getDeltaE94(labColor1: Lab, labColor2: Lab): number;

    /**
     * The CIE2000 color difference algorithm.
     * http://en.wikipedia.org/wiki/Color_difference#CIEDE2000
     */
    getDeltaE00(labColor1: Lab, labColor2: Lab): number;
  }

  /**
   * The LAB color configuration object.
   */
  type Lab = {
    /**
     * The lightness value, on scale of 0-100.
     */
    L: number,
    /**
     * The chroma value, on scale of -128 to 128.
     */
    A: number,
    /**
     * The hue value, on scale of -128 to 128.
     */
    B: number,
  }

  const deltaE: DeltaE;

  export = deltaE;
}
