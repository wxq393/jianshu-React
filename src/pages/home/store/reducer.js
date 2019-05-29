import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
   topicList: [],
    articleList: [],
    recommendList:[{
      "id": 1,
      "imgUrl": "http://s2.ax1x.com/2019/05/14/Eo6YGj.png"
    }, {
      "id": 2,
      "imgUrl": "https://s2.ax1x.com/2019/05/14/Eo6qSA.png"
    },{
      "id": 3,
      "imgUrl": "https://s2.ax1x.com/2019/05/14/Eo6XOP.png"
    },{
      "id": 4,
      "imgUrl": "https://s2.ax1x.com/2019/05/14/Eo6zTS.png"
    }],
    articlePage: 1,
    showScroll: true
});

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList)       
  });
};

const addArticleList = (state, action) => {
  return state.merge({
     'articleList': state.get('articleList').concat(action.list),
     'articlePage': action.nextPage
  });
}


export default (state = defaultState, action) => {
  switch(action.type){
    case constants.CHANGE_HOME_DATA:
      return  changeHomeData(state, action);
    case constants.ADD_ARTICLE_LIST:
      return  addArticleList(state, action);
    case constants.TOGGLE_SCROLL_TOP:
      return state.set('showScroll', action.show);
    default:
       return state;
  } 
}