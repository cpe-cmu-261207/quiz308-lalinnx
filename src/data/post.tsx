const Post = () => {
    return (
        <div className="space-y-2" >

            <div className="flex space-x-2 items-center" >
                <img className="w-12 h-12 rounded-full" src="/profileImages/p.jpg" >
                </img>
                < span className='font-semibold text-lg text-white' > lalinthron 630610758 </span>

            </div>

            < p className='text-white' > Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207 </p>

            < div className='flex items-center' >
                <img className='w-4 h-4 mr-1' src="'/like.svg'" > </img>
                < p className='text-gray-300' > 100 คน </p>

            </div>


        </div>
    )
}

export default Post