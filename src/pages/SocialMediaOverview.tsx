import { useT } from '../contexts/LanguageContext'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'

export default function SocialMediaOverview() {
  const { lang } = useT()
  const L = (e: string, z: string, t: string) => lang === 'zh-CN' ? z : lang === 'zh-TW' ? t : e
  return (
    <div className={styles.page}>
      <div className={styles.head}><h2 className={styles.title}>📱 {L('Social & Community','社区媒体','社群媒體')}</h2><p className={styles.subtitle}>{L('Social networks, content platforms, forums and video sites','社交网络、内容平台、社区论坛和视频网站','社交網路、內容平台、社群論壇和影片網站')}</p></div>
      <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#ec4899" />
    </div>
  )
}

const links: ToolLink[] = [
  // 问答社区
  {name:'知乎',url:'https://www.zhihu.com/',desc:{en:'Q&A community, professional insights, discussions',zh:'高质量问答社区,各领域专业讨论'},cat:'qa',icon:'🤔'},
  {name:'百度贴吧',url:'https://tieba.baidu.com/',desc:{en:'Interest-based forum, topic-specific communities',zh:'兴趣主题论坛,各类话题讨论社区'},cat:'qa',icon:'💬'},
  {name:'Quora',url:'https://www.quora.com/',desc:{en:'Global Q&A platform, expert answers',zh:'全球问答平台,专家解答各类问题'},cat:'qa',icon:'❓'},
  {name:'Reddit',url:'https://www.reddit.com/',desc:{en:'Front page of the internet, subreddit communities',zh:'互联网首页,海量subreddit社区'},cat:'qa',icon:'🤖'},
  // 内容创作
  {name:'简书',url:'https://www.jianshu.com/',desc:{en:'Writing & reading community, creative content',zh:'优质创作社区,写作+阅读+发现'},cat:'content',icon:'✍️'},
  {name:'小红书',url:'https://www.xiaohongshu.com/',desc:{en:'Lifestyle sharing, reviews, authentic experiences',zh:'生活经验分享,种草笔记,真实多元世界'},cat:'content',icon:'📕'},
  {name:'豆瓣',url:'https://www.douban.com/',desc:{en:'Book/movie/music reviews, urban culture, events',zh:'图书/电影/音乐推荐评论,城市文化生活'},cat:'content',icon:'📚'},
  {name:'Medium',url:'https://medium.com/',desc:{en:'Long-form writing platform, thoughtful essays',zh:'长篇写作平台,深度文章和思想分享'},cat:'content',icon:'📝'},
  // 资讯信息流
  {name:'今日头条',url:'https://www.toutiao.com/',desc:{en:'AI-powered news feed, personalized content',zh:'AI驱动信息流,个性化内容推荐'},cat:'news',icon:'📰'},
  {name:'微博',url:'https://weibo.com/',desc:{en:'Chinese microblogging, trending topics, celebrity',zh:'中国微博平台,热搜话题,明星动态'},cat:'news',icon:'🐦'},
  {name:'Twitter / X',url:'https://x.com/',desc:{en:'Global microblogging, real-time news & discussion',zh:'全球微博,实时新闻和讨论'},cat:'news',icon:'❌'},
  {name:'雪球',url:'https://xueqiu.com/',desc:{en:'Investor community, stock discussion & analysis',zh:'投资者社区,股票讨论+投资分析'},cat:'news',icon:'⛄'},
  // 短视频
  {name:'抖音',url:'https://www.douyin.com/',desc:{en:'Short videos, trending content, creative expression',zh:'短视频平台,潮流内容,创意表达'},cat:'shortvideo',icon:'🎵'},
  {name:'快手',url:'https://www.kuaishou.com/',desc:{en:'Short videos, authentic grassroots content',zh:'短视频,接地气的段子和生活记录'},cat:'shortvideo',icon:'⚡'},
  {name:'TikTok',url:'https://www.tiktok.com/',desc:{en:'Global short video platform, viral trends',zh:'全球短视频平台,病毒式传播趋势'},cat:'shortvideo',icon:'🎬'},
  {name:'Instagram',url:'https://www.instagram.com/',desc:{en:'Photo & video sharing, visual storytelling',zh:'图片视频分享,视觉化社交'},cat:'shortvideo',icon:'📸'},
  // 长视频
  {name:'哔哩哔哩',url:'https://www.bilibili.com/',desc:{en:'Video + danmaku, anime, tech, learning, ACG',zh:'视频弹幕网站,动画/科技/学习/ACG文化'},cat:'video',icon:'📺'},
  {name:'YouTube',url:'https://www.youtube.com/',desc:{en:'World largest video platform, tutorials + entertainment',zh:'全球最大视频平台,教程+娱乐'},cat:'video',icon:'▶️'},
  {name:'腾讯视频',url:'https://v.qq.com/',desc:{en:'Tencent video, dramas, variety shows, movies',zh:'腾讯视频,电视剧/综艺/电影'},cat:'video',icon:'🎬'},
  {name:'爱奇艺',url:'https://www.iqiyi.com/',desc:{en:'iQIYI, original dramas, movies, variety shows',zh:'爱奇艺,原创剧集/电影/综艺'},cat:'video',icon:'🎥'},
  {name:'优酷',url:'https://www.youku.com/',desc:{en:'Youku, Alibaba video, dramas + movies',zh:'优酷,阿里旗下,电视剧+电影'},cat:'video',icon:'🎞️'},
  {name:'西瓜视频',url:'https://www.ixigua.com/',desc:{en:'ByteDance, mid-length videos, less ads',zh:'字节跳动,中长视频,广告相对较少'},cat:'video',icon:'🍉'},
  // 体育
  {name:'虎扑',url:'https://www.hupu.com/',desc:{en:'Sports community, NBA, football, esports',zh:'体育赛事社区,NBA/足球/电竞讨论'},cat:'sports',icon:'🏀'},
]
