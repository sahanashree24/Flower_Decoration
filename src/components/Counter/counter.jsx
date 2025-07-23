import React, { useEffect, useState } from "react";
import ci1 from '../../assets/img/icons/check-mark.png'
import ci2 from '../../assets/img/icons/cheer.png'
import ci3 from '../../assets/img/icons/businessman.png'
import ci4 from '../../assets/img/icons/group-chat.png'


function Counter() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

      useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
        };
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

  return (
    <section className="counter" style={{paddingTop:isMobile&&50,height:isMobile&&"auto"}}>
        <div className="container">
            <div className="counter__content">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="counter__item">
                            <div className="counter__item__text">
                                <img width={100} height={100} src={ci1}/>
                                <h2 className="counter_num">230</h2>
                                <p>Completed Projects</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="counter__item second__item">
                            <div className="counter__item__text">
                                <img width={100} height={100} src={ci2} alt=""/>
                                <h2 className="counter_num">1068</h2>
                                <p>Happy clients</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="counter__item third__item">
                            <div className="counter__item__text">
                                <img width={100} height={100} src={ci3} alt=""/>
                                <h2 className="counter_num">230</h2>
                                <p>Perspective clients</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="counter__item four__item">
                            <div className="counter__item__text">
                                <img width={100} height={100} src={ci4} alt="" />
                                <h2 className="counter_num">100+</h2>
                                <p>Members</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Counter;
