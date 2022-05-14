


// head部分的a标签的文字
export const aHead:string[] = [
  "首页",
  "花型",
  "定制",
  "版权",
  // "打印",
  "素材",
  "..."
]

// 导航栏的右上角的一系列的
export const selectMenu:{
  link:string,
  name:string,
}[] = [
  {
    link: "https://www.walanwalan.com/static/images/v5/icon_cart.png?v2",
    name: "购物车"
  },{
    link:"https://www.walanwalan.com/static/images/v5/icon_notice.png?v2",
    name:"alert"
  },{
    link:"https://www.walanwalan.com/static/images/v5/icon_profile.png?v2",
    name:"user",
  },
]

// 轮播图的三个图片
export const CarouselImgs = [
  "/IMGs/cur_1.jpg",
  "/IMGs/cur_2.jpg",
  "/IMGs/cur_5.jpg",
  "/IMGs/cur_6.jpg",
]

// 轮播图右侧的四个图标 第一排的
export const InfoImg = [
  {
    url:"/IMGs/网布.png",
    // url:"https://www.walanwalan.com/static/images/home/nvzhx_v2.png",
    name:"网布",
  },{
    url: "/IMGs/烫金.png",
    // url: "https://www.walanwalan.com/static/images/home/nzhx_v2.png",
    name:"烫金"
  },{
    url:"/IMGs/亮丝.png",
    // url:"https://www.walanwalan.com/static/images/home/yzhx_v2.png",
    name:"亮丝",
  },{
    url:"https://www.walanwalan.com/static/images/home/gdhx_v2.png",
    name:"更多工艺",
  }
]

// 轮播图右侧的四个图标 第二排的
export const InfoImg2 = [
  {
    url:"	https://www.walanwalan.com/static/images/home/hxdz.png",
    name:"花型定制",
  },{
    url: "	https://www.walanwalan.com/static/images/home/bqdj.png",
    name:"版权服务"
  },{
    url:"https://www.walanwalan.com/static/images/home/zxdy.png",
    name:"在线打印",
  },{
    url:"	https://www.walanwalan.com/static/images/home/kgzs.png",
    name:"开工作室",
  }
]

// 轮播图右侧的四个图标 第三排的
export const InfoImg3 = [
  {
    url:"https://www.walanwalan.com/static/images/home/ktvip.png",
    name:"开通VIP",
  },{
    url: "https://www.walanwalan.com/static/images/home/hyqx.png",
    name:"会员权限"
  },{
    url:"https://www.walanwalan.com/static/images/home/zxkf.png",
    name:"在线客服",
  },{
    url:"https://www.walanwalan.com/static/images/home/bzzx_v2.png",
    name:"帮助中心",
  }
]

// 下面主题内容的第二部分
export const classification1Data = [
  {
    url: "/IMGs/ex_1.jpg",
    // url: "/IMGs/content_2_1.jpg",
    name: "das",
    author: "梁康",
  },{
    name:"das",
    url:"/IMGs/ex_7.jpg",
    // url:"/IMGs/content_2_2.jpg",
    author: "花火",
  },{
    name:"das",
    url:"/IMGs/ex_8.jpg",
    // url:"/IMGs/content_2_3.jpg",
    author: "思域",
  },{
    name:"das",
    url:"/IMGs/ex_4.jpg",
    // url:"/IMGs/content_2_4.jpg",
    author: "艺sha",
  },
]

// 下面第二个分区的
export const classification1Data2 = () => {
  const name = ["1","2","3","4","5"]
  return name.map((item,index) => {
    return {
      name: item,
      url: `/IMGs/flower_${index + 1}.jpg`,
    }
  })
}


// 不同纹理的选择
export const flowerData = [
  "手工",
  "花卉",
  "小碎花",
  "纯色",
  "更多",
]

// 不同工艺的选择
export const kindData = [
  "网布",
  "烫金",
  "后工艺",
  "更多",
]

export const timeData = [
  "2月",
  "3月",
  "4月",
  "更多",
]

export const factoryData = [
  {
    name:"1",
    url:"/IMGs/shop_1.jpg",
    title: "亿卡",
    comment:"绍兴亿卡纺织品有限公司，成立于2012年，主营轻纺，后工艺印花，提花针织布等女装裤料，业务范围涵盖服装贸易、国内零售、面辅展览等",
    // comment:"标语和品牌名作为文字图案十分流行，也为个性化标语设计提供了更多空间。粗字体和标志依然是流行的设计元素，短标语和品牌名称打造洋溢着年轻气息的醒目印花。 趋势...",
  },{
    name:"1",
    url:"/IMGs/shop_2.jpg",
    title:"巴黎坊",
    comment:"巴黎坊，时尚女装面料商，成立于2008年，主营梭织、针织、烫金及后工艺风格面料；自产自销，自主进出口， 工贸一体，可免费打样分析；欢迎各外贸公司、服装品牌、电商、批发商们来样定做。",
    // comment:"每周发布两个主题，每个主题包含150个优秀花型，由瓦栏花型编辑倾情推荐，选图更省力，购图更省心。",
  },
]

// 不同的布种
export const diffKindClothes = [
  {
    url: "/IMGs/kind_1.jpg",
    name:"1",
    kind:"网布"
  },{
    url: "/IMGs/kind_2.jpg",
    name:"1",
    kind:"网布"
  },{
    url: "/IMGs/kind_3.jpg",
    name:"1",
    kind:"网布"
  },{
    url: "/IMGs/kind_4.jpg",
    name:"1",
    kind:"烫金"
  }
]

// 不同的布种
export const diffKindClothesDateNew = [
  {
    url: "/IMGs/new_1.jpg",
    name:"1",
    kind:"网布"
  },{
    url: "/IMGs/new_2.jpg",
    name:"1",
    kind:"网布"
  },{
    url: "/IMGs/new_3.jpg",
    name:"1",
    kind:"网布"
  },{
    url: "/IMGs/new_4.jpg",
    name:"1",
    kind:"网布"
  },
]

