angular
  .module('app')
  .component('mjMonitor', {
    templateUrl: 'app/pfMonitor/rtMonitor.html',
    controller: rtMonitorCtrl
  });

/** @ngInject */
function rtMonitorCtrl($rootScope, $state, todoService, $interval) {
  console.log('rtMonitorCtrl');
  this.name = userInfo.name;
  this.password = '1';
  this.code = '';

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

  this.openAddIndex = function(){
    console.log("openAddIndex");
    this.showAddIndex = true;
  }
  
  var getThredConfig = function(data,data1,data2, unit){
    return {
      options: {
          chart: {
              type: 'line'
          },
          xAxis: {
            categories: [10,11,12,13,14,15,16,17,18,19,20,21,22] //x轴数据
          }
      },
      series: [{
          name:"今日",
          data: data
      },{
          name:"昨日",
          data: data1
      },{
          name:"历史7日均值",
          data: data2
      }],
      title: {
          text: ''
      },
      loading: false
    };
  };
  this.indexList = [{
    id:0,
    name:"新增客户数",
    unit:"人数",
    trend:getThredConfig(
      [1577,1558,1604,1480,1308,1385,1301,1387,1616,1417,1046,495,215],
      [1602,1527,1609,1409,1369,1315,1320,1330,1511,1385,968,489,242],
      [1184.25,1578.25,1587.5,1385.25,1333.5,1318.25,1291,1311.5,1520.75,1283.75,894,432.25,204.75],
      "人"),
    value: 16389,
    _d_value: 16076,
    doD: 1.95,
    cgEnable: true,
    up: true,
    data: [1577,1558,1604,1480,1308,1385,1301,1387,1616,1417,1046,495,215]
  },{
    id:1,
    name:"到访客户数",
    unit:"人数",
    trend:getThredConfig(
      [8912,10648,12020,12274,11861,11658,11778,11737,12152,11727,10865,9273,6624],
      [8840,10323,11677,11816,11578,11417,11468,11394,11597,11271,10544,8876,6604],
      [6639.25,10047.5,11576,11720.75,11480.25,11412.25,11439,11371.75,11613.75,11146.25,10245.25,8731,6407.75],
      "人数"),
    value: 35673,
    _d_value: 34744,
    doD: 2.67,
    cgEnable: true,
    up: true,
    data: [6224,9986,12382,12736,13185,13044,13190,13078,12595,12133,11619,8783,4022]
  },{
    id:2,
    name:"进店客户数",
    unit:"人数",
    trend:getThredConfig(
      [6224,9986,12382,12736,13185,13044,13190,13078,12595,12133,11619,8783,4022],
      [6510,7791,8966,9075,8883,8723,8806,8811,9051,8700,8131,6729,4726],
      [4850,7435.5,8855,8952.5,8738.75,8622.5,8678.75,8651.5,8901.25,8526.75,7822.75,6525,4528.5],
      "人数"),
    value: 32460,
    _d_value: 31719,
    doD: 2.34,
    cgEnable: true,
    up: true,
    data: [6224,9986,12382,12736,13185,13044,13190,13078,12595,12133,11619,8783,4022]
  },{
    id:3,
    name:"驻留客户数",
    unit:"人数",
    trend:getThredConfig(
      [6590,7794,9064,9264,8915,8637,8687,8756,9108,8756,8119,6764,4479],
      [6510,7676,8807,8903,8725,8585,8653,8665,8896,8561,7983,6591,4529],
      [4850,7352.25,8714,8791.75,8594.75,8476.25,8537,8510.5,8746,8363,7686.25,6397.5,4321.5],
      "人数"),
    value: 32460,
    _d_value: 31719,
    doD: 2.34,
    cgEnable: true,
    up: true,
    data: [5970,9477,11620,12024,12444,12313,12435,12294,11832,11395,10889,8215,3676]
  },{
    id:4,
    name:"人均驻留时长",
    unit:"分钟",
    trend:getThredConfig(
      [21.22,16.17,17.42 ,16.99 ,16.99 ,17.73 ,17.24 ,16.98 ,17.38 ,17.38 ,16.78 ,14.61 ,9.61 ],
      [21.14 ,16.46 ,17.23 ,16.67 ,16.62,17.05 ,16.63 ,17.02 ,17.38 ,17.43 ,16.12 ,13.61 ,9.51 ],
      [15.89 ,17.61 ,16.93 ,16.60 ,16.74,16.83 ,16.81 ,17.47 ,17.43 ,17.13 ,16.31,14.11,9.36],
      "人数"),
    value: 17.96,
    _d_value: 17.78,
    doD: 1.01
  }];

  this.indexList[0].selected = true;
  this.selectedIndex = this.indexList[0];

  this.maps = [{
    id:0,
    name: '1',
    show: false,
    time: '8:00'
  },{
    id:1,
    name: '2',
    show: false,
    time: '9:00'
  },{
    id:2,
    name: '3',
    show: true,
    time: '10:00'
  }];

  this.activeMap = 0;
  var timer;

  this.play = function(){
    var self = this;

    if(timer && this.played){
      $interval.cancel(timer);
      timer = undefined;
    }else if(!this.played){
      self.activeMap = 0;
      timer = $interval(function(){
        self.maps[self.activeMap].show = false;
        self.activeMap = self.activeMap+1;
        self.maps[self.activeMap].show = true;

        if(self.activeMap == self.maps.length-1){
          $interval.cancel(timer);
          timer = undefined;
          self.played = false;
        }
      }, 1000);
    }
    this.played = !this.played;
  }

  this.showDetails = function(row){
    console.log(row);
    $state.go('app.mall.indexdetails', {selectedId: row.id});
  }

  this.showCgAnalysis = function(row){
    $state.go('app.mall.cganalysis');
  }
  this.onSubmit = function(){
    console.log('[rtMonitorCtrl] onSubmit');
    $rootScope.currentUser = userInfo;
    $state.go('app');
  }
  this.onSelecteIndex = function(row){
    for(var i=0; i<this.indexList.length; i++){
      this.indexList[i].selected = false;
    }
    row.selected = true;

    this.selectedIndex = row;
  }

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