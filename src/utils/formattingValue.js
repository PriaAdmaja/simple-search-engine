export const formattingValue = (string) => {
    return String(string).toLowerCase().replaceAll(/[^a-zA-Z0-9']/g, '')
}