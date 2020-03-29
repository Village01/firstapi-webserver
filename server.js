let express = require('express');
let app = express();
let port = process.env.PORT || 8888;
// b1. cài đặt swagger-ui-express,  swagger-jsdoc
// b2. tạo biến
const swaggerJsDoc=require('swagger-jsdoc');
const swaggerUi=require('swagger-ui-express');
// B3: Khỏi tạo swagger-doc bangwf cach:

//Extended: https://swagger.io/specification/#infoObject
// dinh menh tai cai nodemon khong dung duoc Thoi vay duocj roi con laij may tu lam nhe sao cai heroku tao lam cho ngan ma no hong ra qua xem giup voi qua coi dum cai nha mo link di mo sao 
const swaggerOptions={
    swaggerDefinition: {
        info: {
            title: 'My name',
            description: "Hello World",
            version: "1.0.0",
            contact: {
                name: "Hoàng Minh Phát",
                email: "17520876@gm.edu.vn",
            },
            servers: ["village01.herokuapp.com"]
        }
    },
    apis: ["server.js"]
};
const swaggerDocs=swaggerJsDoc(swaggerOptions);
app.use('/apidocs',swaggerUi.serve,swaggerUi.setup(swaggerDocs));

// Bătddaufw viết api doc nay

/**
 * @swagger
 * /:
 *  get:
 *      summary: ...
 *      description: ...
 *      produces:
 *          - application/json
 *      responses:
 *          '200': 
 *              description: ....
 * /phat:
 *  get:
 *      summary: ...
 *      responses: 
 *          '200':
 *              description: ok
 *     
 */
// May thu viet cai duoi cho t xem. can le sai laf an lol tao tai khoan di tao chi cho vai cho cai nao swagger co r vao di
app.get('/',(req, res) => {
    res.send({
        Name: 'Hoang Minh Phat',
        MSSV: 17520876
    })
})

app.get('/phat', (req, res) =>{
    res.send({
        Form: 'HCMC',
        Age: 21
    })
})
app.listen(port);

console.log('RESTful API server started on: ' + port);
