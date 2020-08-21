firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    var Currentuser = firebase.auth().currentUser;
    if (Currentuser.email !== 'hashibapatel2@gmail.com' && Currentuser.email !== 'yddc902@gmail.com' && Currentuser.email !== 'arifpatel308@gmail.com' && Currentuser.email !== 'luckyluckybouticue@gmail.com') { window.location.href = "login.html" }

    const db = firebase.firestore()

    var feature_img_url = ''
    var img1_url = ''
    var img2_url = ''
    var img3_url = ''
    var img4_url = ''

    function setImgUrl(url) {
      feature_img_url = url;
    }

    function setImg1Url(url) {
      img1_url = url;
    }
    function setImg2Url(url) {
      img2_url = url;
    }
    function setImg3Url(url) {
      img3_url = url;
    }
    function setImg4Url(url) {
      img4_url = url;
    }

    function getImgUrl() {
      return feature_img_url
    }

    function getImg1Url() {
      return img1_url
    }
    function getImg2Url() {
      return img2_url
    }

    function getImg3Url() {
      return img3_url
    }

    function getImg4Url() {
      return img4_url
    }

    var btnAddProduct = document.getElementById("btnadd")

    btnAddProduct.addEventListener('click', async (e) => {
      e.preventDefault()
      console.log("button clicked")

      if (document.getElementById("title").value !== "") {

        const ref = firebase.storage().ref();
        const file = document.querySelector('#featureImage').files[0]
        if (!file) {
          alert("please select a feature image")
        } else {
          const name = (new Date()) + '-' + file.name;
          const metadata = {
            contentType: file.type
          };
          const task = ref.child("products/" + document.getElementById("title").value + "/images/feature/" + name).put(file, metadata);
          await task
            .then(snapshot => snapshot.ref.getDownloadURL())
            .then((url) => {
              setImgUrl(url)
              console.log(url)
              console.log(getImgUrl())
            })
            .catch(console.error);

          const file1 = document.querySelector('#image1').files[0]
          if (file1) {
            const name = (new Date()) + '-' + file1.name;
            const metadata = {
              contentType: file1.type
            };
            const task = ref.child("products/" + document.getElementById("title").value + "/images/image1/" + name).put(file1, metadata);
            await task
              .then(snapshot => snapshot.ref.getDownloadURL())
              .then((url) => {
                setImg1Url(url)
                console.log(url)
                console.log(getImg1Url())
              })
              .catch(console.error);
          }
          const file2 = document.querySelector('#image2').files[0]
          if (file2) {
            const name = (new Date()) + '-' + file2.name;
            const metadata = {
              contentType: file2.type
            };
            const task = ref.child("products/" + document.getElementById("title").value + "/images/image2/" + name).put(file2, metadata);
            await task
              .then(snapshot => snapshot.ref.getDownloadURL())
              .then((url) => {
                setImg2Url(url)
                console.log(url)
                console.log(getImg2Url())
              })
              .catch(console.error);
          }
          const file3 = document.querySelector('#image3').files[0]
          if (file3) {
            const name = (new Date()) + '-' + file3.name;
            const metadata = {
              contentType: file3.type
            };
            const task = ref.child("products/" + document.getElementById("title").value + "/images/image3/" + name).put(file3, metadata);
            await task
              .then(snapshot => snapshot.ref.getDownloadURL())
              .then((url) => {
                setImg3Url(url)
                console.log(url)
                console.log(getImg3Url())
              })
              .catch(console.error);
          }
          const file4 = document.querySelector('#image4').files[0]
          if (file4) {
            const name = (new Date()) + '-' + file4.name;
            const metadata = {
              contentType: file4.type
            };
            const task = ref.child("products/" + document.getElementById("title").value + "/images/image4/" + name).put(file4, metadata);
            await task
              .then(snapshot => snapshot.ref.getDownloadURL())
              .then((url) => {
                setImg4Url(url)
                console.log(url)
                console.log(getImg4Url())
              })
              .catch(err => console.log(err));
          }



          var sizes = []
          var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

          for (var i = 0; i < checkboxes.length; i++) {
            sizes.push(checkboxes[i].value)
          }
          console.log(sizes)

          var no_img = "https://firebasestorage.googleapis.com/v0/b/lucky-f75f8.appspot.com/o/image%5B1%5D.png?alt=media&token=185a303c-0f92-40dd-adbd-8ce445cf668b"

          var product = {

            title: document.getElementById("title").value,
            desc: document.getElementById("desc").value,
            images: {
              feature: await getImgUrl() || no_img,
              img1: await getImg1Url() || no_img,
              img2: await getImg2Url() || no_img,
              img3: await getImg3Url() || no_img,
              img4: await getImg4Url() || no_img
            },
            tags: document.getElementById("title").value.toLowerCase().split(" "),
            sizes: sizes,
            qty: document.getElementById("qty").value,
            // color: ["Red", "Blue"],
            // size: ["SM", "XL", "XXL"],
            old_price: document.getElementById("old_price").value,
            new_price: document.getElementById("new_price").value,
            // discount: 15,
            added_on: firebase.firestore.Timestamp.fromDate(new Date())
          }


          db.collection("products").add(product)
            .then(function (docRef) {
              console.log("Document written with ID: ", docRef.id);
              alert("Product Added")
              document.location.href = "admin.html"
            })
            .catch(function (error) {
              console.error("Error adding document: ", error);
            });

        }
      } else {
        alert("fill title ")
      }
    })

    // table


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
              img1: doc.data().images.img1,
              img2: doc.data().images.img2,
              img3: doc.data().images.img3,
              img4: doc.data().images.img4
            },
            color: ["Red", "Blue"],
            qty: doc.data().qty,
            size: doc.data().sizes,
            old_price: doc.data().old_price,
            new_price: doc.data().new_price,
            discount: 15
          }
          products.push(product);
        });

        products.forEach(prod => {

          const table = `

      <tr>
        <td><img width="40px" src="${prod.images.feature}"/></td>
        <td>${prod.title}</td>
        <td>${prod.new_price}<td>
        <td>        
          <a href="./edit.html/?id=${prod.id}" class="h1"><i class="fa fa-edit"></i></a>  
        </td>
        <td>
          <a href="delete.html/?id=${prod.id}" class="h1 text-danger"><i class="fa fa-trash"></i></a>
        </td>

      </tr>
    `
          document.getElementById("tbody").insertAdjacentHTML('beforeend', table);
        })

      });
  } else {
    window.location.href = './login.html'
  }
});