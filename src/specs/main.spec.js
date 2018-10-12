const expect = require('chai').expect;

describe('Main', () => {
    let arr;
    let stg;
    beforeEach(() => {
        arr = [1, 2, 3];
        stg = 'hello Tests';
    });

    it('should be an string', () => {
        expect(stg).to.be.a('string');
    });

    it('should be an array', () => {
        expect(arr).to.be.a('array');
    });

    it('should have a size of 4 when push another value to the array', () => {
        arr.push(4);
        expect(arr).to.have.lengthOf(4);
    });

    it('should have a size of 2 when pop another value to the array', () => {
        arr.pop();
        expect(arr).to.not.include(3);
    });

    it('should remove 3 when use pop in the array', () => {
        console.log(arr.pop() === 3); // 2
    });
});
