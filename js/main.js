window.onload = function() {
  document.forms['user_dropdown'].reset();
}

let addresses = ['ABO', '0x79392aC67F8531C38f4779d586dCa05F31c9d330', 'FMI', '0x32f5f250b5a1ce58da9edd6d418369c510e6fa2c', 'PLE', '0xebB0B73575D8113D4Bd6D6490eeE97e5FA780EBe', 'TAS', '0x74863C843305F85B52F86f8BD2729D2e2c613B7e', 'VIL', '0x668bfF5Cb132f6c9c078f13c6c5C01d409abEDa9'];

let nameList = document.getElementById('name');
let qr = document.getElementById('qr_code');
let address = document.getElementById('ether_address');
let copyButton = document.getElementById('copy_button');
let copyPopup = document.getElementById('popup')
let closeButton = document.getElementById('close_img');

nameList.addEventListener('change', function(e) {
  if (e.target.value == 'choose') {
    qr.style.display = 'none';
    document.querySelector('.ether_address_area').style.display = 'none';
  } else {
      qr.style.display = 'block';
      qr.src = 'qr_codes/' + e.target.value + '.png';
      document.querySelector('.ether_address_area').style.display = 'flex';
      address.textContent = addresses[addresses.indexOf(e.target.value)+1];
  }
})

document.getElementById('copy_button').addEventListener('click', function() {
  document.querySelector('.div_to_animate').classList.add('animation');
  setTimeout(function() {
      document.querySelector('.div_to_animate').classList.remove('animation');
    }, 2000);
})
