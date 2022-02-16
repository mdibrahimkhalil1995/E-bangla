document.getElementById('login-btn').addEventListener('click', function(){
    const userIdFiled = document.getElementById('user-id');
    const userId = userIdFiled.value;
    
    const userMobileFiled = document.getElementById('user-mobile');
    const userMobile = userMobileFiled.value;

    if(userId == 'ebangla' && userMobile == 'ebangla2020'){
        window.location.href = 'main.html';
    }else{
        alert('ID or Phone Number Is Wrong')
    }

    


})