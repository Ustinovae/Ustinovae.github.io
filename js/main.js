const get = document.getElementById("GET");
const post = document.getElementById("POST");
const inputId = document.getElementById("id");
const text = document.getElementById("text");
const textId = document.getElementById("textId");
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

async function postRequest() {
  try {
    const id = Number(inputId.value)
    const respounce = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({'id': id}),
    });
    if (respounce.status == 400){
      textId.innerHTML = "Not";
    }else{
      let data = await respounce.json();
      textId.innerHTML = JSON.stringify(data);
    }
  } catch (e) {
    console.log(e);
  }
}

get.onclick = getRequest;
post.onclick = postRequest;
