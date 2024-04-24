import React from 'react'

const Info = () => {
      const workInfoData = [
            {
                  image: "placeholder ya 4ali",
                  title: "placeholder ya 4ali",
                  text: "placeholder ya 4ali",
            },
            {
                  image: "placeholder ya 4ali",
                  title: "placeholder ya 4ali",
                  text: "placeholder ya 4ali",
            },
            {
                  image: "placeholder ya 4ali",
                  title: "placeholder ya 4ali",
                  text: "placeholder ya 4ali",
            },
      ];
      return (
            <div id='work' className="mt-60">
                  <div className="text-center">
                        <p className="text-center font-bold text-yellow-300 text-2xl mb-2">Work</p>
                        <h1 className="text-center text-6xl font-bold mb-8 text-gray-800  ">fech na3emlou ka Works</h1>
                        <p className="font-serif text-xl text-gray-700 w-2/6 mx-auto">
                              placeholderr wila na3rech 7ot description lahne ya mta3 wethni wila laurem ipsum asdasdykfthaesatsfgkulegfuyasdgdsfaoaoaogiuerhwggaiuel
                        </p>
                  </div>
                  <div className="mt-20 flex justify-center items-center flex-wrap">
                        {workInfoData.map((data) => (
                              <div className="w-72 min-h-80 bg-white p-6 flex flex-col justify-center items-center rounded-2xl m-4" key={data.title}>
                                    <div className="">
                                          <img src={data.image} alt="imagee ya 4ali" />
                                    </div>
                                    <h2 className='m-3'>{data.title}</h2>
                                    <p className='flex-1 flex items-center font-semibold'>{data.text}</p>
                              </div>
                        ))}
                  </div>
            </div>
      );

}

export default Info
