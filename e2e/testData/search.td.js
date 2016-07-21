module.exports = function plusProvider() {
    return [
        {criteria: "isPresent"},
        {criteria: "each"},
        {criteria: "findElements"},
        {criteria: "bad"}
    ];
};