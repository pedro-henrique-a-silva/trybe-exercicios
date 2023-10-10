#!/bin/bash

# Modulos
FUNDAMENTOS=./01-fundamentos
FRONT_END=./02-front-end
BACK_END=./03-back-end
CIENCIA_DA_COMPUTACAO=./04-ciencia-da-computacao

# Dias de aula
DIA_01=dia-01
DIA_02=dia-02
DIA_03=dia-03
DIA_04=dia-04
DIA_05=dia-05
DIA_06=dia-06
DIA_07=dia-07
DIA_08=dia-08

# Seções
SECAO_01=secao-01
SECAO_02=secao-02
SECAO_03=secao-03
SECAO_04=secao-04
SECAO_05=secao-05
SECAO_06=secao-06
SECAO_07=secao-07
SECAO_08=secao-08
SECAO_09=secao-09
SECAO_10=secao-10


#============= Front-end - seção 1
NOME_SECAO=docker-utilizando-containers
mkdir $BACK_END/$SECAO_01-$NOME_SECAO
touch $BACK_END/$SECAO_01-$NOME_SECAO/.gitkeep

#### dias de estudo
# Dia1
NOME_AULA=utilizando-containers-docker
mkdir $BACK_END/$SECAO_01-$NOME_SECAO/$DIA_01-$NOME_AULA
touch $BACK_END/$SECAO_01-$NOME_SECAO/$DIA_01-$NOME_AULA/.gitkeep

# Dia2
NOME_AULA=manipulando-imagens-no-docker
mkdir $BACK_END/$SECAO_01-$NOME_SECAO/$DIA_02-$NOME_AULA
touch $BACK_END/$SECAO_01-$NOME_SECAO/$DIA_02-$NOME_AULA/.gitkeep

# Dia3
NOME_AULA=orquestrando-containers-com-docker-compose
mkdir $BACK_END/$SECAO_01-$NOME_SECAO/$DIA_03-$NOME_AULA
touch $BACK_END/$SECAO_01-$NOME_SECAO/$DIA_03-$NOME_AULA/.gitkeep

# Dia4
NOME_AULA=projeto-docker-todo-list
mkdir $BACK_END/$SECAO_01-$NOME_SECAO/$DIA_04-$NOME_AULA
touch $BACK_END/$SECAO_01-$NOME_SECAO/$DIA_04-$NOME_AULA/.gitkeep

#=========== back-end - seção 2
NOME_SECAO=introducao-a-sql
mkdir $BACK_END/$SECAO_02-$NOME_SECAO
touch $BACK_END/$SECAO_02-$NOME_SECAO/.gitkeep

#### dias de estudo
# Dia1
NOME_AULA=banco-de-dados-sql
mkdir $BACK_END/$SECAO_02-$NOME_SECAO/$DIA_01-$NOME_AULA
touch $BACK_END/$SECAO_02-$NOME_SECAO/$DIA_01-$NOME_AULA/.gitkeep

# Dia2
NOME_AULA=encontrando-dados-em-um-banco-de-dados
mkdir $BACK_END/$SECAO_02-$NOME_SECAO/$DIA_02-$NOME_AULA
touch $BACK_END/$SECAO_02-$NOME_SECAO/$DIA_02-$NOME_AULA/.gitkeep

# Dia3
NOME_AULA=filtrando-dados-de-forma-especifica
mkdir $BACK_END/$SECAO_02-$NOME_SECAO/$DIA_03-$NOME_AULA
touch $BACK_END/$SECAO_02-$NOME_SECAO/$DIA_03-$NOME_AULA/.gitkeep

# Dia4
NOME_AULA=manipulando-tabelas
mkdir $BACK_END/$SECAO_02-$NOME_SECAO/$DIA_04-$NOME_AULA
touch $BACK_END/$SECAO_02-$NOME_SECAO/$DIA_04-$NOME_AULA/.gitkeep

# Dia5
NOME_AULA=projeto-all-for-one
mkdir $BACK_END/$SECAO_02-$NOME_SECAO/$DIA_05-$NOME_AULA
touch $BACK_END/$SECAO_02-$NOME_SECAO/$DIA_05-$NOME_AULA/.gitkeep


#======= back-end - seção 3
NOME_SECAO=funcoes-sql-join-e-normalizacao
mkdir $BACK_END/$SECAO_03-$NOME_SECAO
touch $BACK_END/$SECAO_03-$NOME_SECAO/.gitkeep

#### dias de estudo
# Dia1
NOME_AULA=funcoes-mais-usadas-no-sql
mkdir $BACK_END/$SECAO_03-$NOME_SECAO/$DIA_01-$NOME_AULA
touch $BACK_END/$SECAO_03-$NOME_SECAO/$DIA_01-$NOME_AULA/.gitkeep

# Dia2
NOME_AULA=descomplicando-joins
mkdir $BACK_END/$SECAO_03-$NOME_SECAO/$DIA_02-$NOME_AULA
touch $BACK_END/$SECAO_03-$NOME_SECAO/$DIA_02-$NOME_AULA/.gitkeep

# Dia3
NOME_AULA=transformando-ideias-em-um-modelo-de-banco-de-dados
mkdir $BACK_END/$SECAO_03-$NOME_SECAO/$DIA_03-$NOME_AULA
touch $BACK_END/$SECAO_03-$NOME_SECAO/$DIA_03-$NOME_AULA/.gitkeep

# Dia4
NOME_AULA=aula-ao-vivo-mais-projeto-one-for-all
mkdir $BACK_END/$SECAO_03-$NOME_SECAO/$DIA_04-$NOME_AULA
touch $BACK_END/$SECAO_03-$NOME_SECAO/$DIA_04-$NOME_AULA/.gitkeep


#======= back-end - seção 4
NOME_SECAO=introducao-ao-desenvolvimento-web-com-nodejs
mkdir $BACK_END/$SECAO_04-$NOME_SECAO
touch $BACK_END/$SECAO_04-$NOME_SECAO/.gitkeep

#### dias de estudo
# Dia1
NOME_AULA=nodejs-runtime-assincrono
mkdir $BACK_END/$SECAO_04-$NOME_SECAO/$DIA_01-$NOME_AULA
touch $BACK_END/$SECAO_04-$NOME_SECAO/$DIA_01-$NOME_AULA/.gitkeep
# Dia2
NOME_AULA=nodejs-api-rest-com-express
mkdir $BACK_END/$SECAO_04-$NOME_SECAO/$DIA_02-$NOME_AULA
touch $BACK_END/$SECAO_04-$NOME_SECAO/$DIA_02-$NOME_AULA/.gitkeep
# Dia3
NOME_AULA=nodejs-testes-de-integracao
mkdir $BACK_END/$SECAO_04-$NOME_SECAO/$DIA_03-$NOME_AULA
touch $BACK_END/$SECAO_04-$NOME_SECAO/$DIA_03-$NOME_AULA/.gitkeep
# Dia4
NOME_AULA=nodejs-express-e-middlewares
mkdir $BACK_END/$SECAO_04-$NOME_SECAO/$DIA_04-$NOME_AULA
touch $BACK_END/$SECAO_04-$NOME_SECAO/$DIA_04-$NOME_AULA/.gitkeep
# Dia5
NOME_AULA=nodejs-express-e-mysql
mkdir $BACK_END/$SECAO_04-$NOME_SECAO/$DIA_05-$NOME_AULA
touch $BACK_END/$SECAO_04-$NOME_SECAO/$DIA_05-$NOME_AULA/.gitkeep
# Dia6
NOME_AULA=projeto-talker-manager
mkdir $BACK_END/$SECAO_04-$NOME_SECAO/$DIA_06-$NOME_AULA
touch $BACK_END/$SECAO_04-$NOME_SECAO/$DIA_06-$NOME_AULA/.gitkeep

#======= Front-end - seção 5
NOME_SECAO=arquitetura-de-software-model-service-controller
mkdir $BACK_END/$SECAO_05-$NOME_SECAO
touch $BACK_END/$SECAO_05-$NOME_SECAO/.gitkeep

#dia1
NOME_AULA=arquitetura-de-software-camada-model
mkdir $BACK_END/$SECAO_05-$NOME_SECAO/$DIA_01-$NOME_AULA
touch $BACK_END/$SECAO_05-$NOME_SECAO/$DIA_01-$NOME_AULA/.gitkeep

#dia2
NOME_AULA=arquitetura-de-software-refatorando-camada-model
mkdir $BACK_END/$SECAO_05-$NOME_SECAO/$DIA_02-$NOME_AULA
touch $BACK_END/$SECAO_05-$NOME_SECAO/$DIA_02-$NOME_AULA/.gitkeep

#dia3
NOME_AULA=arquitetura-de-software-camada-service
mkdir $BACK_END/$SECAO_05-$NOME_SECAO/$DIA_03-$NOME_AULA
touch $BACK_END/$SECAO_05-$NOME_SECAO/$DIA_03-$NOME_AULA/.gitkeep

#dia4
NOME_AULA=arquitetura-de-software-refatorando-camada-service
mkdir $BACK_END/$SECAO_05-$NOME_SECAO/$DIA_04-$NOME_AULA
touch $BACK_END/$SECAO_05-$NOME_SECAO/$DIA_04-$NOME_AULA/.gitkeep
#dia5
NOME_AULA=arquitetura-de-software-refatorando-camada-controller
mkdir $BACK_END/$SECAO_05-$NOME_SECAO/$DIA_05-$NOME_AULA
touch $BACK_END/$SECAO_05-$NOME_SECAO/$DIA_05-$NOME_AULA/.gitkeep
#dia6
NOME_AULA=projeto-store-manager
mkdir $BACK_END/$SECAO_05-$NOME_SECAO/$DIA_06-$NOME_AULA
touch $BACK_END/$SECAO_05-$NOME_SECAO/$DIA_06-$NOME_AULA/.gitkeep


#======= back-end - seção 6
NOME_SECAO=nodejs-orm-e-autenticacao
mkdir $BACK_END/$SECAO_06-$NOME_SECAO
touch $BACK_END/$SECAO_06-$NOME_SECAO/.gitkeep

#dia1
NOME_AULA=orm-interface-da-aplicacao-com-o-banco-de-dados
mkdir $BACK_END/$SECAO_06-$NOME_SECAO/$DIA_01-$NOME_AULA
touch $BACK_END/$SECAO_06-$NOME_SECAO/$DIA_01-$NOME_AULA/.gitkeep

#dia2
NOME_AULA=associations-1-1-e-1-n
mkdir $BACK_END/$SECAO_06-$NOME_SECAO/$DIA_02-$NOME_AULA
touch $BACK_END/$SECAO_06-$NOME_SECAO/$DIA_02-$NOME_AULA/.gitkeep

#dia3
NOME_AULA=jwt-json-web-token
mkdir $BACK_END/$SECAO_06-$NOME_SECAO/$DIA_03-$NOME_AULA
touch $BACK_END/$SECAO_06-$NOME_SECAO/$DIA_03-$NOME_AULA/.gitkeep

#dia4
NOME_AULA=projeto-api-de-blogs
mkdir $BACK_END/$SECAO_06-$NOME_SECAO/$DIA_04-$NOME_AULA
touch $BACK_END/$SECAO_06-$NOME_SECAO/$DIA_04-$NOME_AULA/.gitkeep


#======= back-end - seção 7
NOME_SECAO=masterclass-implantacao-de-aplicacao-na-nuvem
mkdir $BACK_END/$SECAO_07-$NOME_SECAO
touch $BACK_END/$SECAO_07-$NOME_SECAO/.gitkeep

#dia1
NOME_AULA=infraestutura-deploy-com-railway
mkdir $BACK_END/$SECAO_07-$NOME_SECAO/$DIA_01-$NOME_AULA
touch $BACK_END/$SECAO_07-$NOME_SECAO/$DIA_01-$NOME_AULA/.gitkeep


#======= back-end - seção 8
NOME_SECAO=introducao-a-typescript
mkdir $BACK_END/$SECAO_08-$NOME_SECAO
touch $BACK_END/$SECAO_08-$NOME_SECAO/.gitkeep

#dia1
NOME_AULA=aprendendo-typescript
mkdir $BACK_END/$SECAO_08-$NOME_SECAO/$DIA_01-$NOME_AULA
touch $BACK_END/$SECAO_08-$NOME_SECAO/$DIA_01-$NOME_AULA/.gitkeep

#dia2
NOME_AULA=introducao-a-generics
mkdir $BACK_END/$SECAO_08-$NOME_SECAO/$DIA_02-$NOME_AULA
touch $BACK_END/$SECAO_08-$NOME_SECAO/$DIA_02-$NOME_AULA/.gitkeep

#dia3
NOME_AULA=api-rest-com-express-jwt-sequelize-e-typescript
mkdir $BACK_END/$SECAO_08-$NOME_SECAO/$DIA_03-$NOME_AULA
touch $BACK_END/$SECAO_08-$NOME_SECAO/$DIA_03-$NOME_AULA/.gitkeep

#dia4
NOME_AULA=testando-aplicacoes-nodejs-com-typescript
mkdir $BACK_END/$SECAO_08-$NOME_SECAO/$DIA_04-$NOME_AULA
touch $BACK_END/$SECAO_08-$NOME_SECAO/$DIA_04-$NOME_AULA/.gitkeep

#dia4
NOME_AULA=projeto-trybes-smith
mkdir $BACK_END/$SECAO_08-$NOME_SECAO/$DIA_05-$NOME_AULA
touch $BACK_END/$SECAO_08-$NOME_SECAO/$DIA_05-$NOME_AULA/.gitkeep


#======= back-end - seção 9
NOME_SECAO=programacao-orientada-a-objetos-poo-e-solid
mkdir $BACK_END/$SECAO_09-$NOME_SECAO
touch $BACK_END/$SECAO_09-$NOME_SECAO/.gitkeep

#dia1
NOME_AULA=introducao-a-orientacao-a-objeto
mkdir $BACK_END/$SECAO_09-$NOME_SECAO/$DIA_01-$NOME_AULA
touch $BACK_END/$SECAO_09-$NOME_SECAO/$DIA_01-$NOME_AULA/.gitkeep
#dia2
NOME_AULA=herenca-e-composicao
mkdir $BACK_END/$SECAO_09-$NOME_SECAO/$DIA_02-$NOME_AULA
touch $BACK_END/$SECAO_09-$NOME_SECAO/$DIA_02-$NOME_AULA/.gitkeep
#dia3
NOME_AULA=polimorfismo
mkdir $BACK_END/$SECAO_09-$NOME_SECAO/$DIA_03-$NOME_AULA
touch $BACK_END/$SECAO_09-$NOME_SECAO/$DIA_03-$NOME_AULA/.gitkeep
#dia4
NOME_AULA=solid-introducao-e-principios-s-o-d
mkdir $BACK_END/$SECAO_09-$NOME_SECAO/$DIA_04-$NOME_AULA
touch $BACK_END/$SECAO_09-$NOME_SECAO/$DIA_04-$NOME_AULA/.gitkeep
#dia5
NOME_AULA=solid-principios-l-e-i
mkdir $BACK_END/$SECAO_09-$NOME_SECAO/$DIA_05-$NOME_AULA
touch $BACK_END/$SECAO_09-$NOME_SECAO/$DIA_05-$NOME_AULA/.gitkeep
#dia6
NOME_AULA=projeto-trybes-and-dragons
mkdir $BACK_END/$SECAO_09-$NOME_SECAO/$DIA_06-$NOME_AULA
touch $BACK_END/$SECAO_09-$NOME_SECAO/$DIA_06-$NOME_AULA/.gitkeep

#======= back-end - seção 10
NOME_SECAO=projeto-tfc-trybe-futebol-clube
mkdir $BACK_END/$SECAO_10-$NOME_SECAO
touch $BACK_END/$SECAO_10-$NOME_SECAO/.gitkeep

#dia1
NOME_AULA=express-com-classes
mkdir $BACK_END/$SECAO_10-$NOME_SECAO/$DIA_01-$NOME_AULA
touch $BACK_END/$SECAO_10-$NOME_SECAO/$DIA_01-$NOME_AULA/.gitkeep
#dia2
NOME_AULA=projeto-tfc-trybe-futebol-clube
mkdir $BACK_END/$SECAO_10-$NOME_SECAO/$DIA_02-$NOME_AULA
touch $BACK_END/$SECAO_10-$NOME_SECAO/$DIA_02-$NOME_AULA/.gitkeep
