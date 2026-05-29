import React from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

export default function ManageCategories() {
  let {register, handleSubmit, formState}=useForm()
  async function collectFormData(formData)
    {
      console.log(formData);
      let response=await fetch("http://localhost:8080/api/v1/vendor/categories",
        {
          method:"post",
          headers : {"Content-Type":"application/json"},
          body:JSON.stringify(formData)
        }) 
       let ResponseObject=await response.json()
       console.log(ResponseObject);
       
      toast.success("category added")
    }
  return (
    <div className=''>
      <div className='d-flex mt-5 justify-content-center'>
        <form className='d-flex w-50' onSubmit={handleSubmit(collectFormData)}>
          <input type="number" className="form-control me-3 border border-2 w-25" placeholder='Category Id' 
          {...register("id",
                        {required:{value:true, message:"category id and "}})}/>

          <input type="text" className="form-control me-3 border border-2" placeholder='Category Name' 
            {...register("name",
                        {required:{value:true, message:"category name is required"},
                        minLength:{value:3, message:"Min 3 characters required"}, 
                        maxLength:{value:10, message:"Max 10 characters allowed"}})}/>
            
          <input type="submit" className="btn btn-primary"/>
        </form>
      </div>
      <div className="form-text text-danger text-center">
              {formState.errors?.id?.message}
              {formState.errors?.name?.message} 
        </div>
      <div></div>
    </div>
  )
}

