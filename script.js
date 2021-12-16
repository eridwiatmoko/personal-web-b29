function submitData() {
    //get data
    let name = document.getElementById('input-name').value;
    let email = document.getElementById('input-email').value;
    let phone = document.getElementById('input-phone').value;
    let subject = document.getElementById('input-subject').value;
    let message = document.getElementById('input-message').value;

    //validation
    if (name == '' || email == '' || phone == '' || subject == '' || message == '') {
        return alert("All input fields must be not empty")
    }
    
    //mail to
    const emailReceiver = 'eri@gmail.com';
    const a = document.createElement('a');
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello my name ${name}, ${subject}, ${message}`;
    a.click();

    //store data to object
    let dataObject = {
        name: name,
        email: email,
        phoneNumber: phone,
        subject: subject,
        message: message,
    };
    console.log(dataObject);
}