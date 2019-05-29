import React, { PureComponent } from 'react';
import { WriterWrapper, WriterInfo } from '../style';

 class Writer extends PureComponent {
  render()  {
     return (
      <WriterWrapper>
        <img className='writer-pic' src='//upload.jianshu.io/users/upload_avatars/2558050/7761b285-2805-4534-9870-ba7dcc7538ec.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp' alt=''/>
        <WriterInfo>
          <h2 className='writer-title'>下载简书手机APP</h2>
          <p className='writer-desc'>随时随地发现和创作内容</p>
        </WriterInfo>
      </WriterWrapper>
   )
   }
 }

export default Writer;
