
// const fs = require('fs');
// const http = require('http');

// const port = 3000;

// const routes = (link, res) => {
//     fs.readFile(link, (err, data) => {
//         if (err) {
//             res.writeHead(404)
//             res.write('error : page not found')
//         } else {
//             res.write(data)
//         }
//         res.end()
//     })
// }
// const server = http.createServer((req, res) => {
//     const url = req.url
//     console.log(url);
//     res.statusCode = 200;
//     res.writeHead(200, {
//         'Content-Type': 'text/html'
//     })


//     if (url === '/about') {
//         routes('./about.html', res)
//     } else if (url === '/contact') {
//         routes('./contact.html', res)
//     } else {
//         routes('./index.html', res)
//     }
// });

// server.listen(3000, () => {
//     console.log(`Server running at http://:${port}/`);
// });

const express = require('express')
const app = express()
var router = express.Router()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render("index", {
        nama:'ronatio',
        title : "web express"
    })

})
app.get('/about', (req, res) => {
    res.render("about")
})
app.get('/contact', (req, res) => {
    res.render("contact")
})
app.get('/product/id', (req, res) => {
    res.send('product id :'+id +" "+ 'categori='+req.query.categori)
})


app.use('/', (req, res) => {
    res.status(404)
    res.send('Page Not Found : 404')
})
app.listen(port, () => {
    console.log(`example app listening on port ${port}`);
})

module.exports = router;