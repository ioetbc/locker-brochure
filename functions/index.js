const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({ origin: true });

// TODO put these values in config
admin.initializeApp({
    apiKey: "AIzaSyAj90jyiim-24ChI-z9ox0maDNDz0fMb2M",
    authDomain: "locker-8bd45.firebaseapp.com",
    databaseURL: "https://locker-8bd45.firebaseio.com",
    projectId: "locker-8bd45",
    storageBucket: "locker-8bd45.appspot.com",
    messagingSenderId: "960191982754",
    appId: "1:960191982754:web:485e5e1434250c5b13fbfb",
    measurementId: "G-B5GBRSZ0V2"
});

const db = admin.firestore();

exports.getDownloadCount = functions.https.onRequest(async (req, res) => {
    cors(req, res, async () => {
        const ref = db.collection('downloadCounter').doc('yVKW54i1BmjDx1kU1pf9');
        let count = '0';

        ref.get()
            .then(doc => {
                if (!doc.exists) {
                    return console.log('No such document!');
                } else {
                    const currentCount = doc.data();
                    console.log('fuck shit balls', currentCount.count);
                    count = currentCount.count;
                    return count;
                }
            })
            .catch(() => res.send(500));

        res.send(300, count)
    });
});

exports.increaseDownloadCount = functions.https.onRequest(async (req, res) => {
    cors(req, res, async () => {
        const ref = db.collection('downloadCounter').doc('yVKW54i1BmjDx1kU1pf9');
        let count = '0';

        ref.get()
            .then(doc => {
                if (!doc.exists) {
                    return console.log('No such document!');
                } else {
                    const currentCount = doc.data();
                    console.log('the current count', currentCount.count);
                    count = currentCount.count;

                    const updatedCount = parseInt(count, 10) + 1;
                    console.log('updatedCount', updatedCount)
            
                    return ref.update({ 'count': updatedCount })
                        .then(() => res.send(200))
                        .catch(() => res.send(500));
                }
            })
            .catch(() => res.send(500));

        return res.send(200);
    });
});