var elTempForm = document.querySelector('.temp__form');
var elTempOutput = document.querySelector('.temp__output');

elTempForm.addEventListener(`submit` , function (evt) {
    evt.preventDefault();

    var elTempInput = parseFloat(document.querySelector('.temp__input').value.trim(), 10)

    if (isNaN = (elTempInput)) {
        var tempReslut = (elTempInput * (9/5) + 32).toFixed(1)
        elTempOutput.value = tempReslut;
    }else {
        elTempOutput.value = ('Pls type a number')
    }

    if (elTempInput < 0) {
        document.body.classList = ('bg-cold');
      } else if (elTempInput < 20) {
        document.body.classList = ('bg-normal');
      } else {
        document.body.classList = ('bg-hot');
      }
})