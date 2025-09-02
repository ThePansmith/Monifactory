/** English to Upside Down character mapping */
const UDMap = new Map(((a, b) => Array.from(a.entries()).map(([i, ca]) => [ca, b[i]]))(
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!^&*()-_[]{};\':",.<>/?'.split(""),
    "ⱯᗺƆᗡƎℲ⅁HIՐʞꞀWNOԀΌᴚS⟘∩ᴧMX⅄Zɐqɔpǝɟᵷɥᴉɾʞꞁɯuodbɹsʇnʌʍxʎz⥝ᘔƐᔭ59Ɫ860¡^⅋*)(-‾][}{؛,:„'˙></¿".split(""),
));

const regexFormatCode = /[&§][0-9a-fk-or]/;
const regexColorCode = /[&§][^klmnor]/;

/**
 * @param str English string
 * @returns Upside down string
 */
export const UDTransform = (str: string): string => {
    type UnfinishedRange = {format: string; start: number; }
    type FinishedRange = UnfinishedRange & { end: number; }

    const fmtRanges: FinishedRange[] = [];

    const unfinishedFmtRanges: UnfinishedRange[] = [];
    const unfinishedColorRanges: UnfinishedRange[] = [];

    const finishRanges = (ranges: UnfinishedRange[], i: number) =>
        fmtRanges.push(
            ...ranges.splice(0).map((range) => ({
                ...range,
                end: i,
            })),
        );

    // Imperatively strips formatting from the string into fmtRanges
    for (;;) {
        let shouldBreak = true;
        str = str.replace(regexFormatCode, (match, i) => {
            shouldBreak = false;

            const rangeO = { format: match, start: i };
            if (match.match(regexColorCode)) {
                finishRanges(unfinishedColorRanges, i);
                unfinishedColorRanges.push(rangeO);
                return "";
            }

            if (match[1] === "r") {
                finishRanges(unfinishedColorRanges, i);
                finishRanges(unfinishedFmtRanges, i);
                return "";
            }

            unfinishedFmtRanges.push(rangeO);
            return "";
        });
        if (shouldBreak) break;
    }
    finishRanges(unfinishedColorRanges, str.length);
    finishRanges(unfinishedFmtRanges, str.length);

    // Reverse string
    str = str.split("").reverse().map((c) => UDMap.get(c) ?? c).join("");
    // Reverse ranges
    for (const range of fmtRanges) {
        [range.start, range.end] = [
            str.length - range.end,
            str.length - range.start,
        ];
    }
    // Sort by start value closer to the end of the string first
    fmtRanges.sort((a, b) => b.start - a.start);

    // Apply formatting to the string from fmtRanges
    let lastEnd = str.length;
    const strAsChars = str.split("");
    for (const range of fmtRanges) {
        if (lastEnd !== range.end) {
            // This is &r or §r
            const clearFormat = range.format.replace(/.$/g, "r");
            strAsChars.splice(range.end, 0, clearFormat);
            lastEnd = range.end;
        }
        strAsChars.splice(range.start, 0, range.format);
    }
    str = strAsChars.join("");

    return str;
};
