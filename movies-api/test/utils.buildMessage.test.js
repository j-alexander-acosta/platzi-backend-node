const assert = require('assert');
const buildMessage = require('../utils/buildMessage');

describe.only('utils - buildMessage', function() {
    describe('when receives na entity and action', function(){
        it('should return a message with the entity and action', function() {
            const result = buildMessage('movie', 'create');
            const expec = 'movie create';
            assert.strictEqual(result, expec);
        });
    });

    describe('when receives an entity and an action and is list', function() {
        it('should return the respective message with the entity in plural', function() {
            const result = buildMessage('movie', 'list');
            const expected = 'movies listed';
            assert.strictEqual(result, expected);
        })
    })
});