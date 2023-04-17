const form = document.querySelector('form');
const tbody = document.querySelector('tbody');
let contacts = [];

// Add contact
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  const contactNumber = document.getElementById('contact-number').value;
  const contact = {
    name: name,
    address: address,
    contactNumber: contactNumber
  };
  contacts.push(contact);
  renderTable();
  form.reset();
});

// Edit contact
function editContact(index) {
  const contact = contacts[index];
  document.getElementById('name').value = contact.name;
  document.getElementById('address').value = contact.address;
  document.getElementById('contact-number').value = contact.contactNumber;
  contacts.splice(index, 1);
  renderTable();
}

// Delete contact
function deleteContact(index) {
  contacts.splice(index, 1);
  renderTable();
}

// Render table
function renderTable() {
  tbody.innerHTML = '';
  for (let i = 0; i < contacts.length; i++) {
    const contact = contacts[i];
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    nameCell.textContent = contact.name;
    const addressCell = document.createElement('td');
    addressCell.textContent = contact.address;
    const contactNumberCell = document.createElement('td');
    contactNumberCell.textContent = contact.contactNumber;
    const actionsCell = document.createElement('td');
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function() {
      editContact(i);
    });
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      deleteContact(i);
    });
    actionsCell.appendChild(editButton);
    actionsCell.appendChild(deleteButton);
    row.appendChild(nameCell);
    row.appendChild(addressCell);
    row.appendChild(contactNumberCell);
    row.appendChild(actionsCell);
    tbody.appendChild(row);
  }
}
