// src/data/team.js

export const TEAM_DATA = {
  // 1. 实验室负责人 (PI)
  pi: {
    name: "Wufan Zhao",
    role: "Principal Investigator",
    bio: (<>Wufan ZHAO is an Assistant Professor (tenure-track) and PhD supervisor at HKUST(Guangzhou), jointly appointed by <a href="https://soch.hkust-gz.edu.cn/academics/ugod/" target="_blank" rel="noopener noreferrer">Urban Governance and Design (UGOD)</a> and <a href="https://www.hkust-gz.edu.cn/academics/hubs-and-thrust-areas/systems-hub/robotics-and-autonomous-systems/" target="_blank" rel="noopener noreferrer">Robotics and Autonomous Systems (ROAS)</a>. He obtained his PhD in 2022 from the  <a href="https://www.itc.nl/" target="_blank" rel="noopener noreferrer"> Faculty of Geo-Information Science and Earth Observation (ITC)</a>, University of Twente, the Netherlands, and conducted post-doctoral research at <a href="https://iiw.kuleuven.be/onderzoek/geomatics/home" target="_blank" rel="noopener noreferrer" >KU Leuven</a>, Belgium, in 2023. His research focuses on intelligent sensing, modeling, and understanding of urban environments, including AI-driven remote sensing, 3D scene reconstruction, multimodal spatiotemporal fusion, and spatial intelligence. His work connects physical and digital urban spaces with robotic autonomous systems, supporting embodied cities, autonomous navigation, infrastructure inspection, and smart urban applications.</>),
    edu: [
      "Editorial Board Member of the Photogrammetric Engineering & Remote Sensing, Geospatial Intelligence and Information Geography",
      "Executive Committee Member, ACM SIGSPATIAL China Chapter",
      "Member of ISPRS Commission IV, WG 9 on Digital Twins",
      "Member of ISDE Young Scientist Innovation Network ISDE-YSIN"
    ],
    Awards: [
      "PG course, 24fall till now, Maching learning in Remote Sensing (UGOD5112)",
      "PG course, 24fall-25spring, Science of City (UGOD5010)", 
      "PG course, 26spring, GIS and Spatial Analysis (UGOD5030)",
      "UG course, 26fall, English Language for University Studies (UCUG1051)",
      "PG course, 26fall, Cross-disciplinary Research Methods (UCMP6010)"
    ],
    img: "/images/people/wufan.jpg" // 路径前加了 / 以适配 React public 文件夹
  },

  // 2. 博士后 (Postdoc)
  postphd: [
    { name: "Zhuoxiao Li", role: "3D Reconstruction, Gaussian Splatting", email: "Zhuoxiao.Li@liverpool.ac.uk", homepage: "", img: "/images/people/Lizhuoxiao.png" }
  ],

  // 3. 博士生 (Ph.D. Students)
  phd: [
    { name: "Tongyan Hua", role: "3D city reconstruction, NeRF and SLAM", email: "thua388@connect.hkust-gz.edu.cn", homepage: "https://thua919.github.io/", img: "/images/people/TongyanHua.png" },
    { name: "Shuai Zhang", role: "Point cloud processing and foundation model", email: "shuaizhang2@hkust-gz.edu.cn", homepage: "http://shuaizhang-hkust.cn/", img: "/images/people/ShuaiZhang.png" },
    { name: "Jing Ou", role: "3D vision, 3D city localization and reconstruction", email: "jingou714@gmail.com", homepage: "", img: "/images/people/OuJing.png" },
    { name: "Liwei Zou", role: "Multimodal data mining, Disaster analysis, Urban resilience", email: "zou.liwei.levi@gmail.com", homepage: "", img: "/images/people/zouliwei.jpg" },
    { name: "Dongli Wu", role: "Generative 3D Modeling", email: "annikeroseling@gmail.com", homepage: "", img: "/images/people/wudongli.jpg" },
    { name: "Hongye Hou", role: "3D vision, multi-model learning", email: "houhongye2001@stu.xjtu.edu.cn", homepage: "", img: "/images/people/houhongye.jpg" },
    { name: "Tengxi Wang", role: "Remote sensing image analysis, time series analysis, machine learning", email: "twang744@connect.hkust-gz.edu.cn", homepage: "", img: "/images/people/wangtengxi.png" }
  ],

  // 4. 硕士生 (Master Students)
  // mst: [
  //   
  // ],

  // 5. 研究助理 (Research Assistants)
  ra: [
    { name: "Wenbo Lv", role: "Spatiotemporal statistics, Remote sensing image processing", email: "lyu.geosocial@gmail.com", homepage: "https://spatlyu.github.io/", img: "/images/people/lvwenbo.png" },
    { name: "Mengrui Yin", role: "3D Computer Vision", email: "mengruiyin6@gmail.com", homepage: "", img: "/images/people/MengruiYin.jpg" },
    { name: "Hongyu Ye", role: "Spatial big data applications and 3D city modelling and simulation", email: "jackson513ye@qq.com", homepage: "https://www.redfish.space/", img: "/images/people/yehongyu.jpg" },
    { name: "Yawen Lai", role: "Explainable AI for urban systems, large-scale urban environmental analysis", email: "2030249245@qq.com", homepage: "", img: "/images/people/YawenLai.jpg" },
    { name: "Hongyu Yao", role: "Remote sensing image processing and Spatial-temporal data analysis", email: "yoyojusto@163.com", homepage: "", img: "/images/people/HongyuYao.jpg" },
    { name: "Xiangyu Liu", role: "3D reconstruction, vision localization", email: "lxyctf@163.com", homepage: "", img: "/images/people/XiangyuLiu.png" }
  ],

  // 6. 访问学生 (Visiting Students)
  vst: [
    { name: "Haoran Gong", role: "computer vision, point clouds, and 3D reconstruction", email: "gonghr@stu.xjtu.edu.cn", homepage: "", img: "/images/people/gonghaoran.jpg" },
    { name: "Wanqi Liu", role: "Multimodal urban sensing, GeoAI", email: "w.liu.25@ucl.ac.uk", homepage: "", img: "/images/people/WanqiLiu.jpg" },
    { name: "Xuran Hu", role: "Intelligent interpretation of multimodal remote sensing data", email: "XuRanHu@stu.xidian.edu.cn", homepage: "xuran-hu.github.io", img: "/images/people/huxuran.jpg" },
    { name: "Tao Liu", role: "Geospatial Foundation Models, Remote Sensing Change Understanding, Multimodal Learning, Earth Surface Forecasting", email: "tao.liu@autuni.ac.nz", homepage: "", img: "/images/people/TaoLiu.jpg" },
    { name: "Jianing Yu", role: "Multimodal remote sensing, GeoAI, and physics-guided learning", email: "", homepage: "", img: "/images/people/JianingYu.png" },
    { name: "Zidu Ouyang", role: "Multimodal fusion, Vision-language model", email: "markzzidu@gmail.com", homepage: "", img: "/images/people/ZiduOuyang.jpg" }
  ],

  // 7. 访问学者 (Visiting Scholars)
  vsc: [
    { name: "Nianhua Liu", role: "Cartography and Human-Computer Interaction, Urban Mobility", email: "nianhua.liu@tum.de", homepage: "", img: "/images/people/NianhuaLiu.png" },
    { name: "Shaoqing Dai", role: "Spatial-temporal data analysis, geo-health, spatial statistics", email: "dsq1993qingge@163.com", homepage: "https://gisersqdai.top/mycv/", img: "/images/people/DaiShaoQing.png" },
    { name: "Ruqiao Jiang", role: "Big geodata processing", email: "jiangruqiao@gmail.com", homepage: "", img: "/images/people/JiangRuqiao.png" },
    { name: "Xijing Huang", role: "Multi-agent social simulation, Agent-Based Modeling, Computational social science", email: "huangxijing3@foxmail.com", homepage: "", img: "/images/people/huangxijing.jpg" }
  ],

  // 8. 校友 (Alumni)
  alu: [
    { name: "Qinghe Liu", tenure: "Jan 2026 - Aug 2026", role: "Pre RA, now PhD at CUHK(Shenzhen)", email: "liuqinghe@nwafu.edu.cn", homepage: "", img: "/images/people/profile.png" },
    { name: "Shuxian Shi", tenure: "Oct 2025 - Aug 2026", role: "Pre RA, now PhD at NNU", email: "Shelly-Shi@outlook.com", homepage: "", img: "/images/people/shishuxian.jpg" },
    { name: "Yinrui Ren", tenure: "Jan 2025 - Aug 2026", role: "Pre RA, now PhD at SYSU", email: "2023025221@m.scnu.edu.com", homepage: "", img: "/images/people/renyanrui.png" },
    { name: "Junxing Luo", tenure: "Sep 2024 - Aug 2026", role: "Pre MPhil student, now phd at HKUST(GZ)", email: "junxingluo@hkust-gz.edu.cn", homepage: "", img: "/images/people/luojunxing.png" },
    { name: "Mingchen Li", tenure: "Sep 2024 - Aug 2026", role: "Pre MPhil student, now phd at HKUST", email: "mli736@hkust-gz.edu.cn", homepage: "", img: "/images/people/limingchen.png" },
    { name: "Yumiao Xiao", tenure: "Sep 2024 - Aug 2026", role: "Pre MPhil student, now phd at HKUST(GZ)", email: "yxiao224@connect.hkust-gz.edu.cn", homepage: "", img: "/images/people/xiaoyusen.png" },
    { name: "Xiaoyu Li", tenure: "Mar 2026 - Jul 2026", role: "Pre Visiting Student, now PhD at TAMU", email: "xiaoyu6936@gmail.com", homepage: "", img: "/images/people/lixiaoyu.png" },
    { name: "Danyang Zhang", tenure: "Nov 2025 - Jun 2026", role: "Pre RA, now PhD at HKU", email: "zdy@gatech.edu", homepage: "", img: "/images/people/zhangdanyang.png" },
    { name: "Qican Weng", tenure: "Oct 2025 - Apr 2026", role: "Pre RA, now Working", email: "626710943@QQ.com", homepage: "", img: "/images/people/profile.png" },
    { name: "Bingchen Li", tenure: "Mar 2025 - Dec 2025", role: "Pre Visiting Student, now Working at Wanpanel.ai", email: "bingchen054@gmail.com", homepage: "", img: "/images/people/libingchen.png" },
    { name: "Hongrong Wang", tenure: "Dec 2024 - Aug 2025", role: "Pre RA, now Studying for Msc in CUHK(Shenzhen)", email: "b1520618977@163.com", homepage: "", img: "/images/people/wanghongrong.png" },
    { name: "Rui Zhang", tenure: "Jan 2025 - Jul 2025", role: "Pre RA, now PhD at Aarhus University", email: "", homepage: "", img: "/images/people/zhangrui.png" },
    { name: "Ke Xu", tenure: "Nov 2024 - Jul 2025", role: "Pre RA, now Phd at HKUST", email: "kexu0501@gmail.com", homepage: "", img: "/images/people/xuke.png" },
    { name: "Zongrong Li", tenure: "Jul 2024 - Jul 2025", role: "Pre RA, now Phd at TAMU", email: "zongrongli@hkust-gz.edu.cn", homepage: "https://jasper0122.github.io/", img: "/images/people/Lizongrong.png" },
    { name: "Zhongcheng Hong", tenure: "Jul 2024 - Jul 2025", role: "Pre RA, now Phd at Auckland University of Technology", email: "Zhongchengh@hkust-gz.edu.cn", homepage: "", img: "/images/people/HongZhongcheng.png" },
    { name: "Guanyu Hou", tenure: "Jul 2024 - Jul 2025", role: "Pre RA, now Phd at TAMU", email: "houguanyu21@gmail.com", homepage: "", img: "/images/people/houguanyu.png" },
    { name: "Zhiyuan Xu", tenure: "Apr 2024 - Aug 2024", role: "Pre RA, now Phd at University of Bristol", email: "RenHonglin010407@163.com", homepage: "", img: "/images/people/profile.png" },
    { name: "Juran Zhang", tenure: "Jan 2024 - May 2024", role: "Pre RA, now Working", email: "zhangjurann@gmail.com", homepage: "https://www.linkedin.com/in/juran-zhang", img: "/images/people/profile.png" }
  ]
};
