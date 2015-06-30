exports.MY_UPPERCASE = function(value) {
    return value.toUpperCase();
};

exports.MY_STRING_JOIN = function(value1, value2) {
    return [value1, value2].join(' ');
};

exports.MY_Add = function(value1, value2) {
    return value1 + value2;
};

exports.MY_REGEX = function(regex, value) {
    return !!value.match(new RegExp(regex));
};

exports.MY_REGEX_VALUE = function(regex, value) {
    return /match things/i;
};

exports.MY_ERROR = function(value) {
    throw new Error('This function always throws');
};

exports.MY_UNHANDLED_TYPE = function(value) {
    return {};
};

exports.MY_NOTHING = function(value) {

};

exports.MY_INVALID_SCOPING = function(value) {
    return db; // not accessible
};

exports.MY_REQUIRE = function(value) {
    require('./helper');
};
