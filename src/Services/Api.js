

let api = {
    apilogin: (email, password, callback) => {
    
        fetch('http://blog.etherial.fr/auth', {
          method: 'POST', 
          body: JSON.stringify({
            email: email,
            password: password ,
          }),
          headers:{
              'Content-Type': 'application/json',
          }
          }).then((data)=>{
              return data.json();
        })
        .then((getdata)=> {
            var gettoken =  getdata['data']
            var token = gettoken['token'];
            localStorage.setItem('tokenChat','Bearer '+ token) 
            callback(getdata)

        })
    },

    apiregister: (firstname, lastname , email, password, password_verif, callback) => {

        fetch('http://blog.etherial.fr/users', {
            method: 'POST', 
            body: JSON.stringify({
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password,
                password_verif: password_verif,
            }),
            headers:{
              'Content-Type': 'application/json',
            }

        }).then((data)=>{
            return data.json();
        }).then((getdata)=> {
            callback(getdata)
            var gettoken =  getdata['data']
            var token = gettoken['token'];
            localStorage.setItem('tokenChat','Bearer '+ token) 
        })
    },

    apiallarticles: (callback) => {
    
        fetch('http://blog.etherial.fr/articles', {
          method: 'GET', 
          headers:{
              'Content-Type': 'application/json',
          }
          }).then((data)=>{
              return data.json();
        })
        .then((getdata)=> {
            callback(getdata)
        })
    },

    apispecarticle: (id,callback) => {
    
        fetch(`http://blog.etherial.fr/articles/${id}`, {
          method: 'GET', 
          headers:{
              'Content-Type': 'application/json',
          }
          }).then((data)=>{
              return data.json();
        })
        .then((getdata)=> {
            callback(getdata)
        })
    },


    apicreatearticles: (title, content, article_category_id, callback) => {
        console.log(localStorage.getItem('tokenChat'))
        fetch('http://blog.etherial.fr/articles', {
            method: "POST",
            body: JSON.stringify({
                title: title,
                content: content,
                article_category_id: article_category_id,
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : localStorage.getItem('tokenChat'),
            }

        }).then((data) => {
            return data.json();
        }).then((getdata) => {
            callback(getdata)
        })
    },


    apiuser: (id, callback) => {
        fetch('http://blog.etherial.fr/users/me', {
            method: "GET",
            headers: {
                // 'Content-Type': 'application/json',
                'Authorization' : localStorage.getItem("tokenChat"),
            }

        }).then((data) => {
            return data.json();
        }).then((getdata) => {
            callback(getdata)
        })
    },

    apilogout:() => {
        localStorage.clear();
    },

    isLogged:() => {
        if (localStorage.getItem("tokenChat")=== null) {
            return false
        } else {
            return true
        }
    },

}

export default api
