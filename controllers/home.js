// const TicketList = require('../models/ticketlist')

// module.exports = {
//     getIndex : async (req, res) => {
//         try {
//             const tickets = await
//             TicketList.find()
//             res.json({ ticketList: tickets, user: req.user });
//         } catch (err) {
//             if (err) return res.status(500).json({ error: 'Internal server error' })
//         }
//     },
    
//     createTicket: async (req, res) => {
//         const newTicket = new TicketList(
//             {
//                 timeOfDay: req.body.timeOfDay,
//                 bloodPressure: req.body.bloodPressure,
//                 severity: req.body.severity,
//                 assignedTo: req.body.assignedTo,
//                 status: req.body.status
//             });
//         try {
//             const savedTicket = await newTicket.save()
//             res.json(savedTicket)
//             console.log(newTicket)
//             res.redirect("/");
//         } catch (err) {
//             if (err) return res.status(500).json({ error: 'Internal server error' })
//             res.redirect("/");
//         }
//     },
// }

