"use strict";

var express = require('express');

var app = express();
app.set('json spaces', 2);

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 5000;

app.get('/', function (req, res) {

   const dateToday = new Date();
   const dateString = dateToday.toISOString()
   const startTime = new Date(new Date().setMinutes(dateToday.getMinutes() - 13));
   const startTimeString = startTime.toISOString()
   const endTime = new Date(new Date().setMinutes(dateToday.getMinutes() + 47));
   const endTimeString = endTime.toISOString()

   res.json([
      {
         "type": "policy_created",
         "payload": {
            "timestamp": startTimeString,
            "policy_id": "dev_pol_0000003",
            "start_date": startTimeString,
            "end_date": endTimeString,
            "vehicle": {
               "prettyVrm": "MA77 GRO",
               "make": "Volkswagen",
               "model": "Polo",
               "variant": "SE 16V",
               "color": "Silver",
               "notes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tortor pulvinar, lacinia leo sit amet, iaculis ligula. Maecenas accumsan condimentum lectus, posuere finibus lorem sollicitudin non."
            }
         }
      },
      {
         "type": "policy_created",
         "payload": {
            "timestamp": "2019-04-17T10:15:29.979Z",
            "policy_id": "dev_pol_0000001",
            "start_date": "2019-04-17T10:15:30.000Z",
            "end_date": "2019-04-17T11:15:30.000Z",
            "vehicle": {
               "prettyVrm": "MA77 GRO",
               "make": "Volkswagen",
               "model": "Polo",
               "variant": "SE 16V",
               "color": "Silver",
               "notes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tortor pulvinar, lacinia leo sit amet, iaculis ligula. Maecenas accumsan condimentum lectus, posuere finibus lorem sollicitudin non."
            }
         }
      },
      {
         "type": "policy_created",
         "payload": {
            "timestamp": "2019-04-19T19:15:29.979Z",
            "policy_id": "dev_pol_0000002",
            "start_date": "2019-04-19T19:15:30.000Z",
            "end_date": "2019-04-20T00:15:30.000Z",
            "vehicle": {
               "prettyVrm": "MA77 GRO",
               "make": "Volkswagen",
               "model": "Polo",
               "variant": "SE 16V",
               "color": "Silver",
               "notes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tortor pulvinar, lacinia leo sit amet, iaculis ligula. Maecenas accumsan condimentum lectus, posuere finibus lorem sollicitudin non."
            }
         }
      },
      {
         "type": "policy_created",
         "payload": {
            "timestamp": "2020-03-19T19:15:29.979Z",
            "policy_id": "dev_pol_0000008",
            "start_date": "2020-03-19T19:15:30.000Z",
            "end_date": "2020-03-20T00:15:30.000Z",
            "vehicle": {
               "prettyVrm": "HA15 SIN",
               "make": "Mercedes Benz",
               "model": "A35",
               "variant": "AMG",
               "color": "Mountain Grey",
               "notes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
         }
      },
      {
         "type": "policy_created",
         "payload": {
            "timestamp": "2020-04-19T19:15:29.979Z",
            "policy_id": "dev_pol_0000004",
            "start_date": "2020-04-19T19:15:30.000Z",
            "end_date": "2020-04-20T00:15:30.000Z",
            "vehicle": {
               "prettyVrm": "HA15 SIN",
               "make": "Mercedes Benz",
               "model": "A35",
               "variant": "AMG",
               "color": "Mountain Grey",
               "notes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
         }
      },
      {
         "type": "policy_extension",
         "payload": {
            "timestamp": "2020-04-20T00:15:30.000Z",
            "policy_id": "dev_pol_0000005",
            "original_policy_id": "dev_pol_0000004",
            "start_date": "2020-04-20T00:15:30.000Z",
            "end_date": "2020-04-20T05:15:30.000Z"
         }
      },
      {
         "type": "policy_created",
         "payload": {
            "timestamp": "2020-05-11T10:15:29.979Z",
            "policy_id": "dev_pol_0000006",
            "start_date": "2020-05-11T10:15:30.000Z",
            "end_date": "2020-05-11T11:15:30.000Z",
            "vehicle": {
               "prettyVrm": "RA64 ELA",
               "make": "Fiat",
               "model": "Doblo",
               "variant": null,
               "color": "Red",
               "notes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tortor pulvinar, lacinia leo sit amet, iaculis ligula. Maecenas accumsan condimentum lectus, posuere finibus lorem sollicitudin non. Ut lobortis maximus odio nec laoreet. Phasellus congue maximus viverra. Cras ac mauris vitae leo pretium pellentesque sit amet non leo."
            }
         }
      },
      {
         "type": "policy_created",
         "payload": {
            "timestamp": "2020-05-12T10:15:29.979Z",
            "policy_id": "dev_pol_0000007",
            "start_date": "2020-05-12T10:15:30.000Z",
            "end_date": "2020-05-12T11:15:30.000Z",
            "vehicle": {
               "prettyVrm": "RA64 ELA",
               "make": "Fiat",
               "model": "Doblo",
               "variant": null,
               "color": "Red",
               "notes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tortor pulvinar, lacinia leo sit amet, iaculis ligula. Maecenas accumsan condimentum lectus, posuere finibus lorem sollicitudin non. Ut lobortis maximus odio nec laoreet. Phasellus congue maximus viverra. Cras ac mauris vitae leo pretium pellentesque sit amet non leo."
            }
         }
      },
      {
         "type": "policy_cancelled",
         "payload": {
            "timestamp": "2020-05-11T10:45:48.669Z",
            "policy_id": "dev_pol_0000006",
            "cancellation_type": "void",
            "new_end_date": null
         }
      },
   ]);
});

app.listen(port, function () {
   console.log('App is running on http://localhost:' + port);
});