describe('Main', () => {
    let arr;
    beforeEach(() => {
        arr = [1, 2, 3];
    });

    it('should have a size of 4 when push another value to the array', () => {
        arr.push(4);
        console.log(arr.length); // 4
    });

    it('should have a size of 2 when push another value to the array', () => {
        arr.pop();
        console.log(arr.length); // 2
    });

    it('should remove 3 when use pop in the array', () => {
        console.log(arr.pop() === 3); // 2
    });
});
