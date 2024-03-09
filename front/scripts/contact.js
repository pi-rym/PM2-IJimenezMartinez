(function(){
    const forms = document.querySelectorAll(".needs-validation")

    forms.forEach((form) => {
        form.addEventListener('submit', (event) =>{
            if(!form.checkValidity()){
                event.preventDefault()
                event.stopPropagation()
                form.classList.add('was-validated')
            }
            else alert('Mensaje enviado')
        })
    })
})()