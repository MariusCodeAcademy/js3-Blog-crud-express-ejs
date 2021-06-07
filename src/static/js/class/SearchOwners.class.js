class SearchOwners {
  constructor(ownersFound, listEl) {
    this.ownersFound = ownersFound;
    this.listEl = listEl;

    this.clearListEl();
    this.generateOwnersList();
    // this.appendListToDom();
  }

  clearListEl() {
    this.listEl.innerHTML = '';
  }

  generateOneListEl({ name, email, updatedAt, _id }) {
    const liEl = document.createElement('li');
    liEl.className = 'list-group-item d-flex justify-content-between';

    const liInner = `
      <div>
        ${name} , email: ${email} <br>
        <small class="text-muted">${updatedAt.toLocaleString()} </small>
      </div>
      <div>
        <a href="/owners/single/${_id} " class="btn btn-success">View</a>
        <form action="/owners/delete/${_id}" method="POST">
          <button class="btn btn-danger" type="submit">Delete me</button>
        </form>
      </div>
    `;

    liEl.innerHTML = liInner;

    return liEl;
  }

  generateOwnersList() {
    this.ownersFound.forEach((o) => {
      this.listEl.append(this.generateOneListEl(o));
    });
  }
}

export default SearchOwners;
