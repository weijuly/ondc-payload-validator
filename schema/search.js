module.exports = {
    type: 'object',
    properties: {
        context: {
            type: 'string'
        },
        message: {
            type: 'string'
        }
        
    },
    required: ['context', 'message']
}