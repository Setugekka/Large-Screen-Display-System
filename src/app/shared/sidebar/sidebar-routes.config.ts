import {RouteInfo} from './sidebar.metadata';

// Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [
  {
    path: '/MainPage',
    title: '数据展示面板',
    icon: 'ft-home',
    class: 'has-sub',
    badge: '',
    badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
    isExternalLink: false,
    submenu: [
      { path: '/', title: '总体数据概览面板', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/', title: '各数据详细统计分析面板', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    ]
  },
  {
    path: '',
    title: '应急事件',
    icon: 'ft-home',
    class: 'has-sub',
    badge: '',
    badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
    isExternalLink: false,
    submenu: [
      { path: '/', title: '应急事件展示', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/', title: '应急事件报表生成', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    ]
  },
  {
    path: '',
    title: '应急辅助决策',
    icon: 'ft-home',
    class: 'has-sub',
    badge: '',
    badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
    isExternalLink: false,
    submenu: [
      { path: '/', title: '应急预案管理', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/', title: '人员调配', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/', title: '物资调配', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/', title: '装备调配', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/', title: '预测信息', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    ]
  },
  {
    path: '',
    title: '视频会商',
    icon: 'ft-home',
    class: 'has-sub',
    badge: '',
    badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
    isExternalLink: false,
    submenu: [
      { path: '/', title: '视频数据配置', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/', title: '大屏展示', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    ]
  },
  {
    path: '',
    title: '应急数据管理',
    icon: 'ft-home',
    class: 'has-sub',
    badge: '',
    badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
    isExternalLink: false,
    submenu: [
      { path: '/', title: 'excel导入', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/', title: '增删查改', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/', title: '操作日志', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    ]
  },
  {
    path: '',
    title: '系统管理',
    icon: 'ft-home',
    class: 'has-sub',
    badge: '',
    badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
    isExternalLink: false,
    submenu: [
      { path: '/', title: '权限控制', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/', title: '用户信息维护', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    ]
  },
  {
    path: '',
    title: '个人信息管理',
    icon: 'ft-home',
    class: 'has-sub',
    badge: '',
    badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
    isExternalLink: false,
    submenu: [
      { path: '/', title: '个人信息维护', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/', title: '当前权限', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/', title: '操作日志', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    ]
  },
  {
    path: '',
    title: '个性化大屏展示配置',
    icon: 'ft-home',
    class: 'has-sub',
    badge: '',
    badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
    isExternalLink: false,
    submenu: [
      { path: '/', title: '数据框显示项目', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/', title: '显示的地区', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/', title: '视频接入设置', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/', title: '图表选择', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },

    ]
  },
];
