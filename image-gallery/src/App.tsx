import React, { useCallback, useRef, useState } from 'react';
import {useDropzone} from 'react-dropzone'
import logo from './logo.svg';
import './App.css';
import ImageBox from './components/ImageBox';

function App() {
    const inputRef = useRef<HTMLInputElement>(null)

    const [imageList, setImageList] = useState<string[]>([])

    const onDrop = useCallback((acceptedFiles:any) => {
        // Do something with the files
            if(acceptedFiles.length){
                for(const file of acceptedFiles){
                    console.log(file);
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onloadend = (event) => {
                        setImageList(prev => [...prev, event.target?.result as string]);
                    }
                }
            }
      }, [])
      const {getRootProps, getInputProps, isDragActive} = useDropzone({
                    onDrop,  accept: {
                    'image/png': ['.png'],
                    'image/jpeg': ['.jpeg'],
                    'image/gif': ['.gif'],
                }
            })

    return (
        <div className='container'>
            <div className={'gallary-box '+ (imageList.length > 0 && 'row')}>
                {
                    imageList.length === 0 &&
                    <div className='text-center'>
                    이미지가 없습니다.<br/>
                    이미지를 추가해 주세요.
                    </div>
                }
                <div className='plus-box'
                    {...getRootProps()} >
                <input
                    {...getRootProps()}
                /> 
                    +</div>
            </div>
            <div className="imgbox-wrap">
                {
                    imageList.map((el, index) => <ImageBox key={el+index} src={el} />)
                }
            </div>
        </div>
    );
}

export default App;
