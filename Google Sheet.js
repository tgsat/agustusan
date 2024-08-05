const scriptURL = 'https://script.google.com/macros/s/AKfycbzBiuhWA20UI-JmECIZqaz68HcW0U8veLtOqe5gjQXrniMM700euPaTLLm5HpWtbiaw/exec'

const form = document.forms['form-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response =>
            alert("Terima Kasih! Formulir Pendaftaran Anda Berhasil Dikirimkan.")
        )
        .then(() => { window.location.reload(); })
        .catch(error => { console.error('Error!', error.message) })
})

// for header title get date now format year only  
const currentDate = new Date();
const year = currentDate.getFullYear();
document.getElementById("year").innerHTML = "Lomba 17 Agustus " + year;

// for disable input textformfield before select category  
function checkOption(obj) {
    var input = document.getElementById("inputs");
    input.disabled = obj.value == "Orang Tua";
}
