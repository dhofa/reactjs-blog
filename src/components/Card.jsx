import React from 'react'
import styles from '../style/Card.module.css'

export default function Card(props) {
  const { title, content, onClick, style } = props
  return (
    <div onClick={onClick} style={style} className={styles.wrap}>
      <div className="flex items-stretch -mx-4">
        <div className="flex-1 p-4">
          <div className="block overflow-hidden h-full">
            <div className="p-4">
              <h3 className="mt-2 mb-2 font-bold text-2xl font-Headingg"> {title} </h3>
              <p className="text-md text-justify">{content}</p>
            </div>
            <div className="p-4 flex flex-wrap items-center">
              <p className="px-1 py-2 tracking-wide text-xs mr-2 mb-2">Tag #1</p>
              <p className="px-1 py-2 tracking-wide text-xs mr-2 mb-2">Tag #2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
