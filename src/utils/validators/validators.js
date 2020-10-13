export const require = value => {
    if (value) return undefined;

    return 'Field is required';
}


export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length > maxLength) return `Максимальное количество символов - ${maxLength}`;

    return undefined;
}