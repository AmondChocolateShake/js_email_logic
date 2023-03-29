function a(email,agreeEmailAddress){
    if(typeof(email)==="string"&&Array.isArray(agreeEmailAddress)===true){

        Array.from(email).forEach((element)=>{
            if(element==="@"){
                console.log("이메일 형식이 맞습니다.");

                let emailSplit=[];
                emailSplit=email.split("@");
                agreeEmailAddress.filter((element)=>{
                    if(element===emailSplit[1]){
                        console.log("이메일 도메인이 일치합니다.");
                        return true;
                    }else{
                        console.error("이메일 도메인이 일치하지 않습니다.");
                    }
                });
            }else{
                new Error("이메일 형식이 아닙니다.");
            }
        });
    }else{
        console.error("이메일은 문자열이어야 합니다.");
    }
}