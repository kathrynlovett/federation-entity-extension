const _ = require('lodash');

const reviews = [
    {
        id: '10',
        author: '2',
        description: 'Great product!',
        productName: 'Duct Tape',
        usefulnessScore: 9.0
    },
    {
        id: '11',
        author: '2',
        description: 'Instructions are a bit confusing',
        productName: 'Espresso Machine',
        usefulnessScore: 8.5
    },
    {
        id: '12',
        author: '1',
        description: 'I use this every day and would recommend it to all my friends.',
        productName: 'Broom',
        usefulnessScore: 6.7
    },
    {
        id: '13',
        author: '3',
        description: 'Delicious!',
        productName: 'Toffee',
        usefulnessScore: 9.8
    },
    {
        id: '14',
        author: '1',
        description: 'It broke the second time I used it.',
        productName: 'Dishwasher',
        usefulnessScore: 4.6
    },
    {
        id: '15',
        author: '2',
        description: 'Works as expected, considering the price.',
        productName: 'Broom',
        usefulnessScore: 8.1
    }, {
        id: '16',
        author: '1',
        description: 'Good',
        productName: 'Blender',
        usefulnessScore: 1.3
    },
    {
        id: '17',
        author: '2',
        description: 'So cozy! I love wearing them!',
        productName: 'Slippers',
        usefulnessScore: 8.9
    }
];

module.exports = {
    reviewsById: _.keyBy(reviews, 'id'),
    reviews
};
