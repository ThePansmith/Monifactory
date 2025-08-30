export const progressNumber = (max: number) => {
    const padLen = Math.ceil(Math.log10(max))
    return (current: number) => current.toString().padStart(padLen) + "/" + max
}
