function AssertionError(message) {
    this.name = "AssertionError";
    this.message = message || "Assertion Error";
}
AssertionError.prototype = new Error();
AssertionError.prototype.constructor = AssertionError;

function Tests() {
    this.tests = [];
}

Tests.prototype.add = function(test_case) {
    this.tests.push(test_case);
};

Tests.prototype.run = function() {
    var total = 0;
    var failed = 0;
    var results = [];

    this.tests.forEach(function(testcase) {
        total++;
        try {
            testcase();
            results.push('.');
        } catch (e) {
            failed++;
            console.log(e);
            if (e instanceof AssertionError) {
                results.push('F');
            } else {
                results.push('E');
            }
        }
    });
    console.log(results.join(''));
    console.log(failed + " of " + total + " failed (" + failed/total + "%)");
};

function assert(expr, message) {
    if (!expr) {
        throw new AssertionError(message);
    }
}
