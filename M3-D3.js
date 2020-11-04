const loadImage = function () {
    const searchQuery = fetch(
      `http://www.splashbase.co/api/v1/images/search?query=laptop`
    )
      .then((response) => response.json())
      .then((body) => {
        let row = document.querySelector(".album div.row");
        row.remove();
        let container = document.querySelector(
          "div.album.py-5.bg-light div.container"
        );
        let newRow = document.createElement("div");
        newRow.classList.add("row");
        container.appendChild(newRow);
        for (let i = 0; i < body.images.length; i++) {
          let card = document.createElement("div");
          card.classList.add("col-md-4");
          card.setAttribute("id", `img${i}`);
          card.innerHTML = `<div class="card mb-4 shadow-sm">
                              <img src="${body.images[i].url}" alt="" />
                              <div class="card-body">
                              <p class="card-text">
                                  This is a wider card with supporting text below as a natural
                                  lead-in to additional content. This content is a little bit
                                  longer.
                              </p>
                              <div
                                  class="d-flex justify-content-between align-items-center"
                              >
                                  <div class="btn-group">
                                  <button
                                      type="button"
                                      class="btn btn-sm btn-outline-secondary"
                                      data-toggle="modal" data-target="#exampleModal"
                                  >
                                      View
                                  </button>
                                  <button
                                      type="button"
                                      class="btn btn-sm btn-outline-secondary"
                                      onclick="hideImage(this)"
                                  >
                                      Hide
                                  </button>
                                  </div>
                                  <small class="text-muted">${body.images[i].id}</small>
                              </div>
                              </div>
                          </div>
                          
                          <!-- Modal -->
                          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog">
                              <div class="modal-content">
                              <div class="modal-header">
                                  <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                  </button>
                              </div>
                              <div class="modal-body">
                              <img src="${body.images[i].url}" alt="" />
                              </div>
                              <div class="modal-footer">
                                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                  <button type="button" class="btn btn-primary">Save changes</button>
                              </div>
                              </div>
                          </div>
                          </div>`;
          newRow.appendChild(card);
        }
      });
  };
  
  const loadImage2 = function () {
    let myToast = document.querySelector("#myToast");
    myToast.classList.add("show");
    let searchInput = document.querySelector("#searchInput");
    const searchQuery = fetch(
      `http://www.splashbase.co/api/v1/images/search?query=${searchInput.value}`
    )
      .then((response) => response.json())
      .then((body) => {
        let row = document.querySelector(".album div.row");
        row.remove();
        let container = document.querySelector(
          "div.album.py-5.bg-light div.container"
        );
        let newRow = document.createElement("div");
        newRow.classList.add("row");
        container.appendChild(newRow);
        for (let i = 0; i < body.images.length; i++) {
          let card = document.createElement("div");
          card.classList.add("col-md-4");
          card.setAttribute("id", `img${i}`);
          card.innerHTML = `<div class="card mb-4 shadow-sm">
                                  <img src="${body.images[i].url}" alt="" />
                                  <div class="card-body">
                                  <p class="card-text">
                                      This is a wider card with supporting text below as a natural
                                      lead-in to additional content. This content is a little bit
                                      longer.
                                  </p>
                                  <div
                                      class="d-flex justify-content-between align-items-center"
                                  >
                                      <div class="btn-group">
                                      <button
                                          type="button"
                                          class="btn btn-sm btn-outline-secondary"
                                          data-toggle="modal" data-target="#exampleModal"
                                      >
                                          View
                                      </button>
                                      <button
                                          type="button"
                                          class="btn btn-sm btn-outline-secondary"
                                          onclick="hideImage(this)"
                                      >
                                          Hide
                                      </button>
                                      </div>
                                      <small class="text-muted">${body.images[i].id}</small>
                                  </div>
                                  </div>
                              </div>
                              
                              <!-- Modal -->
                              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div class="modal-dialog">
                                  <div class="modal-content">
                                  <div class="modal-header">
                                      <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">&times;</span>
                                      </button>
                                  </div>
                                  <div class="modal-body">
                                  <img src="${body.images[i].url}" alt="" />
                                  </div>
                                  <div class="modal-footer">
                                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                      <button type="button" class="btn btn-primary">Save changes</button>
                                  </div>
                                  </div>
                              </div>
                              </div>`;
          newRow.appendChild(card);
        }
      })
      .catch(error=>{
        
      })
    };
  
  const hideImage = function (e) {
    let card =
      e.parentElement.parentElement.parentElement.parentElement.parentElement;
  
    card.remove();
  };