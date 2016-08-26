angular
  .module('app')
  .component('indexDetails', {
    templateUrl: 'app/indexDetails/indexDetails.html',
    controller: indexDetailsCtrl
  });

/** @ngInject */
function indexDetailsCtrl($rootScope, $state, todoService, $injector, $timeout,$stateParams) {
  console.log('indexDetailsCtrl');
  var ngTableParams;

  ngTableParams = $injector.get('NgTableParams');

  this.states = ['a','ab','bc', 'ccd'];
  this.commercial = {
    tabs:['业态', '品类', '细分'],
    data:[{
      id: '0',
      name: "餐饮",
      children: [{
        id:'0_0',
        name: "吧台",
        children: [{
          id:'0_0_0',
          name: "茶吧"
        },{
          id:'0_0_1',
          name: "水吧"
        },{
          id:'0_0_1',
          name: "饮品店"
        },{
          id:'0_0_1',
          name: "其他"
        }]
      },{
        id:'0_1',
        name: "快餐",
        children: [{
          id:'0_0_0',
          name: "其他"
        }]
      },{
        id:'0_1',
        name: "料理",
        children: [{
          id:'0_0_0',
          name: "其他"
        }]
      },{
        id:'0_1',
        name: "甜品",
        children: [{
          id:'0_1_0',
          name: "冰激凌"
        },{
          id:'0_1_1',
          name: "糖果"
        },{
          id:'0_1_1',
          name: "其他"
        }]
      },{
        id:'0_1',
        name: "西餐",
        children: [{
          id:'0_1_1',
          name: "其他"
        }]
      },{
        id:'0_1',
        name: "中餐",
        children: [{
          id:'0_1_0',
          name: "火锅"
        },{
          id:'0_1_1',
          name: "烤鱼"
        },{
          id:'0_1_1',
          name: "泰国"
        },{
          id:'0_1_1',
          name: "其他"
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
          name: "母婴"
        },{
          id:'0_0_1',
          name: "玩具"
        },{
          id:'0_0_1',
          name: "其他"
        }]
      },{
        id:'0_1',
        name: "化妆品",
        children: [{
          id:'0_0_0',
          name: "香水"
        },{
          id:'0_0_1',
          name: "其他"
        }]
      },{
        id:'0_1',
        name: "黄金珠宝",
        children: [{
          id:'0_0_0',
          name: "其他"
        }]
      },{
        id:'0_1',
        name: "家居",
        children: [{
          id:'0_0_0',
          name: "其他"
        }]
      },{
        id:'0_1',
        name: "居家生活",
        children: [{
          id:'0_0_0',
          name: "香薰"
        },{
          id:'0_0_1',
          name: "其他"
        }]
      },{
        id:'0_1',
        name: "快销集合店",
        children: [{
          id:'0_0_1',
          name: "其他"
        }]
      },{
        id:'0_1',
        name: "男女装",
        children: [{
          id:'0_0_0',
          name: "潮牌"
        },{
          id:'0_0_0',
          name: "牛仔"
        },{
          id:'0_0_0',
          name: "牛仔裤"
        },{
          id:'0_0_0',
          name: "其他"
        }]
      },{
        id:'0_1',
        name: "男装",
        children: [{
          id:'0_0_0',
          name: "潮牌"
        },{
          id:'0_0_0',
          name: "时尚"
        },{
          id:'0_0_0',
          name: "商务"
        },{
          id:'0_0_0',
          name: "其他"
        }]
      },{
        id:'0_1',
        name: "内衣",
        children: [{
          id:'0_0_0',
          name: "袜子"
        },{
          id:'0_0_0',
          name: "其他"
        }]
      },{
        id:'0_1',
        name: "女装",
        children: [{
          id:'0_0_0',
          name: "潮牌"
        },{
          id:'0_0_0',
          name: "法国"
        },{
          id:'0_0_0',
          name: "少淑"
        },{
          id:'0_0_0',
          name: "其他"
        }]
      },{
        id:'0_1',
        name: "配饰",
        children: [{
          id:'0_0_0',
          name: "MK包"
        },{
          id:'0_0_0',
          name: "顶级拖鞋"
        },{
          id:'0_0_0',
          name: "韩国帽子"
        },{
          id:'0_0_0',
          name: "美国鞋、包"
        },{
          id:'0_0_0',
          name: "美瞳"
        },{
          id:'0_0_0',
          name: "时尚手袋"
        },{
          id:'0_0_0',
          name: "饰品"
        },{
          id:'0_0_0',
          name: "手表"
        },{
          id:'0_0_0',
          name: "箱包"
        },{
          id:'0_0_0',
          name: "鞋"
        },{
          id:'0_0_0',
          name: "鞋集合店"
        },{
          id:'0_0_0',
          name: "鞋帽"
        },{
          id:'0_0_0',
          name: "休闲包"
        },{
          id:'0_0_0',
          name: "眼镜"
        },{
          id:'0_0_0',
          name: "钟表"
        },{
          id:'0_0_0',
          name: "其他"
        }]
      },{
        id:'0_1',
        name: "饰品",
        children: [{
          id:'0_0_0',
          name: "高端手工饰品"
        }]
      },{
        id:'0_1',
        name: "数码电器",
        children: [{
          id:'0_0_0',
          name: "IT"
        },{
          id:'0_0_0',
          name: "行车记录仪"
        },{
          id:'0_0_0',
          name: "集合店"
        },{
          id:'0_0_0',
          name: "其他"
        }]
      },{
        id:'0_1',
        name: "文化用品",
        children: [{
          id:'0_0_0',
          name: "钢笔"
        }]
      },{
        id:'0_1',
        name: "眼镜",
        children: [{
          id:'0_0_0',
          name: "其他"
        }]
      },{
        id:'0_1',
        name: "运动休闲",
        children: [{
          id:'0_0_0',
          name: "海贼王"
        },{
          id:'0_0_0',
          name: "休闲"
        },{
          id:'0_0_0',
          name: "运动"
        },{
          id:'0_0_0',
          name: "其他"
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
          name: "其他"
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
          name: "其他"
        }]
      },{
        id:'0_1',
        name: "KTV",
        children: [{
          id:'0_1_0',
          name: "其他"
        }]
      }]
    },{
      id: '0',
      name: "其他"
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

  self.cols1 = [{
    field: "date",
    title: "日期",
    show: true
  }, {
    field: "value",
    title: "指标值",
    show: true
  }];

  self.cols2 = [{
    field: "dim",
    title: "维度",
    show: true
  }, {
    field: "value",
    title: "指标值",
    show: true
  }];

  self.cols3 = [{
    field: "date",
    title: "日期",
    show: true
  }, {
    field: "value",
    title: "指标值",
    show: true
  }, {
    field: "value2",
    title: "对比指标值",
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
    value: 16389,
    _d_value: 16076,
    doD: 1.95,
    cgEnable: true,
    data: [1577,1558,1604,1480,1308,1385,1301,1387,1616,1417,1046,495,215]
  },{
    id:1,
    name:"到访客户数",
    unit:"人数",
    value: 35673,
    _d_value: 34744,
    doD: 2.67,
    cgEnable: true,
    data: [8912,10648,12020,12274,11861,11658,11778,11737,12152,11727,10865,9273,6624]
  },{
    id:2,
    name:"进店客户数",
    unit:"人数",
    value: 32460,
    _d_value: 31719,
    doD: 2.34,
    cgEnable: true,
    data: [6224,9986,12382,12736,13185,13044,13190,13078,12595,12133,11619,8783,4022]
  },{
    id:3,
    name:"驻留客户数",
    unit:"人数",
    value: 32460,
    _d_value: 31719,
    doD: 2.34,
    cgEnable: true,
    data: [6590,7794,9064,9264,8915,8637,8687,8756,9108,8756,8119,6764,4479]
  },{
    id:4,
    name:"人均驻留时长",
    unit:"分钟",
    value: 17.96,
    _d_value: 17.78,
    doD: 1.01,
    data: [21.22,16.17,17.42 ,16.99 ,16.99 ,17.73 ,17.24 ,16.98 ,17.38 ,17.38 ,16.78 ,14.61 ,9.61 ]
  }];

  var colorBank = Highcharts.getOptions().colors;

  this.dimData = [{
    id:0,
    name:"生理性别",
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
    name:"手机号码归属地",
    unit:"人数",
    values: [{
      name:'省1',
      y:142294,
      color: colorBank[0],
      drilldown:{
        name: '省1',
        data: [{
          name: "市1_1",
          color: colorBank[0],
          y: 4408
        },{
          name: "市1_2",
          y: 24622,
          color: colorBank[0]
        },{
          name: "市1_3",
          y: 11212,
          color: colorBank[0]
        },{
          name: "市1_4",
          color: colorBank[0],
          y: 11212
        },{
          name: "市1_5",
          color: colorBank[0],
          y: 18005
        },{
          name: "市1_6",
          y: 76656
        }]
      }
    },{
      name:'省2',
      color: colorBank[1],
      y:745321,
      drilldown:{
        name: '省2',
        data: [{
          name: "市2_1",
          color: colorBank[1],
          y: 435
        },{
          name: "市2_2",
          color: colorBank[1],
          y:40773
        },{
          name: "市2_3",
          color: colorBank[1],
          y:16792
        },{
          name: "市2_4",
          color: colorBank[1],
          y:11777
        },{
          name: "市2_5",
          color: colorBank[1],
          y:12881
        },{
          name: "市2_6",
          color: colorBank[1],
          y:18572
        },{
          name: "市2_7",
          y:207244,
          color: colorBank[1]
        },{
          name: "市2_8",
          y:31959,
          color: colorBank[1]
        },{
          name: "市2_9",
          y:3270,
          color: colorBank[1]
        },{
          name: "市2_10",
          y:149912,
          color: colorBank[1]
        },{
          name: "市2_11",
          y: 75327,
          color: colorBank[1]
        },{
          name: "市2_12",
          y: 666,
          color: colorBank[1]
        },{
          name: "市2_13",
          color: colorBank[1],
          y: 31874
        },{
          name: "市2_14",
          y: 755,
          color: colorBank[1]
        },{
          name: "市2_15",
          y: 107,
          color: colorBank[1]
        },{
          name: "市2_16",
          y: 142977,
          color: colorBank[1]
        }]
      }
    },{
      name:'省3',
      y: 327,
      color: colorBank[2],
      drilldown:{
        name: "省3",
        data: [{
          y:327,
          color: colorBank[2],
          name: "市3_1"
        }]
      }
    },{
      name:'省4',
      y: 2862,
      color: colorBank[3],
      drilldown:{
        name: "省4",
        data: [{
          y:1064,
          color: colorBank[3],
          name: "市4_1"
        },{
          y:1798,
          color: colorBank[3],
          name: "市4_2"
        }]
      }
    }],
    _d_value: 698165,
    doD: -14.18,
    cgEnable: true,
    up: false,
    data: [840, 872, 914]
  },{
    id:5,
    name:"常去场所",
    unit:"人数",
    values: [{
      name:'省1',
      y:142294,
      color: colorBank[0],
      drilldown:{
        name: '省1',
        data: [{
          name: "市1_1",
          color: colorBank[0],
          y: 4408
        },{
          name: "市1_2",
          y: 24622,
          color: colorBank[0]
        },{
          name: "市1_3",
          y: 11212,
          color: colorBank[0]
        },{
          name: "市1_4",
          color: colorBank[0],
          y: 11212
        },{
          name: "市1_5",
          color: colorBank[0],
          y: 18005
        },{
          name: "市1_6",
          y: 76656
        }]
      }
    },{
      name:'省2',
      color: colorBank[1],
      y:745321,
      drilldown:{
        name: '省2',
        data: [{
          name: "市2_1",
          color: colorBank[1],
          y: 435
        },{
          name: "市2_2",
          color: colorBank[1],
          y:40773
        },{
          name: "市2_3",
          color: colorBank[1],
          y:16792
        },{
          name: "市2_4",
          color: colorBank[1],
          y:11777
        },{
          name: "市2_5",
          color: colorBank[1],
          y:12881
        },{
          name: "市2_6",
          color: colorBank[1],
          y:18572
        },{
          name: "市2_7",
          y:207244,
          color: colorBank[1]
        },{
          name: "市2_8",
          y:31959,
          color: colorBank[1]
        },{
          name: "市2_9",
          y:3270,
          color: colorBank[1]
        },{
          name: "市2_10",
          y:149912,
          color: colorBank[1]
        },{
          name: "市2_11",
          y: 75327,
          color: colorBank[1]
        },{
          name: "市2_12",
          y: 666,
          color: colorBank[1]
        },{
          name: "市2_13",
          color: colorBank[1],
          y: 31874
        },{
          name: "市2_14",
          y: 755,
          color: colorBank[1]
        },{
          name: "市2_15",
          y: 107,
          color: colorBank[1]
        },{
          name: "市2_16",
          y: 142977,
          color: colorBank[1]
        }]
      }
    },{
      name:'省3',
      y: 327,
      color: colorBank[2],
      drilldown:{
        name: "省3",
        data: [{
          y:327,
          color: colorBank[2],
          name: "市3_1"
        }]
      }
    },{
      name:'省4',
      y: 2862,
      color: colorBank[3],
      drilldown:{
        name: "省4",
        data: [{
          y:1064,
          color: colorBank[3],
          name: "市4_1"
        },{
          y:1798,
          color: colorBank[3],
          name: "市4_2"
        }]
      }
    }],
    _d_value: 698165,
    doD: -14.18,
    cgEnable: true,
    up: false,
    data: [840, 872, 914]
  },{
    id:6,
    name:"工作地",
    unit:"人数",
    values: [{
      name:'市1',
      y:142294,
      color: colorBank[0],
      drilldown:{
        name: '市1',
        data: [{
          name: "区1_1",
          color: colorBank[0],
          y: 4408
        },{
          name: "区1_2",
          y: 24622,
          color: colorBank[0]
        },{
          name: "区1_3",
          y: 11212,
          color: colorBank[0]
        },{
          name: "区1_4",
          color: colorBank[0],
          y: 11212
        },{
          name: "区1_5",
          color: colorBank[0],
          y: 18005
        },{
          name: "区1_6",
          y: 76656
        }]
      }
    },{
      name:'市2',
      color: colorBank[1],
      y:745321,
      drilldown:{
        name: '市2',
        data: [{
          name: "区2_1",
          color: colorBank[1],
          y: 435
        },{
          name: "区2_2",
          color: colorBank[1],
          y:40773
        },{
          name: "区2_3",
          color: colorBank[1],
          y:16792
        },{
          name: "区2_4",
          color: colorBank[1],
          y:11777
        },{
          name: "区2_5",
          color: colorBank[1],
          y:12881
        },{
          name: "区2_6",
          color: colorBank[1],
          y:18572
        },{
          name: "区2_7",
          y:207244,
          color: colorBank[1]
        },{
          name: "区2_8",
          y:31959,
          color: colorBank[1]
        },{
          name: "区2_9",
          y:3270,
          color: colorBank[1]
        },{
          name: "区2_10",
          y:149912,
          color: colorBank[1]
        },{
          name: "区2_11",
          y: 75327,
          color: colorBank[1]
        },{
          name: "区2_12",
          y: 666,
          color: colorBank[1]
        },{
          name: "区2_13",
          color: colorBank[1],
          y: 31874
        },{
          name: "区2_14",
          y: 755,
          color: colorBank[1]
        },{
          name: "区2_15",
          y: 107,
          color: colorBank[1]
        },{
          name: "区2_16",
          y: 142977,
          color: colorBank[1]
        }]
      }
    },{
      name:'市3',
      y: 327,
      color: colorBank[2],
      drilldown:{
        name: "市3",
        data: [{
          y:327,
          color: colorBank[2],
          name: "区3_1"
        }]
      }
    },{
      name:'市4',
      y: 2862,
      color: colorBank[3],
      drilldown:{
        name: "市4",
        data: [{
          y:1064,
          color: colorBank[3],
          name: "区4_1"
        },{
          y:1798,
          color: colorBank[3],
          name: "区4_2"
        }]
      }
    }],
    _d_value: 698165,
    doD: -14.18,
    cgEnable: true,
    up: false,
    data: [840, 872, 914]
  },{
    id:7,
    name:"居住地",
    unit:"人数",
    values: [{
      name:'市1',
      y:142294,
      color: colorBank[0],
      drilldown:{
        name: '市1',
        data: [{
          name: "区1_1",
          color: colorBank[0],
          y: 4408
        },{
          name: "区1_2",
          y: 24622,
          color: colorBank[0]
        },{
          name: "区1_3",
          y: 11212,
          color: colorBank[0]
        },{
          name: "区1_4",
          color: colorBank[0],
          y: 11212
        },{
          name: "区1_5",
          color: colorBank[0],
          y: 18005
        },{
          name: "区1_6",
          y: 76656
        }]
      }
    },{
      name:'市2',
      color: colorBank[1],
      y:745321,
      drilldown:{
        name: '市2',
        data: [{
          name: "区2_1",
          color: colorBank[1],
          y: 435
        },{
          name: "区2_2",
          color: colorBank[1],
          y:40773
        },{
          name: "区2_3",
          color: colorBank[1],
          y:16792
        },{
          name: "区2_4",
          color: colorBank[1],
          y:11777
        },{
          name: "区2_5",
          color: colorBank[1],
          y:12881
        },{
          name: "区2_6",
          color: colorBank[1],
          y:18572
        },{
          name: "区2_7",
          y:207244,
          color: colorBank[1]
        },{
          name: "区2_8",
          y:31959,
          color: colorBank[1]
        },{
          name: "区2_9",
          y:3270,
          color: colorBank[1]
        },{
          name: "区2_10",
          y:149912,
          color: colorBank[1]
        },{
          name: "区2_11",
          y: 75327,
          color: colorBank[1]
        },{
          name: "区2_12",
          y: 666,
          color: colorBank[1]
        },{
          name: "区2_13",
          color: colorBank[1],
          y: 31874
        },{
          name: "区2_14",
          y: 755,
          color: colorBank[1]
        },{
          name: "区2_15",
          y: 107,
          color: colorBank[1]
        },{
          name: "区2_16",
          y: 142977,
          color: colorBank[1]
        }]
      }
    },{
      name:'市3',
      y: 327,
      color: colorBank[2],
      drilldown:{
        name: "市3",
        data: [{
          y:327,
          color: colorBank[2],
          name: "区3_1"
        }]
      }
    },{
      name:'市4',
      y: 2862,
      color: colorBank[3],
      drilldown:{
        name: "市4",
        data: [{
          y:1064,
          color: colorBank[3],
          name: "区4_1"
        },{
          y:1798,
          color: colorBank[3],
          name: "区4_2"
        }]
      }
    }],
    _d_value: 698165,
    doD: -14.18,
    cgEnable: true,
    up: false,
    data: [840, 872, 914]
  }];

  console.log("selectedId" + $stateParams.selectedId);

  this.selectedIndex = this.indexData[Number($stateParams.selectedId)];

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
            if(typeData[i].drilldown.data[j].drilldown){
              brandData = brandData.concat(typeData[i].drilldown.data[j].drilldown.data);
            }
          }
        }
      }
    }
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
      data: typeData,
      size: widths[0],
      dataLabels: {
          formatter: function () {
              return this.percentage > 5 ? this.point.name : null;
          },
          distance: -50
      }
    },{
      data: classData,
      size: widths[1],
      innerSize: widths[0],
      dataLabels: {
          formatter: function () {
              // display only if larger than 1
              return this.percentage > 2  ? '<b>' + this.point.name: null;
          },
          distance: -40
      }
    },{
      data: brandData,
      size: widths[2],
      innerSize: widths[1],
      dataLabels: {
          formatter: function () {
              // display only if larger than 1
              return this.percentage > 0.5  ? '<b>' + this.point.name: null;
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
  
  self.tableParams1 = new ngTableParams({}, {
    dataset: [{
      date:'2016-08-08 10',
      value: 2000
    },{
      date:'2016-08-08 11',
      value: 2000
    },{
      date:'2016-08-08 12',
      value: 2000
    }]
  });
  self.tableParams2 = new ngTableParams({}, {
    dataset: [{
      dim:'维度',
      value: 2000
    },{
      dim:'维度',
      value: 2000
    },{
      dim:'维度',
      value: 2000
    }]
  });
  self.tableParams3 = new ngTableParams({}, {
    dataset: [{
      date:'2016-08-08 10',
      value: 2000,
      value2: 2000
    },{
      date:'2016-08-08 11',
      value: 2000,
      value2: 2000
    },{
      date:'2016-08-08 12',
      value: 2000,
      value2: 2000
    }]
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

  this.addToKanban = function(chartConfig){
    console.log("addToKanban");
    var indexInfo = this.selectedIndex;
    var queryInfo = {
    }
    //TODO 选择看板
    // $rootScope.kanbanList.unshift({
    //   text: "标题"+$rootScope.kanbanList.length,
    //   type: "chart",
    //   index: $rootScope.kanbanList.length,
    //   chartConfig: chartConfig
    // });
  }
}