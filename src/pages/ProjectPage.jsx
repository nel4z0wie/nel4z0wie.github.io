import { useEffect } from 'react';
import { useState } from 'react';

const ProjectPage = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch('json/projectData.json')
      .then((response) => response.json())
      .then((data) => setDatas(data));
  }, []);

  return (
    <>
      <h1 className="text-5xl font-bold py-4 px-3">
        Berikut Adalah Project Yang Saya Pernah Kerjakan
      </h1>
      <p className="p-3">
        Berikut Adalah Project yang telah saya lakukan secara individu maupun
        kerja sama tim. Mohon Maaf Walaupun hanya sedikit...
      </p>

      <div className="masonry p-3">
        {datas.map((data) => (
          <div
            className="card masonry-item bg-base-200 hover:scale-105 transition-all cursor-pointer"
            key={data.id}
          >
            <figure className="aspect-video w-full">
              <img src={data.image} alt="" className="bg-base-300 w-full" />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-center">{data.name}</h3>
              <p className="text-sm">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectPage;
