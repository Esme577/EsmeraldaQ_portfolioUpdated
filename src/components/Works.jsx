//Works.jsx
import React from 'react';
import code from '../assets/code2.png';

const Works = () => {
  return (
    // Main container with responsive height
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        {/* Section header */}
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>Work</p>
          <p className='py-6 text-2xl'>Check out some of my most recent work</p>
        </div>

        {/* Project grid */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Project card with hover overlay */}
          <div
            style={{ backgroundImage: `url(${code})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover content */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className='text-lg font-bold text-white tracking-wider'>Flower Info</span>
              <p className='text-center'>Project is on flexpanel and each panel has information on different flowers.</p>
              {/* Action buttons */}
              <div className='pt-8 text-center'>
                <a href='https://esmeralda-q-flex-panel-gallery-rsmz-do6kr9jcx-esme577s-projects.vercel.app/'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Netlify Demo Link</button></a>
                <a href='https://github.com/Esme577/EsmeraldaQ_FlexPanelGallery'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>GitHubLink</button></a>
              </div>
            </div>
          </div>
          {/* Additional project cards follow same pattern */}
          <div
            style={{ backgroundImage: `url(${code})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover content */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className='text-lg font-bold text-white tracking-wider'>BloombergHackathon project</span>
              <p className='text-center'>Along side a team of 6 we built a studybudy app so students/people can use to link with others that want to study.</p>
              {/* Action buttons */}
              <div className='pt-8 text-center'>
                <a href='https://delightful-flan-f314a2.netlify.app/projects'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Netlify Demo Link</button></a>
                <a href='https://github.com/Esme577/BloombergHakathon_tkh'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>GitHubLink</button></a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${code})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover content */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className='text-lg font-bold text-white tracking-wider'>First Portfolio</span>
              <p className='text-center'>The first portfolio I created half is fictional other half is what I did but I put it all together.</p>
              {/* Action buttons */}
              <div className='pt-8 text-center'>
                <a href='https://esmeraldaqportfolio.netlify.app/projects'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Netlify Demo Link</button></a>
                <a href='https://github.com/Esme577/1devEQ'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>GitHubLink</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;