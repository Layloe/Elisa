const TicketList = require('../models/ticketlist')

module.exports = {
    deleteTicket: (req, res) => {
        const id = req.params.id;
        TicketList.findByIdAndRemove(id)
        .then(() => {
            res.redirect('/')
        })
        .catch((err) => {
            res.status(500).send(err)
        })
    },
    updateTicket: (req, res) => {
        const id = req.params.id;
        TicketList.findByIdAndUpdate(
            id,
            {
                status: 'Closed'
            },
        )    
            .then(() => {
                res.redirect('/')
            })
            .catch((err) => {
                res.status(500).send(err)
            })
    }
}