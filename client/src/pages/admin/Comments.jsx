import React, { useEffect, useState } from 'react'
import { comments_data } from '../../assets/assets'
import CommentTableItem from '../../components/admin/CommentTableItem'
import { useAppContext } from '../../context/AppContext'

const Comments = () => {

const [comments, setComments] = useState([])
const [filter, setfilter] = useState('Not Approved')
   

  const { axios } = useAppContext();

const fetchComments =async ()=> {
  // setComments(comments_data) dummy data 
  try {
      const { data } = await axios.get("/api/admin/comments");
      data.success
        ? setComments(data.comments): toast.error(data.message);
    } catch (error) {
      toast.error(data.message);
    }
}
useEffect (()=> {
  fetchComments()
},[])

  return (
    <div className='flex-1 pt-5 px-5 sm:pl-16 bg-blue-50/50'>
      <div className='flex justify-between items-center max-w-3xl pb-3'>
        <h1>Comments</h1>
        <div className='flex gap-4'>
          <button onClick={()=> setfilter('Approved')} className={`shadow-custom-sm border rounded-full px-4 py-1 cursor-pointer text-xs ${filter === 'Approved'? 'text-primary' : 'text-gray-700'}`}>Approved</button>

          <button onClick={()=> setfilter('Not Approved')} className={`shadow-custom-sm border rounded-full px-4 py-1 cursor-pointer text-xs ${filter === 'Not Approved'? 'text-primary' : 'text-gray-700'}`}>Not Approved</button>
        </div>
      </div>
      
       <div className='relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white'>
        <table className='w-full text-sm text-gray-500'>
           <thead className='text-xs text-gray-600  text-left uppercase'>
            <tr>
              <th scope='col' className='px-2 py-4'>Blog Title & Comment</th>
              <th scope='col' className='px-2 py-4 max-sm:hidden'>Date</th>
              <th scope='col' className='px-2 py-4 '>Action</th>
            </tr>
           </thead>

           <tbody>
            {comments.filter((comment)=>{
              if(filter === 'Approved') return comment.isApproved === true;
              return comment.isApproved === false;
            }).map((comment, index)=> <CommentTableItem key={comment._id} comment={comment} index={index + 1} fetchComments={fetchComments}/>)}
           </tbody>
        </table>

       </div> 
    </div>
  )
}

export default Comments
