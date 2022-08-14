
# Michaels API Challenge

### What language do I code in?
I decided to go with nodejs and express. 
Must have node installed then when inside the folder api_challenge you can run: 

Configure the database with a mongodb connection in a .env file

```
MONGODB_URI=mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]
```

```
npm i
```


```
npm start
```
Once running you can load up Postman or Insomnia and test the routes 

`GET /api/tree`
`POST /api/tree/` 


### 1. `GET /api/tree` return the entire tree;

### 2. `POST /api/tree` with the payload of the format

```
{
    "parent": "<id>",
    "label": "<label>"
}
```