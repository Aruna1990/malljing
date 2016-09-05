angular
  .module('app')
  .component('indexTypeBar', {
    templateUrl: 'app/components/indexTypeBar.html',
    controller: indexTypeBar,
    bindings: {
    }
  });

/** @ngInject */
function indexTypeBar($location) {
  this.list = [{
    id: 1,
    title: "参与活动",
    nodes: [{
      id: 11,
      title: "互动活动",
      nodes: [
        {
          id: 111,
          title: "活动数量",
          nodes: []
        }, {
          id: 112,
          title: "活动人次",
          nodes: []
        }, {
          id: 113,
          title: "活动人数",
          nodes: []
        }
      ]
    }]
  }, {
    id: 2,
    title: "服务使用",
    nodrop: true,
    nodes: [
      {
        id: 21,
        title: "wifi使用",
        nodes: [
          {
            id: 211,
            title: "wifi连接用户数",
            nodes: []
          }, {
            id: 212,
            title: "wifi上网用户数",
            nodes: []
          }, {
            id: 213,
            title: "wifi使用率",
            nodes: []
          },
          {
            id: 211,
            title: "wifi上网时长",
            nodes: []
          }, {
            id: 212,
            title: "wifi流量",
            nodes: []
          }, {
            id: 213,
            title: "wifi上网频次",
            nodes: []
          }
        ]
      },
      {
        id: 22,
        title: "停车",
        nodes: [{
          id: 221,
          title: "使用客户数",
          nodes: []
        }]
      }
    ]
  }, {
    id: 3,
    title: "行为",
    nodes: [
      {
        id: 31,
        title: "比例",
        nodes: [{
          id: 311,
          title: "商圈客户转化率",
          nodes: []
        }, {
          id: 312,
          title: "场馆客户转化率",
          nodes: []
        }, {
          id: 313,
          title: "场馆客户流失率",
          nodes: []
        }, {
          id: 314,
          title: "出入口通流率",
          nodes: []
        }, {
          id: 315,
          title: "商铺客户转化率",
          nodes: []
        }, {
          id: 316,
          title: "商铺客户流失率",
          nodes: []
        }, {
          id: 317,
          title: "出入口通流率",
          nodes: []
        }, {
          id: 318,
          title: "设施客户转化率",
          nodes: []
        }, {
          id: 319,
          title: "设施客户流失率",
          nodes: []
        }]
      },
      {
        id: 32,
        title: "人数",
        nodes: [{
          id: 321,
          title: "常驻客户数",
          nodes: []
        }, {
          id: 322,
          title: "进入商圈客户数",
          nodes: []
        }, {
          id: 323,
          title: "驻留商圈客户数",
          nodes: []
        }, {
          id: 324,
          title: "离开商圈客户数",
          nodes: []
        }, {
          id: 325,
          title: "临场客户数",
          nodes: []
        }, {
          id: 326,
          title: "进场客户数",
          nodes: []
        }, {
          id: 327,
          title: "驻场客户数",
          nodes: []
        }, {
          id: 328,
          title: "离场客户数",
          nodes: []
        }, {
          id: 329,
          title: "临店客户数",
          nodes: []
        }, {
          id: 3210,
          title: "进店客户数",
          nodes: []
        }, {
          id: 3211,
          title: "驻店客户数",
          nodes: []
        }, {
          id: 3212,
          title: "离店客户数",
          nodes: []
        }, {
          id: 3213,
          title: "邻近设施客户数",
          nodes: []
        }, {
          id: 3214,
          title: "进入设施客户数",
          nodes: []
        }, {
          id: 3215,
          title: "驻留设施客户数",
          nodes: []
        }, {
          id: 3216,
          title: "离开设施客户数",
          nodes: []
        }]
      }
    ]
  }, {
    id: 4,
    title: "客户生命周期",
    nodes: [
      {
        id: 41,
        title: "沉默阶段",
        nodes: [{
          id: 411,
          title: "沉默客户",
          nodes: []
        }]
      },
      {
        id: 42,
        title: "成长阶段",
        nodes: [{
          id: 421,
          title: "激活成功客户",
          nodes: []
        }, {
          id: 422,
          title: "成长客户数",
          nodes: []
        }]
      },
      {
        id: 43,
        title: "流失阶段",
        nodes: [{
          id: 421,
          title: "流失客户",
          nodes: []
        }]
      },
      {
        id: 44,
        title: "潜客阶段",
        nodes: [{
          id: 421,
          title: "潜在客户数",
          nodes: []
        }]
      },
      {
        id: 45,
        title: "稳定阶段",
        nodes: [{
          id: 421,
          title: "稳定客户数",
          nodes: []
        }]
      },
      {
        id: 46,
        title: "新增阶段",
        nodes: [{
          id: 421,
          title: "新增客户数",
          nodes: []
        }, {
          id: 422,
          title: "赢回成功客户",
          nodes: []
        }]
      }
    ]
  }, {
    id: 5,
    title: "空间到访",
    nodes: [{
      id: 51,
      title: "流幅",
      nodes: [{
        id: 511,
        title: "重复到访率",
        nodes: []
      }, {
        id: 512,
        title: "人均客流密度",
        nodes: []
      }, {
        id: 513,
        title: "平均客流密度",
        nodes: []
      }]
    },
    {
      id: 52,
      title: "流量（人次）",
      nodes: [{
        id: 521,
        title: "到访客户指数（人次）",
        nodes: []
      }]
    },
    {
      id: 53,
      title: "到访客户指数（人次）",
      nodes: [{
        id: 521,
        title: "到访客户数",
        nodes: []
      }, {
        id: 521,
        title: "到访客户数(峰值)",
        nodes: []
      }, {
        id: 521,
        title: "驻留客户数",
        nodes: []
      }, {
        id: 521,
        title: "驻留客户指数（人次）",
        nodes: []
      }]
    },
    {
      id: 54,
      title: "流量（时长）",
      nodes: [{
        id: 521,
        title: "驻留时长（分钟）",
        nodes: []
      }, {
        id: 521,
        title: "人均驻留时长（分钟）",
        nodes: []
      }, {
        id: 521,
        title: "人均驻留时长（分钟）",
        nodes: []
      }]
    },
    {
      id: 55,
      title: "流时",
      nodes: [{
        id: 551,
        title: "峰值时刻(到访客户数)",
        nodes: []
      }]
    },
    {
      id: 56,
      title: "流速",
      nodes: [{
        id: 521,
        title: "人均访问速度",
        nodes: []
      }, {
        id: 522,
        title: "平均访问速度",
        nodes: []
      }, {
        id: 522,
        title: "人均访问时长",
        nodes: []
      }, {
        id: 522,
        title: "平均访问时长",
        nodes: []
      }]
    }]
  }, {
    id: 6,
    title: "消费",
    nodes: [{
      id: 61,
      title: "支付",
      nodes: [{
        id: 611,
        title: "消费金额",
        nodes: []
      }, {
        id: 612,
        title: "消费人数",
        nodes: []
      }, {
        id: 613,
        title: "消费次数",
        nodes: []
      }]
    }]
  }, {
    id: 7,
    title: "运维监控",
    nodes: [{
      id: 71,
      title: "AP监控",
      nodes: [{
        id: 711,
        title: "AP告警数",
        nodes: []
      }]
    }, {
      id: 72,
      title: "采样验证",
      nodes: [{
        id: 721,
        title: "独立MAC地址采集数",
        nodes: []
      }]
    }, {
      id: 73,
      title: "硬件监控",
      nodes: [{
        id: 731,
        title: "主机CPU告警数",
        nodes: []
      }, {
        id: 732,
        title: "主机内存告警数",
        nodes: []
      }, {
        id: 733,
        title: "主机存储告警数",
        nodes: []
      }]
    }]
  }];
}

indexTypeBar.prototype = {
  onClick: function (toNav, level, parentNav) {
    var i;
    var j;
    if (!this.navs[toNav].enable) {
      return;
    }
    if (level === 1) {
      if (this.navs[toNav].active) {
        return;
      }
      for (i = 0; i < this.navs.length; i++) {
        if (i === toNav) {
          this.navs[i].active = true;
          if (this.navs[i].children) {
            this.navs[i].children[0].active = true;
          }
        } else {
          this.navs[i].active = false;
          if (this.navs[i].children) {
            for (j = 0; j < this.navs[i].children.length; j++) {
              this.navs[i].children[j].active = false;
            }
          }
        }
      }
    } else if (level === 2) {
      if (this.navs[parentNav].active && this.navs[parentNav].children[toNav].active) {
        return;
      }
      if (this.navs[parentNav].active) {
        for (i = 0; i < this.navs[parentNav].children.length; i++) {
          this.navs[parentNav].children[i].active = false;
        }
        this.navs[parentNav].children[toNav].active = true;
      } else {
        for (i = 0; i < this.navs.length; i++) {
          if (i === parentNav) {
            this.navs[i].active = true;
            if (this.navs[i].children) {
              this.navs[i].children[toNav].active = true;
            }
          } else {
            this.navs[i].active = false;
            if (this.navs[i].children) {
              for (j = 0; j < this.navs[i].children.length; j++) {
                this.navs[i].children[j].active = false;
              }
            }
          }
        }
      }
    }
  }
};
