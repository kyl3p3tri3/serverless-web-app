let apiName = 'WildRydes'; // replace this with your api name.
let path = '/subscribe'; //replace this with the path you have configured on your API
let myInit = {
    body: {
        // replace this with attributes you need
    },
    headers: {} // OPTIONAL
}

API.post(apiName, path, myInit).then(response => {
    // Add your code here
});