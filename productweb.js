var productId = getProductIdFromUrl(); // Hàm này cần được triển khai để lấy productId từ URL

var productDetailContainer = document.getElementById("product-detail");

function displayProductDetail() {
  var products = getProductById(productId);
  let output = `
  <div class="product"
  style="margin-left: 20px; display: flex; justify-content:space-between; height: 200px; margin-top: 50px;">
  <div style="width: 700px;">
      <div class="product-name" style="font-size: 30px;">${products.location}</div>
      <div style="display: flex; height: 30px;">
          <div
              style="border-radius: 10px; border: 3px solid rgb(129, 226, 255); width: 60px; height: 30px;margin-top: 15px; text-align: center; color: rgb(129, 226, 255);">
              Place</div>
          <div class="product-star"
              style="display: flex; margin-left: 5px; margin-bottom: 10px; font-size: 35px; color: yellow; height: 30px;">
              ${products.star}
          </div>
      </div>
      <div class="product-description" style="margin-top: 30px; font-size: larger;">${products.description}</div>
  </div>
  <div>
      <div class="product-sale"
          style="font-size: 13px; font-weight: 500; color: black; text-decoration: line-through; text-align: right; width: 200px;">
          ${products.price}</div>
      <div class="product-price"
          style="font-size: 30px; font-weight: 500; color: orangered; text-align: right; width: 200px; height: 70px; ">
          ${products.sale}</div>
      <div class="product-button">
          <button type="submit" id="button-productweb">Book now!</button>
      </div>
  </div>
</div>

<div class="product-photo">
  <div class="slide" style="height: 600px;">
      <img id="expandedImg" style="height: 500px; width: 750px; margin-left: 5px; border-radius: 15px;"
      src="${products.imageLink}">
  </div>
  <div class="product-img">
      <div>
          <img style="height: 245px; width: 250px; margin-left: 5px; border-radius: 15px; margin-bottom: 10px;"
              src="${products.imageLink}"
              onclick="myFunction(this);" onmouseover="myFunction(this);"> 
          <img style="height: 245px; width: 250px; margin-left: 5px; border-radius: 15px; margin-bottom: 10px;"
              src="${products.imageLink1}"
              onclick="myFunction(this);" onmouseover="myFunction(this);">
      </div>
      <div>
          <img style="height: 245px; width: 250px; margin-left: 5px; border-radius: 15px; "
              src="${products.imageLink2}"
              onclick="myFunction(this);" onmouseover="myFunction(this);"> 
          <img style="height: 245px; width: 250px; margin-left: 5px; border-radius: 15px;"
              src="${products.imageLink3}"
              onclick="myFunction(this);" onmouseover="myFunction(this);">
      </div>
  </div>
</div>
  `;
  productDetailContainer.innerHTML += output;
}
displayProductDetail(data);

function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
}

function getProductIdFromUrl() {
  // Triển khai hàm để lấy productId từ URL, ví dụ: product.html?id=1
  var params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function getProductById(id) {
  // Triển khai hàm để lấy thông tin sản phẩm từ danh sách products
  return data.find((product) => product.id == id);
}

button-productweb.addEventListener("click", function () {
    alert('I will send my phone and message in email')
  });
