import React from 'react';
import logo from './logo.svg';
import Post from './data/post';

function App() {
  return (
    <div className="p-2">
      <div className="mx-auto max-w-2xl bg-gray-800 rounded-md shadow p-4 space-y-2 divide-y">
        <Post></Post>
        {/* comments section */}
        <div className="">

          {/* normal comment */}
          <div className="flex p-2 items-start space-x-2">
            <img className="w-10 w-10 rounded-full" src="/profileImages/lisa.jpg"></img>
            <div className="bg-gray-500 rounded-lg p-2">
              <p className="font-semibold text-white">Lisa</p>
              <p className='text-white'>ตัวอย่าง Template จ้า</p>
              {/* like section (จะไม่แสดงถ้าไม่มีใครไลค์เลย) */}
              <div className='flex items-center'>
                <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                <p className='text-gray-300'>999 คน</p>
              </div>
            </div>
          </div>

          {/* replies */}
          {/* ต่างกันตรงที่มี padding มากกว่าเท่านั้น (pl-14) */}
          <div className="flex p-2 items-start space-x-2 pl-14">
            <img className="w-10 w-10 rounded-full" src="/profileImages/puppy.jpg"></img>
            <div className="bg-gray-500 rounded-lg p-2">
              <p className="font-semibold text-white">หมาน้อย</p>
              <p className='text-white'>เม้นค้าบ</p>
            </div>
          </div>

        </div>




      </div>
    </div>
  );
}

export default App;
