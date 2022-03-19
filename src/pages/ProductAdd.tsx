import React from 'react'
import {useForm , SubmitHandler } from 'react-hook-form'


type TypeInputs = {
    name:String,
    price:Number
}
type Props = {}


const ProductAdd = (props: Props) => {
    const {register,handleSubmit,formState:{errors}} = useForm<TypeInputs>();
    const  onSubmit: SubmitHandler<TypeInputs> = data =>{
        console.log(data);
        
    }
  return (
      <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text"  placeholder='Tên sản phẩm' {...register('name')}/>
          <input type="nimber"  placeholder='Giá sản phẩm' {...register('price')}/>

      </form>
  )
}

export default ProductAdd