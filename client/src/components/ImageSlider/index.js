import React, { Component } from "react";
import images from "../../images"
import "./style.css";
class ImageSlider extends Component {
  function($){
  
    $('.next').click(function(){ $('.carousel').carousel('next');return false; });
    $('.prev').click(function(){ $('.carousel').carousel('prev');return false; });
  }	
  

  render(){
  return (
   
    <div class="carousel slide" data-ride="carousel" id="postsCarousel">
    <div class="container">
        <div class="row">
            <div class="col-12 text-right mb-4">
                <a class="btn btn-outline-secondary prev" href="" title="go back"><i class="fa fa-lg fa-chevron-left"></i></a>
                <a class="btn btn-outline-secondary next" href="" title="more"><i class="fa fa-lg fa-chevron-right"></i></a>
            </div>
        </div>
    </div>
    <div class="container p-t-0 m-t-2 carousel-inner">
        <div class="row row-equal carousel-item active m-t-0">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-img-top card-img-top-250">
                        <img class="img-fluid" src={`${images[0]}`} alt="Carousel 1"/>
                    </div>
                    <div class="card-block p-t-2">
                        <div class="card-header"><h3>flower1</h3></div>
                        <div class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium animi molestias veritatis, pariatur dolorem error non reprehenderit vero, id. Incidunt hic laudantium soluta recusandae, voluptas libero et! Ipsa, maiores, ratione.</div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-img-top card-img-top-250">
                        <img class="img-fluid" src={`${images[0]}`} alt="Carousel 1"/>
                    </div>
                    <div class="card-block p-t-2">
                        <div class="card-header"><h3>flower2</h3></div>
                        <div class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium animi molestias veritatis, pariatur dolorem error non reprehenderit vero, id. Incidunt hic laudantium soluta recusandae, voluptas libero et! Ipsa, maiores, ratione.</div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-img-top card-img-top-250">
                        <img class="img-fluid" src={`${images[0]}`} alt="Carousel 1" />
                    </div>
                    <div class="card-block p-t-2">
                        <div class="card-header"><h3>flower1</h3></div>
                        <div class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium animi molestias veritatis, pariatur dolorem error non reprehenderit vero, id. Incidunt hic laudantium soluta recusandae, voluptas libero et! Ipsa, maiores, ratione.</div>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="row row-equal carousel-item m-t-0">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-img-top card-img-top-250">
                        <img class="img-fluid" src={`${images[0]}`} alt="Carousel 1" />
                    </div>
                    <div class="card-block p-t-2">
                        <div class="card-header"><h3>flower1</h3></div>
                        <div class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium animi molestias veritatis, pariatur dolorem error non reprehenderit vero, id. Incidunt hic laudantium soluta recusandae, voluptas libero et! Ipsa, maiores, ratione.</div>
                    </div>
                </div>
            </div>
           <div class="col-md-4">
                <div class="card">
                    <div class="card-img-top card-img-top-250">
                        <img class="img-fluid" src={`${images[0]}`} alt="Carousel 1" />
                    </div>
                    <div class="card-block p-t-2">
                        <div class="card-header"><h3>flower1</h3></div>
                        <div class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium animi molestias veritatis, pariatur dolorem error non reprehenderit vero, id. Incidunt hic laudantium soluta recusandae, voluptas libero et! Ipsa, maiores, ratione.</div>
                    </div>
                </div>
            </div>
           <div class="col-md-4">
                <div class="card">
                    <div class="card-img-top card-img-top-250">
                        <img class="img-fluid" src={`${images[0]}`} alt="Carousel 1" />
                    </div>
                    <div class="card-block p-t-2">
                        <div class="card-header"><h3>flower1</h3></div>
                        <div class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium animi molestias veritatis, pariatur dolorem error non reprehenderit vero, id. Incidunt hic laudantium soluta recusandae, voluptas libero et! Ipsa, maiores, ratione.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



     
  );
}
}
export default ImageSlider;
