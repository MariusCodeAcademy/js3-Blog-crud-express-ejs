class SearchOwners {
  constructor(ownersFound, listEl) {
    this.ownersFound = ownersFound;
    this.listEl = listEl;

    this.clearListEl();
    this.generateOwnersList();
  }

  clearListEl() {
    console.log('clearListEl');
    this.listEl.innerHTML = '';
  }

  generateOneListEl({ name, email, updateAt, _id }) {
    const liEl = document.createElement('li');
    liEl.className = 'list-group-item d-flex justify-content-between';

    const liInner = `
      <div>
        Jane Other , email: jane@doe.lt <br>
        <small class="text-muted">04/06/2021, 14:42:24 </small>
      </div>
      <div>
        <a href="/owners/single/60ba11a087c6c428d1621ef5 " class="btn btn-success">View</a>
        <form action="/owners/delete/60ba11a087c6c428d1621ef5" method="POST">
          <button class="btn btn-danger" type="submit">Delete me</button>
        </form>
      </div>
    `;
  }
}

export default SearchOwners;
