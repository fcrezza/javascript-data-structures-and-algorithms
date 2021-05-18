import Stack from './stack'

test('add item to the stack successfully', () => {
	const stack1 = new Stack(1);
	stack1.add(1)
	expect(stack1.stack.length).toEqual(1)
})