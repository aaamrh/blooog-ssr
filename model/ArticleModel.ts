import Http from "./Http";

class ArticleModel extends Http {

  /**
   * 获取文章列表
   * @param {*} args.params
   * @param {*} args.params.id 分类id
   * @param {*} args.params.type 分类type
   * @param {*} args.params.parentId 分类parentId
   * @param {*} args.params.classifyId 文章的classifyId
   * @returns
   */
  getArticles (args: {}){
    return this.get('/article', {
      ...args,
      url: '/article',
      method: 'get'
    });
  }
}

const articleModel = new ArticleModel();

export default articleModel;