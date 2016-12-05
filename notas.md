siguiendo este [tutorial](https://www.airpair.com/scalable-architecture-with-docker-consul-and-nginx)


levanto un docker con consul
```
docker run -it -h node \
 -p 8500:8500 \
 -p 8600:53/udp \
 progrium/consul \
 -server \
 -bootstrap \
 -log-level debug
 ```

accedo a [http://localhost:8500/ui/#/dc1/services](http://localhost:8500/ui/#/dc1/services)
y veo una consola de Consul

ahora voy a registrar un servicio...el de customer por ejemplo

```
curl -XPUT \
customer:8500/v1/agent/service/register \
-d '{
 "ID": "customer_instance_1",
 "Name":"customer",
 "Port": 3000, 
 "tags": ["customer"]
}'
```

RUN DR CoN
```
docker run -it -e "CONSUL=localhost:8500" -e "SERVICE=customer" -p 80:80 drcon
```
no lo encontró ... que goma! hay un [link](https://github.com/grahamjenson/DR-CoN) al repo

me lo bajo y lo creo

cambio la URL del Dockerfile porque estaba rota
```
ENV CT_URL https://github.com/hashicorp/consul-template/archive/v0.16.0.tar.gz
```

pruebo registrar customer


curl -XPUT localhost:8500/v1/agent/service/register -d '{ "service": { "name": "customer", "tags": ["customer"], "address": "", "port": 3000, "enableTagOverride": false, "checks": [ { "script": "curl -X POST -v http://customer:3000/customer/create -H "Content-type:application/json" -d '{"name":"hola","age":"12", "email":"d"}'", "interval": "10s" } ] } }}'

curl -X POST -v http://customer:3000/customer/create -H "Content-type:application/json" -d '{"name":"hola","age":"12", "email":"d"}'





