import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { 
  TopicWrapper, 
  TopicItem, 
  TopicDetail 
} from '../style';

 class Topic extends PureComponent {
  render()  {
   const { list } = this.props;
    return (
    <div>
      <TopicWrapper>
          {
          list.map((item) => (
              <TopicItem key={item.get('id')}>
                 <img
                    className ='topic-pic'  
                    src = { item.get('imgUrl')}
                    alt = ''
                 />
                 {item.get('title')}
              </TopicItem>
           ))
          }           
          <TopicDetail>
             更多专题请点击>>>
          </TopicDetail>
      </TopicWrapper>
    </div>  
    )
  }
}

 const mapStateProps = (state) => ({
   list: state.getIn(['home', 'topicList'])
 });

export default connect(mapStateProps, null)(Topic);