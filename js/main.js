var elTempForm = document.querySelector('.form');
var elTempOutput = document.querySelector('.output');

elTempForm.addEventListener(`submit` , function (evt) {
  evt.preventDefault();
  
  var elTempInput = parseFloat(document.querySelector('.input').value.trim(), 10)
  
  if (isNaN = (elTempInput)) {
    var Reslut = (elTempInput * (9/5) + 32).toFixed(1)
    elTempOutput.value = Reslut;
  }
  else {
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