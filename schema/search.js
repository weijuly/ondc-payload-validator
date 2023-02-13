module.exports = {
    type: 'object',
    properties: {
        context: {
            type: 'object',
            properties: {
                domain: {
                    type: 'string'
                },
                country: {
                    type: 'string'
                },
                city: {
                    type: 'string'
                },
                action: {
                    type: 'string'
                },
                core_version: {
                    type: 'string'
                },
                bap_id: {
                    type: 'string'
                },
                bap_uri: {
                    type: 'string'
                }, 
                transaction_id: {
                    type: 'string'
                }, 
                message_id: {
                    type: 'string'
                }, 
                timestamp: {
                    type: 'string',
                    format: 'date-time'
                }, 
                ttl: {
                    type: 'string'
                },
            },
            required: [
                'domain',
                'country',
                'city',
                'action',
                'core_version',
                'bap_id',
                'bap_uri',
                'transaction_id',
                'message_id',
                'timestamp',
                'ttl',
            ]
        },
        message: {
            type: 'object'
        }

    },
    required: ['context', 'message']
}


