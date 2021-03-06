/**
 * @fileoverview Tests for no-catch-shadow rule.
 * @author Ian Christian Myers
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-catch-shadow"),
    RuleTester = require("../../../lib/testers/rule-tester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-catch-shadow", rule, {
    valid: [
        "var foo = 1; try { bar(); } catch(baz) { }"
    ],
    invalid: [
        { code: "var foo = 1; try { bar(); } catch(foo) { }", errors: [{ message: "Value of 'foo' may be overwritten in IE 8 and earlier.", type: "CatchClause"}] },
        { code: "function foo(){} try { bar(); } catch(foo) { }", errors: [{ message: "Value of 'foo' may be overwritten in IE 8 and earlier.", type: "CatchClause"}] },
        { code: "function foo(){ try { bar(); } catch(foo) { } }", errors: [{ message: "Value of 'foo' may be overwritten in IE 8 and earlier.", type: "CatchClause"}] },
        { code: "var foo = function(){ try { bar(); } catch(foo) { } };", errors: [{ message: "Value of 'foo' may be overwritten in IE 8 and earlier.", type: "CatchClause"}] }
    ]
});
