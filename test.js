

let person = {
    name: "joe",
    age:33,
    printNmae:function(){
         console.log(this.name)
    }
}

/////////////////////////////////////////////////////////////////////////


function func1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(2), 1000);
    });
  }
  function func2(val) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(val + 3), 1000);
    });
  }
  function func3(val) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(val + 4), 1000);
    });
  }
  
  func1()
      .then((result) => func2(result))
    .catch((error) => 5)
    .then((result) => {
      alert(result);
        throw new Error("oops");
     })
    .then((result) => func3(result))
    .catch((error) => func3(2)) 
    .then((result) => func2(result))
    .then((result) => alert(result));










    ///////////////////////////////////////////////




    Կոդի օրինակ
-------------------------

    function job(state) {
        return new Promise(function(resolve, reject) {
            if (state) {
                resolve('success');
            } else {
                reject('error');
            }
        });
    }

    job(true).then(function(data) {
        console.log(data);
        return job(true);
    }).then(function(data) {
        if (data !== 'victory') {
            throw 'Defeat';
        }
        return job(true);
    }).then(function(data) {
        console.log(data);
    }).catch(function(error) {
        console.log(error);
        return job(false);
    }).then(function(data) {
        console.log(data);
        return job(true);
    }).catch(function(error) {
        console.log(error);
        return 'Error caught';
    }).then(function(data) {
        console.log(data);
        return new Error('test');
    }).then(function(data) {
        console.log('Success:', data.message);
    }).catch(function(data) {
        console.log('Error:', data.message);
    });

    /*
      Code example from https://www.codingame.com/playgrounds...
    */




 //// corona-19



 https://corona-api.com/countries


http://corona-api.com/countries/am


'curl' command@:
curl https://corona-api.com/countries/us

//////////////////////////////

Կոդի օրինակներ
-------------------------------

    switch(input) {
        case "dog":
            alert("woof");
            break;
        case "cat":
            alert("mew");
            break;
        case "duck":
            alert("quack");
            break;
        default:
            alert("esim");
    }


