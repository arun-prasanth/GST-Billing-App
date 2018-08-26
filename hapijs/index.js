const Hapi = require('hapi');

const server = new Hapi.Server({
  port:8000,
  host:'localhost'
});

server.route({
  method:'GET',
  path:'/',
  handler:function(request,h)=> {
    retrun 'hello';
  }
});

server.start((err)=>{
  if(err){
    throw err;
  }
  console.log(`Server started :${server.info.uri}`);
});
