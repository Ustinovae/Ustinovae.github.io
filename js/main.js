const get = document.getElementById("GET");
const getid = document.getElementById("GETID");
const post = document.getElementById("POST");
const inputId = document.getElementById("idGet");
const text = document.getElementById("text");
const textId = document.getElementById("textId");
const id = document.getElementById("id");
const name = document.getElementById("name");
const iq = document.getElementById("iq");
const idDel = document.getElementById("idDel");
const del = document.getElementById("DELETE")

const url = "https://blooming-fortress-98565.herokuapp.com/my-api/v1.0";

async function getRequest() {
  try {
    const respounce = await fetch(url);
    let data = await respounce.json();
    text.innerHTML = JSON.stringify(data);
  } catch (e) {
    console.log(e);
  }
}

async function getIdRequest() {
  try {
    const id = Number(inputId.value)
    if (id == ""){
      textId.innerHTML = "Not input id";
      return;
    }

    const respounce = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({'id': id, 'method': 'GET'}),
    });
    if (respounce.status == 400){
      textId.innerHTML = "There is no person with this id";
    }else{
      let data = await respounce.json();
      textId.innerHTML = JSON.stringify(data);
    }
  } catch (e) {
    console.log(e);
  }
}

async function postRequest() {
  try {
    if (id.value == "" || iq.value == "" || name.value==""){
      return;
    }
    const respounce = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'method': 'POST',
        'id': Number(id.value),
        'name': name.value,
        'IQ': Number(iq.value)
      }),
    });
  } catch (e) {
    console.log(e);
  }
}

async function deleteRequest() {
  try {
    const respounce = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'id': Number(idDel.value),
      }),
    });
  } catch (e) {
    console.log(e);
  }
}

get.onclick = getRequest;
getid.onclick = getIdRequest;
post.onclick = postRequest;
del.onclick = deleteRequest;
