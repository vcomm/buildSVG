'use strict';

var Element = require('./element');

module.exports = Element.extend({

    constructor: function () {

        this.name = 'polygon';

        this.permittedContent = [
            'animation',
            'descriptive'
        ];

        this.permittedAttributes = [
            'graphicalevent',
            'presentation',
            'core',
            'conditionalprocessing',
            [
                'style',
                'class',
                'externalResourcesRequired',
                'transform'
            ]
        ];

        Element.constructor.apply(this, arguments);

    }

});
