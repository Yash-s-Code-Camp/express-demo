var db = firebase.firestore()

db.collection("products")
  .orderBy("added_on", "desc")
  .onSnapshot(function (querySnapshot) {
    var products = [];
    querySnapshot.forEach(function (doc) {
      product = {
        id: doc.id,
        title: doc.data().title,
        desc: doc.data().desc,
        images: {
          feature: doc.data().images.feature,
          img1: "#",
          img2: "#",
          img3: "#",
          img4: "#"
        },
        color: ["Red", "Blue"],
        size: ["SM", "XL", "XXL"],
        old_price: doc.data().old_price,
        new_price: doc.data().new_price,
        discount: 15
      }
      products.push(product);
    });
    // console.log("Current cities in CA: ", products.join(", "));

    products.forEach(prod => {

      var wa_message = encodeURI(`I want to know the price of ${prod.title} ${prod.images.feature}`)

      // console.log(`${prod.images.feature}`)
      const card = `
<a href="detail.html/?id=${prod.id}">
      <div class="picBox">
        <div class="productImg">
          <img class="productImage img-fluid img-thumbnail"
            src="${prod.images.feature}"
            alt="">
        </div>
        <div class="productDetails">
          <div class="productTitle">
              <p>${prod.title}</p>
          </div>
          <div class="productPrice">
            <p class="old-price">${ prod.new_price ? `₹ ${prod.new_price}` : ``}</p>
        <p class="new-price" id="new_price" > ${prod.new_price ? `₹ ${prod.new_price}` : `<a class="btn btn-success" href="https://wa.me/918128999299?text=${wa_message}"><i style="font-size:16px" class="fa fa-whatsapp"></i> Get Price Details</a > `} </p > 
          </div >
        </div >
      </div >
      </a >
        `
      console.log(`< p class="new-price" id = "new_price" > ${prod.new_price ? `₹ ${prod.new_price}` : `<a href="https://wa.me/918128999299?text=${wa_message}"><i class="fa fa-whatsapp"></i> Get Price Details</a > `} </p > `)
      const ele = document.createElement("div")
      ele.className = "col-sm-3 col-lg-3"
      ele.innerHTML = card
      document.getElementById("showcase").appendChild(ele)
    })

  });