import React, { useEffect, useState } from "react";

export default function Home() {
  const [h2Style, setH2Style] = useState({});
  const [h4Style, setH4Style] = useState({});

  useEffect(() => {
    const h2Timer = setTimeout(() => {
      setH2Style({
        transform: "translateX(0)",
        opacity: 1,
        transition: "transform 2s ease-in-out, opacity 4s ease-in-out",
      });
    }, 1500);

    const h4Timer = setTimeout(() => {
      setH4Style({
        transform: "translateX(0)",
        opacity: 1,
        transition: "transform 2s ease-in-out, opacity 4s ease-in-out",
      });
    }, 500);

    return () => {
      clearTimeout(h2Timer);
      clearTimeout(h4Timer);
    };
  }, []);

  const h4initialStyle = {
    transform: "translateX(100%)",
    opacity: 0,
  };
  const h2initialStyle = {
    transform: "translateX(-100%)",
    opacity: 0,
  };

  return (
    <>
      <pre>
        <h2
          className="z-50 start-0 pb-[2%] pt-[5%]"
          style={{ ...h4initialStyle, ...h4Style }}
        >
          {`// hello my name is`}
        </h2>
      </pre>
      <pre className="z-50 text-[12px] label leading-[12px] grid justify-start">
        <code>
          {`
 222222222222222         000000000                                                             tttt                                  1111111        000000000     
 2:::::::::::::::22     00:::::::::00                                                        ttt:::t                                 1::::::1      00:::::::::00   
 2::::::222222:::::2  00:::::::::::::00                                                      t:::::t                                1:::::::1    00:::::::::::::00 
 2222222     2:::::2 0:::::::000:::::::0                                                     t:::::t                                111:::::1   0:::::::000:::::::0
             2:::::2 0::::::0   0::::::0        ggggggggg   ggggg   ooooooooooo        ttttttt:::::ttttttt       ooooooooooo           1::::1   0::::::0   0::::::0
             2:::::2 0:::::0     0:::::0       g:::::::::ggg::::g oo:::::::::::oo      t:::::::::::::::::t     oo:::::::::::oo         1::::1   0:::::0     0:::::0
          2222::::2  0:::::0     0:::::0      g:::::::::::::::::go:::::::::::::::o     t:::::::::::::::::t    o:::::::::::::::o        1::::1   0:::::0     0:::::0
     22222::::::22   0:::::0 000 0:::::0     g::::::ggggg::::::ggo:::::ooooo:::::o     tttttt:::::::tttttt    o:::::ooooo:::::o        1::::l   0:::::0 000 0:::::0
   22::::::::222     0:::::0 000 0:::::0     g:::::g     g:::::g o::::o     o::::o           t:::::t          o::::o     o::::o        1::::l   0:::::0 000 0:::::0
  2:::::22222        0:::::0     0:::::0     g:::::g     g:::::g o::::o     o::::o           t:::::t          o::::o     o::::o        1::::l   0:::::0     0:::::0
 2:::::2             0:::::0     0:::::0     g:::::g     g:::::g o::::o     o::::o           t:::::t          o::::o     o::::o        1::::l   0:::::0     0:::::0
 2:::::2             0::::::0   0::::::0     g::::::g    g:::::g o::::o     o::::o           t:::::t    tttttto::::o     o::::o        1::::l   0::::::0   0::::::0
 2:::::2       2222220:::::::000:::::::0     g:::::::ggggg:::::g o:::::ooooo:::::o           t::::::tttt:::::to:::::ooooo:::::o     111::::::1110:::::::000:::::::0
 2::::::2222222:::::2 00:::::::::::::00       g::::::::::::::::g o:::::::::::::::o           tt::::::::::::::to:::::::::::::::o     1::::::::::1 00:::::::::::::00 
 2::::::::::::::::::2   00:::::::::00          gg::::::::::::::g  oo:::::::::::oo              tt:::::::::::tt oo:::::::::::oo      1::::::::::1   00:::::::::00   
 22222222222222222222     000000000              gggggggg::::::g    ooooooooooo                  ttttttttttt     ooooooooooo        111111111111     000000000     
                                                         g:::::g                                                                                                   
                                             gggggg      g:::::g                                                                                                   
                                             g:::::gg   gg:::::g                                                                                                   
                                              g::::::ggg:::::::g                                                                                                   
                                               gg:::::::::::::g                                                                                                    
                                                 ggg::::::ggg                                                                                                      
                                                    gggggg                                                                                                         
         `}
        </code>
      </pre>
      <pre>
        <h2
          className="z-50 pr-[20%] welcomesite pb-[20%]"
          style={{ ...h2initialStyle, ...h2Style }}
        >
          {`// welcome to my site`}
        </h2>
      </pre>
    </>
  );
}
