import './template.html';
import './assets/styles/index.scss';

const checkbox = document.querySelector('.switch-mode__checkbox');

const onChange = () => {
  sessionStorage.setItem('checked-value', checkbox.checked);

  if (checkbox.checked) {
    document.body.style.backgroundColor = 'blue';
  } else {
    document.body.style.backgroundColor = 'white';
  }
};

const savedValue = sessionStorage.getItem('checked-value');

if (savedValue !== null) {
  checkbox.checked = JSON.parse(savedValue);
  onChange();
}

checkbox.addEventListener('change', onChange);
