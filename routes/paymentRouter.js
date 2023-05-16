const router = require('express').Router()
const paymentCtrl = require('../controllers/paymentCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')

const postPay = require('../models/paymentModel')

router.route('/payment')
    .get(auth, authAdmin, paymentCtrl.getPayments)
    .post(auth, paymentCtrl.createPayment)

    //update Posts

router.put('/payment/update/:id', (req, res) => {
    postPay.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body
        },
        (err, postPay) => {
            if (err) {
                return res.status(400).json({ error: err });
            }
            return res.status(200).json({
                success: "Updated Succesfully",
                

            });
        }

    );
});


//delete post
router.delete('/payment/delete/:id', (req, res) => {
    postPay.findByIdAndRemove(req.params.id).exec((err, deletedPay) => {
        if (err)
            return res.status(400).json({
                massage: "Delete unsuccesful",
                err
            });
        return res.json({
            massege: "Delete Succesfully",
            existingPosts:deletedPay

        });


    });
});

router.get('/Ord', (req, res) => {
    postPay.find().exec((err, postPay) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: true,
            existingPosts: postPay
        });

    });
});

router.get('/payment/:id', async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await Posts.findById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        return res.status(200).json({
            success: true,
            post
        });
    } catch (err) {
        return res.status(400).json({ success: false, error: err.message });
    }
});


module.exports = router