const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({ origin: true });

// TODO put these values in config

const db = admin.firestore();

exports.getDownloadCount = functions.https.onRequest(async (req, res) => {
    cors(req, res, async () => {
        const ref = db.collection('downloadCounter').doc('');
        let count = 'hello';

        await ref.get()
            .then(doc => {
                if (!doc.exists) {
                    return console.log('No such document!');
                } else {
                    const currentCount = doc.data();
                    count = currentCount.count;

                    return count;
                }
            })
            .catch(() => res.send(500));

        res.send({ count: count })
    });
});

exports.increaseDownloadCount = functions.https.onRequest(async (req, res) => {
    cors(req, res, async () => {
        const ref = db.collection('downloadCounter').doc('');
        let count = '0';

        ref.get()
            .then(doc => {
                if (!doc.exists) {
                    return console.log('No such document!');
                } else {
                    const currentCount = doc.data();
                    count = currentCount.count;
                    const updatedCount = parseInt(count, 10) + 1;

                    return ref.update({ 'count': updatedCount })
                        .then(() => res.send(200))
                        .catch(() => res.send(500));
                }
            })
            .catch(() => res.send(500));

        return res.send(200);
    });
});

exports.getReviews = functions.https.onRequest(async (req, res) => {
    cors(req, res, async () => {
        const ref = db.collection('reviews').doc('');
        let reviews = [];

        await ref.get()
            .then(doc => {
                if (!doc.exists) {
                    return console.log('No such document!');
                } else {
                    const data = doc.data();
                    reviews = data.reviews;
                    return reviews;
                }
            })
            .catch(() => res.send(500));

        res.send({ reviews: reviews })
    });
});

exports.addReview = functions.https.onRequest(async (req, res) => {
    cors(req, res, async () => {
        const ref = db.collection('reviews').doc('');

        ref.get()
            .then(doc => {
                if (!doc.exists) {
                    return console.log('No such document!');
                } else {            
                    return ref.update({
                        reviews: admin.firestore.FieldValue.arrayUnion(req.body.review)
                    })
                        .then(() => res.send(200))
                        .catch(() => res.send(500));
                }
            })
            .catch(() => res.send(500));

        return res.send(200);
    });
});