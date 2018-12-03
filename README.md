## TesouroTurbinado

A aplicação foi construída conforme arquitetura da figura abaixo:

![](https://github.com/ericknilsen/HandsOn/blob/master/docker/ambiente_v3/doc/docker_v3.jpeg)

### Configurações 

1) Instale o [Docker](https://docs.docker.com/install)

2) Baixe o repositório:

```
$ git clone https://github.com/ericknilsen/TesouroTurbinado
```

3) Configure os containers

- Navegue para dentro do diretório _TesouroTurbinado_
- Inicialize os containers:
```shell
$ sudo docker-compose up
```

4) Acesse o endereço [http://localhost:8080](http://localhost:8080)


**Opcional**

5) Instale o [Robo 3T](https://robomongo.org/)

6) Use o Robo 3T para se conectar ao banco de dados do container
- Descubra o ip do container que hospeda o banco de dados:
```
$ sudo docker network ls
# Exemplo de saída
b946fa167bbd        ambiente_backend             bridge              local
cedbcab910a5        ambiente_banco               bridge              local

$ sudo docker network inspect ambiente_banco

# Selecione o endereço IPV4
...
 "IPv4Address": "172.20.0.2/16",
...
```
7) Utilize o endereço IP de saída como valor do host nos dados da conexão
