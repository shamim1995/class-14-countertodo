const product_form = document.querySelector("#product_form");
const end = document.querySelector("#end");
const product_add_form = document.querySelector("#product_add_form");
const productList = document.querySelector(".productList");

const add_btn = document.querySelector("#add_btn");

add_btn.addEventListener("click",function(){
   
    product_add_form.style.display = 'block';
});
end.addEventListener("click", function () {  
    product_add_form.style.display = 'none';
});

product_form.addEventListener("submit",function(e){

    e.preventDefault();

    let product_name = document.querySelector("input[placeholder ='Product Name']").value;
    let product_price = document.querySelector("input[placeholder ='Price']").value;
    let sale_price = document.querySelector("input[placeholder ='Sale Price']").value;
    let product_link = document.querySelector("input[placeholder ='product link']").value;

let product_set;

if (dataGet('product')) {

product_set = dataGet('product')

}else {
    product_set = [];
}


    product_set.push( {
     name  : product_name,
     price : product_price,
     sale  : sale_price,
     link  : product_link
    } ) 

 dataSet('product', product_set);

 productCatagory();

});



productCatagory();

function productCatagory() {
    
let pData = dataGet('product');

let products_item=' ';



pData.map(product_data => {

    products_item += `<div class="col-md-3">
                      <div class="card text-center card-img border-1 my-5">
                         <img  style = "widht:250px; height: 300px; object-fit:cover " src = "${product_data.link}" alt="" >
                           <div class="card-body">
                              <div class="product_name"> ${product_data.name} </div>
                               <span class="product_price"> Price ${product_data.price}</span> <span class="sale_price"> Sale Price ${product_data.sale}</span>
                         </div>
                   </div>
              </div>`

});

productList.innerHTML = products_item;


};










