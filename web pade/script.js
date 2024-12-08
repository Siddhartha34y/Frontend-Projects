document.getElementById('personalInfoForm').addEventListener('log in', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect data from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    

    // Display the collected data (this could also be sent to a server)
    alert(`Name: ${name}\nEmail: ${email}\nPhone: ${phone});