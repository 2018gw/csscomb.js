describe.skip('options/space-after-colon:', function() {
    describe('process', function() {
        it('Array value => should not change anything', function() {
            this.comb.configure({ 'space-after-colon': ['', ' '] });
            return this.shouldBeEqual('test.css');
        });

        it('Invalid string value => should not change anything', function() {
            this.comb.configure({ 'space-after-colon': '  nani  ' });
            return this.shouldBeEqual('test.css');
        });

        it('Float number value => should not change anything', function() {
            this.comb.configure({ 'space-after-colon': 3.5 });
            return this.shouldBeEqual('test.css');
        });

        it('Integer value => should set proper space after colon', function() {
            this.comb.configure({ 'space-after-colon': 0 });
            return this.shouldBeEqual('test.css', 'test.expected.css');
        });

        it('Valid string value (spaces only)=> should set proper space after colon', function() {
            this.comb.configure({ 'space-after-colon': '  ' });
            return this.shouldBeEqual('test.css', 'test-2.expected.css');
        });

        it('Valid string value (spacesand newlines)=> should set proper space after colon', function() {
            this.comb.configure({ 'space-after-colon': '\n    ' });
            return this.shouldBeEqual('test.css', 'test-3.expected.css');
        });
    });

    describe('detect', function() {
        it('Should detect no whitespaces', function() {
            this.shouldDetect(
                ['space-after-colon'],
                'a { color:red }',
                { 'space-after-colon': '' }
            );
        });

        it('Should detect space from two variants', function() {
            this.shouldDetect(
                ['space-after-colon'],
                'a { color: red; color :red }',
                { 'space-after-colon': ' ' }
            );
        });

        it('Should detect no whitespaces along three variants', function() {
            this.shouldDetect(
                ['space-after-colon'],
                'a { color: red; background :red } b { width:10px }',
                { 'space-after-colon': '' }
            );
        });

        it('Should detect space', function() {
            this.shouldDetect(
                ['space-after-colon'],
                'a { color : red; background :red } b { width: 10px }',
                { 'space-after-colon': ' ' }
            );
        });
    });
});
