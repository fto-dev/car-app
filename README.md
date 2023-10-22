## Car Project

Add, edit, remove car using next api with local JSON file. You can add or remove your favorites. When close your browser tab your all favorites are removed.

### Package list

- react-bootstrap
- bootstrap
- next
- react
- react-router
- react-toastify

### NEXT API

Default port is 3000.
Example URL: `http://localhost:3000/api/car`

### API Endpoint List

`/api/cars`
`Type: GET`
` Description: Return all car list's JSON`

---

`/api/cars`
`Type: POST`
`BODY: {OBJECT}`
` Description: Create new car with object`

Example BODY: `
{
    "Name":"Test data Q2Q",
    "Miles_per_Gallon":18,
    "Cylinders":8,
    "Displacement":307,
    "Horsepower":130,
    "Weight_in_lbs":3504,
    "Acceleration":12,
    "Year":"2023-01-01",
    "Origin":"Malaysia"
}`

---

`/api/cars`
`Type: PUT`
`BODY: {OBJECT}`
` Description: Update car object with ID number`

Example BODY: `
{
    "Id": 406,
    "Name": "Update Item",
    "Miles_per_Gallon": 1,
    "Cylinders": 2,
    "Displacement": 3,
    "Horsepower": 4,
    "Weight_in_lbs": 5,
    "Acceleration": 6,
    "Year": "1970-01-01",
    "Origin": "USA"
}`

---

`/api/cars`
`Type: DELETE`
`BODY: {OBJECT}`
` Description: Delete car object with ID number`

Example BODY: `
{
    "Id": 402
}`
