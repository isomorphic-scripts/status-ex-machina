//@ts-check

export const validations = [
    /**
     *
     * @param {string} value
     * @returns
     */
    (value) => parseFloat(value) <= 0? 'below_or_equal_0' : '',

    /**
     *
     * @param {string} value
     * @returns
     */
    (value) => parseFloat(value) >= 100? 'above_or_equal_100' : ''
];
