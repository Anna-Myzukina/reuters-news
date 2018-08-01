const test = require('tape');
const router = require('./router');
const supertest = require('supertest');


test('#1',(t) => {
supertest(router)
.get('/')
.expect(200)
.end((err, res) => {
t.error(err)
t.equal(res.statusCode, 200, 'Should return 200');
t.end();

});
})

test('#2',(t) => {
    supertest(router)
    .get('/login')
    .expect(200)
    .end((err, res) => {
    t.error(err)
    t.equal(res.statusCode, 200, 'Should return 200');
    t.end();
    
    });
    });

    test('#3',(t) => {
        supertest(router)
        .get('/news')
        .expect(200)
        .end((err, res) => {
        t.error(err)
        t.equal(res.statusCode, 200, 'Should return 200');
        t.end();
        
        });
        });

test('#4',(t) => {
    supertest(router)
    .get('/clientApi')
    .expect(200)
    .expect('content-type' ,'application/json')
    .end((err, res) => {
    t.error(err)
    t.equal(typeof res.body,'object','the type of response');
    t.end();
    
    });
    });

    test('#5',(t) => {
        supertest(router)
        .get('/public/login/style.css')
        .expect(200)
        .expect('content-type' ,'text/css')
        .end((err, res) => {
        t.error(err)
        t.end();
        
        });
        });


    test('#6',(t) => {
        supertest(router)
        .get('/public/login/dom.js')
        .expect(200)
        .expect('content-type' ,'application/javascript')
        .end((err, res) => {
        t.error(err)
        t.end();
        
        });
        });


    // test('test page undifined', (t) => {
    //     supertest(router)
    //         .get("/elephants")
    //         .expect(404)
    //         .expect('Content-Type', /html/)
    //         .end((err, res) => {
    //             t.error(err)
    //             t.equal(res.statusCode, 404, 'unknown uri');
    //             t.end();
    //         });
    // });