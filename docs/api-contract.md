# Lekhak.app API Contract v1

## Base URL

`/api/v1`

---

## Auth

POST /auth/login
POST /auth/refresh
POST /auth/logout

---

## Users

GET /users/me
PATCH /users/me

---

## Jobs

POST /jobs
GET /jobs
GET /jobs/:id
DELETE /jobs/:id

---

## Audit Logs

GET /audit/:jobId

---

## Health

GET /health

## Response Envelope

All success responses:

{
"data": {},
"requestId": "uuid"
}

All error responses:

{
"message": "string",
"code": "ERROR_CODE",
"status": 400
}
