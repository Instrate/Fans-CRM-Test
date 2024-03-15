# Fans CRM test task
## **Summary**:
* [Info](#info)
* [Launch](#launch)

## Info

* Framework: **NestJS**
* Node version: **20 lts**
* Database: **`MySQL v8.3.0`** _aka_ **`mysql:oracle` on docker hub** 

## Launch
### Summary:
* [Database](#database)
* [Direct](#direct)
* [Docker](#docker)

### Database:

* Description: 
> For local development docker image `mysql:oracle` was used

* Getting the image:

```bash
docker pull mysql:oracle
```

* Running database container:

##### Note that the name of the `container name` > ``--name ...``, exposed `port` > ``-p ...:3306`` and `password` > ``-e MYSQL_ROOT_PASSWORD=...`` are recommended to be changed before executing this command

```bash
docker run --name mysql-fans-crm-test-c -p 3306:3306 -e MYSQL_ROOT_PASSWORD=<custom_pwd> -d mysql:oracle
```
##### Default username for database is `root`

### Direct:
* Prepare:
    
```bash
npm install -g @nestjs/cli & npm i
```
<hr/>

* Run:

```bash
npm run start
```
<hr/>

* Build:

```bash
npm run build
```

### Docker:
* Run:

```bash
docker-compose up -d --build
```
<hr/>

* Close:

```bash
docker-compose down --rmi all -v
```
