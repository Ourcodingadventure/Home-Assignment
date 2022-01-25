Home-Assignment
===============
IOT

---

Instructions to run

---

Cloning the project and running npm install will retrieve you the neccesarry packages.

Going into the in the /models/index.js you will find the connection to the database. In here you will need to change the env variables to match those of your system.

Run the server with npm start or nodemon run if you have the package installed globally.

Functionalities

---

As the server runs on port 5000 Our baseurl to touch the availible endpoints will be http://localhost:5000 from here on will be refered to as baseURL

from here functionalities are split into two but mimic eachother for the most part

IMPORTANT TO NOTE if you want to run the code before reading the readMe a crane must be created before a device as a device is required to have a crane_id

Routes

---

.get baseURl/cranes
devices

this will retrieve us as all cranes/devices.

---

.post baseURl/cranes
/devices

crane expect to find in the body in json format something like this:
{
"crane_id":"crane007",
"crane_name":"hello"
"deleted":false,
}

device expect to find in the body in json format something like this:
{
"device_id":"device0071",
"serial_number":"0071",
"crane_id": "crane007",
"description":"testing",
"deleted":false
}

---

.get baseURL/device/{id or serial_number}
/cranes/{id or name}
for example baseURL/devices/device0071-- will retrieve all of devices properties like so :
{
"device_id":"device0071",
"serial_number":"0071",
"crane_id": "crane007",
"description":"testing",
}

---

.delete baseURL/devices/{id or serial_number}
/cranes/{id or name}
for example baseURL/devices/device0071--will "soft delete" the item adding the deleted value to true and hiding it from being searched for.

---

.put baseURL/devices/{id or serial_number}
/cranes/{id or name}
for example baseURL/devices/device0071-- will retrieve all of devices properties like so :
{

    "crane_id": "crane03",// changing this will result in a failure if it is not a real crane id
    "description":"last tests",

}

---

.patch baseURL/devices/{id or serial_number}
/cranes/{id or name}
this will take from query params -- in the params tab of your post man-- any of the availible fields for the item's shown above and change the value

---

.get baseURL/cranes/name/{name}
for example baseURL/cranes/name/crane007 should return you:
{
"crane_id":"crane007",
"crane_name":"hello"
}

---

.get baseURL/cranes/{id or name}/devices
if up to this point you have done as i have
this example- baseURL/cranes/crane007/devices should retrive you an inner join of the two tables something like this:
{
"device_id":"device0071",
"serial_number":"0071",
"description":"testing",
"crane_name":"hello",
"crane_id": "crane007"
}

Thank you for enjoying my code with me..
