const cds = require('@sap/cds')

/** Service Hello World Implementation */
module.exports = cds.service.impl(function() {

  this.before(['READ'], 'MyEntity', function(req) {
    console.log("Hello World called");
  })

})