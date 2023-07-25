const express = require('express');
const shipRoutes = express.Router();
let Ship = require('./ship.model');

shipRoutes.route('/add').post(function (req, res) {
    let ship = new Ship(req.body);
    ship.save()
        .then(ship => {
            res.status(200).json({ 'ship': 'ship added successfully' });
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

shipRoutes.route('/').get(function (req, res) {
    Ship.find(function (err, ships) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(ships);
        }
    });
});

shipRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Ship.findById(id, function (err, ship) {
        res.json(ship);
    });
});

// shipRoutes.route('/update/:id').put(function (req, res) {
//     Ship.findById(req.params.id, function (err, ship) {
//         if (!ship)
//             res.status(404).send("data is not found");
//         else {
//             ship.ship_name = req.body.ship_name;
//             ship.source = req.body.source;
//             ship.destination = req.body.destination;
//             ship.capacity = req.body.capacity;

//             ship.save().then(ship => {
//                 res.json('Update complete');
//             })
//                 .catch(err => {
//                     res.status(400).send("unable to update the database");
//                 });
//         }
//     });
// });

shipRoutes.put('/update/:id',
    async (req, res) => {
        const { ship_name, source, destination, capacity } = req.body;
        try {
            const newShip = {};
            if (ship_name) {
                newShip.ship_name = ship_name;
            }
            if (source) {
                newShip.source = source;
            }
            if (destination) {
                newShip.destination = destination;
            }
            if (capacity) {
                newShip.capacity = capacity;
            }         
            let oldShip = await Ship.findById(req.params.id);
            if (!oldShip) {
                res.status(404).send("Ship not found");
            }

            oldShip = await Ship.findByIdAndUpdate(req.params.id, { $set: newShip }, { new: true })
            res.json("Ship has been successfully updated!!");
        }
        catch (error) {
            console.error(error.message);
            res.status(500).send("Some error occured");
        }
    }
)



// shipRoutes.route('/update/:id').post(function (req, res) {
//     Ship.findById(req.params.id, function (err, ship) {
//         if (!ship)
//             res.status(404).send("data is not found");
//         else {
//             ship.ship_name = req.body.ship_name;
//             ship.source = req.body.source;
//             ship.destination = req.body.destination;
//             ship.capacity = req.body.capacity;

//             ship.save().then(ship => {
//                 res.json('Update complete');
//             })
//                 .catch(err => {
//                     res.status(400).send("unable to update the database");
//                 });
//         }
//     });
// });

shipRoutes.route('/delete/:id').delete(function (req, res) {
    Ship.findByIdAndRemove({ _id: req.params.id }, function (err, ship) {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = shipRoutes;