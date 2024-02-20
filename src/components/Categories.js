import React from "react";
import NavBar from "./Navbar";

const Categories = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-12 col-md-6 my-4 ">
            <div class="card" style={{width: '18rem'}}>
              <img src="https://imgs.search.brave.com/yICNWHkvrqhkAMAtadJwl7jNWhILiWlo5ulv2FxrtN0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2M2L2Y1/L2ViL2M2ZjVlYjM4/MTQ3OTE4MWI5NGVh/YThiN2RlMjkxMDVm/LmpwZw" class="card-img-top" alt="..." height='300vh'/>
              <div class="card-body">
                <h5 class="card-title">Fiction</h5>
                <p class="card-text">
                Fiction is imaginative storytelling that creates characters, settings, and plots, often reflecting on human experiences and emotions.
                </p>
                <a href="/fiction" class="btn btn-primary">
                  See Books
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-12 col-md-6 my-4">
            <div class="card" style={{width: '18rem'}}>
              <img src="https://imgs.search.brave.com/2XYMVY0QyU4o5E0MHIkUc0fjay7gYWKTTzXFebnxr7Y/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcmVhZGlu/Z21pZGRsZWdyYWRl/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMi8wMy9UaGUt/Qm9vLUJvb3MtVGhh/dC1DaGFuZ2VkLXRo/ZS1Xb3JsZC5qcGVn/P3Jlc2l6ZT01OTgs/NzY4JnNzbD0x" class="card-img-top" alt="..." height='300vh'/>
              <div class="card-body">
                <h5 class="card-title">Non-Fiction</h5>
                <p class="card-text">
                Factual writing that presents information or tells a true story, often based on research and real-life events.
                </p>
                <a href="/non-fiction" class="btn btn-primary">
                  See Books
                </a>
              </div>
            </div>
          </div>
          
          
          <div className="col-lg-4 col-12 col-md-6 my-4">
            <div class="card" style={{width: '18rem'}}>
              <img src="https://imgs.search.brave.com/U84Lm7Uh2aaWFkBzX4n5Z7-16GdiKWKYMnvK2Q46CaA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFtUnhQRHNDTUwu/anBn" class="card-img-top" alt="..." height='300vh'/>
              <div class="card-body">
                <h5 class="card-title">Mystery</h5>
                <p class="card-text">
                Involves solving a crime or unraveling a puzzle, typically with a detective or amateur sleuth as the protagonist.
                </p>
                <a href="/mystery" class="btn btn-primary">
                  See Books
                </a>
              </div>
            </div>
          </div>

        

        {/* ------------------------------------------------------------------------------------------ */}

        
          <div className="col-lg-4 col-12 col-md-6 my-4">
            <div class="card" style={{width: '18rem'}}>
              <img src="https://imgs.search.brave.com/_D-YWCl4e-XivYTq4yoxwXqkqAOa7EUOo8pUuN5_v4o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFWYlFneUpkeUwu/anBn" class="card-img-top" alt="..." height='300vh'/>
              <div class="card-body">
                <h5 class="card-title">Self-help</h5>
                <p class="card-text">
                Provides advice, guidance, and strategies for personal growth, self-improvement, and achieving success and happiness.
                </p>
                <a href="/self-help" class="btn btn-primary">
                  See Books
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-12 col-sm-6 my-4">
            <div class="card" style={{width: '18rem'}}>
              <img src="https://imgs.search.brave.com/IheKfmG4R8VEYPheqoBSuI1XucqB10zmj-frLA-ShJw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTF3YlZRVHBUZ0wu/anBn" class="card-img-top" alt="..." height='300vh'/>
              <div class="card-body">
                <h5 class="card-title">Autobiographies</h5>
                <p class="card-text">
                An account of a person's life written by themselves, offering insights into their personal experiences and reflections.
                </p>
                <a href="/autobiographies" class="btn btn-primary">
                  See Books
                </a>
              </div>
            </div>
          </div>
          
          
          <div className="col-lg-4 col-12 col-sm-6 my-4">
            <div class="card" style={{width: '18rem'}}>
              <img src="https://imgs.search.brave.com/V4L89XS023GuZe3r-0AbTxFpG1go7MyO1uxY-CclFiE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk5EbGtaakpq/WVRrdFpESTRPUzAw/TVdGa0xUZzFNek10/TlRZM01tSTJPVEJr/TVRVMVhrRXlYa0Zx/Y0dkZVFYVnlNalV6/T1RZMU5UY0AuanBn" class="card-img-top" alt="..." height='300vh'/>
              <div class="card-body">
                <h5 class="card-title">Crime</h5>
                <p class="card-text">
                Focuses on criminal activities, often from the perspective of law enforcement or criminals themselves.
                </p>
                <a href="/crime" class="btn btn-primary">
                  See Books
                </a>
              </div>
            </div>
          </div>
          
        
        {/* --------------------------------------------------------------------------------------------------------------- */}

        
          <div className="col-lg-4 col-12 col-sm-6 my-4">
            <div class="card" style={{width: '18rem'}}>
              <img src="https://imgs.search.brave.com/DVoLkZX4AUezKgksssUNyYvoQ-ZK8fsO1z8-4ySuBHM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9vcmlv/bi11cGxvYWRzLm9w/ZW5yb2FkbWVkaWEu/Y29tL21kX2U5ZWEy/NDhiZDdkMC1yb3Nl/bWFyeS1zLWJhYnkt/YS1ub3ZlbC01MHRo/LWFubml2ZXJzYXJ5/LWVkaXRpb24uanBn" class="card-img-top" alt="..." height='300vh'/>
              <div class="card-body">
                <h5 class="card-title">Horror</h5>
                <p class="card-text">
                Intended to evoke fear, often involving supernatural or macabre elements, designed to thrill and unsettle readers.
                </p>
                <a href="/horror" class="btn btn-primary">
                  See Books
                </a>
              </div>
            </div>
          </div>
        
          <div className="col-lg-4 col-12 col-sm-6 my-4">
            <div class="card" style={{width: '18rem'}}>
              <img src="https://imgs.search.brave.com/o9n3qzqrxZcqxCOTb-wMnSQoXjALMDfPcoBFTOdzRNo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/aW5hdGlvbnNvdXAu/bmV0L3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE1LzAzL1Vud2Fu/dGVkcy5qcGc" class="card-img-top" alt="..." height='300vh'/>
              <div class="card-body">
                <h5 class="card-title">Fantasy</h5>
                <p class="card-text">
                Features magical or supernatural elements, often set in imaginary worlds with mythical creatures and epic quests.
                </p>
                <a href="/fantasy" class="btn btn-primary">
                  See Books
                </a>
              </div>
            </div>
          </div>
          
          
          <div className="col-lg-4 col-12 col-sm-6 my-4">
            <div class="card" style={{width: '18rem'}}>
              <img src="https://imgs.search.brave.com/6pbTNW0ig3LrzLp7KU4HMNiD-ipm99YRe56ffDC3GJ4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ub3Zl/bG9ubXltaW5kLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/My8wMy9UaGUtU2ls/ZW50LVBhdGllbnQt/YnktQWxleC1NaWNo/YWVsaWRlcy5qcGc" class="card-img-top" alt="..." height='300vh'/>
              <div class="card-body">
                <h5 class="card-title">Thriller</h5>
                <p class="card-text">
                Builds suspense and excitement, often involving danger, suspense, and high stakes, keeping readers on the edge of their seats.
                </p>
                <a href="/thriller" class="btn btn-primary">
                  See Books
                </a>
              </div>
            </div>
          </div>
          
          </div>
      </div>
    </div>
  );
};

export default Categories;
