import { useState } from 'react'
import Layout from '../Layout';
import styles from '../../style/Posts.module.css'
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../utils/helpers';

export default function Edit() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const navigate = useNavigate();

  function handleInputForm(e) {
    const name = e.target.name
    const value = e.target.value

    // console.log('name =>', name, ' = ',value);
    setFormData({
      ...formData,
      [name]: value
    })
  }

  function handlerSubmit(e) {
    e.preventDefault()
    console.log('data form =>', formData)

    fetch(baseUrl, {
      method: "POST",
      headers: {'Content-type':'Application/json'},
      body: JSON.stringify(formData),
    }).then((res) => {
      res.json()
      console.log('res =>', res);
      navigate("/posts")
    })
  }

  return (
    <Layout
      title={'Edit Post Page'}
      children={
        <>
        <form onSubmit={handlerSubmit.bind(this)}>
          <label className="block" htmlFor="title">
            <span className="block text-sm font-medium text-slate-700">Title</span>
            <input name='title' onChange={handleInputForm.bind(this)} type="text" placeholder='Input Title' className={styles.formInput}/>
          </label>

          <br />
          <label className="block" htmlFor="description">
            <span className="block text-sm font-medium text-slate-700">Title</span>
            <textarea name='description' onChange={handleInputForm.bind(this)} type="text" placeholder='Input Description' className={styles.formInput}/>
          </label>

          <br />
          <input type="submit" value="Submit" className={styles.buttonSubmit}/>
        </form>
        </>
      }
    />
  )
}
