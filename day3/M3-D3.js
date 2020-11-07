const loadImage = function () {
  let myToast = document.querySelector(".toast");
  const searchQuery = fetch(
    `http://www.splashbase.co/api/v1/images/search?query=laptop`
  )
    .then((response) => response.json())
    .then((body) => {
      
      urlArray = body.images.map((urls) => urls.url);

      console.log(body)
      let toastBody = document.querySelector(".toast-body");
      toastBody.innerHTML = `Total images loaded: ${body.images.length}`;
      myToast.classList.add("show");
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
                                    data-toggle="modal" data-target="#mod${body.images[i].id}"
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
                        <div class="modal fade" id="mod${body.images[i].id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
  let myToast = document.querySelector(".toast");
  
  let searchInput = document.querySelector("#searchInput");
  const searchQuery = fetch(
    `http://www.splashbase.co/api/v1/images/search?query=${searchInput.value}`
  )
    .then((response) => response.json())
    .then((body) => {
      urlArray = body.images.map((urls) => urls.url);
      let toastBody = document.querySelector(".toast-body");
      if(body.images.length===0){
        toastBody.innerHTML = `No result`; 
      }else{
        
        toastBody.innerHTML = `Total images loaded: ${body.images.length}`; 

      }
      myToast.classList.add("show");
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
                                        data-toggle="modal" data-target="#mod${body.images[i].id}"
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
                            <div class="modal fade" id="mod${body.images[i].id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
    .catch((error) => {
      console.log(error);
         });
  setTimeout(function () {
    myToast.classList.remove("show");
  }, 5000);
};

const hideImage = function (e) {
  let card =
    e.parentElement.parentElement.parentElement.parentElement.parentElement;

  card.remove();
};


const carouselImg = () => {
  fetch("http://www.splashbase.co/api/v1/images/search?query=forest")
    .then((response) => response.json())
    .then((carouselObj) => {
      console.log(carouselObj);

      

      let carouselBody = document.querySelector(".carousel-inner");
      let carIndcators = document.querySelector(".carousel-indicators");
      
    
      let imgss = carouselObj.images.filter(
        (image)=>image.site !=="unsplash"
      );
      let sum = imgss.map((image)=>image.id).reduce((sum,id)=>sum+id,0)
      console.log(sum)
    console.log(imgss)
      for (let i = 0; i < imgss.length; i++) {
        let liElement = document.createElement("li");
        liElement.dataset.target = "#carouselExampleIndicators";
        liElement.setAttribute("data-slide-to", i);
        carIndcators.appendChild(liElement);
      }
      let liactive = carIndcators.querySelector("li");
      liactive.classList.add("active");
      imgss.forEach((element) => {
        let carouselDiv = document.createElement("div");
        carouselDiv.classList.add("carousel-item");
        carouselBody.appendChild(carouselDiv);

        carouselDiv.innerHTML = `
    <img src="${element.url}" class="d-block w-100"  />`
    ;
      });
      let imgActive = carouselBody.querySelector("div");
      imgActive.classList.add("active");
    });
};


window.onload= function(){
  loadImage()
  carouselImg()

}

let urlArray=[]

