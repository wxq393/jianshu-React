import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
   margin-top: 20px;
   padding-left: 30px;
   width: 625px;
   float: left;
   .banner-img {
   	 width: 625px;
   	 height: 270px;
   }
`;

export const HomeRight = styled.div`
  float: right;
  width: 280px;
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-right: 18px;
  border-bottom: 1px solid #dcdcdc
`;

export const TopicItem = styled.div`
 float: left;
 height: 32px;
 line-height: 32px;
 background: #f7f7f7;
 padding-right: 10px;
 margin-left: 18px;
 margin-bottom: 18px;
 font-size: 15px;
 color: #000;
 border: 1px solid #dcdcdc;
 border-radius: 3px;
 .topic-pic {
    display: block;
    float: left;
    width: 32px;
    height:32px;
    margin-right: 10px;
 }
`;

export const TopicDetail = styled.a`
  font-size: 15px;
  line-height:32px;
  height: 32px;
  margin-left: 18px;
  color: #777
`;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .list-pic {
     display: block;
     float: right;
     width: 150px;
     height: 100px;
     border-radius: 5px;
  }
`
export const ListInfo = styled.div`
   width: 450px;
   float: left;
   .title {
      line-height: 27px;
      font-size: 18px;
      font-weight: bold;
      color: #333
   }
   .desc {
      line-height: 24px;
      font-size: 13px;
      color: #999;
   }
`;

export const RecommendWrapper = styled.div`
  margin:30px 0;
  width: 280px;
`;

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${ (props) =>props.imgUrl});
  background-size: contain;
`;

export const WriterWrapper = styled.div`
  display: flex;
  width: 278px;
  height: 82px;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  .writer-pic {
     display: block;
     float: left;
     width: 60px;
     height: 60px;
     border-radius: 3px;
     margin: 10px 7px 10px 23px;
  }
`;

export const WriterInfo = styled.div`
   margin: auto 0;
   .writer-title {
     font-size: 15px;
     color: #333333;
   }
   .writer-desc {
     margin-top: 8px;
     font-size: 13px;
     color: #999999;
   }
`;

export const LoadMore = styled.div`
    width:100%;
    height: 40px;
    line-height:40px;
    margin: 30px 0;
    background: #a5a5a5;
    text-align: center;
    border-radius:20px;
    color: #fff;
    cursor: pointer;
`;

export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    font-size: 14px;
`;




