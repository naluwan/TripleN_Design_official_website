const HomeContent = () => {
  return (
    <main className='flex-grow'>
      <div className='mx-auto max-w-[1440px] px-4 py-10 lg:px-10 lg:py-20'>
        <div className='grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20'>
          <div className='flex flex-col flex-wrap lg:flex-row'>
            <h2 className='text-3xl font-bold'>Navigation(導航)</h2>
            <h2 className='hidden text-3xl font-bold lg:inline-block'>、</h2>
            <h2 className='text-3xl font-bold'>Novelty(創新)</h2>
            <h2 className='hidden text-3xl font-bold lg:inline-block'>、</h2>
            <h2 className='text-3xl font-bold'>Nuance(精緻)</h2>
            <div className='mt-2 flex flex-col text-3xl font-bold lg:flex-row'>
              <h1>仨恩網頁設計工作室</h1>
              <h1 className='hidden lg:inline-block'>&nbsp;|&nbsp;</h1>
              <h1>TripleN Design</h1>
            </div>
          </div>

          <div>
            <p className='text-gray-600'>
              我們以細膩、創新和精緻為設計核心，為您提供專業的網頁設計解決方案。
            </p>
            <button className='mt-4 rounded-md bg-black px-4 py-2 text-white'>
              了解更多
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeContent;
