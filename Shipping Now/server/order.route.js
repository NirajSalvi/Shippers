const express = require('express');
const orderRoutes = express.Router();
let Order = require('./order.model');

orderRoutes.route('/add').post(function (req, res) {
    let order = new Order(req.body);
    order.save()
        .then(order => {
            // const order2 = Order.findById({ _id: book.order })
            // order2.publishedBooks.push(book);
            // order2.save();

            res.status(200).json({ 'order': 'order  added successfully' });
        })
        .catch(err => {
            console.log(err);
            res.status(400).send("unable to save to database");
        });
});

orderRoutes.route('/').get(function (req, res) {
    Order.find(function (err, orders) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(orders);
        }
    });
});

// orderRoutes.route('/edit/:id').put(function (req, res) {
//     let id = req.params.id;
//     console.log(req.params);
//     Order.findById(id, function (err, order) {
//         res.json(order);
//     });
// });

// orderRoutes.route('/editOrder/:id').get(function (req, res) {
//     let id = req.params.id;
//     console.log(req.params);
//     Order.findById(id, function (err, order) {
//         res.json(order);
//     });
// });

// orderRoutes.route('/update/:id').post(function (req, res) {
//     Order.findById(req.params.id, function (err, order) {
//         if (!order)
//             res.status(404).send("data is not found");
//         else {
//             order.customer_name = req.body.customer_name;
//             order.item_des = req.body.item_des;
//             order.order_name = req.body.order_name;
//             order.source = req.body.source;
//             order.destination = req.body.destination;
//             order.weight = req.body.weight;
//             order.price = req.body.price;
//             order.email = req.body.email;
//             order.payment_status = req.body.payment_status;

//             order.save().then(order => {
//                 res.json('Update complete');
//             })
//                 .catch(err => {
//                     res.status(400).send("unable to update the database");
//                 });
//         }
//     });
// });


orderRoutes.put('/update/:id',
    async (req, res) => {
        const { customer_name,email,item_des,ship_name, source, destination,weight,price,payment_status} = req.body;
        try {
            const newOrder = {};
            if (customer_name) {
                newOrder.customer_name = customer_name;
            }
            if (item_des) {
                newOrder.item_des = item_des;
            }
            if (ship_name) {
                newOrder.order_name = ship_name;
            }
            if (source) {
                newOrder.source = source;
            }
            if (destination) {
                newOrder.destination = destination;
            }
            if (weight) {
                newOrder.weight = weight;
            }
            if (price) {
                newOrder.price = price;
            }
            if (email) {
                newOrder.email = email;
            }
            if (payment_status) {
                newOrder.payment_status = payment_status;
            }

            let oldOrder = await Order.findById(req.params.id);
            if (!oldOrder) {
                res.status(404).send("Order not found");
            }

            oldOrder = await Order.findByIdAndUpdate(req.params.id, { $set: newOrder }, { new: true })
            res.json("Order has been successfully updated!!");
        }
        catch (error) {
            console.error(error.message);
            res.status(500).send("Some error occured");
        }
    }
)

orderRoutes.route('/delete/:id').delete(function (req, res) {
    Order.findByIdAndRemove({ _id: req.params.id }, function (err, order) {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
});
// orderRoutes.route('/delete/:id').get(function (req, res) {
//     Order.findByIdAndRemove({ _id: req.params.id }, function (err, order) {
//         if (err) res.json(err);
//         else res.json('Successfully removed');
//     });
// });

module.exports = orderRoutes;