

const validate = (formData) => {
    // var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passw=  /^[A-Za-z]\w{7,14}$/;
    for(var pair of formData.entries()){
        console.log(pair[0] , pair[1]);
        if(pair[0] === 'undefined'){
            alert(pair[0] + "is not Defined");
            return false;
        }

        if(pair[0] === 'password'){
            //validate for password
            if(!pair[0].match(passw)){
                alert(pair[0] + "is not valid");
                return false;
            }
        }
    }
    return true;
}

export default validate;