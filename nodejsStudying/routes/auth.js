/**
 * Created by Vlad.M on 30.11.2016.
 */
module.exports= function (app) {
    
app.get('/auth',function (req,resp) {
    resp.render('auth', { title: 'Express' });
});
app.post('/auth',function (req,resp) {
    resp.send(req.body.email+req.body.password);
    //TODO:New user
})};