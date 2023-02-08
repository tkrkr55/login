import React,{useState} from 'react'
import { uploadImage } from '../api/uploader';
import Button from '../component/ui/Button';
import { addNewProduct } from '../fbase';

export default function NewProduct() {
  // 사용자가 올릴수 있는 이미지/ 타이틀/ 내용을 작업할공간임
  //  사용자가 입력한 데이터를 담을 수 있는 product 오브젝트 하나 만들고
  const [product,setProduct] = useState({})
  // 상품이 업로드 될때 나오는 문구 state
  const [isUploading,setIsUploading] = useState(false)
  // 상품이  성공적으로 업로드 되었다는 state
  const [sucess,setSucess] = useState()
  const [file , setFile] =useState();
  const handleChange = (e)=>{
    const {name,value,files} = e.target;
    if(name === 'file'){
      setFile (files && files[0])
      console.log(files[0])
      return;}
    setProduct((product)=>({...product, [name]:value }))
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    setIsUploading(true);
    uploadImage(file)
    .then(url =>{
      console.log(url)
      addNewProduct(product,url)
    })
    .finally(()=>setIsUploading(false))
    // 제품의 사진을 Cloudinary에 업로드 하고 URL을 획득하기
    // Firebase에 새로운 제품을 추가 합니다.
  }
 
  return (
    <section>
      <h2>새로운 제품 등록 </h2>
      {sucess && <p>✅{sucess}</p>}
      {file && <img src={URL.createObjectURL(file) } alt="local rile"/>}
      <form onSubmit={handleSubmit}>
        <input type="file" accept='image/*' name='file' required onChange={handleChange}></input>
        <input type='text' name='title' value={product.title ?? ''} placeholder="제품명" required onChange={handleChange} />
        <input type='number' name='price' value={product.price ?? ''} placeholder='가격' required onChange={handleChange}/>
        <input type="text" name='category' value={product.category ?? ''} placeholder='카테고리' required onChange={handleChange}/>
        <input type="text" name='description' value={product.description??''} placeholder="제품 설명" required onChange={handleChange}/>
        <input type="text" name='options' value={product.options??''} placeholder="옵션들 콤마(,)로 구분" required onChange={handleChange}></input>
      <Button text={isUploading ? '업로딩중...': '제품등록하기'} disabled={isUploading}/>
      
     </form>

    </section>
  )
}
