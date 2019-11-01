const { reviews, reviewsById } = require('./fixtures');
const _ = require('lodash');

const resolvers = {
    Query: {
        reviewById: (root, { id }) => reviewsById[id],
        topReviewers: () => {
            const reviewerMap = {};
            reviews.forEach(review => {
                const { author, usefulnessScore } = review;
                if (!reviewerMap[author]) {
                    reviewerMap[author] = {
                        id: author,
                        numberOfReviews: 0,
                        totalReviewScore: 0
                    };
                }
                reviewerMap[author].numberOfReviews += 1;
                reviewerMap[author].totalReviewScore += usefulnessScore;
            });

            const reviewers = _.values(reviewerMap);
            reviewers.forEach(reviewer => {
                reviewer.averageReviewScore = reviewer.totalReviewScore / reviewer.numberOfReviews;
                delete reviewer.totalReviewScore;
            });
            return {
                reviewers: _.reverse(_.sortBy(reviewers, ['numberOfReviews']))
            };
        }
    }
}

module.exports = resolvers;