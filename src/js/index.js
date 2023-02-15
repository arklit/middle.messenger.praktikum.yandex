const btnPass = document.querySelector('.profile-info__button_edit_pass');
const passInputs= document.querySelectorAll('.profile_pass');
const profileInputs = document.querySelectorAll('.profile_name');
const profileInfo = document.querySelectorAll('.profile-info');
const saveBtn = document.querySelector('.btn')

if(btnPass) {
  btnPass.addEventListener('click', () => {
    profileInputs.forEach((item) => {
      item.classList.add('profile_hidden')
    })
    passInputs.forEach((item) => {
      item.classList.add('profile_pass_show')
      // let input = item.querySelector('input')
      // input.removeAttribute('readonly')
      // input.removeAttribute('value')
    })
    profileInfo[1].setAttribute('style', 'display: none')
  
  })
}
