import axios from "axios"

const applicationId = "21b092ce-d30d-43d3-9b09-678eb9925ee9";
const applicationSecret = "117770ae1c20ddd771b2c884ed3a7edfa2c797c74cc3da6e7f8493ac1dbb1bd5a550ed1547ddda41ecba34a46aa3912bd08bfccbbf1f312e1b4f94c19a8c27e4634027e26c8a4fb9374cd5d0ac9e2668f8e4e12b9ea4c7af675b96e6dacdbbf04b1102451db88e7eade9287bb8ae775f";

const authString = btoa(`${applicationId}:${applicationSecret}`);

export default axios.create({
    baseURL: 'https://api.astronomyapi.com/api/v2/',
    // params: {
    //     latitude: "33.775867",
    //     longitude: "-84.39733",
    //     from_date: "2017-12-20",
    //     to_date: "2017-12-21",
    //     elevation: 1,
    //     time: "12:00:00",
    // },
    headers: {
        'Authorization':
            "Basic " + authString,
    },
})


// const applicationId = "21b092ce-d30d-43d3-9b09-678eb9925ee9";
// const applicationSecret =
// 	"117770ae1c20ddd771b2c884ed3a7edfa2c797c74cc3da6e7f8493ac1dbb1bd5a550ed1547ddda41ecba34a46aa3912bd08bfccbbf1f312e1b4f94c19a8c27e4634027e26c8a4fb9374cd5d0ac9e2668f8e4e12b9ea4c7af675b96e6dacdbbf04b1102451db88e7eade9287bb8ae775f";

// const authString = btoa(`${applicationId}:${applicationSecret}`);

// const data = null;

// const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function () {
// 	if (this.readyState === this.DONE) {
// 		console.log(this.responseText);
// 	}
// });

// xhr.open(
// 	"GET",
// 	"https://api.astronomyapi.com/api/v2/bodies/positions?longitude=-84.39733&latitude=33.775867&elevation=1&from_date=2023-04-25&to_date=2023-04-25&time=22%3A35%3A52"
// );
// xhr.setRequestHeader("Authorization", "Basic " + authString);

// xhr.send(data);