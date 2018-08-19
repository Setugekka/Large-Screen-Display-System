const host = 'http://127.0.0.1:5000';

export const Urls = {
  GetAllExpert: host + '/p_expert/get_all', // 获取所有expert记录
  CountExpert: host + '/p_expert/count_by_city',
  CountRepair: host + '/p_repair/count_by_city',
  CountManager: host + '/p_manager/count_by_city',
  GetExpertDist: host + '/p_expert/distribution_by_major_city',
  GetRepairDist: host + '/p_repair/distribution_by_major_city',
  GetManagerDist: host + '/p_manager/distribution_by_major_city',
  GetAllEquipment: host + '/m_equipment/get_all',
  GetAllStuff: host + '/m_stuff/get_all',
  GetAllMaterial: host + '/m_material/get_all',
};
