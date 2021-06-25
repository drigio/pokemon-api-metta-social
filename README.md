# pokemon-api-metta-social  <!-- omit in toc --> 

Coding Assignment for Backend Developer for Metta Social

## Documentation <!-- omit in toc --> 

Requires Node 14 Stable and above.

### Installation

```bash
npm i
```

### Running the Server

```bash
npm run start
```

It will automatically setup the seed data if there is none already present in the db. It runs seeding only for the first run. Seed data can be found in [seed/pokemon-seeder.js](./seed/pokemon-seeder.js) 

Sending in my own `.env` for easy setup and running of MongoDB cloud instance. However you can you can setup your own mongodb instance as well and configure it in the `.env`. 

Just completing the above installation and running the server would complete the whole setup and you will be up and running along with the database.

### CRUD Operations <!-- omit in toc --> 

### Index

- [Installation](#installation)
- [Running the Server](#running-the-server)
- [Index](#index)
  - [Creating Pokemon](#creating-pokemon)
- [Getting Pokemon](#getting-pokemon)
  - [Get All Pokemon](#get-all-pokemon)
  - [Get Pokemon By Id](#get-pokemon-by-id)
  - [Get Pokemon By Family](#get-pokemon-by-family)
  - [Get Pokemon By Name](#get-pokemon-by-name)
- [Updating Pokemon](#updating-pokemon)
  - [Updating Pokemon By Id](#updating-pokemon-by-id)
- [Deleting Pokemon](#deleting-pokemon)
  - [Deleting Pokemon By Id](#deleting-pokemon-by-id)

#### Creating Pokemon

**Method**: **`POST`**
<br>
**URL**: **`api/pokemon`**
<br>

**Required parameters**:

```JSON
{
  "name": "String",
  "family": "String",
  "description": "String",
  "maxCP": "Number",
  "attack": "Number",
  "defense": "Number",
  "stamina": "Number",
  "weaknesses": "[String]",
  "resistances": "[String]"
}
```

_Successful Response format_:

```JSON
statusCode: 200

{
  "code": "OK",
  "result": "SUCCESS",
  "message": "Pokemon created.",
}
```

**[⬆Back to index](#index)**

### Getting Pokemon

#### Get All Pokemon

**Method**: **`GET`**
<br>
**URL**: **`api/pokemon/all`**
<br>

_Successful Response format_:

```JSON
statusCode: 200

{
  "code": "OK",
  "result": "SUCCESS",
  "pokemon": [Pokemon],
}
```

**[⬆Back to index](#index)**

#### Get Pokemon By Id

**Method**: **`GET`**
<br>
**URL**: **`api/pokemon/:id`**
<br>

_Successful Response format_:

```JSON
statusCode: 200

{
  "code": "OK",
  "result": "SUCCESS",
  "pokemon": {Pokemon},
}
```

**[⬆Back to index](#index)**

#### Get Pokemon By Family

**Method**: **`GET`**
<br>
**URL**: **`api/pokemon/:family`**
<br>

_Successful Response format_:

```JSON
statusCode: 200

{
  "code": "OK",
  "result": "SUCCESS",
  "pokemon": {Pokemon},
}
```

**[⬆Back to index](#index)**

#### Get Pokemon By Name

**Method**: **`GET`**
<br>
**URL**: **`api/pokemon/:name`**
<br>

_Successful Response format_:

```JSON
statusCode: 200

{
  "code": "OK",
  "result": "SUCCESS",
  "pokemon": {Pokemon},
}
```

**[⬆Back to index](#index)**

### Updating Pokemon

#### Updating Pokemon By Id 

**Method**: **`PUT`**
<br>
**URL**: **`api/pokemon/:id`**
<br>

**Optional parameters**:

```JSON
{
  "name?": "String",
  "family?": "String",
  "description?": "String",
  "maxCP?": "Number",
  "attack?": "Number",
  "defense?": "Number",
  "stamina?": "Number",
  "weaknesses?": "[String]",
  "resistances?": "[String]"
}
```

_Successful Response format_:

```JSON
statusCode: 200

{
  "code": "OK",
  "result": "SUCCESS",
  "message": "Pokemon updated.",
}
```

**[⬆Back to index](#index)**

### Deleting Pokemon

#### Deleting Pokemon By Id

**Method**: **`DELETE`**
<br>
**URL**: **`api/pokemon/:id`**
<br>

_Successful Response format_:

```JSON
statusCode: 200

{
  "code": "OK",
  "result": "SUCCESS",
  "message": "Pokemon deleted.",
}
```

**[⬆Back to index](#index)**
