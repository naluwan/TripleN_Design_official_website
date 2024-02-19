const HomeContent = () => {
  return (
    <main className='flex-grow'>
      <div className='mx-auto max-w-[1440px] px-10'>
        <div className='mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20'>
          <div className='flex flex-row flex-wrap'>
            <h2 className='text-2xl font-semibold'>Navigation(導航)</h2>
            <h2 className='hidden text-2xl font-semibold lg:inline-block'>、</h2>
            <h2 className='text-2xl font-semibold'>Novelty(創新)</h2>
            <h2 className='hidden text-2xl font-semibold lg:inline-block'>、</h2>
            <h2 className='text-2xl font-semibold'>Nuance(精緻)</h2>
            <div className='mt-2 flex flex-col text-2xl font-semibold lg:flex-row'>
              <h1>仨恩網頁設計工作室</h1>
              <h1 className='hidden lg:inline-block'>&nbsp;|&nbsp;</h1>
              <h1>TripleN Design</h1>
            </div>
          </div>

          <div>
            <p className='text-gray-600'>
              我們以細膩、新穎和細膩為立足點，為您提供專業的網頁設計解決方案。
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
