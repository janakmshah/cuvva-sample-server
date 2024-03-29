"use strict";

var express = require('express');

var app = express();
app.set('json spaces', 2);

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 5000;

app.get('/08-10-2020', function (req, res) {

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

app.get('/', function(req, res) {

   const dateToday = new Date();
   const dateString = dateToday.toISOString()
   const startTime = new Date(new Date().setMinutes(dateToday.getMinutes() - 13));
   const startTimeString = startTime.toISOString()
   const endTime = new Date(new Date().setMinutes(dateToday.getMinutes() + 47));
   const endTimeString = endTime.toISOString()

    res.json([  
   {  
      "type":"policy_created",
      "timestamp":"2019-01-18T10:15:29.979Z",
      "unique_key":"policy:dev_pol_000000BansDm7Jjbj3k4R1IUJwrEe",
      "payload":{  
         "user_id":"user_000000BSJ47k7mKYfWUhkWOrxLYGm",
         "user_revision":"dev_profilerev_000000Bali5AZE5CMFSW3JWGClpxY",
         "policy_id":"dev_pol_000000BansDm7Jjbj3k4R1IUJwrEe",
         "original_policy_id":"dev_pol_000000BansDm7Jjbj3k4R1IUJwrEe",
         "reference_code":"PP32DFCS5W",
         "start_date":"2019-01-18T10:15:30.000Z",
         "end_date":"2019-04-18T11:15:30.000Z",
         "incident_phone":"+442038287127",
         "vehicle":{  
            "vrm":"LB07SEO",
            "prettyVrm":"LB07 SEO",
            "make":"Volkswagen",
            "model":"Polo",
            "variant":"SE 16V",
            "color":"Silver"
         },
         "documents":{  
            "certificate_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/documents/dev_certdoc_000000BansDsylsQfKsbDmtldL8Xw?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581783759&Signature=v3NyWPmwRhEp2xLyiFVuGVLSJfM%3D",
            "terms_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/standard-documents/mulsanne-hourly-terms-policy/5?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581769754&Signature=ko8kMtW1nQiMxVRDUciqXTZe%2B%2B4%3D"
         }
      }
   },
   {  
      "type":"policy_financial_transaction",
      "timestamp":"2019-01-18T10:15:32.250Z",
      "unique_key":"transaction:dev_tx_000000BansDm7JjbiFjqm6TTTFPdo",
      "payload":{  
         "policy_id":"dev_pol_000000BansDm7Jjbj3k4R1IUJwrEe",
         "pricing":{  
            "underwriter_premium":499,
            "commission":166,
            "total_premium":665,
            "ipt":80,
            "ipt_rate":1200,
            "extra_fees":125,
            "vat":0,
            "deductions":0,
            "total_payable":870
         }
      }
   },
   {  
      "type":"policy_created",
      "timestamp":"2019-01-18T10:19:52.335Z",
      "unique_key":"policy:dev_pol_000000Bansgsrh9klPoJ5juzKjh2W",
      "payload":{  
         "user_id":"user_000000BSJ47k7mKYfWUhkWOrxLYGm",
         "user_revision":"dev_profilerev_000000Bali5AZE5CMFSW3JWGClpxY",
         "policy_id":"dev_pol_000000Bansgsrh9klPoJ5juzKjh2W",
         "original_policy_id":"dev_pol_000000Bansgsrh9klPoJ5juzKjh2W",
         "reference_code":"PPKQ96JA5W",
         "start_date":"2019-01-18T10:19:52.000Z",
         "end_date":"2019-01-18T11:19:52.000Z",
         "incident_phone":"+442038287127",
         "vehicle":{  
            "vrm":"FX1",
            "prettyVrm":"FX 1",
            "make":"Mercedes-Benz",
            "model":"C350",
            "variant":"E Sport Premium Plus Hybrid",
            "color":"Blue"
         },
         "documents":{  
            "certificate_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/documents/dev_certdoc_000000Bansgsrh9kkVmgOPgxu9flY?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581783759&Signature=6NKYMc1D9kpyQN6HulA%2Fzc%2FJgJc%3D",
            "terms_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/standard-documents/mulsanne-hourly-terms-policy/5?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581769754&Signature=ko8kMtW1nQiMxVRDUciqXTZe%2B%2B4%3D"
         }
      }
   },
   {  
      "type":"policy_financial_transaction",
      "timestamp":"2019-01-18T10:19:54.734Z",
      "unique_key":"transaction:dev_tx_000000Bansgsrh9kkbo5Qp5yU2FRg",
      "payload":{  
         "policy_id":"dev_pol_000000Bansgsrh9klPoJ5juzKjh2W",
         "pricing":{  
            "underwriter_premium":648,
            "commission":216,
            "total_premium":864,
            "ipt":104,
            "ipt_rate":1200,
            "extra_fees":125,
            "vat":0,
            "deductions":0,
            "total_payable":1093
         }
      }
   },
   {  
      "type":"policy_created",
      "timestamp":"2019-01-18T10:23:47.395Z",
      "unique_key":"policy:dev_pol_000000Bant6tTMat4jIG9pN1aI8TA",
      "payload":{  
         "user_id":"user_000000BSJ47k7mKYfWUhkWOrxLYGm",
         "user_revision":"dev_profilerev_000000Bali5AZE5CMFSW3JWGClpxY",
         "policy_id":"dev_pol_000000Bant6tTMat4jIG9pN1aI8TA",
         "original_policy_id":"dev_pol_000000Bant6tTMat4jIG9pN1aI8TA",
         "reference_code":"PFK38GJAXQ",
         "start_date":"2019-01-18T10:23:47.000Z",
         "end_date":"2019-01-18T11:23:47.000Z",
         "incident_phone":"+442038287127",
         "vehicle":{  
            "vrm":"EF51ZNM",
            "prettyVrm":"EF51 ZNM",
            "make":"MINI",
            "model":"Cooper",
            "color":"Silver"
         },
         "documents":{  
            "certificate_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/documents/dev_certdoc_000000Bant6tTMat3pGdSV909i7CC?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581783759&Signature=t%2Bi0fZfO9KWKGxCXCDwefycntnQ%3D",
            "terms_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/standard-documents/mulsanne-hourly-terms-policy/5?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581769754&Signature=ko8kMtW1nQiMxVRDUciqXTZe%2B%2B4%3D"
         }
      }
   },
   {  
      "type":"policy_financial_transaction",
      "timestamp":"2019-01-18T10:23:50.389Z",
      "unique_key":"transaction:dev_tx_000000Bant6tTMat3vI2UuY0jagsK",
      "payload":{  
         "policy_id":"dev_pol_000000Bant6tTMat4jIG9pN1aI8TA",
         "pricing":{  
            "underwriter_premium":499,
            "commission":166,
            "total_premium":665,
            "ipt":80,
            "ipt_rate":1200,
            "extra_fees":125,
            "vat":0,
            "deductions":0,
            "total_payable":870
         }
      }
   },
   {  
      "type":"policy_created",
      "timestamp":"2019-01-18T13:15:43.079Z",
      "unique_key":"policy:dev_pol_000000BaoBWfVsR3sEcVPRPMpOPLM",
      "payload":{  
         "user_id":"user_000000BSJ47k7mKYfWUhkWOrxLYGm",
         "user_revision":"dev_profilerev_000000Bali5AZE5CMFSW3JWGClpxY",
         "policy_id":"dev_pol_000000BaoBWfVsR3sEcVPRPMpOPLM",
         "original_policy_id":"dev_pol_000000BaoBWfVsR3sEcVPRPMpOPLM",
         "reference_code":"PPKD3C5AXQ",
         "start_date":"2019-01-18T13:15:43.000Z",
         "end_date":"2019-01-18T14:15:43.000Z",
         "incident_phone":"+442038287127",
         "vehicle":{  
            "vrm":"FX1",
            "prettyVrm":"FX 1",
            "make":"Mercedes-Benz",
            "model":"C350",
            "variant":"E Sport Premium Plus Hybrid",
            "color":"Blue"
         },
         "documents":{  
            "certificate_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/documents/dev_certdoc_000000BaoBWfVsR3rKasi7BLOoO4O?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581783759&Signature=7xPNOmr2LsuQ82FrOdO1055q4Fk%3D",
            "terms_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/standard-documents/mulsanne-hourly-terms-policy/5?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581769754&Signature=ko8kMtW1nQiMxVRDUciqXTZe%2B%2B4%3D"
         }
      }
   },
   {  
      "type":"policy_financial_transaction",
      "timestamp":"2019-01-18T13:15:45.496Z",
      "unique_key":"transaction:dev_tx_000000BaoBWfVsR3rM8CDEuvDuqkS",
      "payload":{  
         "policy_id":"dev_pol_000000BaoBWfVsR3sEcVPRPMpOPLM",
         "pricing":{  
            "underwriter_premium":648,
            "commission":216,
            "total_premium":864,
            "ipt":104,
            "ipt_rate":1200,
            "extra_fees":125,
            "vat":0,
            "deductions":0,
            "total_payable":1093
         }
      }
   },
   {  
      "type":"policy_created",
      "timestamp":"2019-01-18T14:08:21.662Z",
      "unique_key":"policy:dev_pol_000000BaoHACDJmSErleGGVySn2AK",
      "payload":{  
         "user_id":"user_000000BSJ47k7mKYfWUhkWOrxLYGm",
         "user_revision":"dev_profilerev_000000Bali5AZE5CMFSW3JWGClpxY",
         "policy_id":"dev_pol_000000BaoHACDJmSErleGGVySn2AK",
         "original_policy_id":"dev_pol_000000BaoHACDJmSErleGGVySn2AK",
         "reference_code":"PPKYP9XAXQ",
         "start_date":"2019-01-18T14:08:21.000Z",
         "end_date":"2019-01-18T15:08:21.000Z",
         "incident_phone":"+442038287127",
         "vehicle":{  
            "vrm":"EF51ZNM",
            "prettyVrm":"EF51 ZNM",
            "make":"MINI",
            "model":"Cooper",
            "color":"Silver"
         },
         "documents":{  
            "certificate_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/documents/dev_certdoc_000000BaoHACDJmSDxk1YwHx2D0tM?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581783759&Signature=%2BqgPhl6O0xWI50W5lGR%2B3fnLPJw%3D",
            "terms_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/standard-documents/mulsanne-hourly-terms-policy/5?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581769754&Signature=ko8kMtW1nQiMxVRDUciqXTZe%2B%2B4%3D"
         }
      }
   },
   {  
      "type":"policy_financial_transaction",
      "timestamp":"2019-01-18T14:08:23.819Z",
      "unique_key":"transaction:dev_tx_000000BaoHACDJmSDzHL441WrJTZQ",
      "payload":{  
         "policy_id":"dev_pol_000000BaoHACDJmSErleGGVySn2AK",
         "pricing":{  
            "underwriter_premium":499,
            "commission":166,
            "total_premium":665,
            "ipt":80,
            "ipt_rate":1200,
            "extra_fees":125,
            "vat":0,
            "deductions":0,
            "total_payable":870
         }
      }
   },
   {  
      "type":"policy_created",
      "timestamp":"2019-01-18T16:08:45.931Z",
      "unique_key":"policy:dev_pol_000000BaoU3kSLfTfckqhG3f0gSoa",
      "payload":{  
         "user_id":"user_000000BSJ47k7mKYfWUhkWOrxLYGm",
         "user_revision":"dev_profilerev_000000BaoU1JUMXOfmnl64xZ7Ujh2",
         "policy_id":"dev_pol_000000BaoU3kSLfTfckqhG3f0gSoa",
         "original_policy_id":"dev_pol_000000BaoU3kSLfTfckqhG3f0gSoa",
         "reference_code":"PPK7VVPA5Q",
         "start_date":"2019-01-18T16:08:46.000Z",
         "end_date":"2019-01-18T17:08:46.000Z",
         "incident_phone":"+442038287127",
         "vehicle":{  
            "vrm":"EF51ZNM",
            "prettyVrm":"EF51 ZNM",
            "make":"MINI",
            "model":"Cooper",
            "color":"Silver"
         },
         "documents":{  
            "certificate_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/documents/dev_certdoc_000000BaoU3kSLfTeijDzvpda6RXc?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581783759&Signature=4E9ai89jI16mwM%2FXiHNw4SDfIrI%3D",
            "terms_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/standard-documents/mulsanne-hourly-terms-policy/5?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581769754&Signature=ko8kMtW1nQiMxVRDUciqXTZe%2B%2B4%3D"
         }
      }
   },
   {  
      "type":"policy_financial_transaction",
      "timestamp":"2019-01-18T16:08:51.091Z",
      "unique_key":"transaction:dev_tx_000000BaoU3kSLfTekGXV3ZDPCuDg",
      "payload":{  
         "policy_id":"dev_pol_000000BaoU3kSLfTfckqhG3f0gSoa",
         "pricing":{  
            "underwriter_premium":499,
            "commission":166,
            "total_premium":665,
            "ipt":80,
            "ipt_rate":1200,
            "extra_fees":0,
            "vat":0,
            "deductions":745,
            "total_payable":0
         }
      }
   },
   {  
      "type":"policy_created",
      "timestamp":"2019-01-21T18:20:26.451Z",
      "unique_key":"policy:dev_pol_000000BawAsUCate8ayLSIkaudRDc",
      "payload":{  
         "user_id":"user_000000BSJ47k7mKYfWUhkWOrxLYGm",
         "user_revision":"dev_profilerev_000000BaoU1JUMXOfmnl64xZ7Ujh2",
         "policy_id":"dev_pol_000000BawAsUCate8ayLSIkaudRDc",
         "original_policy_id":"dev_pol_000000BawAsUCate8ayLSIkaudRDc",
         "reference_code":"PPKR28665Q",
         "start_date":"2019-01-21T18:20:26.000Z",
         "end_date":"2019-01-21T19:20:26.000Z",
         "incident_phone":"+442038287127",
         "vehicle":{  
            "vrm":"LB07SEO",
            "prettyVrm":"LB07 SEO",
            "make":"Volkswagen",
            "model":"Polo",
            "variant":"SE 16V",
            "color":"Silver"
         },
         "documents":{  
            "certificate_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/documents/dev_certdoc_000000BawAsUCate9E5OcoDvgmZ0q?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581783759&Signature=Uo4RqnZHQHNjyQnlQBQk84k70io%3D",
            "terms_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/standard-documents/mulsanne-hourly-terms-policy/5?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581769754&Signature=ko8kMtW1nQiMxVRDUciqXTZe%2B%2B4%3D"
         }
      }
   },
   {  
      "type":"policy_financial_transaction",
      "timestamp":"2019-01-21T18:20:28.889Z",
      "unique_key":"transaction:dev_tx_000000BawAsUCate8sLlOvB3BW1cu",
      "payload":{  
         "policy_id":"dev_pol_000000BawAsUCate8ayLSIkaudRDc",
         "pricing":{  
            "underwriter_premium":499,
            "commission":166,
            "total_premium":665,
            "ipt":80,
            "ipt_rate":1200,
            "extra_fees":125,
            "vat":0,
            "deductions":0,
            "total_payable":870
         }
      }
   },
   {  
      "type":"policy_created",
      "timestamp":"2019-01-21T18:21:09.157Z",
      "unique_key":"policy:dev_pol_000000BawAxFH70zBL0vKLKanSKMi",
      "payload":{  
         "user_id":"user_000000BSJ47k7mKYfWUhkWOrxLYGm",
         "user_revision":"dev_profilerev_000000BaoU1JUMXOfmnl64xZ7Ujh2",
         "policy_id":"dev_pol_000000BawAxFH70zBL0vKLKanSKMi",
         "original_policy_id":"dev_pol_000000BawAxFH70zBL0vKLKanSKMi",
         "reference_code":"PFKYYLRRXQ",
         "start_date":"2019-01-21T18:21:09.000Z",
         "end_date":"2019-01-21T19:21:09.000Z",
         "incident_phone":"+442038287127",
         "vehicle":{  
            "vrm":"EF51ZNM",
            "prettyVrm":"EF51 ZNM",
            "make":"MINI",
            "model":"Cooper",
            "color":"Silver"
         },
         "documents":{  
            "certificate_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/documents/dev_certdoc_000000BawAxFH70zBy7yUqnvZbS9w?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581783759&Signature=Nz%2Bo6miU0Axo%2BAKElVU23iT43zo%3D",
            "terms_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/standard-documents/mulsanne-hourly-terms-policy/5?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581769754&Signature=ko8kMtW1nQiMxVRDUciqXTZe%2B%2B4%3D"
         }
      }
   },
   {  
      "type":"policy_financial_transaction",
      "timestamp":"2019-01-21T18:21:11.561Z",
      "unique_key":"transaction:dev_tx_000000BawAxFH70zBcOLGxl34Kum0",
      "payload":{  
         "policy_id":"dev_pol_000000BawAxFH70zBL0vKLKanSKMi",
         "pricing":{  
            "underwriter_premium":499,
            "commission":166,
            "total_premium":665,
            "ipt":80,
            "ipt_rate":1200,
            "extra_fees":125,
            "vat":0,
            "deductions":0,
            "total_payable":870
         }
      }
   },
   {  
      "type":"policy_created",
      "timestamp":"2019-01-22T11:36:32.187Z",
      "unique_key":"policy:dev_pol_000000Baxxr1EEMaevYZ9yLTsIouu",
      "payload":{  
         "user_id":"user_000000BSJ47k7mKYfWUhkWOrxLYGm",
         "user_revision":"dev_profilerev_000000BaoU1JUMXOfmnl64xZ7Ujh2",
         "policy_id":"dev_pol_000000Baxxr1EEMaevYZ9yLTsIouu",
         "original_policy_id":"dev_pol_000000Baxxr1EEMaevYZ9yLTsIouu",
         "reference_code":"PPK982FG5Q",
         "start_date":"2019-01-22T11:36:32.000Z",
         "end_date":"2019-01-22T12:36:32.000Z",
         "incident_phone":"+442038287127",
         "vehicle":{  
            "vrm":"EF51ZNM",
            "prettyVrm":"EF51 ZNM",
            "make":"MINI",
            "model":"Cooper",
            "color":"Silver"
         },
         "documents":{  
            "certificate_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/documents/dev_certdoc_000000Baxxr1EEMadaFVTuf5qho6y?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581783759&Signature=9TXelvhAZ9GRTWDoOm02JflR7bA%3D",
            "terms_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/standard-documents/mulsanne-hourly-terms-policy/5?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581769754&Signature=ko8kMtW1nQiMxVRDUciqXTZe%2B%2B4%3D"
         }
      }
   },
   {  
      "type":"policy_financial_transaction",
      "timestamp":"2019-01-22T11:36:34.231Z",
      "unique_key":"transaction:dev_tx_000000Baxxr1EEMads34yq1qJtyzI",
      "payload":{  
         "policy_id":"dev_pol_000000Baxxr1EEMaevYZ9yLTsIouu",
         "pricing":{  
            "underwriter_premium":499,
            "commission":166,
            "total_premium":665,
            "ipt":80,
            "ipt_rate":1200,
            "extra_fees":125,
            "vat":0,
            "deductions":0,
            "total_payable":870
         }
      }
   },
   {  
      "type":"policy_created",
      "timestamp":"2019-01-22T12:00:47.642Z",
      "unique_key":"policy:dev_pol_000000Bay0S3ffONTupAOjIIkOxoO",
      "payload":{  
         "user_id":"user_000000BSJ47k7mKYfWUhkWOrxLYGm",
         "user_revision":"dev_profilerev_000000BaoU1JUMXOfmnl64xZ7Ujh2",
         "policy_id":"dev_pol_000000Bay0S3ffONTupAOjIIkOxoO",
         "original_policy_id":"dev_pol_000000Bay0S3ffONTupAOjIIkOxoO",
         "reference_code":"PFKDRQ6G5W",
         "start_date":"2019-01-22T12:00:48.000Z",
         "end_date":"2019-01-22T13:00:48.000Z",
         "incident_phone":"+442038287127",
         "vehicle":{  
            "vrm":"LB07SEO",
            "prettyVrm":"LB07 SEO",
            "make":"Volkswagen",
            "model":"Polo",
            "variant":"SE 16V",
            "color":"Silver"
         },
         "documents":{  
            "certificate_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/documents/dev_certdoc_000000Bay0S3ffONSZW6ifbuinx0S?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581783759&Signature=74HEImkh1sLfZV4NGEVssVEvg8s%3D",
            "terms_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/standard-documents/mulsanne-hourly-terms-policy/5?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581769754&Signature=ko8kMtW1nQiMxVRDUciqXTZe%2B%2B4%3D"
         }
      }
   },
   {  
      "type":"policy_financial_transaction",
      "timestamp":"2019-01-22T12:00:50.013Z",
      "unique_key":"transaction:dev_tx_000000Bay0S3ffONSrJgDayfC07sm",
      "payload":{  
         "policy_id":"dev_pol_000000Bay0S3ffONTupAOjIIkOxoO",
         "pricing":{  
            "underwriter_premium":499,
            "commission":166,
            "total_premium":665,
            "ipt":80,
            "ipt_rate":1200,
            "extra_fees":125,
            "vat":0,
            "deductions":0,
            "total_payable":870
         }
      }
   },
   {  
      "type":"policy_created",
      "timestamp":"2019-01-22T12:21:56.227Z",
      "unique_key":"policy:dev_pol_000000Bay2iVkfxIlPdJM0KthbLvs",
      "payload":{  
         "user_id":"user_000000BSJ47k7mKYfWUhkWOrxLYGm",
         "user_revision":"dev_profilerev_000000BaoU1JUMXOfmnl64xZ7Ujh2",
         "policy_id":"dev_pol_000000Bay2iVkfxIlPdJM0KthbLvs",
         "original_policy_id":"dev_pol_000000Bay2iVkfxIlPdJM0KthbLvs",
         "reference_code":"PP3J6BRUXW",
         "start_date":"2019-01-22T12:21:56.000Z",
         "end_date":"2019-01-22T13:21:56.000Z",
         "incident_phone":"+442038287127",
         "vehicle":{  
            "vrm":"FX1",
            "prettyVrm":"FX 1",
            "make":"Mercedes-Benz",
            "model":"C350",
            "variant":"E Sport Premium Plus Hybrid",
            "color":"Blue"
         },
         "documents":{  
            "certificate_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/documents/dev_certdoc_000000Bay2iVkfxIk4KFfweVg0L7w?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581783759&Signature=T9ou05PWFVBdWlHz9xD2Zv1kyRQ%3D",
            "terms_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/standard-documents/mulsanne-hourly-terms-policy/5?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581769754&Signature=ko8kMtW1nQiMxVRDUciqXTZe%2B%2B4%3D"
         }
      }
   },
   {  
      "type":"policy_financial_transaction",
      "timestamp":"2019-01-22T12:21:58.596Z",
      "unique_key":"transaction:dev_tx_000000Bay2iVkfxIkM7pAs1G9CW0G",
      "payload":{  
         "policy_id":"dev_pol_000000Bay2iVkfxIlPdJM0KthbLvs",
         "pricing":{  
            "underwriter_premium":648,
            "commission":216,
            "total_premium":864,
            "ipt":104,
            "ipt_rate":1200,
            "extra_fees":125,
            "vat":0,
            "deductions":0,
            "total_payable":1093
         }
      }
   },
   {  
      "type":"policy_created",
      "timestamp":"2019-01-22T12:39:48.934Z",
      "unique_key":"policy:dev_pol_000000Bay4d9zGUK0RBJglMwaCgqW",
      "payload":{  
         "user_id":"user_000000BSJ47k7mKYfWUhkWOrxLYGm",
         "user_revision":"dev_profilerev_000000BaoU1JUMXOfmnl64xZ7Ujh2",
         "policy_id":"dev_pol_000000Bay4d9zGUK0RBJglMwaCgqW",
         "original_policy_id":"dev_pol_000000Bay4d9zGUK0RBJglMwaCgqW",
         "reference_code":"PPKYBE6G5Q",
         "start_date":"2019-01-22T12:39:49.000Z",
         "end_date":"2019-01-22T13:39:49.000Z",
         "incident_phone":"+442038287127",
         "vehicle":{  
            "vrm":"EF51ZNM",
            "prettyVrm":"EF51 ZNM",
            "make":"MINI",
            "model":"Cooper",
            "color":"Silver"
         },
         "documents":{  
            "certificate_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/documents/dev_certdoc_000000Bay4d9zGUJz5sG0hgYYbg2a?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581783759&Signature=DN8IQ5E29dWo9ok9D%2B6oEPN5eXU%3D",
            "terms_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/standard-documents/mulsanne-hourly-terms-policy/5?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581769754&Signature=ko8kMtW1nQiMxVRDUciqXTZe%2B%2B4%3D"
         }
      }
   },
   {  
      "type":"policy_financial_transaction",
      "timestamp":"2019-01-22T12:39:51.070Z",
      "unique_key":"transaction:dev_tx_000000Bay4d9zGUJzNfpVd3J1nquu",
      "payload":{  
         "policy_id":"dev_pol_000000Bay4d9zGUK0RBJglMwaCgqW",
         "pricing":{  
            "underwriter_premium":499,
            "commission":166,
            "total_premium":665,
            "ipt":80,
            "ipt_rate":1200,
            "extra_fees":125,
            "vat":0,
            "deductions":0,
            "total_payable":870
         }
      }
   },
   {  
      "type":"policy_created",
      "timestamp":"2019-01-22T12:55:48.535Z",
      "unique_key":"policy:dev_pol_000000Bay6LPf15ILIOBezj8PsSGG",
      "payload":{  
         "user_id":"user_000000BSJ47k7mKYfWUhkWOrxLYGm",
         "user_revision":"dev_profilerev_000000BaoU1JUMXOfmnl64xZ7Ujh2",
         "policy_id":"dev_pol_000000Bay6LPf15ILIOBezj8PsSGG",
         "original_policy_id":"dev_pol_000000Bay6LPf15ILIOBezj8PsSGG",
         "reference_code":"PFKJPYGGXW",
         "start_date":"2019-01-22T12:55:48.000Z",
         "end_date":"2019-01-22T13:55:48.000Z",
         "incident_phone":"+442038287127",
         "vehicle":{  
            "vrm":"FX3",
            "prettyVrm":"FX 3",
            "make":"Mercedes-Benz",
            "model":"C",
            "variant":"55 AMG",
            "color":"Silver"
         },
         "documents":{  
            "certificate_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/documents/dev_certdoc_000000Bay6LPf15IJx57yw2kOHRSK?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581783759&Signature=%2BbXsnL1WhkXBLQNSYawfWK4Ydgc%3D",
            "terms_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/standard-documents/mulsanne-hourly-terms-policy/5?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581769754&Signature=ko8kMtW1nQiMxVRDUciqXTZe%2B%2B4%3D"
         }
      }
   },
   {  
      "type":"policy_financial_transaction",
      "timestamp":"2019-01-22T12:55:50.930Z",
      "unique_key":"transaction:dev_tx_000000Bay6LPf15IKEshTrPUrTcKe",
      "payload":{  
         "policy_id":"dev_pol_000000Bay6LPf15ILIOBezj8PsSGG",
         "pricing":{  
            "underwriter_premium":704,
            "commission":235,
            "total_premium":939,
            "ipt":113,
            "ipt_rate":1200,
            "extra_fees":125,
            "vat":0,
            "deductions":0,
            "total_payable":1177
         }
      }
   },
   {  
      "type":"policy_created",
      "timestamp":"2019-01-22T13:02:49.852Z",
      "unique_key":"policy:dev_pol_000000Bay760d6zIC6Kb0Z5OaKeSu",
      "payload":{  
         "user_id":"user_000000BSJ47k7mKYfWUhkWOrxLYGm",
         "user_revision":"dev_profilerev_000000BaoU1JUMXOfmnl64xZ7Ujh2",
         "policy_id":"dev_pol_000000Bay760d6zIC6Kb0Z5OaKeSu",
         "original_policy_id":"dev_pol_000000Bay760d6zIC6Kb0Z5OaKeSu",
         "reference_code":"PPKR3XGG5Q",
         "start_date":"2019-01-22T13:02:50.000Z",
         "end_date":"2019-01-22T14:02:50.000Z",
         "incident_phone":"+442038287127",
         "vehicle":{  
            "vrm":"LB07SEO",
            "prettyVrm":"LB07 SEO",
            "make":"Volkswagen",
            "model":"Polo",
            "variant":"SE 16V",
            "color":"Silver"
         },
         "documents":{  
            "certificate_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/documents/dev_certdoc_000000Bay760d6zIAl1XKVP0Yjdey?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581783759&Signature=v2qHjJgNUrkiSpNkJcS2%2BIlQ4C8%3D",
            "terms_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/standard-documents/mulsanne-hourly-terms-policy/5?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581769754&Signature=ko8kMtW1nQiMxVRDUciqXTZe%2B%2B4%3D"
         }
      }
   },
   {  
      "type":"policy_financial_transaction",
      "timestamp":"2019-01-22T13:02:52.242Z",
      "unique_key":"transaction:dev_tx_000000Bay760d6zIB2p6pQll1voXI",
      "payload":{  
         "policy_id":"dev_pol_000000Bay760d6zIC6Kb0Z5OaKeSu",
         "pricing":{  
            "underwriter_premium":499,
            "commission":166,
            "total_premium":665,
            "ipt":80,
            "ipt_rate":1200,
            "extra_fees":125,
            "vat":0,
            "deductions":0,
            "total_payable":870
         }
      }
   },
   {  
      "type":"policy_created",
      "timestamp":"2019-01-22T13:07:53.451Z",
      "unique_key":"policy:dev_pol_000000Bay7dej6F8Mq76Z8dHzzmFM",
      "payload":{  
         "user_id":"user_000000BSJ47k7mKYfWUhkWOrxLYGm",
         "user_revision":"dev_profilerev_000000BaoU1JUMXOfmnl64xZ7Ujh2",
         "policy_id":"dev_pol_000000Bay7dej6F8Mq76Z8dHzzmFM",
         "original_policy_id":"dev_pol_000000Bay7dej6F8Mq76Z8dHzzmFM",
         "reference_code":"PFKFSWUG5W",
         "start_date":"2019-01-22T13:07:53.000Z",
         "end_date":"2019-01-22T14:07:53.000Z",
         "incident_phone":"+442038287127",
         "vehicle":{  
            "vrm":"FX4",
            "prettyVrm":"FX 4",
            "make":"Ford",
            "model":"Mondeo",
            "variant":"Zetec",
            "color":"Gold"
         },
         "documents":{  
            "certificate_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/documents/dev_certdoc_000000Bay7dej6F8LUo2t4wtyOlRQ?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581783759&Signature=52YUDQEk2tCt5%2Fu47cGWGtX0TWw%3D",
            "terms_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/standard-documents/mulsanne-hourly-terms-policy/5?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581769754&Signature=ko8kMtW1nQiMxVRDUciqXTZe%2B%2B4%3D"
         }
      }
   },
   {  
      "type":"policy_financial_transaction",
      "timestamp":"2019-01-22T13:07:56.384Z",
      "unique_key":"transaction:dev_tx_000000Bay7dej6F8LmbcO0JeRawJk",
      "payload":{  
         "policy_id":"dev_pol_000000Bay7dej6F8Mq76Z8dHzzmFM",
         "pricing":{  
            "underwriter_premium":499,
            "commission":166,
            "total_premium":665,
            "ipt":80,
            "ipt_rate":1200,
            "extra_fees":125,
            "vat":0,
            "deductions":0,
            "total_payable":870
         }
      }
   },
   {  
      "type":"policy_created",
      "timestamp":"2019-01-22T13:26:50.266Z",
      "unique_key":"policy:dev_pol_000000Bay9fV0C1ZeZJ3S0Rz4obAm",
      "payload":{  
         "user_id":"user_000000BSJ47k7mKYfWUhkWOrxLYGm",
         "user_revision":"dev_profilerev_000000BaoU1JUMXOfmnl64xZ7Ujh2",
         "policy_id":"dev_pol_000000Bay9fV0C1ZeZJ3S0Rz4obAm",
         "original_policy_id":"dev_pol_000000Bay4d9zGUK0RBJglMwaCgqW",
         "reference_code":"PFK6MTUU5W",
         "start_date":"2019-01-22T13:39:49.000Z",
         "end_date":"2019-01-22T14:09:49.000Z",
         "incident_phone":"+442038287127",
         "vehicle":{  
            "vrm":"EF51ZNM",
            "prettyVrm":"EF51 ZNM",
            "make":"MINI",
            "model":"Cooper",
            "color":"Silver"
         },
         "documents":{  
            "certificate_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/documents/dev_certdoc_000000Bay9fV0C1ZdDzzlwlb3DaMq?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581783759&Signature=2mG32ifrX6OlQoEhCmUtFtFnRWA%3D",
            "terms_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/standard-documents/mulsanne-hourly-terms-policy/5?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581769754&Signature=ko8kMtW1nQiMxVRDUciqXTZe%2B%2B4%3D"
         }
      }
   },
   {  
      "type":"policy_financial_transaction",
      "timestamp":"2019-01-22T13:26:52.387Z",
      "unique_key":"transaction:dev_tx_000000Bay9fV0C1ZdVnZGs8LWPlFA",
      "payload":{  
         "policy_id":"dev_pol_000000Bay9fV0C1ZeZJ3S0Rz4obAm",
         "pricing":{  
            "underwriter_premium":198,
            "commission":66,
            "total_premium":264,
            "ipt":32,
            "ipt_rate":1200,
            "extra_fees":62,
            "vat":0,
            "deductions":0,
            "total_payable":358
         }
      }
   },
   {  
      "type":"policy_created",
      "timestamp":"2019-01-22T13:39:50.944Z",
      "unique_key":"policy:dev_pol_000000BayB3pUF0cB12O3JrlRQPK4",
      "payload":{  
         "user_id":"user_000000BSJ47k7mKYfWUhkWOrxLYGm",
         "user_revision":"dev_profilerev_000000BaoU1JUMXOfmnl64xZ7Ujh2",
         "policy_id":"dev_pol_000000BayB3pUF0cB12O3JrlRQPK4",
         "original_policy_id":"dev_pol_000000BayB3pUF0cB12O3JrlRQPK4",
         "reference_code":"PP35H8GUXW",
         "start_date":"2019-01-22T13:39:51.000Z",
         "end_date":"2019-01-22T14:39:51.000Z",
         "incident_phone":"+442038287127",
         "vehicle":{  
            "vrm":"FX1",
            "prettyVrm":"FX 1",
            "make":"Mercedes-Benz",
            "model":"C350",
            "variant":"E Sport Premium Plus Hybrid",
            "color":"Blue"
         },
         "documents":{  
            "certificate_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/documents/dev_certdoc_000000BayB3pUF0c9fjKNGBNPpOW8?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581783759&Signature=zQ9hXvI3yTeHt8mFJeB3IyBQqB4%3D",
            "terms_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/standard-documents/mulsanne-hourly-terms-policy/5?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581769754&Signature=ko8kMtW1nQiMxVRDUciqXTZe%2B%2B4%3D"
         }
      }
   },
   {  
      "type":"policy_financial_transaction",
      "timestamp":"2019-01-22T13:39:53.335Z",
      "unique_key":"transaction:dev_tx_000000BayB3pUF0c9xWtsBY7t1ZOS",
      "payload":{  
         "policy_id":"dev_pol_000000BayB3pUF0cB12O3JrlRQPK4",
         "pricing":{  
            "underwriter_premium":648,
            "commission":216,
            "total_premium":864,
            "ipt":104,
            "ipt_rate":1200,
            "extra_fees":125,
            "vat":0,
            "deductions":0,
            "total_payable":1093
         }
      }
   },
   {  
      "type":"policy_created",
      "timestamp":"2019-01-22T16:03:36.331Z",
      "unique_key":"policy:dev_pol_000000BayQSYTeNrqDc505VFYs5s8",
      "payload":{  
         "user_id":"user_000000BSJ47k7mKYfWUhkWOrxLYGm",
         "user_revision":"dev_profilerev_000000BaoU1JUMXOfmnl64xZ7Ujh2",
         "policy_id":"dev_pol_000000BayQSYTeNrqDc505VFYs5s8",
         "original_policy_id":"dev_pol_000000BayQSYTeNrqDc505VFYs5s8",
         "reference_code":"PP3WPEMU5Q",
         "start_date":"2019-01-22T16:03:36.000Z",
         "end_date":"2019-01-22T17:03:36.000Z",
         "incident_phone":"+442038287127",
         "vehicle":{  
            "vrm":"FX1",
            "prettyVrm":"FX 1",
            "make":"Mercedes-Benz",
            "model":"C350",
            "variant":"E Sport Premium Plus Hybrid",
            "color":"Blue"
         },
         "documents":{  
            "certificate_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/documents/dev_certdoc_000000BayQSYTeNrosJ1K1orXH54C?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581783759&Signature=iY%2BTHSo6aQ%2Fn7tms7hYImoamfhQ%3D",
            "terms_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/standard-documents/mulsanne-hourly-terms-policy/5?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581769754&Signature=ko8kMtW1nQiMxVRDUciqXTZe%2B%2B4%3D"
         }
      }
   },
   {  
      "type":"policy_financial_transaction",
      "timestamp":"2019-01-22T16:03:38.769Z",
      "unique_key":"transaction:dev_tx_000000BayQSYTeNrpA6aoxBc0TFwW",
      "payload":{  
         "policy_id":"dev_pol_000000BayQSYTeNrqDc505VFYs5s8",
         "pricing":{  
            "underwriter_premium":648,
            "commission":216,
            "total_premium":864,
            "ipt":104,
            "ipt_rate":1200,
            "extra_fees":125,
            "vat":0,
            "deductions":0,
            "total_payable":1093
         }
      }
   },
   {  
      "type":"policy_created",
      "timestamp":"2019-01-22T16:04:43.124Z",
      "unique_key":"policy:dev_pol_000000BayQZyF3uvnHaKWNwVF2B3Q",
      "payload":{  
         "user_id":"user_000000BSJ47k7mKYfWUhkWOrxLYGm",
         "user_revision":"dev_profilerev_000000BaoU1JUMXOfmnl64xZ7Ujh2",
         "policy_id":"dev_pol_000000BayQZyF3uvnHaKWNwVF2B3Q",
         "original_policy_id":"dev_pol_000000BayQZyF3uvnHaKWNwVF2B3Q",
         "reference_code":"PP3GBEMUXW",
         "start_date":"2019-01-22T16:04:43.000Z",
         "end_date":"2019-01-22T17:04:43.000Z",
         "incident_phone":"+442038287127",
         "vehicle":{  
            "vrm":"FX3",
            "prettyVrm":"FX 3",
            "make":"Mercedes-Benz",
            "model":"C",
            "variant":"55 AMG",
            "color":"Silver"
         },
         "documents":{  
            "certificate_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/documents/dev_certdoc_000000BayQZyF3uvlwHGqKG7DRAFU?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581783759&Signature=GQ8xZhXSGTmZFRvMGfrADv42Ri0%3D",
            "terms_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/standard-documents/mulsanne-hourly-terms-policy/5?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581769754&Signature=ko8kMtW1nQiMxVRDUciqXTZe%2B%2B4%3D"
         }
      }
   },
   {  
      "type":"policy_financial_transaction",
      "timestamp":"2019-01-22T16:04:46.603Z",
      "unique_key":"transaction:dev_tx_000000BayQZyF3uvmE4qLFcrgdL7o",
      "payload":{  
         "policy_id":"dev_pol_000000BayQZyF3uvnHaKWNwVF2B3Q",
         "pricing":{  
            "underwriter_premium":704,
            "commission":235,
            "total_premium":939,
            "ipt":113,
            "ipt_rate":1200,
            "extra_fees":125,
            "vat":0,
            "deductions":0,
            "total_payable":1177
         }
      }
   },
   {  
      "type":"policy_created",
      "timestamp":"2019-01-23T10:35:12.921Z",
      "unique_key":"policy:dev_pol_000000Bb0LWT5UPmJXbuMvWGBqYC0",
      "payload":{  
         "user_id":"user_000000BSJ47k7mKYfWUhkWOrxLYGm",
         "user_revision":"dev_profilerev_000000BaoU1JUMXOfmnl64xZ7Ujh2",
         "policy_id":"dev_pol_000000Bb0LWT5UPmJXbuMvWGBqYC0",
         "original_policy_id":"dev_pol_000000Bb0LWT5UPmJXbuMvWGBqYC0",
         "reference_code":"PF34EZ7T5W",
         "start_date":"2019-01-23T10:35:13.000Z",
         "end_date":"2019-01-23T11:35:13.000Z",
         "incident_phone":"+442038287127",
         "vehicle":{  
            "vrm":"EF51ZNM",
            "prettyVrm":"EF51 ZNM",
            "make":"MINI",
            "model":"Cooper",
            "color":"Silver"
         },
         "documents":{  
            "certificate_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/documents/dev_certdoc_000000Bb0LWT5UPmICIqgrpsAFXO4?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581783759&Signature=Q2Ul5t51BGuAQ2vGglKIbcoLr5w%3D",
            "terms_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/standard-documents/mulsanne-hourly-terms-policy/5?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581769754&Signature=ko8kMtW1nQiMxVRDUciqXTZe%2B%2B4%3D"
         }
      }
   },
   {  
      "type":"policy_financial_transaction",
      "timestamp":"2019-01-23T10:35:14.780Z",
      "unique_key":"transaction:dev_tx_000000Bb0LWT5UPmIU6QBnCcdRiGO",
      "payload":{  
         "policy_id":"dev_pol_000000Bb0LWT5UPmJXbuMvWGBqYC0",
         "pricing":{  
            "underwriter_premium":499,
            "commission":166,
            "total_premium":665,
            "ipt":80,
            "ipt_rate":1200,
            "extra_fees":125,
            "vat":0,
            "deductions":0,
            "total_payable":870
         }
      }
   },
   {  
      "type":"policy_created",
      "timestamp":"2019-01-23T11:54:28.534Z",
      "unique_key":"policy:dev_pol_000000Bb0U0rWH8TzuRWrwtujQBXM",
      "payload":{  
         "user_id":"user_000000BSJ47k7mKYfWUhkWOrxLYGm",
         "user_revision":"dev_profilerev_000000BaoU1JUMXOfmnl64xZ7Ujh2",
         "policy_id":"dev_pol_000000Bb0U0rWH8TzuRWrwtujQBXM",
         "original_policy_id":"dev_pol_000000Bb0U0rWH8TzuRWrwtujQBXM",
         "reference_code":"PP3JUWDTXQ",
         "start_date":"2019-01-23T11:54:29.000Z",
         "end_date":"2019-01-23T12:54:29.000Z",
         "incident_phone":"+442038287127",
         "vehicle":{  
            "vrm":"EF51ZNM",
            "prettyVrm":"EF51 ZNM",
            "make":"MINI",
            "model":"Cooper",
            "color":"Silver"
         },
         "documents":{  
            "certificate_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/documents/dev_certdoc_000000Bb0U0rWH8TyZ8TBtDWhpAjQ?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581783759&Signature=Vs47qh0PkkLmxwsgS%2BzP6K3zi7o%3D",
            "terms_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/standard-documents/mulsanne-hourly-terms-policy/5?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581769754&Signature=ko8kMtW1nQiMxVRDUciqXTZe%2B%2B4%3D"
         }
      }
   },
   {  
      "type":"policy_financial_transaction",
      "timestamp":"2019-01-23T11:54:30.489Z",
      "unique_key":"transaction:dev_tx_000000Bb0U0rWH8Tyqw2goaHB1Lbk",
      "payload":{  
         "policy_id":"dev_pol_000000Bb0U0rWH8TzuRWrwtujQBXM",
         "pricing":{  
            "underwriter_premium":499,
            "commission":166,
            "total_premium":665,
            "ipt":80,
            "ipt_rate":1200,
            "extra_fees":125,
            "vat":0,
            "deductions":0,
            "total_payable":870
         }
      }
   },
   {  
      "type":"policy_created",
      "timestamp":"2019-01-23T13:36:40.001Z",
      "unique_key":"policy:dev_pol_000000Bb0exYHde362bfGIrVZGHZo",
      "payload":{  
         "user_id":"user_000000BSJ47k7mKYfWUhkWOrxLYGm",
         "user_revision":"dev_profilerev_000000Bb0XObJQlsnAKuiEhG6b8nA",
         "policy_id":"dev_pol_000000Bb0exYHde362bfGIrVZGHZo",
         "original_policy_id":"dev_pol_000000Bb0exYHde362bfGIrVZGHZo",
         "reference_code":"PPKQR9LT5Q",
         "start_date":"2019-01-23T13:36:40.000Z",
         "end_date":"2019-01-23T14:36:40.000Z",
         "incident_phone":"+442038287127",
         "vehicle":{  
            "vrm":"EF51ZNM",
            "prettyVrm":"EF51 ZNM",
            "make":"MINI",
            "model":"Cooper",
            "color":"Silver"
         },
         "documents":{  
            "certificate_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/documents/dev_certdoc_000000Bb0exYHde34hIbaFB7XfGls?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581783759&Signature=MAn9XBLdY%2FsbTAyk1cbqQlGo7gc%3D",
            "terms_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/standard-documents/mulsanne-hourly-terms-policy/5?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581769754&Signature=ko8kMtW1nQiMxVRDUciqXTZe%2B%2B4%3D"
         }
      }
   },
   {  
      "type":"policy_financial_transaction",
      "timestamp":"2019-01-23T13:36:42.290Z",
      "unique_key":"transaction:dev_tx_000000Bb0exYHde34z6B5AXs0rReC",
      "payload":{  
         "policy_id":"dev_pol_000000Bb0exYHde362bfGIrVZGHZo",
         "pricing":{  
            "underwriter_premium":499,
            "commission":166,
            "total_premium":665,
            "ipt":80,
            "ipt_rate":1200,
            "extra_fees":125,
            "vat":0,
            "deductions":0,
            "total_payable":870
         }
      }
   },
   {  
      "type":"policy_created",
      "timestamp":"2019-01-28T13:00:25.206Z",
      "unique_key":"policy:dev_pol_000000BbD2Ga7aWSPaqdi5Cvs2SSO",
      "payload":{  
         "user_id":"user_000000BSJ47k7mKYfWUhkWOrxLYGm",
         "user_revision":"dev_profilerev_000000BbCxitvOOr9NekR3690yVAO",
         "policy_id":"dev_pol_000000BbD2Ga7aWSPaqdi5Cvs2SSO",
         "original_policy_id":"dev_pol_000000BbD2Ga7aWSPaqdi5Cvs2SSO",
         "reference_code":"PFKF68P3WW",
         "start_date":"2019-01-28T13:00:25.000Z",
         "end_date":"2019-01-28T14:00:25.000Z",
         "incident_phone":"+442038287127",
         "vehicle":{  
            "vrm":"EF51ZNM",
            "prettyVrm":"EF51 ZNM",
            "make":"MINI",
            "model":"Cooper",
            "color":"Silver"
         },
         "documents":{  
            "certificate_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/documents/dev_certdoc_000000BbD2Ga7aWSPHjPqvKELsIkq?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581783759&Signature=v12h%2Bj59DHUh%2FlelG2gBQTd6i10%3D",
            "terms_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/standard-documents/mulsanne-hourly-terms-policy/5?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581769754&Signature=ko8kMtW1nQiMxVRDUciqXTZe%2B%2B4%3D"
         }
      }
   },
   {  
      "type":"policy_financial_transaction",
      "timestamp":"2019-01-28T13:00:27.063Z",
      "unique_key":"transaction:dev_tx_000000BbD2Ga7aWSOXL9WwtIJdcWm",
      "payload":{  
         "policy_id":"dev_pol_000000BbD2Ga7aWSPaqdi5Cvs2SSO",
         "pricing":{  
            "underwriter_premium":499,
            "commission":166,
            "total_premium":665,
            "ipt":80,
            "ipt_rate":1200,
            "extra_fees":125,
            "vat":0,
            "deductions":0,
            "total_payable":870
         }
      }
   },
   {  
      "type":"policy_created",
      "timestamp":"2019-01-28T14:04:03.895Z",
      "unique_key":"policy:dev_pol_000000BbD959qbmGl44kuwR2tKvFg",
      "payload":{  
         "user_id":"user_000000BSJ47k7mKYfWUhkWOrxLYGm",
         "user_revision":"dev_profilerev_000000BbCxitvOOr9NekR3690yVAO",
         "policy_id":"dev_pol_000000BbD959qbmGl44kuwR2tKvFg",
         "original_policy_id":"dev_pol_000000BbD959qbmGl44kuwR2tKvFg",
         "reference_code":"PFKJF76KWQ",
         "start_date":"2019-01-28T14:04:04.000Z",
         "end_date":"2019-01-28T15:04:04.000Z",
         "incident_phone":"+442038287127",
         "vehicle":{  
            "vrm":"EF51ZNM",
            "prettyVrm":"EF51 ZNM",
            "make":"MINI",
            "model":"Cooper",
            "color":"Silver"
         },
         "documents":{  
            "certificate_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/documents/dev_certdoc_000000BbD959qbmGkkxX3mYLNAlY8?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581783759&Signature=V472rB8i%2FnfnCOfX6wyABls7EM8%3D",
            "terms_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/standard-documents/mulsanne-hourly-terms-policy/5?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581769754&Signature=ko8kMtW1nQiMxVRDUciqXTZe%2B%2B4%3D"
         }
      }
   },
   {  
      "type":"policy_financial_transaction",
      "timestamp":"2019-01-28T14:04:06.102Z",
      "unique_key":"transaction:dev_tx_000000BbD959qbmGk0ZGjo7PKw5K4",
      "payload":{  
         "policy_id":"dev_pol_000000BbD959qbmGl44kuwR2tKvFg",
         "pricing":{  
            "underwriter_premium":499,
            "commission":166,
            "total_premium":665,
            "ipt":80,
            "ipt_rate":1200,
            "extra_fees":125,
            "vat":0,
            "deductions":0,
            "total_payable":870
         }
      }
   },
   {  
      "type":"policy_created",
      "timestamp":"2019-01-28T16:17:09.215Z",
      "unique_key":"policy:dev_pol_000000BbDNL33W5XX1qXDYV4SKlWa",
      "payload":{  
         "user_id":"user_000000BSJ47k7mKYfWUhkWOrxLYGm",
         "user_revision":"dev_profilerev_000000BbCxitvOOr9NekR3690yVAO",
         "policy_id":"dev_pol_000000BbDNL33W5XX1qXDYV4SKlWa",
         "original_policy_id":"dev_pol_000000BbDNL33W5XX1qXDYV4SKlWa",
         "reference_code":"PP3ZVBV3QQ",
         "start_date":"2019-01-28T16:17:09.000Z",
         "end_date":"2019-01-28T17:17:09.000Z",
         "incident_phone":"+442038287127",
         "vehicle":{  
            "vrm":"EF51ZNM",
            "prettyVrm":"EF51 ZNM",
            "make":"MINI",
            "model":"Cooper",
            "color":"Silver"
         },
         "documents":{  
            "certificate_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/documents/dev_certdoc_000000BbDNL33W5XWijJMOcMwAbp2?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581783759&Signature=WK4Rw2tHHJhlCsHWRZSSIYudmq0%3D",
            "terms_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/standard-documents/mulsanne-hourly-terms-policy/5?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581769754&Signature=ko8kMtW1nQiMxVRDUciqXTZe%2B%2B4%3D"
         }
      }
   },
   {  
      "type":"policy_financial_transaction",
      "timestamp":"2019-01-28T16:17:11.486Z",
      "unique_key":"transaction:dev_tx_000000BbDNL33W5XVyL32QBQtvvay",
      "payload":{  
         "policy_id":"dev_pol_000000BbDNL33W5XX1qXDYV4SKlWa",
         "pricing":{  
            "underwriter_premium":499,
            "commission":166,
            "total_premium":665,
            "ipt":80,
            "ipt_rate":1200,
            "extra_fees":125,
            "vat":0,
            "deductions":0,
            "total_payable":870
         }
      }
   },
   {  
      "type":"policy_created",
      "timestamp":"2019-01-31T11:06:07.433Z",
      "unique_key":"policy:dev_pol_000000BbKIjnFbiz973boBdUEXJku",
      "payload":{  
         "user_id":"user_000000BSJ47k7mKYfWUhkWOrxLYGm",
         "user_revision":"dev_profilerev_000000BbFeG7x0I95tMzX7l7VGt9c",
         "policy_id":"dev_pol_000000BbKIjnFbiz973boBdUEXJku",
         "original_policy_id":"dev_pol_000000BbKIjnFbiz973boBdUEXJku",
         "reference_code":"PPK8ZFX5WQ",
         "start_date":"2019-01-31T11:06:07.000Z",
         "end_date":"2019-01-31T12:06:07.000Z",
         "incident_phone":"+442038287127",
         "vehicle":{  
            "vrm":"KX65VGL",
            "prettyVrm":"KX65 VGL",
            "make":"Nissan",
            "model":"Qashqai",
            "variant":"N-TEC DIG-T",
            "color":"Beige"
         },
         "documents":{  
            "certificate_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/documents/dev_certdoc_000000BbKIjnFbiz9QMSk4MxadJR2?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581783759&Signature=PNdxWb6%2BY2XXj09Lyh2rDVe1dIk%3D",
            "terms_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/standard-documents/mulsanne-hourly-terms-policy/5?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581769754&Signature=ko8kMtW1nQiMxVRDUciqXTZe%2B%2B4%3D"
         }
      }
   },
   {  
      "type":"policy_financial_transaction",
      "timestamp":"2019-01-31T11:06:09.365Z",
      "unique_key":"transaction:dev_tx_000000BbKIjnFbiz9lycKItWi0Zzk",
      "payload":{  
         "policy_id":"dev_pol_000000BbKIjnFbiz973boBdUEXJku",
         "pricing":{  
            "underwriter_premium":499,
            "commission":166,
            "total_premium":665,
            "ipt":80,
            "ipt_rate":1200,
            "extra_fees":125,
            "vat":0,
            "deductions":0,
            "total_payable":870
         }
      }
   },
   {  
      "type":"policy_created",
      "timestamp":"2019-01-31T16:26:58.937Z",
      "unique_key":"policy:dev_pol_000000BbKr6UgmuMYSYozbziibtsu",
      "payload":{  
         "user_id":"user_000000BSJ47k7mKYfWUhkWOrxLYGm",
         "user_revision":"dev_profilerev_000000BbFeG7x0I95tMzX7l7VGt9c",
         "policy_id":"dev_pol_000000BbKr6UgmuMYSYozbziibtsu",
         "original_policy_id":"dev_pol_000000BbKr6UgmuMYSYozbziibtsu",
         "reference_code":"PP3KPJV5QQ",
         "start_date":"2019-01-31T16:26:59.000Z",
         "end_date":"2019-01-31T17:26:59.000Z",
         "incident_phone":"+442038287127",
         "vehicle":{  
            "vrm":"LB07SEO",
            "prettyVrm":"LB07 SEO",
            "make":"Volkswagen",
            "model":"Polo",
            "variant":"SE 16V",
            "color":"Silver"
         },
         "documents":{  
            "certificate_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/documents/dev_certdoc_000000BbKr6UgmuMYlrfvUjC4htZ2?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581783759&Signature=2Ss%2Fp%2Fk2fPGBHREho3yBUL4wTfA%3D",
            "terms_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/standard-documents/mulsanne-hourly-terms-policy/5?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581769754&Signature=ko8kMtW1nQiMxVRDUciqXTZe%2B%2B4%3D"
         }
      }
   },
   {  
      "type":"policy_financial_transaction",
      "timestamp":"2019-01-31T16:27:01.212Z",
      "unique_key":"transaction:dev_tx_000000BbKr6UgmuMZ7TpVjFlC5A7k",
      "payload":{  
         "policy_id":"dev_pol_000000BbKr6UgmuMYSYozbziibtsu",
         "pricing":{  
            "underwriter_premium":499,
            "commission":166,
            "total_premium":665,
            "ipt":80,
            "ipt_rate":1200,
            "extra_fees":125,
            "vat":0,
            "deductions":0,
            "total_payable":870
         }
      }
   },
   {  
      "type":"policy_created",
      "timestamp":"2019-02-04T10:52:50.714Z",
      "unique_key":"policy:dev_pol_000000BbUEGaXP0JVYH3ge0HItj8K",
      "payload":{  
         "user_id":"user_000000BSJ47k7mKYfWUhkWOrxLYGm",
         "user_revision":"dev_profilerev_000000BbFeG7x0I95tMzX7l7VGt9c",
         "policy_id":"dev_pol_000000BbUEGaXP0JVYH3ge0HItj8K",
         "original_policy_id":"dev_pol_000000BbUEGaXP0JVYH3ge0HItj8K",
         "reference_code":"PPKN3VUVQQ",
         "start_date":"2019-02-04T10:52:51.000Z",
         "end_date":"2019-02-04T11:52:51.000Z",
         "incident_phone":"+442038287127",
         "vehicle":{  
            "vrm":"LB07SEO",
            "prettyVrm":"LB07 SEO",
            "make":"Volkswagen",
            "model":"Polo",
            "variant":"SE 16V",
            "color":"Silver"
         },
         "documents":{  
            "certificate_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/documents/dev_certdoc_000000BbUEGaXP0JVrZucWjkezioS?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581783759&Signature=H8EuIaOwQWnbEVgnUHJol3Wy%2BG4%3D",
            "terms_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/standard-documents/mulsanne-hourly-terms-policy/5?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581769754&Signature=ko8kMtW1nQiMxVRDUciqXTZe%2B%2B4%3D"
         }
      }
   },
   {  
      "type":"policy_financial_transaction",
      "timestamp":"2019-02-04T10:52:52.594Z",
      "unique_key":"transaction:dev_tx_000000BbUEGaXP0JWDC4ClGJmMzNA",
      "payload":{  
         "policy_id":"dev_pol_000000BbUEGaXP0JVYH3ge0HItj8K",
         "pricing":{  
            "underwriter_premium":499,
            "commission":166,
            "total_premium":665,
            "ipt":80,
            "ipt_rate":1200,
            "extra_fees":125,
            "vat":0,
            "deductions":0,
            "total_payable":870
         }
      }
   },
   {  
      "type":"policy_created",
      "timestamp":"2019-02-04T12:01:04.283Z",
      "unique_key":"policy:dev_pol_000000BbULZiDhWxIihOrRboycvKq",
      "payload":{  
         "user_id":"user_000000BSJ47k7mKYfWUhkWOrxLYGm",
         "user_revision":"dev_profilerev_000000BbFeG7x0I95tMzX7l7VGt9c",
         "policy_id":"dev_pol_000000BbULZiDhWxIihOrRboycvKq",
         "original_policy_id":"dev_pol_000000BbULZiDhWxIihOrRboycvKq",
         "reference_code":"PFKL3TVVQQ",
         "start_date":"2019-02-04T12:01:04.000Z",
         "end_date":"2019-02-04T13:01:04.000Z",
         "incident_phone":"+442038287127",
         "vehicle":{  
            "vrm":"EF51ZNN",
            "prettyVrm":"EF51 ZNN",
            "make":"MINI",
            "model":"Cooper",
            "color":"Blue"
         },
         "documents":{  
            "certificate_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/documents/dev_certdoc_000000BbULZiDhWxJ20FnKLIKiv0y?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581783759&Signature=IswwVUW1%2FfFPSiNdPC4cLi%2BAr%2BY%3D",
            "terms_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/standard-documents/mulsanne-hourly-terms-policy/5?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581769754&Signature=ko8kMtW1nQiMxVRDUciqXTZe%2B%2B4%3D"
         }
      }
   },
   {  
      "type":"policy_financial_transaction",
      "timestamp":"2019-02-04T12:01:06.139Z",
      "unique_key":"transaction:dev_tx_000000BbULZiDhWxJNcPNYrrS6BZg",
      "payload":{  
         "policy_id":"dev_pol_000000BbULZiDhWxIihOrRboycvKq",
         "pricing":{  
            "underwriter_premium":499,
            "commission":166,
            "total_premium":665,
            "ipt":80,
            "ipt_rate":1200,
            "extra_fees":125,
            "vat":0,
            "deductions":0,
            "total_payable":870
         }
      }
   },
   {  
      "type":"policy_cancelled",
      "timestamp":"2019-02-04T12:04:48.669Z",
      "unique_key":"cancellation:dev_polcancel_000000BbULyVLNP373NfaUxX4U4Ke",
      "payload":{  
         "policy_id":"dev_pol_000000BbUEGaXP0JVYH3ge0HItj8K",
         "type":"void",
         "new_end_date":null
      }
   },
   {  
      "type":"policy_financial_transaction",
      "timestamp":"2019-02-04T12:04:52.322Z",
      "unique_key":"transaction:dev_tx_000000BbULyVLNP37iIg6cDZXxKZU",
      "payload":{  
         "policy_id":"dev_pol_000000BbUEGaXP0JVYH3ge0HItj8K",
         "pricing":{  
            "underwriter_premium":-499,
            "commission":-166,
            "total_premium":-665,
            "ipt":-80,
            "ipt_rate":1200,
            "extra_fees":-125,
            "vat":0,
            "deductions":0,
            "total_payable":-870
         }
      }
   },
   {  
      "type":"policy_created",
      "timestamp":"2019-02-04T12:16:46.435Z",
      "unique_key":"policy:dev_pol_000000BbUNFyNHZ8SKxW5z4ZSnIDw",
      "payload":{  
         "user_id":"user_000000BSJ47k7mKYfWUhkWOrxLYGm",
         "user_revision":"dev_profilerev_000000BbFeG7x0I95tMzX7l7VGt9c",
         "policy_id":"dev_pol_000000BbUNFyNHZ8SKxW5z4ZSnIDw",
         "original_policy_id":"dev_pol_000000BbULZiDhWxIihOrRboycvKq",
         "reference_code":"PFKH78TTQW",
         "start_date":"2019-02-04T13:01:04.000Z",
         "end_date":"2019-02-04T13:31:04.000Z",
         "incident_phone":"+442038287127",
         "vehicle":{  
            "vrm":"EF51ZNN",
            "prettyVrm":"EF51 ZNN",
            "make":"MINI",
            "model":"Cooper",
            "color":"Blue"
         },
         "documents":{  
            "certificate_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/documents/dev_certdoc_000000BbUNFyNHZ8SeGN1ro2otHu4?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581783759&Signature=EaXSqpRKR1XBJZUquShPA7H7OGw%3D",
            "terms_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/standard-documents/mulsanne-hourly-terms-policy/5?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581769754&Signature=ko8kMtW1nQiMxVRDUciqXTZe%2B%2B4%3D"
         }
      }
   },
   {  
      "type":"policy_financial_transaction",
      "timestamp":"2019-02-04T12:16:48.520Z",
      "unique_key":"transaction:dev_tx_000000BbUNFyNHZ8SzsWc6KbwGYSm",
      "payload":{  
         "policy_id":"dev_pol_000000BbUNFyNHZ8SKxW5z4ZSnIDw",
         "pricing":{  
            "underwriter_premium":198,
            "commission":66,
            "total_premium":264,
            "ipt":32,
            "ipt_rate":1200,
            "extra_fees":62,
            "vat":0,
            "deductions":0,
            "total_payable":358
         }
      }
   },
   {  
      "type":"policy_created",
      "timestamp":"2019-02-04T17:13:55.310Z",
      "unique_key":"policy:dev_pol_000000BbUt5Hp0PqXdbB3kmxXrcky",
      "payload":{  
         "user_id":"user_000000BSJ47k7mKYfWUhkWOrxLYGm",
         "user_revision":"dev_profilerev_000000BbFeG7x0I95tMzX7l7VGt9c",
         "policy_id":"dev_pol_000000BbUt5Hp0PqXdbB3kmxXrcky",
         "original_policy_id":"dev_pol_000000BbUt5Hp0PqXdbB3kmxXrcky",
         "reference_code":"PF3KPYEVWW",
         "start_date":"2019-02-04T17:13:55.000Z",
         "end_date":"2019-02-04T18:13:55.000Z",
         "incident_phone":"+442038287127",
         "vehicle":{  
            "vrm":"LB07SEO",
            "prettyVrm":"LB07 SEO",
            "make":"Volkswagen",
            "model":"Polo",
            "variant":"SE 16V",
            "color":"Silver"
         },
         "documents":{  
            "certificate_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/documents/dev_certdoc_000000BbUt5Hp0PqXwu1zdWQtxcR6?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581783759&Signature=fsroOdzt7z7g9EOy9umMsw1NCXY%3D",
            "terms_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/standard-documents/mulsanne-hourly-terms-policy/5?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581769754&Signature=ko8kMtW1nQiMxVRDUciqXTZe%2B%2B4%3D"
         }
      }
   },
   {  
      "type":"policy_financial_transaction",
      "timestamp":"2019-02-04T17:13:57.650Z",
      "unique_key":"transaction:dev_tx_000000BbUt5Hp0PqYIWBZs301Kszo",
      "payload":{  
         "policy_id":"dev_pol_000000BbUt5Hp0PqXdbB3kmxXrcky",
         "pricing":{  
            "underwriter_premium":499,
            "commission":166,
            "total_premium":665,
            "ipt":80,
            "ipt_rate":1200,
            "extra_fees":125,
            "vat":0,
            "deductions":0,
            "total_payable":870
         }
      }
   },
   {  
      "type":"policy_created",
      "timestamp":startTimeString,
      "unique_key":"policy:dev_pol_000000BbUyt6hezfg0yY3Jqg8i7xw",
      "payload":{  
         "user_id":"user_000000BSJ47k7mKYfWUhkWOrxLYGm",
         "user_revision":"dev_profilerev_000000BbFeG7x0I95tMzX7l7VGt9c",
         "policy_id":"dev_pol_000000BbUyt6hezfg0yY3Jqg8i7xw",
         "original_policy_id":"dev_pol_000000BbUt5Hp0PqXdbB3kmxXrcky",
         "reference_code":"PFKAJNETQW",
         "start_date":startTimeString,
         "end_date":endTimeString,
         "incident_phone":"+442038287127",
         "vehicle":{  
            "vrm":"LB07SEO",
            "prettyVrm":"LB07 SEO",
            "make":"Volkswagen",
            "model":"Polo",
            "variant":"SE 16V",
            "color":"Silver"
         },
         "documents":{  
            "certificate_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/documents/dev_certdoc_000000BbUyt6hezfgKHOzCa9Uo7e4?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581783759&Signature=srPxT2z2H4g3kHRP14C5wUCtpeg%3D",
            "terms_url":"https://cuvva-documents-dev.s3.eu-west-1.amazonaws.com/standard-documents/mulsanne-hourly-terms-policy/5?AWSAccessKeyId=AKIAIOKQ2DGVTKKLGZAA&Expires=1581769754&Signature=ko8kMtW1nQiMxVRDUciqXTZe%2B%2B4%3D"
         }
      }
   },
   {  
      "type":"policy_financial_transaction",
      "timestamp":startTimeString,
      "unique_key":"transaction:dev_tx_000000BbUyt6hezfgftYZR6icBOCm",
      "payload":{  
         "policy_id":"dev_pol_000000BbUyt6hezfg0yY3Jqg8i7xw",
         "pricing":{  
            "underwriter_premium":178,
            "commission":59,
            "total_premium":237,
            "ipt":28,
            "ipt_rate":1200,
            "extra_fees":62,
            "vat":0,
            "deductions":0,
            "total_payable":327
         }
      }
   }
]);
});

app.listen(port, function () {
   console.log('App is running on http://localhost:' + port);
});