// @ts-check

/**
 * @param {number} max
 */
export const progressNumber = (max) => {
    const padLen = Math.ceil(Math.log10(max))
    /**
	 * @param {number} current
	 */
    return (current) => current.toString().padStart(padLen) + "/" + max
}
