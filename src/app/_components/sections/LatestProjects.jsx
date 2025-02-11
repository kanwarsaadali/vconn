"use client"
import Data from "@data/sections/latest-projects.json";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LatestProjectsSection = ({ projects }) => {
      const router = useRouter(); // Initialize the router
    
    // console.log(projects)
    const projectRows0 = [];

    for (var i = 0; i < Data.numOfItems; i += 3 ) {
        projectRows0.push(projects.slice(i, 3 + i));
    }

    const projectRows = [];

    projectRows0.map((row, row_key) => {
        var row1_items = [];
        var row2_items = [];
        row.map((item, row2_key) => {
            if ( row2_key < 2 ) {
                row1_items.push(item);
            } else {
                row2_items.push(item);
            }
        });
        projectRows.push(row1_items);
        projectRows.push(row2_items);
    });

    return (
        <>
            {/* portfolio style={{ background: "#F8F8F8" }} */}
            <section id="projectSection" className='py-5'style={{marginTop:"-50px"}} >
                <div className="container-fluid py-5">
                    <div className="d-flex justify-content-center">
                    <div className="mil-center mil-mb-90">
                            <span className="mil-suptitle mil-upper mil-up mil-mb-30" style={{ color: "black",fontSize:"25px" }} >our Services</span>
                            <h2 className="mil-upper mil-up mil-mb-30" style={{color: "black", fontSize:"40px"}}>What We Do</h2>
                            {/* <p className="mil-up">asas</p> */}
                        </div>
                        {/* {console.log("projects", projects)} */}
                    </div>
                    <div className="row" style={{marginTop:"-50px"}}>
                        {projects?.map((item, item_key) => (
                            <div className="col-md-6 col-lg-3 px-4" key={`projects-row-${item_key}`}>
                                <Link href={`/projects/${item.id}`} key={`projects-item-${item_key}`} className={item == null ? "mil-portfolio-item mil-square-item mil-up mil-mb-30" : "mil-portfolio-item mil-long-item mil-up mil-mb-30"}>
                                    <h4 className="text-center" style={{fontSize:"30px", marginTop:"-40px"}}>{item.title}</h4>
                                    <h5 className="mil-mb-20 mil-mb-201" style={{color:"black", fontSize:"40px"}}>{item.describion}</h5>                                   
                                    {/* <h5 className="text-center">{item.title}</h5>  */}
                                    {/* <h5 className="text-center withoutHover">{item.describion}</h5>  */}
                                    {/* <h4 className="text-center title-text">{item.title}</h4> */}
                                    {/* <h5 className="text-center description-text">{item.description}</h5> */}
                                    {/* <h3 className="text-center">kanwar</h3> */}
                                    <img className="img1" src={item.image} alt={item.title} />
                                    {/* <img className="img1" src={item.image} alt={item.title} /> */}

                                    <div className="mil-project-descr p-0 m-0">
                                        {/* <h4 className="text-center"style={{ marginTop:"-50px"}} >{item.title}</h4> */}
                                        {/* <h5 className=" mil-upper mil-mb-20">{item.describion}</h5> */}
                                        {/* <div className="mil-divider-sm mil-mb-20">{item.title}</div> */}
                                        {/* <div className="mil-divider-sm mil-mb-20">{item.title}</div> */}
                                        <p>{item.short}</p>
                                    {/* <img className="img1" src={item.image1} alt={item.title} />

                                    <h5 className="mil-mb-20 mil-mb-201">{item.describion}</h5>                 */}
                                    {/* <h5 style={{color:"black" , marginTop:"30px",fontSize:"8px" }}>{item.describtion1}</h5>                                    */}

                                    <h4 style={{fontSize:"20px",color:"black", marginTop:"180px"}}>{item.describtion1}</h4>


                                        <span style={{width:"100%"}} className="w-100">
                                        <img style={{width:"100%"}} className="img2 w-100" src={item.image1}/>
                                        <span className="mil-link mil-light mil-upper  ">
                                        Expand <span className="mil-arrow"><img src="img/icons/1.svg" className="img3"  alt="arrow" /></span>
                                    </span>
                                        </span>
                                       
                                    </div>
                                </Link>
                                
                            </div>
                        ))}
                    </div>
                </div>
            
            </section>
            <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom:"25px",
    marginTop:"-45px"

    // height: "100vh", // Full viewport height for vertical centering
  }}
>
  <button
    style={{
      justifyContent: "center",
      alignItems: "center",
      display: "flex", // Ensure flex alignment applies within the button
      padding: "10px 20px", // Optional: Adjust padding for better button size
      color:"rgb(188, 255, 0)",
      backgroundColor:"#1b2942",
      borderRadius:"10px",
      bottom:"20px",
      cursor:"pointer"
    }}
    onClick={()=>router.push("/services")}
  >
    MORE SERVICES
  </button>
</div>
            
            {/* blog end */}
        </>
    );
};

export default LatestProjectsSection;