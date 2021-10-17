# My engineering web site overview

- [My engineering web site overview](#my-engineering-web-site-overview)
  - [Page Design](#page-design)
    - [Pages](#pages)
      - [Top page](#top-page)
      - [Profile Page](#profile-page)
      - [Experiences page](#experiences-page)
      - [Contact](#contact)
    - [Implementation with Angular](#implementation-with-angular)
      - [Comopnents](#comopnents)
        - [top](#top)
        - [profile](#profile)
        - [experiences-head](#experiences-head)
        - [experiences-container](#experiences-container)
        - [experiences-content](#experiences-content)
        - [experience-card](#experience-card)
        - [contact](#contact-1)
      - [Services](#services)
        - [experiences-api](#experiences-api)
    - [Middleware with express.js](#middleware-with-expressjs)
      - [Models](#models)
        - [Experience](#experience)
          - [Model](#model)
          - [Funcions](#funcions)
        - [Endpoint API](#endpoint-api)
          - [GET /api/experience/list?tag=<tagid>](#get-apiexperiencelisttagtagid)
          - [GET /api/experience/:idx](#get-apiexperienceidx)
          - [POST /api/experience (token requied)](#post-apiexperience-token-requied)
          - [PUT /api/experience (token requied)](#put-apiexperience-token-requied)
          - [DELETE /experience/:id (token requied)](#delete-experienceid-token-requied)
      - [Tag](#tag)
        - [Model](#model-1)
        - [Model Functions](#model-functions)
        - [Endpoint API](#endpoint-api-1)
          - [GET /api/tag/list](#get-apitaglist)
          - [GET /api/tag?name="tag name"](#get-apitagnametag-name)
          - [POST /api/tag?name="tag name" (token required)](#post-apitagnametag-name-token-required)
          - [DELETE /api/tag?name="tag name" (token required)](#delete-apitagnametag-name-token-required)
      - [Application User](#application-user)
        - [Model](#model-2)
        - [Endpoint API](#endpoint-api-2)
          - [/api/user/login](#apiuserlogin)
          - [GET /api/user/list [token required]](#get-apiuserlist-token-required)
          - [GET /api/user/:id](#get-apiuserid)
          - [POST /api/user [token required]](#post-apiuser-token-required)
          - [DELETE /api/user/:id [token required]](#delete-apiuserid-token-required)
    - [Database](#database)
      - [Table](#table)
        - [Experience](#experience-1)
        - [Tag](#tag-1)
        - [relexptag](#relexptag)
        - [appuser](#appuser)
        - [inquiry (TBD)](#inquiry-tbd)
      - [Queries](#queries)

## Page Design

![Site Design](sitedesign.png)

### Pages
#### Top page

Simply explains what I am and what I can.


#### Profile Page

#### Experiences page

Display the demo applications in tiles.
By clicking each tiles, it jumps to the applications to explain my work.

Skills tiled with material UI cards.
Jumps to the site of the implementation using the skill.
![Skill Card](skill_card.svg)

| element | description|
|:--|:--|
|PNG file| The top Web Site screen shot.(also has the link to the site) |
|SKILL Name| Skill name listed in DB. |
|Description| Skill Description in DB |
|Share | For visitors to share the skill card in Linkdin |
|Exlore | Link to the Web Site |

#### Contact

### Implementation with Angular



```sh
ng new pome
ng generate component top
ng generate component profile
ng generate component experiences-head
ng generate component experiences-container
ng generate component experiences-content
ng generate component experience-card
ng generate component contact

ng generate service experiences-api
```

#### Comopnents

##### top
##### profile
##### experiences-head
##### experiences-container
##### experiences-content
##### experience-card
##### contact

#### Services

##### experiences-api

### Middleware with express.js

#### Models

##### Experience

###### Model

```js
exprt type Experience = {
  id?: numer, // -1 if not assigned in DB
  title: string,
  description: string,
  url?: string
};
```

###### Funcions
The functions created to exchange the model.

```js
list(idxTag?: numer): Experience[]
get(idx: number): Experience
create(experience: Experience): Experience {}
update(experience: Experience): Experience {}
delete(experience: Experience): Experience {}
```

- list(tagid?: numer): Experience[]
  - list all the experiences
  - list all the experiences tagged with the

- get(idx: number): Experience

- create(experience: Experience): Experience {}

- update(experience: Experience): Experience {}

- delete(experience: Experience): Experience {}



##### Endpoint API

###### GET /api/experience/list?tag=<tagid>

| code | result | When |
|-|-|-|
| 200 | Success | Found entry and responded |

Return list of experiences.
The tagid is optional to get the category tag of the experience.

The following is returned in the response.

```js
[
  {
    id: number
    title: string,
    description: string,
    url?: string
  },
  ...
]
```

###### GET /api/experience/:idx

Return an experience by index.

| code | result | When |
|-|-|-|
| 200 | Success | Found entry and responded |
| 404 | Not Found | The entry with the id is not found |

The following is returned in the response.
```js
{
  id: numer,
  title: string,
  description: string,
  url?: string
};
```

###### POST /api/experience (token requied)

| code | result | When |
|-|-|-|
| 201 | Created | Successfully created |
| 400 | Bad request | token not acceptale |
| 406 | Not acceptale | failed in the request with bad format or data |
| 409 | Conflict | Already exists with the same title |

Create and experience.

Create an experience with the following formant.
If the title is duplicated, return an error resopnse (409).

- request body
```js
{
  id: number,
  title: string,
  description: string,
  url?: string
};
```

When correctly registered return code (201) returned with the created entry with an assigned id.
- response body
```js
{
  id: number,
  title: string,
  description: string,
  url?: string
};
```

###### PUT /api/experience (token requied)

| code | result | When |
|-|-|-|
| 200 | Created | Successfully update |
| 400 | Bad request | token not acceptable |
| 404 | Not Found | the experience entry is not found in DB |
| 406 | Not acceptale | failed in the request with bad format or data |

- request
```js
{
  id: number,
  title: string,
  description: string,
  url?: string
};
```

- response
```js
{
  id: number,
  title: string,
  description: string,
  url?: string
};
```

###### DELETE /experience/:id (token requied)

| code | result | When |
|-|-|-|
| 200 | OK | Successfully deleted |
| 400 | Bad request | token not accepted |
| 404 | Not Found | When there is no entry with the id |

```js
{
  id: number,
  title: string,
  description: string,
  url?: string
};
```


#### Tag

##### Model

```js
exprt type Tag = {
  id?: numer, // -1 if not assigned in DB
  tag: string
};
```

##### Model Functions
```js
list(): Tag[]
get(idx: number): Tag
create(tag: Tag): Tag {}
delete(tag: Tag): Tag {}
```


##### Endpoint API

###### GET /api/tag/list

| code | result | When |
|-|-|-|
| 200 | Success | Found entry and responded |

###### GET /api/tag?name="tag name"

| code | result | When |
|-|-|-|
| 200 | Success | Found entry and responded |
| 404 | Not Found | The entry with the tag name is not found |

###### POST /api/tag?name="tag name" (token required)


| code | result | When |
|-|-|-|
| 201 | Created | Successfully created |
| 400 | Bad request | token not acceptale or no name specified |
| 409 | Conflict | Already exists with the same title |

###### DELETE /api/tag?name="tag name" (token required)


| code | result | When |
|-|-|-|
| 200 | OK | Successfully deleted |
| 400 | Bad request | token not accepted |
| 404 | Not Found | When there is no entry with the tag name |


#### Application User

##### Model

```js
exprt type Tag = {
  id?: numer, // -1 if not assigned in DB
  user string,
  email string,
  passwd string,
};
```

```js
login()
list(): Tag[]
get(idx: number): Tag
create(tag: Tag): Tag {}
delete(tag: Tag): Tag {}
```
##### Endpoint API

###### /api/user/login


For registered user, you can login by sending below in your request body.

```
{
    email: string;
    passwd: string;
}
```

In the response body, you get below. Extract the token from below and set as *Authorization: Bearer <token>*, where you find **[token required]**.

```
{
    email: string;
    token: string;
}
```

###### GET /api/user/list [token required]

| code | result | When |
|-|-|-|
| 200 | Success | Found entry and responded |

Get a list of users.

###### GET /api/user/:id

| code | result | When |
|-|-|-|
| 200 | Success | Found entry and responded |
| 404 | Not Found | The entry with the user id is not found |

###### POST /api/user [token required]


| code | result | When |
|-|-|-|
| 201 | Created | Successfully created |
| 400 | Bad request | token not acceptale or no name specified |
| 409 | Conflict | Already exists with the same user email |


Set the following in the request body.
```
{
    id: number,
    user: string,
    email: string,
    passwd: string
}
```

###### DELETE /api/user/:id [token required]

| code | result | When |
|-|-|-|
| 200 | OK | Successfully deleted |
| 400 | Bad request | token not accepted |
| 404 | Not Found | When there is no entry with the user id |

### Database

![](tabledesign.png)

#### Table
##### Experience


```sql
CREATE TABLE IF NOT EXISTS experience (
  id SERIAL,
  title VARCHAR NOT NULL,
  note TEXT,
  urle VARCHAR,
  PRIMARY KEY (id)
);
```

##### Tag


```sql
CREATE TABLE IF NOT EXISTS tag (
  id SERIAL,
  tag VARCHAR(8) NOT NULL,
  PRIMARY KEY (id)
);
```

##### relexptag

```sql
CREATE TABLE IF NOT EXISTS relexptag (
    id SERIAL,
    experience INT,
        FOREIGN KEY (experience)
        REFERENCES experience (id),
    tag INT,
        FOREIGN KEY (tag)
        REFERENCES tag (id),
    PRIMARY KEY (id)
);
```

##### appuser

The email and passwd should be hashed.

```sql
CREATE TABLE IF NOT EXISTS lvl (
  id SERIAL,
  user VARCHAR,
  email VARCHAR,
  passwd VARCHAR,
  PRIMARY KEY (id)
);
```


##### inquiry (TBD)

```sql
CREATE TABLE IF NOT EXISTS inquiry (
  id SERIAL,
  sender VARCHAR,
  title VARCHAR,
  note TEXT,
  PRIMARY KEY (id)
);
```

#### Queries