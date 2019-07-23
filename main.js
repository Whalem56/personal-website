var internshipDescription = document.querySelector('#internship-description');
var optumLogo = document.querySelector('#optum');
var starkeyLogo = document.querySelector('#starkey');
var currSelected = 'optum';

optumLogo.addEventListener("click", handleDescriptionClick);
starkeyLogo.addEventListener("click", handleDescriptionClick);

function handleDescriptionClick() {
    if (this.id !== currSelected) {
        currSelected = this.id;
        var elems = document.querySelectorAll('.industry-logo');
        for (var i = 0; i < elems.length; i++) {
            elems[i].classList.remove('active');
            document.querySelector('#' + elems[i].id + '-description').classList.add('hide');
        }
        document.querySelector('#' + this.id).classList.add('active');
        document.querySelector('#' + this.id + '-description').classList.remove('hide');
    }
}