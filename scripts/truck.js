(function (window) {
    'use strict';
    var App = window.App || {};

    class Truck {
        constructor(truckId, db) {
            console.log('running the Truck constructor.');
            this.truckId = truckId;
            this.db = db;
        }

        createOrder(order) {
            console.log('Adding order for ' + order.emailAddress);
            return this.db.add(order.emailAddress, order);
        }

        deliverOrder(customerId) {
            console.log('Delivering order for ' + customerId);
            return this.db.remove(customerId);
        }

        removeOrder(order) {
            console.log('Removing order for ' + order.emailAddress);
            this.db.remove(order.emailAddress, order);
        }

        printOrders(printFn) {
            return this.db.getAll()
                .then(function (orders) {
                    var customerIdArray = Object.keys(orders);
                    console.log('Truck #' + this.truckId + ' has pending orders:');
                    customerIdArray.forEach(function (id) {
                        console.log(orders[id]);
                        if (printFn) {
                            printFn(orders[id]);
                        }
                    }.bind(this));
                }.bind(this));
        }

        static runTests(truck) {
            truck.createOrder({
                emailAddress: 'm@bond.com',
                coffee: 'earl grey'
            });
            truck.createOrder({
                emailAddress: 'dr@no.com',
                coffee: 'decaf'
            });
            truck.createOrder({
                emailAddress: 'me@goldfinger.com',
                coffee: 'double mocha'
            });
            truck.printOrders();
            truck.deliverOrder('m@bond.com');
            truck.deliverOrder('dr@no.com');
            truck.printOrders();
            truck.deliverOrder('me@goldfinger.com');
            truck.printOrders();
        }
    }

    App.Truck = Truck;
    window.App = App;
})(window);