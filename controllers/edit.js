// const TicketList = require ('../models/ticketlist')

// module.exports = {
//     deleteTicket: (req, res) => {
//         console.log('Entered deleteTicket route')
//         const id = req.params.id;
//         console.log('Deleting post with ID:', id)
//         TicketList.findByIdAndRemove(id)
//         .then(() => {
//             console.log('Post deleted successfully')
//             res.redirect('/')
//         })
//         .catch((err) => {
//             console.error('Error deleting post:', err)
//             res.status(500).send(err)
//         })
//     },
//     updateTicket: (req, res) => {
//         console.log('Entered updateTicket route')
//         const id = req.params.id;
//         const newStatus = 'Medication Taken'
//         TicketList.findByIdAndUpdate(
//             id,
//             {
//                 // status: 'Closed',
//                 status: newStatus
//             },
//         )    
//             .then(() => {
//                 console.log('Post updated successfully')
//                 res.redirect('/')
//             })
//             .catch((err) => {
//                 console.error('Error updating post:', err)
//                 res.status(500).send(err)
//             })
//     }
// }