export let users = [
    {
        id: 1,
        name: 'gatsby taro',
        email: 'gatsby.taro@gmail.com',
        age: 32
    },
    {
        id: 2,
        name: 'gridsome taro',
        email: 'gridsome.taro@gmail.com',
        age: 55
    },
];

let idSequence = 2;

export const generateId = () => ++idSequence;