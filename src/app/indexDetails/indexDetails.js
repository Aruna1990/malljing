angular
  .module('app')
  .component('indexDetails', {
    templateUrl: 'app/indexDetails/indexDetails.html',
    controller: indexDetailsCtrl
  });

/** @ngInject */
function indexDetailsCtrl($rootScope, $state, todoService, $injector, $timeout) {
  console.log('indexDetailsCtrl');
  var ngTableParams;

  ngTableParams = $injector.get('NgTableParams');

  this.commercial = {
    tabs:['业态', '业种', '品牌'],
    data:[{
      id: '0',
      name: "餐饮",
      children: [{
        id:'0_0',
        name: "吧台",
        children: [{
          id:'0_0_0',
          name: "浆宝"
        },{
          id:'0_0_1',
          name: "鲜饮空间"
        },{
          id:'0_0_1',
          name: "鲜芋仙"
        },{
          id:'0_0_1',
          name: "鲜元素"
        },{
          id:'0_0_1',
          name: "找茶"
        },{
          id:'0_0_1',
          name: "珍仕菓"
        }]
      },{
        id:'0_1',
        name: "快餐",
        children: [{
          id:'0_0_0',
          name: "大快活"
        },{
          id:'0_0_1',
          name: "汉堡王"
        },{
          id:'0_0_1',
          name: "吉野家"
        },{
          id:'0_0_1',
          name: "肯德基"
        }]
      },{
        id:'0_1',
        name: "料理",
        children: [{
          id:'0_1_0',
          name: "池田回转寿司"
        },{
          id:'0_1_1',
          name: "池田寿司"
        },{
          id:'0_1_1',
          name: "禾绿回转寿司"
        },{
          id:'0_1_1',
          name: "惠比寿 杏"
        }]
      },{
        id:'0_1',
        name: "甜品",
        children: [{
          id:'0_1_0',
          name: "DQ"
        },{
          id:'0_1_1',
          name: "Eimio"
        },{
          id:'0_1_1',
          name: "Gandy Lab"
        },{
          id:'0_1_1',
          name: "Stick house"
        },{
          id:'0_1_1',
          name: "凡情蒂诺巧克力"
        },{
          id:'0_1_1',
          name: "快乐柠檬"
        },{
          id:'0_1_1',
          name: "满记甜品"
        },{
          id:'0_1_1',
          name: "漫果工坊"
        },{
          id:'0_1_1',
          name: "摩提工坊"
        }]
      },{
        id:'0_1',
        name: "西餐",
        children: [{
          id:'0_1_0',
          name: "星巴克"
        },{
          id:'0_1_1',
          name: "太平洋咖啡"
        }]
      },{
        id:'0_1',
        name: "中餐",
        children: [{
          id:'0_1_0',
          name: "巴贝拉"
        },{
          id:'0_1_1',
          name: "北京小王府红茶餐厅"
        },{
          id:'0_1_1',
          name: "避风塘"
        },{
          id:'0_1_1',
          name: "边境共和国"
        },{
          id:'0_1_1',
          name: "川辣汇"
        },{
          id:'0_1_1',
          name: "豆捞坊"
        },{
          id:'0_1_1',
          name: "沸腾夜话"
        },{
          id:'0_1_1',
          name: "呷哺呷哺"
        },{
          id:'0_1_1',
          name: "港丽餐厅"
        },{
          id:'0_1_1',
          name: "蕉叶"
        },{
          id:'0_1_1',
          name: "井格老灶火锅"
        },{
          id:'0_1_1',
          name: "咖喱虎"
        },{
          id:'0_1_1',
          name: "鹿港小镇"
        },{
          id:'0_1_1',
          name: "拿渡麻辣香锅"
        },{
          id:'0_1_1',
          name: "南小馆"
        },{
          id:'0_1_1',
          name: "味千拉面"
        },{
          id:'0_1_1',
          name: "一味一诚"
        },{
          id:'0_1_1',
          name: "印巷小馆"
        }]
      }]
    },{
      id: '0',
      name: "零售专卖",
      children: [{
        id:'0_0',
        name: "儿童用品",
        children: [{
          id:'0_0_0',
          name: "NICI"
        },{
          id:'0_0_1',
          name: "全棉时代"
        },{
          id:'0_0_1',
          name: "GC"
        }]
      },{
        id:'0_1',
        name: "化妆品",
        children: [{
          id:'0_0_0',
          name: "BObbi Brown"
        },{
          id:'0_0_1',
          name: "CK香水"
        },{
          id:'0_0_1',
          name: "CK香水"
        },{
          id:'0_0_1',
          name: "innisfree"
        },{
          id:'0_0_1',
          name: "Jurlique"
        },{
          id:'0_0_1',
          name: "KIEHLS"
        },{
          id:'0_0_1',
          name: "LAVIN香水"
        },{
          id:'0_0_1',
          name: "LOCCITANE"
        },{
          id:'0_0_1',
          name: "MAC"
        },{
          id:'0_0_1',
          name: "MAX FACTOR"
        },{
          id:'0_0_1',
          name: "ORIGINS"
        },{
          id:'0_0_1',
          name: "Roger&Gallet"
        },{
          id:'0_0_1',
          name: "SEPHORA"
        },{
          id:'0_0_1',
          name: "大长今"
        }]
      },{
        id:'0_1',
        name: "黄金珠宝",
        children: [{
          id:'0_0_0',
          name: "I gold"
        },{
          id:'0_0_1',
          name: "LOVE&LOVE"
        },{
          id:'0_0_1',
          name: "PANDORA"
        },{
          id:'0_0_1',
          name: "施华洛世奇"
        }]
      },{
        id:'0_1',
        name: "家居",
        children: [{
          id:'0_0_0',
          name: "MUJI"
        }]
      },{
        id:'0_1',
        name: "居家生活",
        children: [{
          id:'0_0_0',
          name: "阿芙香薰"
        },{
          id:'0_0_1',
          name: "万宁"
        },{
          id:'0_0_1',
          name: "名创优品"
        },{
          id:'0_0_1',
          name: "品阁"
        }]
      },{
        id:'0_1',
        name: "快销集合店",
        children: [{
          id:'0_0_0',
          name: "BHG"
        }]
      },{
        id:'0_1',
        name: "男女装",
        children: [{
          id:'0_0_0',
          name: "Calvin Klein"
        },{
          id:'0_0_0',
          name: "Calvin Klein Jeans"
        },{
          id:'0_0_0',
          name: "Calvin Klein underwear"
        },{
          id:'0_0_0',
          name: "cheap monday"
        },{
          id:'0_0_0',
          name: "CK JEANS"
        },{
          id:'0_0_0',
          name: "ecco"
        },{
          id:'0_0_0',
          name: "ED hardy"
        },{
          id:'0_0_0',
          name: "EMPORIO ARMANI"
        },{
          id:'0_0_0',
          name: "EVISU"
        },{
          id:'0_0_0',
          name: "G·STAR RAW"
        },{
          id:'0_0_0',
          name: "G2000"
        },{
          id:'0_0_0',
          name: "GAP"
        },{
          id:'0_0_0',
          name: "GUESS"
        },{
          id:'0_0_0',
          name: "i.t"
        },{
          id:'0_0_0',
          name: "IZZUE"
        },{
          id:'0_0_0',
          name: "JACK JONES"
        },{
          id:'0_0_0',
          name: "Juicy Couture"
        },{
          id:'0_0_0',
          name: "Lee"
        },{
          id:'0_0_0',
          name: "levis"
        },{
          id:'0_0_0',
          name: "pancoat"
        },{
          id:'0_0_0',
          name: "PRICH"
        },{
          id:'0_0_0',
          name: "REPLAY"
        },{
          id:'0_0_0',
          name: "STAY REAL"
        },{
          id:'0_0_0',
          name: "UNIQLO"
        },{
          id:'0_0_0',
          name: "ZARA"
        },{
          id:'0_0_0',
          name: "速写"
        }]
      },{
        id:'0_1',
        name: "男装",
        children: [{
          id:'0_0_0',
          name: "6IXTY 8IGHT"
        },{
          id:'0_0_0',
          name: "Aape"
        },{
          id:'0_0_0',
          name: "aojo"
        },{
          id:'0_0_0',
          name: "b+ab"
        },{
          id:'0_0_0',
          name: "BOY"
        },{
          id:'0_0_0',
          name: "GXG"
        },{
          id:'0_0_0',
          name: "gxg.jeans"
        },{
          id:'0_0_0',
          name: "GXG特卖"
        },{
          id:'0_0_0',
          name: "IM DAVID"
        },{
          id:'0_0_0',
          name: "SELECTED"
        },{
          id:'0_0_0',
          name: "trendiano"
        }]
      },{
        id:'0_1',
        name: "内衣",
        children: [{
          id:'0_0_0',
          name: "Blumenovum"
        },{
          id:'0_0_0',
          name: "PEACH JOHN"
        },{
          id:'0_0_0',
          name: "PRIVATE STRUCTURE"
        },{
          id:'0_0_0',
          name: "Rime"
        },{
          id:'0_0_0',
          name: "TUTUANNA"
        },{
          id:'0_0_0',
          name: "爱美丽"
        }]
      },{
        id:'0_1',
        name: "女装",
        children: [{
          id:'0_0_0',
          name: "AVVN"
        },{
          id:'0_0_0',
          name: "Bout hent ique"
        },{
          id:'0_0_0',
          name: "COCO DEAL"
        },{
          id:'0_0_0',
          name: "CR?Z！"
        },{
          id:'0_0_0',
          name: "DAZZLE"
        },{
          id:'0_0_0',
          name: "DKNY"
        },{
          id:'0_0_0',
          name: "E·LAND"
        },{
          id:'0_0_0',
          name: "earth music&ecolog"
        },{
          id:'0_0_0',
          name: "ENO"
        },{
          id:'0_0_0',
          name: "Five Plus"
        },{
          id:'0_0_0',
          name: "Hello Kitty"
        },{
          id:'0_0_0',
          name: "III VIVINIKO"
        },{
          id:'0_0_0',
          name: "Initial"
        },{
          id:'0_0_0',
          name: "JNBY"
        },{
          id:'0_0_0',
          name: "JUCY JUDY"
        },{
          id:'0_0_0',
          name: "KODICE"
        },{
          id:'0_0_0',
          name: "lily"
        },{
          id:'0_0_0',
          name: "marie n°mary"
        },{
          id:'0_0_0',
          name: "MAX&Co."
        },{
          id:'0_0_0',
          name: "MIGAINO"
        },{
          id:'0_0_0',
          name: "MISS SIXTY"
        },{
          id:'0_0_0',
          name: "missoul"
        },{
          id:'0_0_0',
          name: "MO&Co."
        },{
          id:'0_0_0',
          name: "MOUSSY"
        },{
          id:'0_0_0',
          name: "NANCY K"
        },{
          id:'0_0_0',
          name: "Ochirly"
        },{
          id:'0_0_0',
          name: "PLAYLOUNGE"
        },{
          id:'0_0_0',
          name: "snidel"
        },{
          id:'0_0_0',
          name: "tanni"
        },{
          id:'0_0_0',
          name: "test-tube"
        },{
          id:'0_0_0',
          name: "Vero moda"
        },{
          id:'0_0_0',
          name: "ZCZZ"
        },{
          id:'0_0_0',
          name: "ZUCZUG"
        },{
          id:'0_0_0',
          name: "百家好"
        },{
          id:'0_0_0',
          name: "播"
        },{
          id:'0_0_0',
          name: "乐町"
        },{
          id:'0_0_0',
          name: "斯琴"
        },{
          id:'0_0_0',
          name: "再尚秀"
        }]
      },{
        id:'0_1',
        name: "配饰",
        children: [{
          id:'0_0_0',
          name: "CK WATCH"
        },{
          id:'0_0_0',
          name: "crocs"
        },{
          id:'0_0_0',
          name: "FESSURA"
        },{
          id:'0_0_0',
          name: "FOLLIE"
        },{
          id:'0_0_0',
          name: "HAT'S ON"
        },{
          id:'0_0_0',
          name: "Hitomi Optician"
        },{
          id:'0_0_0',
          name: "hotwind"
        },{
          id:'0_0_0',
          name: "ipanema"
        },{
          id:'0_0_0',
          name: "J&M"
        },{
          id:'0_0_0',
          name: "kate spade"
        },{
          id:'0_0_0',
          name: "Kipling"
        },{
          id:'0_0_0',
          name: "La pa Y-P"
        },{
          id:'0_0_0',
          name: "MAP"
        },{
          id:'0_0_0',
          name: "MICHAEL KORS"
        },{
          id:'0_0_0',
          name: "reemoor"
        },{
          id:'0_0_0',
          name: "Samantha Thavasa"
        },{
          id:'0_0_0',
          name: "SUUNTO"
        },{
          id:'0_0_0',
          name: "SWATCH"
        },{
          id:'0_0_0',
          name: "TUSCANS"
        },{
          id:'0_0_0',
          name: "UGG"
        },{
          id:'0_0_0',
          name: "Vivi tix"
        },{
          id:'0_0_0',
          name: "阿吉豆"
        },{
          id:'0_0_0',
          name: "宝岛眼镜"
        },{
          id:'0_0_0',
          name: "靓佩"
        },{
          id:'0_0_0',
          name: "木九十"
        },{
          id:'0_0_0',
          name: "木九十"
        },{
          id:'0_0_0',
          name: "PLAYLOUNGE"
        },{
          id:'0_0_0',
          name: "西遇"
        }]
      },{
        id:'0_1',
        name: "饰品",
        children: [{
          id:'0_0_0',
          name: "KING BABY"
        }]
      },{
        id:'0_1',
        name: "数码电器",
        children: [{
          id:'0_0_0',
          name: "ALIENWARE"
        },{
          id:'0_0_0',
          name: "Apple Store"
        },{
          id:'0_0_0',
          name: "CYO VAPE"
        },{
          id:'0_0_0',
          name: "HS"
        },{
          id:'0_0_0',
          name: "HUAWEI"
        },{
          id:'0_0_0',
          name: "iPhone"
        },{
          id:'0_0_0',
          name: "Microsoft"
        },{
          id:'0_0_0',
          name: "迪信通"
        },{
          id:'0_0_0',
          name: "卡乐时代"
        },{
          id:'0_0_0',
          name: "魅族手机"
        },{
          id:'0_0_0',
          name: "三星手机"
        }]
      },{
        id:'0_1',
        name: "文化用品",
        children: [{
          id:'0_0_0',
          name: "LAMY"
        }]
      },{
        id:'0_1',
        name: "眼镜",
        children: [{
          id:'0_0_0',
          name: "LOHO"
        }]
      },{
        id:'0_1',
        name: "运动休闲",
        children: [{
          id:'0_0_0',
          name: "adidas Originals"
        },{
          id:'0_0_0',
          name: "Baleno"
        },{
          id:'0_0_0',
          name: "CONVERSE"
        },{
          id:'0_0_0',
          name: "H&M"
        },{
          id:'0_0_0',
          name: "HIPANDA"
        },{
          id:'0_0_0',
          name: "LALABOBO"
        },{
          id:'0_0_0',
          name: "MLB"
        },{
          id:'0_0_0',
          name: "Monki"
        },{
          id:'0_0_0',
          name: "new balance"
        },{
          id:'0_0_0',
          name: "NIKE"
        },{
          id:'0_0_0',
          name: "Onit suka eTiger"
        },{
          id:'0_0_0',
          name: "Paul Frank"
        },{
          id:'0_0_0',
          name: "PUMA 黑标"
        },{
          id:'0_0_0',
          name: "ROBINHOOD"
        },{
          id:'0_0_0',
          name: "THE NORTH FACE"
        },{
          id:'0_0_0',
          name: "Tous"
        },{
          id:'0_0_0',
          name: "UNDER ARMOUR"
        },{
          id:'0_0_0',
          name: "VANS"
        },{
          id:'0_0_0',
          name: "WAKE UP"
        },{
          id:'0_0_0',
          name: "航海王"
        }]
      }]
    },{
      id: '0',
      name: "生活配套",
      children: [{
        id:'0_0',
        name: "洗车",
        children: [{
          id:'0_0_0',
          name: "Cars one"
        }]
      }]
    },{
      id: '0',
      name: "休闲娱乐",
      children: [{
        id:'0_0',
        name: "美发美甲",
        children: [{
          id:'0_0_0',
          name: "BHG SALON"
        }]
      },{
        id:'0_1',
        name: "KTV",
        children: [{
          id:'0_1_0',
          name: "XOXO"
        }]
      }]
    }]
  };

  this.space = {
    tabs:['场馆', '建筑物', '楼层', '设施类型'],
   data:[{
     id: '0',
     name: "西单大悦城",
     children: [{
       id:'0_0',
       name: "西单大悦城",
       children: [{
         id:'0_0_0',
         name: "B1",
         children: [{
           id:'0_0_0_0',
           name: "6IXTY 8IGHT"
         },{
           id:'0_0_0_1',
           name: "aojo"
         },{
           id:'0_0_0_2',
           name: "Apple Store"
         },{
           id:'0_0_0_3',
           name: "Calvin Klein underwear"
         },{
           id:'0_0_0_4',
           name: "COCO DEAL"
         },{
           id:'0_0_0_4',
           name: "CR?Z！"
         },{
           id:'0_0_0_4',
           name: "ENO"
         },{
           id:'0_0_0_4',
           name: "FESSURA"
         },{
           id:'0_0_0_4',
           name: "H&M"
         },{
           id:'0_0_0_4',
           name: "HAT'S ON"
         },{
           id:'0_0_0_4',
           name: "La pa Y-P"
         },{
           id:'0_0_0_4',
           name: "LALABOBO"
         },{
           id:'0_0_0_4',
           name: "Lee"
         },{
           id:'0_0_0_4',
           name: "levis"
         },{
           id:'0_0_0_4',
           name: "pancoat"
         },{
           id:'0_0_0_4',
           name: "Paul Frank"
         },{
           id:'0_0_0_4',
           name: "PEACH JOHN"
         },{
           id:'0_0_0_4',
           name: "PUMA 黑标"
         },{
           id:'0_0_0_4',
           name: "STAY REAL"
         },{
           id:'0_0_0_4',
           name: "test-tube"
         },{
           id:'0_0_0_4',
           name: "TUTUANNA"
         },{
           id:'0_0_0_4',
           name: "阿芙香薰"
         },{
           id:'0_0_0_4',
           name: "惠比寿 杏"
         },{
           id:'0_0_0_4',
           name: "乐町"
         },{
           id:'0_0_0_4',
           name: "鲜元素"
         }]
       },{
         id:'0_0_1',
         name: "B2",
         children: [{
           id:'0_0_1_0',
           name: "ALIENWARE"
         },{
           id:'0_0_1_1',
           name: "Baleno"
         },{
           id:'0_0_1_2',
           name: "BHG"
         },{
           id:'0_0_1_3',
           name: "BHG SALON"
         },{
           id:'0_0_1_4',
           name: "DQ"
         },{
           id:'0_0_1_4',
           name: "Eimio"
         },{
           id:'0_0_1_4',
           name: "GXG特卖"
         },{
           id:'0_0_1_4',
           name: "Gandy Lab"
         },{
           id:'0_0_1_4',
           name: "Hello Kitty"
         },{
           id:'0_0_1_4',
           name: "hotwind"
         },{
           id:'0_0_1_4',
           name: "LOHO"
         },{
           id:'0_0_1_4',
           name: "NICI"
         },{
           id:'0_0_1_4',
           name: "Vivi tix"
         },{
           id:'0_0_1_4',
           name: "XOXO"
         },{
           id:'0_0_1_4',
           name: "阿吉豆"
         },{
           id:'0_0_1_4',
           name: "宝岛眼镜"
         },{
           id:'0_0_1_4',
           name: "池田回转寿司"
         },{
           id:'0_0_1_4',
           name: "池田寿司"
         },{
           id:'0_0_1_4',
           name: "呷哺呷哺"
         },{
           id:'0_0_1_4',
           name: "航海王"
         },{
           id:'0_0_1_4',
           name: "快乐柠檬"
         },{
           id:'0_0_1_4',
           name: "名创优品"
         },{
           id:'0_0_1_4',
           name: "品阁"
         },{
           id:'0_0_1_4',
           name: "全棉时代"
         },{
           id:'0_0_1_4',
           name: "万宁"
         },{
           id:'0_0_1_4',
           name: "我买网-跨境购"
         },{
           id:'0_0_1_4',
           name: "西遇"
         },{
           id:'0_0_1_4',
           name: "鲜芋仙"
         },{
           id:'0_0_1_4',
           name: "再尚秀"
         },{
           id:'0_0_1_4',
           name: "找茶"
         }]
       },{
         id:'0_0_2',
         name: "B3",
         children: [{
           id:'0_0_1_0',
           name: "arsone美车堂"
         }]
       },{
         id:'0_0_3',
         name: "F1",
         children: [{
           id:'0_0_1_0',
           name: "Aape"
         },{
           id:'0_0_1_0',
           name: "Apple Store"
         },{
           id:'0_0_1_0',
           name: "Calvin Klein"
         },{
           id:'0_0_1_0',
           name: "DKNY"
         },{
           id:'0_0_1_0',
           name: "ED hardy"
         },{
           id:'0_0_1_0',
           name: "ED hardy"
         },{
           id:'0_0_1_0',
           name: "H&M"
         },{
           id:'0_0_1_0',
           name: "Juicy Couture"
         },{
           id:'0_0_1_0',
           name: "Jurlique"
         },{
           id:'0_0_1_0',
           name: "KING BABY"
         },{
           id:'0_0_1_0',
           name: "MAX&Co."
         },{
           id:'0_0_1_0',
           name: "MICHAEL KORS"
         },{
           id:'0_0_1_0',
           name: "MISS SIXTY"
         },{
           id:'0_0_1_0',
           name: "PANDORA"
         },{
           id:'0_0_1_0',
           name: "SEPHORA"
         },{
           id:'0_0_1_0',
           name: "SWATCH"
         },{
           id:'0_0_1_0',
           name: "Samantha Thavasa"
         },{
           id:'0_0_1_0',
           name: "UGG"
         },{
           id:'0_0_1_0',
           name: "ZARA"
         },{
           id:'0_0_1_0',
           name: "kate spade"
         },{
           id:'0_0_1_0',
           name: "施华洛世奇"
         }]
       },{
         id:'0_0_4',
         name: "F2",
         children: [{
           id:'0_0_1_0',
           name: "b+ad"
         },{
           id:'0_0_1_0',
           name: "BObbi Brown"
         },{
           id:'0_0_1_0',
           name: "Calvin Klein Jeans"
         },{
           id:'0_0_1_0',
           name: "cheap monday"
         },{
           id:'0_0_1_0',
           name: "CK JEANS"
         },{
           id:'0_0_1_0',
           name: "CK WATCH"
         },{
           id:'0_0_1_0',
           name: "CK香水"
         },{
           id:'0_0_1_0',
           name: "DAZZIE"
         },{
           id:'0_0_1_0',
           name: "DIOR"
         },{
           id:'0_0_1_0',
           name: "EMPORIO ARMANI"
         },{
           id:'0_0_1_0',
           name: "EVISU"
         },{
           id:'0_0_1_0',
           name: "FOLLIE"
         },{
           id:'0_0_1_0',
           name: "G·STAR RAW"
         },{
           id:'0_0_1_0',
           name: "GAP"
         },{
           id:'0_0_1_0',
           name: "H&M"
         },{
           id:'0_0_1_0',
           name: "Hitomi Optician"
         },{
           id:'0_0_1_0',
           name: "i.t"
         },{
           id:'0_0_1_0',
           name: "innisfree"
         },{
           id:'0_0_1_0',
           name: "IZZUE"
         },{
           id:'0_0_1_0',
           name: "KIEHLS"
         },{
           id:'0_0_1_0',
           name: "KODICE"
         },{
           id:'0_0_1_0',
           name: "LAVIN香水"
         },{
           id:'0_0_1_0',
           name: "LOCCITANE"
         },{
           id:'0_0_1_0',
           name: "LOVE&LOVE"
         },{
           id:'0_0_1_0',
           name: "MAC"
         },{
           id:'0_0_1_0',
           name: "MICHAEL KORS"
         },{
           id:'0_0_1_0',
           name: "Monki"
         },{
           id:'0_0_1_0',
           name: "Ochirly"
         },{
           id:'0_0_1_0',
           name: "ORIGINS"
         },{
           id:'0_0_1_0',
           name: "REPLAY"
         },{
           id:'0_0_1_0',
           name: "Rime"
         },{
           id:'0_0_1_0',
           name: "Roger&Gallet"
         },{
           id:'0_0_1_0',
           name: "Stick house"
         },{
           id:'0_0_1_0',
           name: "TUSCANS"
         },{
           id:'0_0_1_0',
           name: "ZARA"
         },{
           id:'0_0_1_0',
           name: "ZUCZUG"
         },{
           id:'0_0_1_0',
           name: "靓佩"
         },{
           id:'0_0_1_0',
           name: "星巴克"
         },{
           id:'0_0_1_0',
           name: "珍仕菓"
         }]
       },{
         id:'0_0_4',
         name: "F3",
         children: [{
           id:'0_0_1_0',
           name: "adidas Originals"
         },{
           id:'0_0_1_0',
           name: "Bout hent ique"
         },{
           id:'0_0_1_0',
           name: "ecco"
         },{
           id:'0_0_1_0',
           name: "Five Plus"
         },{
           id:'0_0_1_0',
           name: "G2000"
         },{
           id:'0_0_1_0',
           name: "GC"
         },{
           id:'0_0_1_0',
           name: "GUESS"
         },{
           id:'0_0_1_0',
           name: "I gold"
         },{
           id:'0_0_1_0',
           name: "III VIVINIKO"
         },{
           id:'0_0_1_0',
           name: "Initial"
         },{
           id:'0_0_1_0',
           name: "Kipling"
         },{
           id:'0_0_1_0',
           name: "LOVE&LOVE"
         },{
           id:'0_0_1_0',
           name: "MAP"
         },{
           id:'0_0_1_0',
           name: "MAX FACTOR"
         },{
           id:'0_0_1_0',
           name: "MO&Co."
         },{
           id:'0_0_1_0',
           name: "MOUSSY"
         },{
           id:'0_0_1_0',
           name: "MUJI"
         },{
           id:'0_0_1_0',
           name: "PRIVATE STRUCTURE"
         },{
           id:'0_0_1_0',
           name: "SELECTED"
         },{
           id:'0_0_1_0',
           name: "snidel"
         },{
           id:'0_0_1_0',
           name: "tanni"
         },{
           id:'0_0_1_0',
           name: "UNIQLO"
         },{
           id:'0_0_1_0',
           name: "WAKE UP"
         },{
           id:'0_0_1_0',
           name: "ZARA"
         },{
           id:'0_0_1_0',
           name: "汉堡王"
         },{
           id:'0_0_1_0',
           name: "摩提工坊"
         },{
           id:'0_0_1_0',
           name: "斯琴"
         },{
           id:'0_0_1_0',
           name: "太平洋咖啡"
         }]
       },{
         id:'0_0_4',
         name: "F4",
         children: [{
           id:'0_0_1_0',
           name: "AVVN"
         },{
           id:'0_0_1_0',
           name: "Blumenovum"
         },{
           id:'0_0_1_0',
           name: "CYO VAPE"
         },{
           id:'0_0_1_0',
           name: "CYO VAPE"
         },{
           id:'0_0_1_0',
           name: "earth music&ecolog"
         },{
           id:'0_0_1_0',
           name: "GXG"
         },{
           id:'0_0_1_0',
           name: "HS"
         },{
           id:'0_0_1_0',
           name: "IM DAVID"
         },{
           id:'0_0_1_0',
           name: "JACK JONES"
         },{
           id:'0_0_1_0',
           name: "JNBY"
         },{
           id:'0_0_1_0',
           name: "JUCY JUDY"
         },{
           id:'0_0_1_0',
           name: "LAMY"
         },{
           id:'0_0_1_0',
           name: "lily"
         },{
           id:'0_0_1_0',
           name: "marie n°mary"
         },{
           id:'0_0_1_0',
           name: "MIGAINO"
         },{
           id:'0_0_1_0',
           name: "missoul"
         },{
           id:'0_0_1_0',
           name: "NANCY K"
         },{
           id:'0_0_1_0',
           name: "PLAYLOUNGE"
         },{
           id:'0_0_1_0',
           name: "PRICH"
         },{
           id:'0_0_1_0',
           name: "ROBINHOOD"
         },{
           id:'0_0_1_0',
           name: "trendiano"
         },{
           id:'0_0_1_0',
           name: "Vero moda"
         },{
           id:'0_0_1_0',
           name: "ZCZZ"
         },{
           id:'0_0_1_0',
           name: "爱美丽"
         },{
           id:'0_0_1_0',
           name: "百家好"
         },{
           id:'0_0_1_0',
           name: "播"
         },{
           id:'0_0_1_0',
           name: "速写"
         },{
           id:'0_0_1_0',
           name: "味千拉面"
         }]
       },{
         id:'0_0_4',
         name: "F5",
         children: [{
           id:'0_0_1_0',
           name: "BOY"
         },{
           id:'0_0_1_0',
           name: "CONVERSE"
         },{
           id:'0_0_1_0',
           name: "crocs"
         },{
           id:'0_0_1_0',
           name: "gxg.jeans"
         },{
           id:'0_0_1_0',
           name: "HIPANDA"
         },{
           id:'0_0_1_0',
           name: "HUAWEI"
         },{
           id:'0_0_1_0',
           name: "ipanema"
         },{
           id:'0_0_1_0',
           name: "iPhone"
         },{
           id:'0_0_1_0',
           name: "J&M"
         },{
           id:'0_0_1_0',
           name: "Microsoft"
         },{
           id:'0_0_1_0',
           name: "MLB"
         },{
           id:'0_0_1_0',
           name: "new balance"
         },{
           id:'0_0_1_0',
           name: "NIKE"
         },{
           id:'0_0_1_0',
           name: "Onit suka eTiger"
         },{
           id:'0_0_1_0',
           name: "reemoor"
         },{
           id:'0_0_1_0',
           name: "SUUNTO"
         },{
           id:'0_0_1_0',
           name: "THE NORTH FACE"
         },{
           id:'0_0_1_0',
           name: "UNDER ARMOUR"
         },{
           id:'0_0_1_0',
           name: "VANS"
         },{
           id:'0_0_1_0',
           name: "迪信通"
         },{
           id:'0_0_1_0',
           name: "魅族手机"
         },{
           id:'0_0_1_0',
           name: "木九十"
         },{
           id:'0_0_1_0',
           name: "南小馆"
         },{
           id:'0_0_1_0',
           name: "瑞士军刀、ZIPPO"
         },{
           id:'0_0_1_0',
           name: "三星手机"
         }]
       },{
         id:'0_0_4',
         name: "F6",
         children: [{
           id:'0_0_1_0',
           name: "巴贝拉"
         },{
           id:'0_0_1_0',
           name: "大快活"
         },{
           id:'0_0_1_0',
           name: "凡情蒂诺巧克力"
         },{
           id:'0_0_1_0',
           name: "港丽餐厅"
         },{
           id:'0_0_1_0',
           name: "咖喱虎"
         },{
           id:'0_0_1_0',
           name: "肯德基"
         },{
           id:'0_0_1_0',
           name: "鹿港小镇"
         },{
           id:'0_0_1_0',
           name: "满记甜品"
         },{
           id:'0_0_1_0',
           name: "鲜元素"
         },{
           id:'0_0_1_0',
           name: "印巷小馆"
         }]
       },{
         id:'0_0_4',
         name: "F7",
         children: [{
           id:'0_0_1_0',
           name: "北京小王府红茶餐厅"
         },{
           id:'0_0_1_0',
           name: "川辣汇"
         },{
           id:'0_0_1_0',
           name: "大长今"
         },{
           id:'0_0_1_0',
           name: "豆捞坊"
         },{
           id:'0_0_1_0',
           name: "禾绿回转寿司"
         },{
           id:'0_0_1_0',
           name: "浆宝"
         },{
           id:'0_0_1_0',
           name: "蕉叶"
         },{
           id:'0_0_1_0',
           name: "井格老灶火锅"
         },{
           id:'0_0_1_0',
           name: "漫果工坊"
         },{
           id:'0_0_1_0',
           name: "拿渡麻辣香锅"
         },{
           id:'0_0_1_0',
           name: "鲜饮空间"
         }]
       },{
         id:'0_0_4',
         name: "F8",
         children: [{
           id:'0_0_1_0',
           name: "避风塘"
         },{
           id:'0_0_1_0',
           name: "边境共和国"
         },{
           id:'0_0_1_0',
           name: "沸腾夜话"
         },{
           id:'0_0_1_0',
           name: "吉野家"
         },{
           id:'0_0_1_0',
           name: "卡乐时代"
         },{
           id:'0_0_1_0',
           name: "一味一诚"
         }]
       }]
     }]
   }]
  };

  var self = this;
  self.cols = [{
    field: "id",
    title: 'ID',
    show: false
  }, {
    field: "name",
    title: "指标",
    sortable: "name",
    show: true,
  }, {
    field: "unit",
    title: "单位",
    show: true,
  }, {
    field: "trend",
    title: "趋势",
    show: true
  }, {
    field: "value",
    title: "当期值",
    sortable: "value",
    show: true
  }, {
    field: "_d_value",
    title: "前期值",
    show: true
  }, {
    field: "doD",
    title: "环比",
    sortable: "doD",
    show: true
  }];

  self.indexList = [{
    id:0,
    name:"指标名称0",
    unit:"人数",
    trend:"趋势图",
    value: 20000,
    _d_value: 20000,
    doD: 0.05
  },{
    id:1,
    name:"指标名称1",
    unit:"人数",
    trend:"趋势图",
    value: 20000,
    _d_value: 20000,
    doD: 0.05
  },{
    id:2,
    name:"指标名称2",
    unit:"人数",
    trend:"趋势图",
    value: 20000,
    _d_value: 20000,
    doD: 0.05
  },{
    id:3,
    name:"指标名称3",
    unit:"人数",
    trend:"趋势图",
    value: 20000,
    _d_value: 20000,
    doD: 0.05
  },{
    id:4,
    name:"指标名称4",
    unit:"人数",
    trend:"趋势图",
    value: 20000,
    _d_value: 20000,
    doD: 0.05
  }];

  this.indexData = [{
    id:0,
    name:"新增客户数",
    unit:"人数",
    // trend:getThredConfig([2022,3535,4441,5111,5729,5778,5795,5483,5128,4985,4719,3141,913],"人数"),
    value: 282768,
    _d_value: 262568,
    doD: 7.69,
    cgEnable: true,
    up: true,
    data: [2022,3535,4441,5111,5729,5778,5795,5483,5128,4985,4719,3141,913]
  },{
    id:1,
    name:"到访客户数",
    unit:"人数",
    // trend:getThredConfig([6224,9986,12382,12736,13185,13044,13190,13078,12595,12133,11619,8783,4022],"人数"),
    value: 599162,
    _d_value: 698165,
    doD: -14.18,
    cgEnable: true,
    up: false,
    data: [6224,9986,12382,12736,13185,13044,13190,13078,12595,12133,11619,8783,4022]
  },{
    id:2,
    name:"进店客户数",
    unit:"人数",
    // trend:getThredConfig([6224,9986,12382,12736,13185,13044,13190,13078,12595,12133,11619,8783,4022],"人数"),
    value: 599162,
    _d_value: 698165,
    doD: -14.18,
    cgEnable: true,
    up: false,
    data: [6224,9986,12382,12736,13185,13044,13190,13078,12595,12133,11619,8783,4022]
  },{
    id:3,
    name:"驻留客户数",
    unit:"人数",
    // trend:getThredConfig([5970,9477,11620,12024,12444,12313,12435,12294,11832,11395,10889,8215,3676],"人数"),
    value: 563037,
    _d_value: 658185,
    doD: -14.45,
    cgEnable: true,
    up: false,
    data: [5970,9477,11620,12024,12444,12313,12435,12294,11832,11395,10889,8215,3676]
  },{
    id:4,
    name:"人均驻留时长",
    unit:"分钟",
    // trend:getThredConfig([]),
    value: 20000,
    _d_value: 20000,
    doD: 0.05
  }];

  var colorBank = Highcharts.getOptions().colors;
  console.log("colorBank");
  console.log(Highcharts);

  this.dimData = [{
    id:0,
    name:"性别",
    unit:"人数",
    values: [{
      name:'男',
      y:868
    },{
      name:'女',
      y:870
    },{
      name:'未知',
      y: 913
    }],
    value: 282768,
    _d_value: 262568,
    doD: 7.69,
    cgEnable: true,
    up: true
  },{
    id:1,
    name:"婚姻情况",
    unit:"人数",
    // trend:getThredConfig([6224,9986,12382,12736,13185,13044,13190,13078,12595,12133,11619,8783,4022],"人数"),
    values: [{
      name:'未婚',
      y:840
    },{
      name:'已婚',
      y:872
    },{
      name:'未知',
      y: 914
    }],
    value: 599162,
    _d_value: 698165,
    doD: -14.18,
    cgEnable: true,
    up: false,
    data: [840, 872, 914]
  },{
    id:2,
    name:"年龄阶段",
    unit:"人数",
    // trend:getThredConfig([6224,9986,12382,12736,13185,13044,13190,13078,12595,12133,11619,8783,4022],"人数"),
    values: [{
      name:'19岁以下',
      y:458
    },{
      name:'19-25岁',
      y:798
    },{
      name:'26-35岁',
      y: 863
    },{
      name:'36-45岁',
      y: 783
    },{
      name:'46-55岁',
      y: 542
    },{
      name:'55岁以上',
      y: 369
    }],
    value: 599162,
    _d_value: 698165,
    doD: -14.18,
    cgEnable: true,
    up: false
  },{
    id:3,
    name:"车辆情况",
    unit:"人数",
    // trend:getThredConfig([6224,9986,12382,12736,13185,13044,13190,13078,12595,12133,11619,8783,4022],"人数"),
    values: [{
      name:'有车',
      y:846
    },{
      name:'无车',
      y:872
    },{
      name:'未知',
      y: 914
    }],
    value: 599162,
    _d_value: 698165,
    doD: -14.18,
    cgEnable: true,
    up: false,
    data: [840, 872, 914]
  },{
    id:4,
    name:"商业类型",
    unit:"人数",
    values: [{
      name:'餐饮',
      y:142294,
      drilldown:{
        name: '餐饮',
        data: [{
          name: "吧台",
          y: 4408,
          drilldown: {
            name: "吧台",
            data: [{
              name: "浆宝",
              y: 181
            },{
              name: "鲜饮空间",
              y: 1226
            },{
              name: "鲜芋仙",
              y: 184
            },{
              name: "鲜元素",
              y: 2785
            },{
              name: "找茶",
              y: 23
            },{
              name: "珍仕菓",
              y: 9
            }]
          }
        },{
          name: "快餐",
          y: 24622,
          drilldown: {
            name: "快餐",
            data: [{
              name: "大快活",
              y: 491
            },{
              name: "汉堡王",
              y: 9607
            },{
              name: "吉野家",
              y: 3254
            },{
              name: "肯德基",
              y: 11270
            }]
          }
        },{
          name: "料理",
          y: 11212,
          drilldown: {
            name: "料理",
            data: [{
              name: "池田回转寿司",
              y: 3339
            },{
              name: "池田寿司",
              y: 2411
            },{
              name: "禾绿回转寿司",
              y: 2886
            },{
              name: "惠比寿 杏",
              y: 2576
            }]
          }
        },{
          name: "甜品",
          y: 11212,
          drilldown: {
            name: "甜品",
            data: [{
              name: "DQ",
              y: 374
            },{
              name: "Eimio",
              y: 2165
            },{
              name: "Gandy Lab",
              y: 268
            },{
              name: "Stick house",
              y: 2
            },{
              name: "凡情蒂诺巧克力",
              y: 1603
            },{
              name: "快乐柠檬",
              y: 2326
            },{
              name: "满记甜品",
              y: 228
            },{
              name: "漫果工坊",
              y: 256
            },{
              name: "摩提工坊",
              y: 169
            }]
          }
        },{
          name: "西餐",
          y: 18005,
          drilldown: {
            name: "甜品",
            data: [{
              name: "星巴克",
              y: 15388
            },{
              name: "太平洋咖啡",
              y: 2617
            }]
          }
        },{
          name: "中餐",
          y: 76656,
          drilldown: {
            name: "中餐",
            data: [{
              name: "巴贝拉",
              y: 1322
            },{
              name: "北京小王府红茶餐厅",
              y: 1093
            },{
              name: "避风塘",
              y: 6809
            },{
              name: "边境共和国",
              y: 8361
            },{
              name: "川辣汇",
              y: 4455
            },{
              name: "豆捞坊",
              y: 7134
            },{
              name: "沸腾夜话",
              y: 1483
            },{
              name: "呷哺呷哺",
              y: 1288
            },{
              name: "港丽餐厅",
              y: 2658
            },{
              name: "蕉叶",
              y: 2490
            },{
              name: "井格老灶火锅",
              y: 4005
            },{
              name: "咖喱虎",
              y: 595
            },{
              name: "鹿港小镇",
              y: 13620
            },{
              name: "拿渡麻辣香锅",
              y: 3352
            },{
              name: "南小馆",
              y: 208
            },{
              name: "味千拉面",
              y: 10404
            },{
              name: "一味一诚",
              y: 7290
            },{
              name: "印巷小馆",
              y: 89
            }]
          }
        }]
      }
    },{
      name:'零售专卖',
      y:745321,
      drilldown:{
        name: '零售专卖',
        data: [{
          name: "儿童用品",
          y: 435,
          dilldown:{
            name: "儿童用品",
            data:[{
              name: "NICI",
              y:174
            },{
              name: "全棉时代",
              y:111
            },{
              name: "GC",
              y: 150
            }]
          }
        },{
          name: "化妆品",
          y:40773,
          drilldown:{
            name: "化妆品",
            data:[{
              name: "BObbi Brown",
              y:2968,
            },{
              name: "CK香水",
              y:415,
            },{
              name: "CK香水",
              y:1149,
            },{
              name: "innisfree",
              y:338,
            },{
              name: "Jurlique",
              y:5687,
            },{
              name: "KIEHLS",
              y:2450,
            },{
              name: "LAVIN香水",
              y:1237,
            },{
              name: "LOCCITANE",
              y:1105,
            },{
              name: "MAC",
              y:4940,
            },{
              name: "MAX FACTOR",
              y:447,
            },{
              name: "ORIGINS",
              y:5735,
            },{
              name: "Roger&Gallet",
              y:1380,
            },{
              name: "SEPHORA",
              y:9403,
            },{
              name: "大长今",
              y:3519,
            }]
          }
        },{
          name: "黄金珠宝",
          y:16792,
          drilldown:{
            name: "黄金珠宝",
            data:[{
              name: "I gold",
              y:2129
            },{
              name: "LOVE&LOVE",
              y:13036
            },{
              name: "PANDORA",
              y:661
            },{
              name: "施华洛世奇",
              y:966
            }]
          }
        },{
          name: "家居",
          y:11777,
          drilldown:{
            name: "家居",
            data:[{
              name: "MUJI",
              y:11777 
            }]
          }
        },{
          name: "居家生活",
          y:12881,
          drilldown:{
            name: "居家生活",
            data:[{
              y:3729,
              name: "阿芙香薰"
            },{
              y:3209,
              name: "万宁"
            },{
              y:122,
              name: "名创优品"
            },{
              y:5821,
              name: "品阁"
            }]
          }
        },{
          name: "快销集合店",
          y:18572,
          drilldown:{
            name: "快销集合店",
            data:[{
              y:18572,
              name: "BHG"
            }]
          }
        },{
          name: "男女装",
          y:207244,
          drilldown:{
            name: "快销集合店",
            data:[{
              y:4816,
              name: "Calvin Klein"
            },{
              y:396,
              name: "Calvin Klein Jeans"
            },{
              y:2096,
              name: "Calvin Klein underwear"
            },{
              y:277,
              name: "cheap monday"
            },{
              y:1913,
              name: "CK JEANS"
            },{
              y:1954,
              name: "ecco"
            },{
              y:3266,
              name: "ED hardy"
            },{
              y:1434,
              name: "EMPORIO ARMANI"
            },{
              y:575,
              name: "EVISU"
            },{
              y:2248,
              name: "G·STAR RAW"
            },{
              y:3187,
              name: "G2000"
            },{
              y:14760,
              name: "GAP"
            },{
              y:3502,
              name: "GUESS"
            },{
              y:18485,
              name: "i.t"
            },{
              y:1423,
              name: "IZZUE"
            },{
              y:12204,
              name: "JACK JONES"
            },{
              y:7813,
              name: "Juicy Couture"
            },{
              y:480,
              name: "Lee"
            },{
              y:1498,
              name: "levis"
            },{
              y:80,
              name: "pancoat"
            },{
              y:299,
              name: "PRICH"
            },{
              y:2553,
              name: "REPLAY"
            },{
              y:3592,
              name: "STAY REAL"
            },{
              y:20067,
              name: "UNIQLO"
            },{
              y:97007,
              name: "ZARA"
            },{
              y:1319,
              name: "速写"
            }]
          }
        },{
          name: "男装",
          y:31959,
          dilldown: {
            name: "男装",
            data: [{
              y:5786,
              name: "6IXTY 8IGHT"
            },{
              y:2276,
              name: "Aape"
            },{
              y:9600,
              name: "aojo"
            },{
              y:395,
              name: "b+ab"
            },{
              y:911,
              name: "BOY"
            },{
              y:1145,
              name: "GXG"
            },{
              y:1204,
              name: "gxg.jeans"
            },{
              y:6027,
              name: "GXG特卖"
            },{
              y:1545,
              name: "IM DAVID"
            },{
              y:278,
              name: "SELECTED"
            },{
              y:2792,
              name: "trendiano"
            }]
          }
        },{
          name: "内衣",
          y:3270,
          dilldown: {
            name: "内衣",
            data: [{
                y:763,
              name: "Blumenovum"
            },{
              y:979,
              name: "PEACH JOHN"
            },{
              y:481,
              name: "PRIVATE STRUCTURE"
            },{
              y:1,
              name: "Rime"
            },{
              y:232,
              name: "TUTUANNA"
            },{
              y:814,
              name: "爱美丽"
            }]
          }
        },{
          name: "女装",
          y:149912,
          drilldown:{
            name: "女装",
            data: [{
              y:2796,
              name: "AVVN"
            },{
              y:653,
              name: "Bout hent ique"
            },{
              y:81,
              name: "COCO DEAL"
            },{
              y:772,
              name: "CR?Z！"
            },{
              y:1899,
              name: "DAZZLE"
            },{
              y:11394,
              name: "DKNY"
            },{
              y:3838,
              name: "E·LAND"
            },{
              y:2997,
              name: "earth music&ecolog"
            },{
              y:1609,
              name: "ENO"
            },{
              y:5977,
              name: "Five Plus"
            },{
              y:5248,
              name: "Hello Kitty"
            },{
              y:5973,
              name: "III VIVINIKO"
            },{
              y:2717,
              name: "Initial"
            },{
              y:1064,
              name: "JNBY"
            },{
              y:10486,
              name: "JUCY JUDY"
            },{
              y:3041,
              name: "KODICE"
            },{
              y:9,
              name: "lily"
            },{
              y:1193,
              name: "marie n°mary"
            },{
              y:8387,
              name: "MAX&Co."
            },{
              y:1118,
              name: "MIGAINO"
            },{
              y:1412,
              name: "MISS SIXTY"
            },{
              y:551,
              name: "missoul"
            },{
              y:8704,
              name: "MO&Co."
            },{
              y:884,
              name: "MOUSSY"
            },{
              y:2446,
              name: "NANCY K"
            },{
              y:12018,
              name: "Ochirly"
            },{
              y:15456,
              name: "PLAYLOUNGE"
            },{
              y:4241,
              name: "snidel"
            },{
              y:1091,
              name: "tanni"
            },{
              y:1070,
              name: "test-tube"
            },{
              y:12947,
              name: "Vero moda"
            },{
              y:10649,
              name: "ZCZZ"
            },{
              y:466,
              name: "ZUCZUG"
            },{
              y:2442,
              name: "百家好"
            },{
              y:2254,
              name: "播"
            },{
              y:479,
              name: "乐町"
            },{
              y:1402,
              name: "斯琴"
            },{
              y:148,
              name: "再尚秀"
            }]
          }
        },{
          name: "配饰",
          y: 75327,
          drilldown:{
            name: "配饰",
            data: [{
              name: "CK WATCH",
              y:670
            },{
              y: 2217,
              name: "crocs"
            },{
              y: 242,
              name: "FESSURA"
            },{
              y: 1470,
              name: "FOLLIE"
            },{
              y: 22,
              name: "HAT'S ON"
            },{
              y: 8,
              name: "Hitomi Optician"
            },{
              y: 2957,
              name: "hotwind"
            },{
              y: 2315,
              name: "ipanema"
            },{
              y: 5853,
              name: "J&M"
            },{
              y: 3214,
              name: "kate spade"
            },{
              y: 408,
              name: "Kipling"
            },{
              y: 30,
              name: "La pa Y-P"
            },{
              y: 6950,
              name: "MAP"
            },{
              y: 15997,
              name: "MICHAEL KORS"
            },{
              y: 656,
              name: "reemoor"
            },{
              y: 723,
              name: "Samantha Thavasa"
            },{
              y: 776,
              name: "SUUNTO"
            },{
              y: 3,
              name: "SWATCH"
            },{
              y: 322,
              name: "TUSCANS"
            },{
              y: 2998,
              name: "UGG"
            },{
              y: 4542,
              name: "Vivi tix"
            },{
              y: 1929,
              name: "阿吉豆"
            },{
              y: 6958,
              name: "宝岛眼镜"
            },{
              y: 364,
              name: "靓佩"
            },{
              y: 7006,
              name: "木九十"
            },{
              y: 1102,
              name: "瑞士军刀、ZIPPO"
            },{
              y: 5595,
              name: "西遇"
            }]
          }
        },{
          name: "饰品",
          y: 666,
          drilldown:{
            name: "饰品",
            data: [{
              name: "KING BABY",
              y: 666
            }]
          }
        },{
          name: "数码电器",
          y: 31874,
          drilldown:{
            name: "数码电器",
            data: [{
              y:85,
              name: "ALIENWARE"
            },{
              y:662,
              name: "Apple Store"
            },{
              y:2245,
              name: "CYO VAPE"
            },{
              y:1571,
              name: "HS"
            },{
              y:2513,
              name: "HUAWEI"
            },{
              y:5886,
              name: "iPhone"
            },{
              y:2147,
              name: "Microsoft"
            },{
              y:354,
              name: "迪信通"
            },{
              y:6763,
              name: "卡乐时代"
            },{
              y:1592,
              name: "魅族手机"
            },{
              y:8056,
              name: "三星手机"
            }]
          }
        },{
          name: "文化用品",
          y: 755,
          drilldown:{
            name: "文化用品",
            data: [{
              y:755,
              name: "LAMY"
            }]
          }
        },{
          name: "眼镜",
          y: 107,
          drilldown:{
            name: "文化用品",
            data: [{
              y:107,
              name: "LOHO"
            }]
          }
        },{
          name: "运动休闲",
          y: 142977,
          drilldown:{
            name: "运动休闲",
            data: [{
              y:237,
              name: "adidas Originals"
            },{
              y:5824,
              name: "Baleno"
            },{
              y:10243,
              name: "CONVERSE"
            },{
              y:84331,
              name: "H&M"
            },{
              y:902,
              name: "HIPANDA"
            },{
              y:13513,
              name: "LALABOBO"
            },{
              y:1730,
              name: "MLB"
            },{
              y:679,
              name: "Monki"
            },{
              y:1780,
              name: "new balance"
            },{
              y:645,
              name: "NIKE"
            },{
              y:3876,
              name: "Onit suka eTiger"
            },{
              y:93,
              name: "Paul Frank"
            },{
              y:1303,
              name: "PUMA 黑标"
            },{
              y:536,
              name: "ROBINHOOD"
            },{
              y:2,
              name: "THE NORTH FACE"
            },{
              y:12,
              name: "Tous"
            },{
              y:7224,
              name: "UNDER ARMOUR"
            },{
              y:6926,
              name: "VANS"
            },{
              y:973,
              name: "WAKE UP"
            },{
              y:2148,
              name: "航海王"
            }]
          }
        }]
      }
    },{
      name:'生活配套',
      y: 327,
      drilldown:{
        name: "生活配套",
        data: [{
          y:327,
          name: "洗车",
          drilldown:{
            name: "洗车",
            data: [{
              y:327,
              name: "Cars one"
            }]
          }
        }]
      }
    },{
      name:'休闲娱乐',
      y: 2862,
      drilldown:{
        name: "休闲娱乐",
        data: [{
          y:1064,
          name: "KTV",
          drilldown:{
            name: "KTV",
            data: [{
              y:1064,
              name: "XOXO"
            }]
          }
        },{
          y:1798,
          name: "美发美甲",
          drilldown:{
            name: "美发美甲",
            data: [{
              y:1064,
              name: "BHG SALON"
            }]
          }
        }]
      }
    }],
    _d_value: 698165,
    doD: -14.18,
    cgEnable: true,
    up: false,
    data: [840, 872, 914]
  }];

  this.selectedIndex = this.indexData[0];

  this.onIndexChange = function(index){
    // this.selectedIndex = index;
    this.chartCompareConfig.series[1].data = this.selectedIndex.data;
  }

  this.chartThredConfig = {
    options: {
        chart: {
            type: 'line'
        },
        xAxis: {
          categories: [10,11,12,13,14,15,16,17,18,19,20,21,22] //x轴数据
        }
    },
    series: [{
        data: this.selectedIndex.data
    }],
    title: {
        text: ''
    },
    loading: false
  };

  this.selectedDim = this.dimData[0];

  var widths = ['100%', '0%', '0%'];

  var typeData = this.selectedDim.values;
  var classData = [];
  var brandData = [];

  console.log(typeData);
  for(var i=0; i<typeData.length; i++){
    if(typeData[i].drilldown){
      console.log(typeData[i].drilldown.data);

      classData = classData.concat(typeData[i].drilldown.data);
      if(typeData[i].drilldown.data){
        for(var j=0; j<typeData[i].drilldown.data.length; j++){
          brandData = brandData.concat(typeData[i].drilldown.data[j].drilldown.data);
        }
      }
    }
  }

  if(classData.length && brandData.length){
    widths = ['50%', '80%', '100%'];
  }else if(classData.length){
    widths = ['70%', '100%', '0%'];
  }


  console.log(widths);

  this.onDimChange = function(){
    this.chartPieConfig.series[0].data = this.selectedDim.values;

    typeData = this.selectedDim.values;
    classData = [];
    brandData = [];

    console.log('typeData');
    console.log(typeData);
    for(var i=0; i<typeData.length; i++){
      if(typeData[i].drilldown){
        console.log('typeData[i].drilldown.data ' + i);
        console.log(typeData[i].drilldown.data);
        classData = classData.concat(typeData[i].drilldown.data);
        if(typeData[i].drilldown.data){
          for(var j=0; j<typeData[i].drilldown.data.length; j++){
            if(typeData[i].drilldown.data[j].drilldown.data){
              brandData = brandData.concat(typeData[i].drilldown.data[j].drilldown.data);
            }
          }
        }
      }
    }
    console.log(classData);
    console.log(brandData);
    widths = ['100%', '0%', '0%'];
    if(classData.length && brandData.length){
      widths = ['50%', '80%', '100%'];
    }else if(classData.length){
      widths = ['70%', '100%', '0%'];
    }

    this.chartPieConfig.series[0].data = typeData;
    this.chartPieConfig.series[1].data = classData;
    this.chartPieConfig.series[2].data = brandData;

    this.chartPieConfig.series[0].size = widths[0];
    this.chartPieConfig.series[1].size = widths[1];
    this.chartPieConfig.series[2].size = widths[2];

    this.chartPieConfig.series[1].innerSize = widths[0];
    this.chartPieConfig.series[2].innerSize = widths[1];

    console.log(widths);
  }

  this.chartPieConfig = {
    options: {
        chart: {
            type: 'pie'
        }
    },
    series: [{
      name: '业态',
      data: typeData,
      size: widths[0],
      dataLabels: {
          formatter: function () {
              return this.y > 5 ? this.point.name : null;
          },
          color: '#ffffff',
          distance: -30
      }
    },{
      name: '业种',
      data: classData,
      size: widths[1],
      innerSize: widths[0],
      dataLabels: {
          formatter: function () {
              // display only if larger than 1
              return this.y > 1 ? '<b>' + this.point.name + ':</b> ' + this.y + '%' : null;
          }
      }
    },{
      name: '品牌',
      data: brandData,
      size: widths[2],
      innerSize: widths[1],
      dataLabels: {
          formatter: function () {
              // display only if larger than 1
              return this.y > 1 ? '<b>' + this.point.name + ':</b> ' + this.y + '%' : null;
          }
      }
    }],
    title: {
        text: ''
    },
    loading: false
  };

  this.chartPieConfig.series[0].data = typeData;
  this.chartPieConfig.series[1].data = classData;
  this.chartPieConfig.series[2].data = brandData;

  this.chartCompareConfig = {
    options: {
        chart: {
            type: 'pie'
        },
        xAxis: {
          categories: [10,11,12,13,14,15,16,17,18,19,20,21,22] //x轴数据
        }
    },
    series: [{
      type: 'column',
      data: [6224,9986,12382,12736,13185,13044,13190,13078,12595,12133,11619,8783,4022],
    }, {
      type: 'spline',
      data: this.selectedIndex.data,
    }],
    title: {
        text: ''
    },
    loading: false
  };

  this.reflow = function () {
    console.log("reflow");
    $rootScope.$broadcast('highchartsng.reflow');
  };

  $timeout(function() {
    self.reflow();
  },0);

  self.tableParams = new ngTableParams({}, {
    dataset: self.indexList
  });
  
  self.isLastPage = isLastPage;
  
  function isLastPage(){
    return self.tableParams.page() === totalPages();
  }
  
  function totalPages(){
    return Math.ceil(self.tableParams.total() / self.tableParams.count());
  }

  this.delete = function(index){
    for(var i=index; i<self.indexList.length; i++){

      if((i+1) != self.indexList.length){
        self.indexList[i] = self.indexList[i+1];
      }
      else{
        self.indexList.pop();
      }
    }
    console.log(self.indexList);

    self.tableParams = new ngTableParams({}, {
      dataset: self.indexList
    });
  }

  this.back = function(){
    window.history.back()
  };
}