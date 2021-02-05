export function browseralert(query1, query2) {
    alert("Text:" + query1 + " Type:" + query2)
    console.log("Jake has got external functions working, the Search term was Text:" + query1 + " Type:" + query2)
};

import axios from 'axios';

export function getResults(query1, query2) {

    const promise = axios.get("https://images-api.nasa.gov/search?q=" + query1 + "&media_type=" + query2)

    const datapromise = promise.then((response) => response.data.collection.items)

    return datapromise
}

export function getorigmp4src(id) {

    const promise = axios.get("https://images-api.nasa.gov/asset/" + id)

    const datapromise = promise.then((response) => response.data.collection.items.filter(data => {
        return data.href.indexOf("small.mp4") >= 0
    }))

    return datapromise;
}