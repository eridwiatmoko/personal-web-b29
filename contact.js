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

    //clear input
    document.getElementById('input-name').value = ''
    document.getElementById('input-email').value = ''
    document.getElementById('input-phone').value = ''
    document.getElementById('input-message').value = ''
    
    //mail to
    const emailReceiver = 'eri@gmail.com';
    const a = document.createElement('a');
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello my name ${name}, ${subject}, ${message}`;
    a.click();

}