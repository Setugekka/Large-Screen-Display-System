import {RouteInfo} from './sidebar.metadata';

// Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: '应急组织体系',
    icon: 'ft-sliders',
    class: 'has-sub',
    badge: '',
    badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
    isExternalLink: false,
    submenu: [
      { path: '/EmergencyOrganization/ProvinceOrganization', title: '省公司', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/EmergencyOrganization/CityOrganization', title: '市县级', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      ]
  },
  {
    path: '/EmergencyRegime/Institutions',
    title: '应急制度体系',
    icon: 'ft-file-text',
    class: '',
    badge: '',
    badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
    isExternalLink: false,
    submenu: []
  },
  {
    path: '',
    title: '应急预案体系',
    icon: 'ft-compass',
    class: 'has-sub',
    badge: '',
    badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
    isExternalLink: false,
    submenu: [
      { path: '/ContingencyPlan/ProvincePlan', title: '省公司', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/ContingencyPlan/CityPlan', title: '市县级', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    ]
  },
  {
    path: '',
    title: '应急培训演练体系',
    icon: 'ft-video',
    class: 'has-sub',
    badge: '',
    badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
    isExternalLink: false,
    submenu: [
      { path: '/TrainingExercises/ProvinceTraining', title: '省公司', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/TrainingExercises/CityTraining', title: '市县级', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    ]
  },
  {
    path: '',
    title: '应急科技支撑体系',
    icon: 'ft-server',
    class: 'has-sub',
    badge: '',
    badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
    isExternalLink: false,
    submenu: [
      { path: '/TechnicalSupport/D5000', title: 'D5000系统', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/TechnicalSupport/Weather', title: '气象系统', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/TechnicalSupport/Irrigation', title: '水利系统', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/TechnicalSupport/Earthquake', title: '地震系统', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/TechnicalSupport/Firecontrol', title: '消防系统', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/TechnicalSupport/Police', title: '公安系统', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/TechnicalSupport/Medical', title: '医疗系统', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/TechnicalSupport/Traffic', title: '路况系统', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    ]
  },
  {
    path: '',
    title: '处置救援能力',
    icon: 'ft-settings',
    class: 'has-sub',
    badge: '',
    badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
    isExternalLink: false,
    submenu: [
      { path: '', title: '应急抢修队伍', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '', title: '应急基干分队', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '', title: '应急专家队伍', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '', title: '新闻舆情队伍', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '', title: '外来施工队伍', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    ]
  },
  {
    path: '',
    title: '综合保障能力',
    icon: 'ft-edit',
    class: 'has-sub',
    badge: '',
    badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
    isExternalLink: false,
    submenu: [
      { path: '', title: '应急物资', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '', title: '应急车辆', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '', title: '应急装备', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '', title: '后勤保障物资', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '', title: '应急发电车', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '', title: '应急照明', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '', title: '应急发电机', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    ]
  },
  {
    path: '',
    title: '舆情应对能力',
    icon: 'ft-airplay',
    class: 'has-sub',
    badge: '',
    badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
    isExternalLink: false,
    submenu: [
      { path: '', title: 'SG186舆情预测及应对方案生成', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/', title: '舆情应对处置措施', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
    ]
  },
  {
    path: '',
    title: '预防监测和监控预警系统',
    icon: 'ft-airplay',
    class: 'has-sub',
    badge: '',
    badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
    isExternalLink: false,
    submenu: [
      { path: '', title: '视频监控系统', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/', title: '视频传输系统', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/', title: '全省系统图', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/DataManagement/InputFile', title: '预警发布情况', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    ]
  },
];


