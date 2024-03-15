# Fans CRM test task
## **Summary**:
* [##](#info) Info
* [##](#launch) Launch

## Info

* Framework: **NestJS**
* Node version: **20 lts**

## Launch
### Summary:
* [###](#direct) Direct
* [###](#docker) Docker

### Direct:
* Prepare:
    
```$bash
npm install -g @nestjs/cli & npm i
```
<hr/>

* Run:

```$bash
npm run start
```
<hr/>

* Build:

```$bash
npm run build
```

### Docker:
* Run:

```$bash
docker-compose up -d --build
```
<hr/>

* Close:

```$bash
docker-compose down --rmi all -v
```
