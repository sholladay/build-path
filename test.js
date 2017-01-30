import path from 'path';
import test from 'ava';
import buildPath from '.';

test('buildPath() is a simple string', (t) => {
    const str = buildPath({
        branch  : 'a',
        version : 'b'
    });
    t.is(typeof str, 'string');
    t.true(str.startsWith('build' + path.sep));
    t.true(str.length >= 'build/a/b'.length);
    const numPathSeps = (str.match(new RegExp(path.sep, 'g')) || []).length;
    t.is(numPathSeps, 2);
    t.is(str, 'build/a/b');
});

test('throws when not given enough input', (t) => {
    const err1 = t.throws(
        () => {
            buildPath();
        },
        TypeError
    );
    t.regex(err1, /branch/);

    const err2 = t.throws(
        () => {
            buildPath({
                branch : 'a'
            });
        },
        TypeError
    );
    t.regex(err2, /version/);

    t.notThrows(() => {
        buildPath({
            branch  : 'a',
            version : 'b'
        });
    });
});
